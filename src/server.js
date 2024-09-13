const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname,"public", "static")));

app.post("/api/results/coinchange", async (req, res) => {
    try {
        // ambil data X dan arr dari body request
        const { X, arr } = reg.body; // X(Jumlah uang),arr(Array denominasi koin)

        // Cek apakah input valid
        if (!X || !Array.isArray(arr)) {
            return res.status(400).json({error: "Invalid input" });
        }

        // Fungsi algoritma greedy untuk coin change problem
        function coinChange(X, arr) {
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

        // Panggil fungsi greedy untuk menyelesaikan masalah
        const solution = coinChange(X, arr);

        // Kirim respons dengan hasil algoritma
        return res.status(200).json(solution);

    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error"});  
    }
});

app.post("/api/results/20solver", async (req, res) => {
    return
});

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(process.env.port || 8080, () => console.log("Server Running..."));
