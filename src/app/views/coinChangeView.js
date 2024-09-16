import sharedPageView from "./sharedPageView.js";
import { coinChangeController } from "../controllers/coinChangeController.js";


export default class extends sharedPageView {
    constructor(){
        super(
          "Coin Changes",
          `Coin Changes adalah kalkulasi menggunakan algoritma greedy yang digunakan untuk 
          menentukan kombinasi koin yang tepat untuk mencapai jumlah tertentu menggunakan 
          denominasi koin yang diinput. 
          Algoritma greedy mengurutkan denominasi koin dari yang terbesar hingga terkecil, 
          lalu menghitung berapa banyak koin dari setiap denominasi yang dibutuhkan. 
          Jika nilai tersebut tidak dapat dipecah dengan koin yang tersedia, 
          fungsi akan mengembalikan pesan error. 
          Input 'Coin List' berupa angka (bilangan bulat) yang merepresentasikan jumlah uang yang 
          ingin dipecah menjadi koin. Input 'Value' berupa bilangan bulat yang berisi denominasi koin. `
        );
        this.setTitle("Coin Changes");
        this.setInputField(
          `
          <div class="cc-input input">
            <div class="form-container list">  
                <form id="listForm"> 
                    <p>Coin <br>                                                                                                                                                                                         
                    List : </p>
                    <input type="text" id="listInput" placeholder="20, 5, 8, 10">
                </form>
            </div>
            <div class="form-container value">  
                <form id="valueForm">
                    <p>Value : </p>
                    <input type="text" id="valueInput" placeholder="87">
                </form>
            </div>
          </div>
          `
        )
        this.setController(coinChangeController)
    }

    getInput(){
      const listInput = document.getElementById("listInput").value;
      const valueInput = document.getElementById("valueInput").value;      
      return {
          body : {
                  X : valueInput,
                  arr : listInput 
                }} 
    } 


    generateResults(results, valueTotal, CoinList) {
        const resultBox = document.getElementById("resultBox");

        resultBox.innerHTML = '';
        setTimeout(() => {
            let resultHtml = '';
            if(results.error){
                resultHtml += `<h4 class="error-message" id="errorMessage">${results.error}</h4>`
            }else{
                for (let result of results.results) {
                        resultHtml += `
                        <tr>
                        <td>${result.value}</td>
                        <td>${result.count}</td>
                        </tr>`
                    }
                  
                  resultHtml =`
                        <table>
                            <thead>
                                <tr>
                                <th>Coin</th>
                                <th>Total</th>
                                </tr>
                            </thead >
                        <tbody>
                            ${resultHtml}
                        </tbody>
                        </table>`    
            }
            let logs ="";
            for (let log of results.log){
                let logMassage = ``;
                for (let message of log){
                    logMassage += `<p>${message}</p>` 
                }
                logs +=`
                    <div class="log">${logMassage}</div>
                `
            }
            const coinList = CoinList.join(', ')
      
            resultBox.innerHTML = `<div class="calculation-result">
                                      <h2>Sorted Coin List : [${coinList}]</h2>
                                      <h2>Value Total : ${valueTotal}</h2>
                                      <h3>Hasil Kalkulasi :</h3>
                                      <div class="calculation-container">
                                          ${resultHtml}
                                      </div>
                                      <div class="result-log">
                                      <h3>log Alogritma:</h3>
                                        ${logs}
                                      </div>
                                  </div>`    
                            }, 500);         
      }
      

   
  
    }
    




