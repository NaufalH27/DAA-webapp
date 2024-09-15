import { validateTwentySolverInput } from "../middleware/twentySolverValidation.js";
import { calculateTwentySolver } from "../models/twentySolverModel.js";

export function twentySolverController(req, view){
    validateTwentySolverInput(req);

    view.renderResultContainer();

    //if validation pass
    const { arr } = req.body;

    const results = calculateTwentySolver(arr);

    view.generateResults(results, arr);

}