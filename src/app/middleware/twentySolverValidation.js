import { blankInputValidation, IllegalInputValidation, maximumListValidation, onlyIntListValidation } from "./validationUtils.js"

export function validateTwentySolverInput(req){
    const { arr } = req.body;

    try{
        blankInputValidation(arr);
        IllegalInputValidation(arr);

        const validArr = arr.split(",").map(Number);

        onlyIntListValidation(validArr);
        maximumListValidation(validArr, 4);
    }catch(e){
        throw e;
    }
}