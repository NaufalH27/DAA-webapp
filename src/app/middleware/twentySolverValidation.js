import { blankInputValidation, IllegalInputValidation, onlyIntListValidation } from "./validationUtils.js"

export function validateTwentySolverInput(req){
    const { arr } = req.body;

    try{
        blankInputValidation(arr);
        IllegalInputValidation(arr);

        const validArr = arr.split(",").map(Number);

        onlyIntListValidation(validArr);
    }catch(e){
        throw e;
    }
}