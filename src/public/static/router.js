import home from "../../views/homeView.js"
import coinChange from "../../views/coinChangeView.js"
import twentySolver from "../../views/twentySolverView.js";
import pageNotFound from "../../views/pageNotFoundView.js";

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

