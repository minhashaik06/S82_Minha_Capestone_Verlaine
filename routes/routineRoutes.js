const express = require("express");
const Routine = require("../models/Routine");
const JournalEntry = require("../models/JournalEntry");
const router = express.Router();

// Create a routine
router.post("/create", async (req, res) => {
  const { name, user } = req.body;
  try {
    const newRoutine = new Routine({ name, user });
    await newRoutine.save();
    res.status(201).json({ message: "Routine created.", routine: newRoutine });
  } catch (err) {
    res.status(400).json({ message: "Error creating routine.", error: err });
  }
});


router.post("/create-entry", async (req, res) => {
  const { routine, content } = req.body;
  try {
    const newEntry = new JournalEntry({ routine, content });
    await newEntry.save();
    res.status(201).json({ message: "Journal entry created.", entry: newEntry });
  } catch (err) {
    res.status(400).json({ message: "Error creating journal entry.", error: err });
  }
});

module.exports = router;
