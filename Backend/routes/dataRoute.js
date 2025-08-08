import { Router } from "express";

import { dataModel } from "../models/datamodel.js";

const dataRoute=Router();

//POST All Data 
dataRoute.post("/data", async (req, res) => {
  try {
    const newData = await dataModel.create(req.body);
    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET route to read all entries
dataRoute.get("/data", async (req, res) => {
  try {
    const allData = await dataModel.find();
    res.status(200).json(allData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default dataRoute;
