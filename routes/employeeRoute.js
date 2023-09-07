import {Router} from "express";
import * as employeeController from "../controllers/employeeController.js";

const employeeRouter = Router();

employeeRouter
    .post("/employee", employeeController.createEmployee)
    .get("/employees", employeeController.getAllEmployees)
    .patch("/employee/:id", employeeController.updateOneEmployee)
    .get("/employee/:id", employeeController.getOneEmployee)
    .delete("/employee/:id", employeeController.deleteEmployees)
    .delete("/employee", employeeController.deleteOneEmployee)


export default employeeRouter
