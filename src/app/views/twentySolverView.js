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

      this.logs = results.log;

      if (results.error){
        resultHtml += `<h4 class="error-message">${results.error}</h4>`
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
                            <th>Operasi yang menghasilkan 20</th>
                            </tr>
                        </thead >
                      <tbody>
                          ${resultHtml}
                      </tbody>
                      </table>`         
      }

      let logs ="";
      let logMassage ="";
      for (let log of results.log){
          logMassage += `<p>${log}</p>` ;
      }
      logs +=`
      <div class="log"><h3>log Alogritma:</h3><br>${logMassage}</div>
  `;
    this.setHtmlLogs(logs);
  

      const splittedListData = listData.join(', ')


      resultBox.innerHTML = `<div class="calculation-result">
                              <h2> Number List : [${splittedListData}]</h2>
                              <h2> Target : 20 <h3>
                              <h3>Hasil Kalkulasi: :</h3>
                             <div class="calculation-container">
                                ${resultHtml}
                              </div>
                                <div class="liat-log" id="liatLog">Liat Log</div>
                                <div class="result-log"></div>
                                <div class="footer"></div>
                          </div>`

              },500)

      }


    

}