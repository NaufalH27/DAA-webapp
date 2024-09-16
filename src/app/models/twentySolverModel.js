export function calculateTwentySolver(numbers) {
    const operators = ['+', '-', '*', '/'];
    const target = 20;
    let solutions = [];
    let foundSolutions = false;
    let log = [];  

    log.push("Mencari semua kombinasi operasi yang ada dengan Brute force")

    // Fungsi untuk menghasilkan semua permutasi dari array
    function generatePermutations(arr) {
        let result = [];

        if (arr.length === 1) {
            return [arr];
        }

        for (let i = 0; i < arr.length; i++) {
            const currentNum = arr[i];
            const remainingNums = arr.slice(0, i).concat(arr.slice(i + 1));
            const remainingPermutations = generatePermutations(remainingNums);

            for (let permutation of remainingPermutations) {
                result.push([currentNum].concat(permutation));
            }
        }

        return result;
    }

    // Fungsi untuk membuat semua kombinasi operator dengan tanda kurung dinamis
    function bruteForceOperators(numbers, operators, target) {
        const [a, b, c, d] = numbers;
        
        // Definisikan berbagai template penempatan tanda kurung
        const expressionTemplates = [
            'A op1 B op2 C op3 D',
            '(A op1 B) op2 (C op3 D)',
            '(A op1 (B op2 C)) op3 D',
            '(A op1 B) op2 C op3 D',
            'A op1 (B op2 (C op3 D))',
            'A op1 ((B op2 C) op3 D)',
            '((A op1 B) op2 C) op3 D',
            '(A op1 B op2 (C op3 D))'
        ];

        // Loop untuk setiap kombinasi operator
        for (let i = 0; i < operators.length; i++) {
            for (let j = 0; j < operators.length; j++) {
                for (let k = 0; k < operators.length; k++) {
                    
                    // Gantikan operator dan angka ke dalam template
                    expressionTemplates.forEach(template => {
                        let expression = template
                            .replace('A', a)
                            .replace('B', b)
                            .replace('C', c)
                            .replace('D', d)
                            .replace('op1', operators[i])
                            .replace('op2', operators[j])
                            .replace('op3', operators[k]);

                        try {
                            let result = eval(expression);
                            // Evaluasi setiap ekspresi yang dihasilkan
                            if (result === target) {
                                solutions.push(`${expression}`);
                                foundSolutions = true;
                                log.push(`${expression} = ${target} <- (OPERASI VALID)`);
                            } else{
                                log.push(`${expression} = ${Number.isInteger(result) ? result : result.toFixed(2)} (X)`);
                            }
                        } catch (e) {
                            // Abaikan kesalahan seperti pembagian dengan nol
                            log.push(`${expression} = ${e.message} (ERR)`);
                        }
                    });
                }
            }
        }
    }

    // Dapatkan semua permutasi angka
    const permutations = generatePermutations(numbers);

    // Panggil fungsi brute force untuk setiap permutasi
    permutations.forEach((permutation, index) => {
        bruteForceOperators(permutation, operators, target);
    });

    //Jika tidak ada solusi yang ditemukan, beri pesan bahwa tidak ada solusi
    if (!foundSolutions) {
        log.push("No valid solutions found.");
        return { error: "Operasi ini tidak memungkinkan.", log: log };
    } else {
        log.push("Valid solutions found.");
        return { results: solutions, log: log }; // Kembalikan semua solusi yang ditemukan
    }
}
