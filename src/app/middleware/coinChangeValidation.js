import {blankInputValidation, IllegalInputValidation, onlyIntListValidation, OnlyIntValueValidation} from "./validationUtils.js"

export function validateCoinChangeInput(req){
    const { X, arr } = req.body;

    try{
        blankInputValidation(arr);
        blankInputValidation(X);
        IllegalInputValidation(X);
        IllegalInputValidation(arr);

        const validArr = arr.split(",").map(Number);
        const validX = Number(X)

        onlyIntListValidation(validArr);
        OnlyIntValueValidation(validX);
    }catch(e){
        throw e;
    }
}