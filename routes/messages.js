const express = require("express");
const { newMessage, getMessage } = require("../controllers/message");
const { authUser } = require("../middlwares/auth");

const router = express.Router();

// add new message
router.post("/message/new", authUser, newMessage);
//get messages
router.get("/getMessages/:conversationId", authUser, getMessage);

module.exports = router;
