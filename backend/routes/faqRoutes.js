const express = require("express");
const { getAllFAQs, createFAQ } = require("../controllers/faqController");

const router = express.Router();

router.get("/", getAllFAQs);

router.post("/", createFAQ);

module.exports = router;
