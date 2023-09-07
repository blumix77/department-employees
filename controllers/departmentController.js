import Department from "../models/department.js";

export const createDepartment = async(req, res) => {
    try {
        const {name, location} = req.body;
        const newDepartment = new Department({name, location});

        await newDepartment.save();
        res.status(201).json(newDepartment);
    } catch (error) {
        console.log({error});
        res.status(500).json({msg:"Server error!"});
    }
};

export const getAllDepartments = async(req, res) => {
    try {
        const response = await Department.find();
        res.status(200).json(response);
    } catch(error) {
        console.log({error});
        res.status(500).json({msg:"Server error!"});
    }
};

export const getOneDepartment = async(req, res) => {
    // const {id} = req.params;
    try {
        const response = await Department.findById(req.params.id)
        res.status(200).json(response);
    } catch (error) {
        console.log({error});
        res.status(500).json({msg:"Server error!"});
    }
}


export const deleteDepartments = async(req, res) => {
    try {
        await Department.deleteMany();
        res.status(200).json({msg: "All departments removed"});
    } catch(error) {
        console.log({error});
        res.status(500).json({msg:"Server error!"});
    }
};

