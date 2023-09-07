import Employee from "../models/employee.js";

export const createEmployee = async(req, res, next) => {
    try {
        const {name, email, salary, hireDate, department} = req.body;
        const newEmployee = new Employee({name, email, salary, hireDate, department});
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch(error) {
        console.log({error});
        res.status(500).json({msg:"Server error!"});
        // eigentlich müsste es über den error handler im server.js laufen, will er aber gerade nicht :/
        next(error);
    }
};

export const getAllEmployees = async(req,res) => {
    try {
        // const response = await Employee.find();
        const response = await Employee.find().populate("department", "name location -_id");
        res.status(200).json(response)
    } catch {
        console.log(error);
        res.status(500).json({msg: "Server error!"})
    }
};

export const getOneEmployee = async(req, res) => {
    const {id} = req.params;
    try {
        // const response = await Employee.findById(id);
        const response = await Employee.findById(id).populate("department", "name location -_id");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error!"})
    }
};

export const updateOneEmployee = async(req, res) => {
    try {
        const response = await Employee.findByIdAndUpdate(req.params.id, req.body,{new: true});
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error!"})
    }
};

export const deleteOneEmployee = async(req,res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({msg: "Employee deleted!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error!"})
    }
};



export const deleteEmployees = async(req, res) => {
    try {
        await Employee.deleteMany();
        res.status(200).json({msg: "All employees removed"});
    } catch(error) {
        console.log({error});
        res.status(500).json({msg:"Server error!"});
    }
};