import abstractView from "./abstractView.js";

export default class sharedPageView extends abstractView{
    constructor(algorithmTitle, algorithmDescription){
        super();
        this.algorithmTitle = algorithmTitle;
        this.algorithmDescription = algorithmDescription;
    }

    async getHtml(){
        return  `
        <div class="input-container">
                <div class="content-title page-title">
                    <h1 class="content-title">${this.algorithmTitle}</h1>
                </div>
                <div>
                  <h4>${this.algorithmDescription}</h4>
                </div>
                <div class="input-field">
                  <h1>INPUT :</h1>
                 ${this.inputField ? this.inputField : ""}
                <h5 class="error-message" id="errorMessage"></h5>
                  <div class="button-container calculate">
                    <section>
                      <a class="button" id="submitButton" href=#>Calculate</a>
                  </section>
                  </div>
                </div> 
            </div>
            <div id="resultsContainer"></div>
        
        `
    }

    setInputField(inputFieldHtml){
        this.inputField = inputFieldHtml;
    }

    generateResults(results){
        console.log(results);
    }
    
    
}



