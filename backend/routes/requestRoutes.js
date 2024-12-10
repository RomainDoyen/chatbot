const express = require("express");
const { getAllRequests, createRequest } = require("../controllers/requestController");

const router = express.Router();

router.get("/", getAllRequests);

router.post("/", createRequest);

module.exports = router;
