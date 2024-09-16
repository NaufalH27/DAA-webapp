function onlyIntListValidation(list) {
    for (let element of list) {
        if (element === 0){
            throw Error("tidak boleh ada element list/angka yang 0 atau kosong");
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
    if ((input !== cleanInput)) {
        throw Error("terdeteksi input illegal");
    }
}

function blankInputValidation(input){
    if (input === ""){
        throw Error("Input tidak boleh kosong");
    }
}

function sizeListValidation(list, size){
    if (list.length !== size){
        throw Error(`Input \"List\" tidak boleh ada yang kosong`)
    }
}

function nonZeroValidation(input){
    if (input === 0){
        throw Error("Input tidak boleh 0")
    }
}

export { onlyIntListValidation, OnlyIntValueValidation, blankInputValidation, IllegalInputValidation, sizeListValidation, nonZeroValidation }