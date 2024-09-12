
const NavigateTo = url => {
    history.pushState(null, null, url);
    router();
} 

const router = async() => {
    const routes = [
        { path: "/greedyalgorithm", view: greedyalgorithm},
        { path: "/twentysolver", view: twentysolver},
    ];
    const routeNotFound = {view: pageNotFound}

    const matchRoute = () => {
        const isMatch = routes.find(route => route.path === location.pathname);
        return isMatch ? isMatch : routeNotFound;
    };

    const matchedRoute = matchRoute();
    
    const view = new matchedRoute.view();
    document.querySelector("#app").innerHTML = await view.getHtml();
    view.loadUi();
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