import abstractView from "./abstractView.js";

export default class extends abstractView {

    constructor(){
        super();
        this.setTitle("Coin Change");

    }

    
    async getHtml(){
        return  `
          <div class="input-container">
                <div class="content-title page-title">
                    <h1 class="content-title">Coin Change</h1>
                </div>
                <div>
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum elit, quis ullamcorper augue varius quis. Nullam non nisl eleifend, euismod sapien sit amet, luctus nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur venenatis mauris eget fringilla ultrices. Aliquam ullamcorper laoreet erat, a eleifend nunc rhoncus nec. Donec malesuada aliquet volutpat. Fusce sed orci ipsum. Vestibulum sit amet nisl at ante dictum laoreet. Cras suscipit maximus ante, at condimentum orci pretium vitae.</h4>
                </div>
                <div class="input-field">
                  <h1>INPUT :</h1>
                  <div class="form-container list">  
                    <form> <p>List :</p>
                      <input type="text" placeholder="20, 5, 8, 10">
                  </form>
                </div>
                  <div class="form-container value">  
                    <form><p>Value :</p>
                      <input type="text" placeholder="87">
                  </form>
                  </div>
                  <div class="button-container calculate">
                    <section>
                      <a class="button">Calculate</a>
                  </section>
                  </div>
                </div> 
            </div>
        
        `

    }

}