export function calculateCoinChange(X, arr) {
    let log = [];
    
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
                `Value saat ini : ${XBeforeSubstraction}`,  
                `Jumlah koin yang dapat diambil : ${count} koin`, 
                `total pengurangan Value  : ${count} * ${coinValue} = ${count * coinValue}`,
                `Value setelah dikurangi : ${XBeforeSubstraction} -> ${X}`,
                `Status : Koin berhasil digunakan`
                ]);
        } else {
            result.push({  value : coinValue, count : 0 });
            log.push([
                `Iterasi ke-${i}`, 
                `Koin ke-${i} : ${coinValue}`, 
                `Value saat ini : ${X}`, 
                `Jumlah koin yang dapat diambil : 0 koin`, 
                `total pengurangan Value: 0`,
                `Value setelah dikurangi : ${X} -> ${X}`, 
                `Status : Koin tidak cukup untuk mengurangi Value`
            ]);
        }
    }

    // Jika masih ada sisa X
    if (X > 0) {
        log.push([`Value tersisa ${X}, sedangkan array sudah kosong, Tidak bisa memberikan kembalian dengan tepat atau input tidak valid`]);
        return { error: `Tidak bisa memberikan kembalian dengan tepat atau input tidak valid: Value bersisa ${X} dan element dalam array sudah habis ([])`, log: log };
    } else {
        log.push([`Value tersisa 0, program Sukses di jalankan`]);
    }
    console.log(result)

    return { results: result, log: log };
}

