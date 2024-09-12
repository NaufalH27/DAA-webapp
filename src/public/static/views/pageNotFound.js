import abstractView from "./abstractView.js";

export default class extends abstractView {

    constructor(){
        super();
        this.setTitle("Coin Change");

    }

    
    async getHtml(){
        return "404 Not Found"

    }

}