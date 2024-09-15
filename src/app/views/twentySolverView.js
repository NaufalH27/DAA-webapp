import sharedPageView from "./sharedPageView.js";
import { twentySolverController } from "../controllers/twentySolverController.js";

export default class extends sharedPageView {

    constructor(){
        super(
          "20 - Solver",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum elit, quis ullamcorper augue varius quis. Nullam non nisl eleifend, euismod sapien sit amet, luctus nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur venenatis mauris eget fringilla ultrices. Aliquam ullamcorper laoreet erat, a eleifend nunc rhoncus nec. Donec malesuada aliquet volutpat. Fusce sed orci ipsum. Vestibulum sit amet nisl at ante dictum laoreet. Cras suscipit maximus ante, at condimentum orci pretium vitae.",
          false
        );
        this.setTitle("Twenty Solver");
        this.setInputField
          `
            <div class="form-container list">  
                <form id="listForm"> 
                    <p>List : </p>
                    <input type="text" placeholder="20">
                    <input type="text" placeholder="5">
                    <input type="text" placeholder="8">
                    <input type="text" placeholder="4">
                </form>
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


      resultBox.innerHTML = `<div class="calculation-result">
                              <h2> Number List : [${listData}]</h2>
                              <br>
                              <h3>Hasil Kalkulasi: :</h3>
                              ${resultHtml}
                          </div>`

      }


    

}