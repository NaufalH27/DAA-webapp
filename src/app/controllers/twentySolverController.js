import { validateTwentySolverInput } from "../middleware/twentySolverValidation.js";
import { calculateTwentySolver } from "../models/twentySolverModel.js";

export function twentySolverController(req, view){
    validateTwentySolverInput(req);

    //if validation pass
    const { arr } = req.body;

    const validArr = arr.split(",").map(Number);

    const results = calculateTwentySolver(validArr);

    view.generateResults(results);

}