import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: String,

});

const Department = new mongoose.model("Department", departmentSchema);

export default Department

