import home from "../app/views/homeView.js";
import coinChange from "../app/views/coinChangeView.js";
import twentySolver from "../app/views/twentySolverView.js";
import pageNotFound from "../app/views/pageNotFoundView.js";
import { coinChangeController } from "../app/controllers/coinChangeController.js";
import { twentySolverController } from "../app/controllers/twentySolverController.js";


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
        action.preventDefault();
        try{
            if (view instanceof coinChange){ coinChangeController(view.getInput(), view); }
            else if (view instanceof twentySolver) { twentySolverController(view.getInput(), view); }
        }catch (e){
            document.getElementById("errorMessage").innerHTML = e;
        }
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

