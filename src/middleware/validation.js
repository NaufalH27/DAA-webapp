import DOMPurify from 'dompurify';


function onlyIntListValidation(list) {
    for (let element of list) {
        if (element === 0){
            throw new Error("tidak boleh ada angka 0");
        }
        if (element === null || element === undefined || Number.isNaN(element) || !Number.isInteger(element)) {
            throw new Error("Input \"list\" hanya boleh terdiri dari list integer yang di pisah oleh koma");
        }
    }
}

function OnlyIntValueValidation(){
    if (!Number.isInteger(X)) {
        throw new Error("Input \"Value\" must be an integer");
    }
}

function IllegalInputValidation(input){
    let cleanInput = DOMPurify.sanitize(input);
    if ((rawList !== cleanInput)) {
        throw new Error("Detected illegal input");
    }
}

export { onlyIntListValidation, OnlyIntValueValidation, IllegalInputValidation }