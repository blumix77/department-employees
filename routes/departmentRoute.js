import {Router} from "express";
import * as departmentController from "../controllers/departmentController.js";

const departmentRouter = Router();

departmentRouter
    .post("/department", departmentController.createDepartment)
    .get("/departments", departmentController.getAllDepartments)
    .get("/department/:id", departmentController.getOneDepartment)
    .delete("/department", departmentController.deleteDepartments)

export default departmentRouter;
