import sharedPageView from "./sharedPageView.js";
import { twentySolverController } from "../controllers/twentySolverController.js";

export default class extends sharedPageView {

    constructor(){
        super(
          "20 - Solver",
          `20 - Solver adalah kalkulasi yang mencari kombinasi dari empat angka dengan 
          operator aritmatika (+, -, *, /) untuk menghasilkan nilai 20. 
          Algoritma ini menguji berbagai kombinasi operator dan penempatan tanda kurung 
          untuk melihat apakah angka-angka tersebut dapat dioperasikan sehingga hasil akhirnya adalah 20. 
          Jika ada solusi yang ditemukan, maka akan menampilkan daftar ekspresi yang valid. 
          Jika tidak, maka akan menampilkan pesan error yang menyatakan bahwa operasi tersebut 
          tidak memungkinkan. Input 'List' berupa Angka (bilangan bulat). `,
          false
        );
        this.setTitle("Twenty Solver");
        this.setInputField
          `
          <div class="ts-input">
            <div class="form-container list">  
                <form id="listForm"> 
                    <p>List : </p>
                    <input type="text" placeholder="20">
                    <input type="text" placeholder="5">
                    <input type="text" placeholder="8">
                    <input type="text" placeholder="4">
                </form>
            </div>
          </div>
          `
        
        this.setController(twentySolverController);
    }

    getInput(){
      const form = document.getElementById('listForm');
      const inputs = form.querySelectorAll('input[type="text"]');
      const valuesList = [];
      inputs.forEach(input => {
          valuesList.push(input.value);
      });

  

      return { body : { arr : valuesList } };
    }


    generateResults(results, listData) {
      const resultBox = document.getElementById("resultBox");
      resultBox.innerHTML = '';
      setTimeout(() => {
      let resultHtml = '';

      if (results.error){
        resultHtml += `<h3>${results.error}</h3>`
      }
      else{
        for (const element of results.results){
          resultHtml += `
          <tr>
            <td>${element}</td>
          </tr>`
        }    
        resultHtml = `
                      <table>
                        <thead>
                            <tr>
                            <th>Operasi</th>
                            </tr>
                        </thead >
                      <tbody>
                          ${resultHtml}
                      </tbody>
                      </table>`         
      }

      const splittedListData = listData.join(', ')


      resultBox.innerHTML = `<div class="calculation-result">
                              <h2> Number List : [${splittedListData}]</h2>
                              <br>
                              <h3>Hasil Kalkulasi: :</h3>
                              <div class="calculation-container">
                              ${resultHtml}
                              <div>
                          </div>`

              },500)

      }


    

}