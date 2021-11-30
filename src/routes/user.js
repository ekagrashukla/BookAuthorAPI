const express = require('express')
const router = express.Router()

const UserController = require("../controllers/UserController")

router.post("/createuser", UserController.createUser);
router.get("/readbook/:username/:bookId",UserController.readbook)
router.get("/userinfo/:username", UserController.userinfo)

module.exports = router