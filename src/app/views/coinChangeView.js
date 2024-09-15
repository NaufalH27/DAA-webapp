import sharedPageView from "./sharedPageView.js";

export default class extends sharedPageView {
    constructor(){
        super(
          "Coin Changes",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum elit, quis ullamcorper augue varius quis. Nullam non nisl eleifend, euismod sapien sit amet, luctus nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur venenatis mauris eget fringilla ultrices. Aliquam ullamcorper laoreet erat, a eleifend nunc rhoncus nec. Donec malesuada aliquet volutpat. Fusce sed orci ipsum. Vestibulum sit amet nisl at ante dictum laoreet. Cras suscipit maximus ante, at condimentum orci pretium vitae."
        );
        this.setTitle("Coin Changes");
        this.setInputField(
          `
            <div class="form-container list">  
                <form id="listForm"> 
                    <p>List : </p>
                    <input type="text" id="listInput" placeholder="20, 5, 8, 10">
                </form>
            </div>
            <div class="form-container value">  
                <form id="valueForm">
                    <p>Value : </p>
                    <input type="text" id="valueInput" placeholder="87">
                </form>
            </div>
          `
        )
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

    

  }




