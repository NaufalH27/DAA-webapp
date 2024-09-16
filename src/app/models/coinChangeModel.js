export function calculateCoinChange(X, arr) {
    let log = [];
    
    const XBeforeCalculation = X;
    // Urutkan denominasi koin dari terbesar ke terkecil
    const sortedArr = arr.sort((a, b) => b - a);

    let result = []; // Objek untuk menyimpan hasil (denominasi koin dan jumlahnya)

    // Iterasi melalui setiap koin dalam array 
    for (let i = 0; i < sortedArr.length; i++) {
        let coinValue = sortedArr[i];
        const XBeforeSubstraction = X;

        // Hitung berapa banyak koin ini yang bisa digunakan
        if (X >= coinValue) {
            let count = Math.floor(X / coinValue); // Jumlah koin yang bisa diambil
            result.push({  value : coinValue, count : count });            // Simpan jumlah koin dalam result 
            X -= count * coinValue;               // Kurangi nilai X sesuai dengan koin yang digunakan

            // Generate log untuk iterasi sekarang
            log.push([
                `Iterasi ke-${i}`, 
                `Koin ke-${i}: ${coinValue}`,
                `Target saat ini : ${XBeforeSubstraction}`,  
                `Jumlah koin yang dapat diambil : ${count} koin`, 
                `total pengurangan Target  : ${count} * ${coinValue} = ${count * coinValue}`,
                `Target setelah dikurangi : ${XBeforeSubstraction} -> ${X}`,
                `Status : Koin berhasil digunakan`
                ]);
        } else {
            result.push({  value : coinValue, count : 0 });
            log.push([
                `Iterasi ke-${i}`, 
                `Koin ke-${i} : ${coinValue}`, 
                `Target saat ini : ${X}`, 
                `Jumlah koin yang dapat diambil : 0 koin`, 
                `total pengurangan Target: 0`,
                `Target setelah dikurangi : ${X} -> ${X}`, 
                `Status : Koin tidak cukup untuk mengurangi Target`
            ]);
        }
    }

    // Jika masih ada sisa X
    if (X > 0) {
        log.push([`Target tersisa ${X} dari ${XBeforeCalculation} , sedangkan array sudah kosong, Tidak bisa memberikan kembalian dengan tepat atau input tidak valid`]);
        return { error: `Tidak bisa memberikan kembalian dengan tepat atau input tidak valid: Value bersisa ${X} dari ${XBeforeCalculation} dan element dalam array sudah habis ([])`, log: log };
    } else {
        log.push([`Value tersisa 0, program Sukses di jalankan`]);
    }

    return { results: result, log: log };
}

