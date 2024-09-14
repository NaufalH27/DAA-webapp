import home from "../app/views/homeView.js";
import coinChange from "../app/views/coinChangeView.js";
import twentySolver from "../app/views/twentySolverView.js";
import pageNotFound from "../app/views/pageNotFoundView.js";
import { coinChangeController } from "../app/controllers/coinChangeController.js";


const NavigateTo = url => {
    history.pushState(null, null, url);
    router();
} 

const router = async() => {
    const routes = [
        { path: "/", view: home},
        { path: "/coinchange", view: coinChange},
        { path: "/twentysolver", view: twentySolver},
    ];
    const routeNotFound = {view: pageNotFound}

    const matchRoute = () => {
        const isMatch = routes.find(route => route.path === location.pathname);
        return isMatch ? isMatch : routeNotFound;
    };

    const matchedRoute = matchRoute();
    
    const view = new matchedRoute.view();
    document.querySelector("#app").innerHTML = await view.getHtml();

    const el = document.getElementById('submitButton');
    
    el?.addEventListener('click', action => {
        const listInput = document.getElementById("listInput").value;
        const valueInput = document.getElementById("valueInput").value;      

        console.log("List Input:", listInput);
        console.log("Value Input:", valueInput);

        const req = {
                body : { 
                        X : Number(valueInput),
                        arr : listInput.split(",").map(Number),
                        view : view,
                    }
        } 
            coinChangeController(req);

        }, false);

};


document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            NavigateTo(e.target.href);
        }
    });
    router();
});
window.addEventListener("popstate", router);

