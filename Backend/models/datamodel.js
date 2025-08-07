import mongoose from "mongoose";


const dataSchema = new mongoose.Schema({
Roll: { type: String, required: true },
Pitch:{type: String, required:true},
Status: { type: String, required: true },
Steps: { type: Numbter, required: true },
Shakes:{type: Number, required:true},
Scratches: {type: Number, required:true},
Jumps: {type: Number, required:true},
Licks: {type: Number, required:true},
FreeFalls:{type:Number, required:true},
dateCreated: { type: Date, default: Date.now, required: true }
});


export const dataModel = mongoose.model('dataModel', dataSchema);
