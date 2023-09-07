import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    salary: Number,
    hireDate: Date,
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    }
});

const Employee = new mongoose.model("Employee", employeeSchema);

export default Employee