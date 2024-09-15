import { validateCoinChangeInput } from "../middleware/coinChangeValidation.js";
import { calculateCoinChange } from "../models/coinChangeModel.js";


export function coinChangeController(req, view){
    validateCoinChangeInput(req)

    view.renderResultContainer();

    //if validation pass
    const { X, arr } = req.body;

    const validArr = arr.split(",").map(Number);
    const validX = Number(X)

    const results = calculateCoinChange(validX, validArr);
    
    view.generateResults(results, validX, validArr);

}




