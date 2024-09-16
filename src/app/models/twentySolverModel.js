export function calculateTwentySolver(numbers) {
    const operators = ['+', '-', '*', '/'];
    const target = 20;
    let solutions = [];
    let foundSolutions = false;

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
                            // Evaluasi setiap ekspresi yang dihasilkan
                            if (eval(expression) === target) {
                                solutions.push(`${expression} = ${target}`);
                                foundSolutions = true;
                            }
                        } catch (e) {
                            // Abaikan kesalahan seperti pembagian dengan nol
                        }
                    });
                }
            }
        }
    }

    // Dapatkan semua permutasi angka
    const permutations = generatePermutations(numbers);

    // Panggil fungsi brute force untuk setiap permutasi
    permutations.forEach(permutation => {
        bruteForceOperators(permutation, operators, target);
    });

    // Jika tidak ada solusi yang ditemukan, beri pesan bahwa tidak ada solusi
    if (!foundSolutions) {
        return { error: "Operasi ini tidak memungkinkan." };
    } else {
        return { results: solutions }; // Kembalikan semua solusi yang ditemukan
    }
}
