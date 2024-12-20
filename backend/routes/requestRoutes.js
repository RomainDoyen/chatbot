const express = require("express");
const { getAllRequests, createRequest, getRequestById, updateRequest, deleteRequest } = require("../controllers/requestController");

const router = express.Router();

router.get("/", getAllRequests);

router.get("/:id", getRequestById);

router.post("/", createRequest);

router.put("/:id", updateRequest);

router.delete("/:id", deleteRequest);

module.exports = router;
