import { IllegalInputValidation, onlyIntListValidation, OnlyIntValueValidation } from "../middleware/validation.js"


export function calculateTwentySolver(req){

    const { numbers, target } = req.body;

    try{
        IllegalInputValidation(numbers);
        IllegalInputValidation(target);
        OnlyIntValueValidation(numbers);
        onlyIntListValidation(target);
    }catch(e){
        throw new Error(e);
    }

    // Daftar operator yang akan digunakan dalam brute force
    const operators = ['+', '-', '*', '/'];

    // Fungsi untuk mencari semua solusi
    function solve(numbers, target) {
        let solutions = [];
        let foundSolutions = false;
    
        // Brute force kombinasi operator antara angka-angka
        for (let i = 0; i < operators,length; i++) {
            for (let j = 0; j < operators,length; j++) {
                for (let k = 0; k < operators,length; k++) {
                    const expression = '${numbers[0]} ${operators[i]} ${numbers[1]} ${operators[j]} ${numbers[2]} ${operators[k]} ${numbers[3]}';

                    try {
                        if (eval(expression) === target) {
                            solutions.push('${expression} = ${target}');
                            foundSolutions = true;
                        }
                    } catch (e) {
                        // Mengabaikan kesalahan pembagian dengan nol
                    }
                }
            }
        }

        // Jika tidak ada solusi yang ditemukan, beri pesan bahwa tidak ada solusi
        if (!foundSolutions) {
            return "Operasi ini tidak memungkinkan.";
        } else {
            return solutions; // Kembalikan semua solusi yang ditemukan
        }
    }

    // Panggil fungsi untuk mencari solusi
    let result = solve(numbers, target);

    return result;
}