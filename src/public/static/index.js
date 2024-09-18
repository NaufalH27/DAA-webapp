import home from "../app/views/homeView.js";
import coinChange from "../app/views/coinChangeView.js";
import twentySolver from "../app/views/twentySolverView.js";
import pageNotFound from "../app/views/pageNotFoundView.js";


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
    view.eventListener();

      document.addEventListener("DOMContentLoaded", function() {
    const burgerIcon = document.querySelector(".burger-icon");
    const menu = document.getElementById('menu');

    if (burgerIcon) {
      burgerIcon.addEventListener("click", function(action) {
        console.log("aaa");
        action.preventDefault();
        if (!menu.classList.contains("active")) {
          console.log("aaa");
          menu.classList.add('active');
        } else {
          menu.classList.remove('active');
        }
      });
    } else {
      console.error("burgerIcon not found!");
    }
  });

};


document.addEventListener("DOMContentLoaded", () => {
    const burgerIcon = document.getElementById("burger");
    const menu = document.getElementById('menu');
    const menuList = menu.querySelectorAll("a")

    

    burgerIcon?.addEventListener("click", action =>{
        action.preventDefault();
        menu.classList.toggle('active');
    }, false)

    window.addEventListener('resize', ()=>{
        if (window.innerWidth > 700){
            if (menu.classList.contains("active")){
                menu.classList.toggle('active');
            }
        }
    });

    menuList.forEach(element => {
        element.addEventListener("click", () => {
           menu.classList.toggle("active"); 
        })
    })

    
    
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            NavigateTo(e.target.href);
        }
    });
    router();
    
    
});

window.addEventListener("popstate", router);




  

