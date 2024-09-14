import { IllegalInputValidation, onlyIntListValidation, OnlyIntValueValidation } from "../middleware/validation.js"
import { calculateCoinChange } from "../models/coinChangeModel.js";


export function coinChangeController(req){

    const { X, arr, view } = req.body;
    
    try{
        IllegalInputValidation(arr);
        onlyIntListValidation(arr);
        IllegalInputValidation(X);
        OnlyIntValueValidation(X);

        const results = calculateCoinChange(X, arr);

        view.generateResults(results);
        

    }catch(e){
        console.log(e)
        return e
        
    }

    
}




