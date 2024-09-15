function onlyIntListValidation(list) {
    for (let element of list) {
        if (element === 0){
            throw Error("tidak boleh ada angka 0");
        }

        if (element === null || element === undefined || Number.isNaN(element) || !Number.isInteger(element)) {
            throw Error("Input \"list\" hanya boleh terdiri dari list integer yang di pisah oleh koma");
        }
    }
}

function OnlyIntValueValidation(input){
    if (!Number.isInteger(input)) {
        throw Error("Input \"Value\" harus integer");
    }
}

function IllegalInputValidation(input){
    let cleanInput = DOMPurify.sanitize(input);
    console.log(cleanInput);
    if ((input !== cleanInput)) {
        throw Error("terdeteksi input illegal");
    }
}

function blankInputValidation(input){
    if (input === ""){
        throw Error("Input \"list\" dan \"Value\" tidak boleh kososng");
    }
}

function maximumListValidation(list, maxParam){
    if (list.length > maxParam){
        throw Error(`Input \"List\" tidak boleh lebih dari ${maxParam}`)
    }
}

export { onlyIntListValidation, OnlyIntValueValidation, blankInputValidation, IllegalInputValidation, maximumListValidation}