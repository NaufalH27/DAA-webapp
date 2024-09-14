import { IllegalInputValidation, onlyIntListValidation, OnlyIntValueValidation } from "../middleware/validation.js"
import { calculateCoinChange } from "../models/coinChangeModel.js";


export function coinChangeController(req){

    const { X, arr, view } = req.body;
    
    try{
        IllegalInputValidation(arr);
        IllegalInputValidation(X);
       

        const validArr = arr.split(",").map(Number);
        const validX = Number(X)


        onlyIntListValidation(validArr);
        OnlyIntValueValidation(validX);


        const results = calculateCoinChange(validX, validArr);
        
        view.generateResults(results);
        

    }catch(e){
        console.log(e)
        return e
        
    }

    
}




