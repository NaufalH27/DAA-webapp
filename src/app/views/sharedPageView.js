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
            </div>
            <div class="result-container first dissapear" id="resultContainer">           
                <div class="result-box">
                <div class="title"><h1>Results</h1>
                    <div class="x-button" id ="removeResultContainer"></div>
                </div>
                <div id="resultBox"></div>
              </div>
            </div>
        
        `
    }

    setInputField(inputFieldHtml){
        this.inputField = inputFieldHtml;
    }

    setController(controller){
        this.controller = controller;
    }

    setHtmlLogs(logsHtml){
        this.logs = logsHtml;
    }


    eventListener(){
        const mainContainer = document.querySelector(".main-container")
        const submitButton = document.getElementById('submitButton');
        const resultContainer = document.getElementById("resultContainer");
        const removeResultButton = document.getElementById("removeResultContainer");
        const twentySolverInputContainer = document.querySelector(".ts-input")
        const CoinChangeInputContainer = document.querySelector(".cc-input")
        const resultBox = document.getElementById("resultBox");
  
                

       
        submitButton?.addEventListener('click', action => {
            action.preventDefault();
            
            try{
                document.getElementById("errorMessage").innerHTML = "";
                this.controller(this.getInput(), this)
            }catch (e){
                document.getElementById("errorMessage").innerHTML = "";
                setTimeout(() => {
                    document.getElementById("errorMessage").innerHTML = e;   
                }, 200);
                
            }
        }, false);

        resultBox?.addEventListener('click', (event) => {
            if (event.target && event.target.id === 'liatLog') {
                const resultBox = document.getElementById("resultBox");
                const logContent = resultBox.querySelector('.result-log');
                event.target.classList.toggle('generate');
                if (event.target.classList.contains('generate')) {
                    logContent.innerHTML = `${this.logs}`;
                    logContent.style.display = 'block';
                } else {
                    logContent.innerHTML = '';
                    logContent.style.display = 'none';
                }
            }
        });



        removeResultButton?.addEventListener("click", action => {
            const parentTop = mainContainer.getBoundingClientRect().top;
            const childTop = resultContainer.getBoundingClientRect().top + document.querySelector("header").offsetHeight;

            const topDifference = childTop - parentTop;
            action.preventDefault();
    
            resultContainer.style.top = `${topDifference}px`
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            resultContainer.classList.remove("visible");
            resultContainer.classList.add("hidden")

            setTimeout(() => {
                resultContainer.style.top = `0px`
                resultContainer.classList.remove("appear");
                resultContainer.classList.add("dissapear");
                if(twentySolverInputContainer){twentySolverInputContainer.querySelector("p").style.display = 'block'}
            }, 200);
        }, false)

        if (twentySolverInputContainer) {
            const twentySolverInputBox = twentySolverInputContainer.querySelectorAll('input[type="text"]');
            twentySolverInputBox.forEach((input, index) => {
                input.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        if (index === twentySolverInputBox.length - 1) {
                            submitButton?.click(); 
                        } else {
                            const nextIndex = index + 1;
                            if (nextIndex < twentySolverInputBox.length) {
                                twentySolverInputBox[nextIndex].focus(); 
                            }
                        }
                    } else if (event.key === 'ArrowRight') {
                        event.preventDefault();
                        const nextIndex = index + 1;
                        if (nextIndex < twentySolverInputBox.length) {
                            twentySolverInputBox[nextIndex].focus();
                        }
                    } else if (event.key === 'ArrowLeft') {
                        event.preventDefault();
                        const prevIndex = index - 1;
                        if (prevIndex >= 0) {
                            twentySolverInputBox[prevIndex].focus();
                        }
                    }
                });
            });
        }

        if(CoinChangeInputContainer){
            const CoinChangeInputBox = CoinChangeInputContainer.querySelectorAll('input[type="text"]');
            const totalInputs = CoinChangeInputBox.length;

            CoinChangeInputBox.forEach((input, index) => {
                input.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        if (index === CoinChangeInputBox.length - 1) {
                            submitButton?.click(); 
                        } else {
                            const nextIndex = index + 1;
                            if (nextIndex < CoinChangeInputBox.length) {
                                CoinChangeInputBox[nextIndex].focus(); 
                            }
                        }
                    } else if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const nextIndex = index + 1;
                        if (nextIndex < totalInputs) {
                           CoinChangeInputBox[nextIndex].focus(); 
                        }
                    } else if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const prevIndex = index - 1;
                        if (prevIndex >= 0) {
                            CoinChangeInputBox[prevIndex].focus();
                        }
                    }
                });
            });
        }

    

    }


    
    renderResultContainer(){  
        const resultContainer = document.getElementById("resultContainer");
        const twentySolverInputContainer = document.querySelector(".ts-input")
        const windowWidth = window.innerWidth;


        if(resultContainer.classList.contains("dissapear")){
            resultContainer.classList.remove("dissapear");
            resultContainer.classList.add("appear");
        }
        if (resultContainer.classList.contains('hidden') ) {
            resultContainer.classList.remove('hidden');
            resultContainer.classList.add('visible');
            
        }
        if (resultContainer.classList.contains('first') ) {
            resultContainer.classList.remove('first');
            resultContainer.classList.add('visible');
        }
        if (twentySolverInputContainer){ twentySolverInputContainer.querySelector("p").style.display = 'none'};
        if (windowWidth < 700){
            window.scrollTo({
                top: 700,
                behavior: "smooth"
            });
        }

       
    }
    

   
  
}



