const express = require("express");
const { auth } = require("googleapis/build/src/apis/abusiveexperiencereport");
const { newConv, getConv } = require("../controllers/conversation");
const { authUser } = require("../middlwares/auth");

const router = express.Router();

//add new conversation
router.post("/conversation/new", authUser, newConv);
//get conversation
router.get("/getConversation", authUser, getConv);

module.exports = router;
