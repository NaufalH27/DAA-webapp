import { IllegalInputValidation, onlyIntListValidation, OnlyIntValueValidation } from "../middleware/validation.js"


export function calculateCoinChange(req){

    const { X, arr } = req.body;
    
    try{
        IllegalInputValidation(X);
        IllegalInputValidation(arr);
        OnlyIntValueValidation(X);
        onlyIntListValidation(arr);
    }catch(e){
        throw new Error(e);
    }

    // Urutkan denominasi koin dari terbesar ke terkecil
    arr.sort((a,b) => b - a);

    let result = {}; // Objek untuk menyimpan hasil(denomisasi koin dan jumlahnya)

    // Iterasi melalui setiap koin dalam array 
    for (let i = 0; i < arr.length; i++) {
        let coinValue = arr[i];

        // Hitung berapa banyak koin ini yang bisa digunakan
        if (X >= coinValue) {
            let count = Math.floor(X/ coinValue); // Jumlah koin yang bisa diambil
            result[coinValue] = count;            // Simpan jumlah koin dalam result 
            X -= count * coinValue;               // Kurangi nilai X sesuai dengan koin yang digunakan
        }
    }

    // Jika masih ada sisa X, 
    if(X > 0) {
        return { error: "Tidak bisa memberikan kembalian dengan tepat"};
    }
    
    return result;
}




