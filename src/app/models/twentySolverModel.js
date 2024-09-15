export function calculateTwentySolver(numbers) {
    const operators = ['+', '-', '*', '/'];
    const target = 20;
    let solutions = [];
    let foundSolutions = false;

    // Fungsi untuk membangkitkan semua kombinasi operator
    function bruteForceOperators(numbers, operators, target) {
        const [a, b, c, d] = numbers;

        // Loop untuk setiap kombinasi operator
        for (let i = 0; i < operators.length; i++) {
            for (let j = 0; j < operators.length; j++) {
                for (let k = 0; k < operators.length; k++) {

                    // Array untuk menyimpan berbagai ekspresi dengan tanda kurung
                    const expressions = [];

                    // Membuat ekspresi dinamis dengan berbagai cara menempatkan tanda kurung
                    expressions.push(`${a} ${operators[i]} ${b} ${operators[j]} ${c} ${operators[k]} ${d}`);
                    expressions.push(`(${a} ${operators[i]} ${b}) ${operators[j]} (${c} ${operators[k]} ${d})`);
                    expressions.push(`(${a} ${operators[i]} (${b} ${operators[j]} ${c})) ${operators[k]} ${d}`);
                    expressions.push(`(${a} ${operators[i]} ${b}) ${operators[j]} ${c} ${operators[k]} ${d}`);
                    expressions.push(`${a} ${operators[i]} (${b} ${operators[j]} (${c} ${operators[k]} ${d}))`);
                    expressions.push(`${a} ${operators[i]} ((${b} ${operators[j]} ${c}) ${operators[k]} ${d})`);
                    expressions.push(`((${a} ${operators[i]} ${b}) ${operators[j]} ${c}) ${operators[k]} ${d}`);
                    expressions.push(`(${a} ${operators[i]} ${b} ${operators[j]} (${c} ${operators[k]} ${d}))`);

                    // Coba evaluasi setiap ekspresi menggunakan eval
                    expressions.forEach(expression => {
                        try {
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

    // Panggil fungsi brute force untuk mencari semua kombinasi
    bruteForceOperators(numbers, operators, target);

    // Jika tidak ada solusi yang ditemukan, beri pesan bahwa tidak ada solusi
    if (!foundSolutions) {
        return { error : "Operasi ini tidak memungkinkan." };
    } else {
        return {results : solutions}; // Kembalikan semua solusi yang ditemukan
    }
}
