import { blankInputValidation, IllegalInputValidation, sizeListValidation, onlyIntListValidation } from "./validationUtils.js"

export function validateTwentySolverInput(req){
    const { arr } = req.body;
    
    try{
        for (const element of arr){
            IllegalInputValidation(element);
            blankInputValidation(element);
        }
        const validArr = arr.map(Number);

        console.log(validArr);

        onlyIntListValidation(validArr);
        sizeListValidation(validArr,4);

    }catch(e){
        throw e;
    }
}