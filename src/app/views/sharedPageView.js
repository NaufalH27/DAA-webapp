import abstractView from "./abstractView.js";

export default class sharedPageView extends abstractView{
    constructor(algorithmTitle, algorithmDescription){
        super();
        this.algorithmTitle = algorithmTitle;
        this.algorithmDescription = algorithmDescription;
    }

    async getHtml(){
        return  `
            <div class="calculator">
              <div class="calculator-content">
                <div class="input-container">
                  <div class="content-title page-title">
                      <h1 class="content-title">${this.algorithmTitle}</h1>
                  </div>
                  <div>
                    <h4> ${this.algorithmDescription}  
                    </h4>
                  </div>
                  <div class="input-field">
                    <h1>INPUT :</h1>
                    ${this.inputField}
                  <h5 class="error-message" id="errorMessage"></h5>
                    <div class="button-container calculate">
                      <section>
                        <a class="button" id="submitButton" href=#>Calculate</a>
                    </section>
                    </div>
                  </div> 
              </div>             
              </div>
            </div>
            <div class="result-container first" id="resultContainer">           
                <div class="result-box">
                <div class="title"><h1>Results</h1>
                    <div class="x-button" id ="removeResultContainer"></div>
                </div>
                <div id="resultBox"></div>
              </div>
            <div>
        
        `
    }

    setInputField(inputFieldHtml){
        this.inputField = inputFieldHtml;
    }

    setController(controller){
        this.controller = controller;
    }


    eventListener(){
        const submitButton = document.getElementById('submitButton');
        const resultContainer = document.getElementById("resultContainer");
        const removeResultButton = document.getElementById("removeResultContainer");
        const inputs = document.querySelectorAll('input[type="text"]');

        submitButton?.addEventListener('click', action => {
            action.preventDefault();
            try{
                document.getElementById("errorMessage").innerHTML = "";
                this.controller(this.getInput(), this)
            }catch (e){
                document.getElementById("errorMessage").innerHTML = e;
            }
        }, false);

        removeResultButton?.addEventListener("click", action => {
            action.preventDefault();
            resultContainer.classList.remove("visible");
            resultContainer.classList.add("hidden")  
        }, false)

        inputs.forEach((input, index) => {
            input.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === 'ArrowRight') {
                    event.preventDefault();
                    const nextIndex = index + 1;
                    if (nextIndex < inputs.length) {
                        inputs[nextIndex].focus();
                    }
                } else if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    const prevIndex = index - 1;
                    if (prevIndex >= 0) {
                        inputs[prevIndex].focus();
                    }
                }
            });
        });
    }


    
    renderResultContainer(){  
        const resultContainer = document.getElementById("resultContainer");
        if(resultContainer.classList.contains('first')){
            resultContainer.classList.remove('first');
            resultContainer.classList.add('visible');
        }
        if (resultContainer.classList.contains('hidden') ) {
            resultContainer.classList.remove('hidden');
            resultContainer.classList.add('visible');
        }
    }

   
  
}



