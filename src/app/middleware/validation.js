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

function OnlyIntValueValidation(input){
    if (!Number.isInteger(input)) {
        throw new Error("Input \"Value\" must be an integer");
    }
}

function IllegalInputValidation(input){
    let cleanInput = DOMPurify.sanitize(input);
    console.log(cleanInput);
    if ((input !== cleanInput)) {
        throw new Error("terdeteksi input illegal");
    }
}

export { onlyIntListValidation, OnlyIntValueValidation, IllegalInputValidation }