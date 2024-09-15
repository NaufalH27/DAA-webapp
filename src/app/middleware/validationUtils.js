function onlyIntListValidation(list) {
    for (let element of list) {
        if (element === 0){
            throw Error("tidak boleh ada angka 0");
        }

        if (element === null || element === undefined || Number.isNaN(element) || !Number.isInteger(element)) {
            throw Error("Input hanya boleh terdiri integer");
        }
    }
}

function OnlyIntValueValidation(input){
    if (!Number.isInteger(input)) {
        throw Error("Input harus integer");
    }
}

function IllegalInputValidation(input){
    let cleanInput = DOMPurify.sanitize(input);
    console.log(cleanInput)
    if ((input !== cleanInput)) {
        throw Error("terdeteksi input illegal");
    }
}

function blankInputValidation(input){
    if (input === ""){
        throw Error("Input tidak boleh kososng");
    }
}

function sizeListValidation(list, size){
    if (list.length !== size){
        throw Error(`Input \"List\" tidak boleh ada yang kosong`)
    }
}

export { onlyIntListValidation, OnlyIntValueValidation, blankInputValidation, IllegalInputValidation, sizeListValidation}