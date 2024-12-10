const express = require("express");
const { getAllFAQs, createFAQ, getFAQById, updateFAQ, deleteFAQ } = require("../controllers/faqController");

const router = express.Router();

router.get("/", getAllFAQs);

router.get("/:id", getFAQById);

router.post("/", createFAQ);

router.put("/:id", updateFAQ);

router.delete("/:id", deleteFAQ);

module.exports = router;
