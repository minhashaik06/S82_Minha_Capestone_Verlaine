const express = require("express");
const router = express.Router();
const { createJournalEntry, getJournalEntries } = require("../controllers/journalController");
const { protect } = require("../middleware/authMiddleware"); 


router.post("/", protect, createJournalEntry);

// Route to get journal entries
router.get("/", protect, getJournalEntries);

module.exports = router;
