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
      const twentySolverInputContainer = document.querySelector(".ts-input")
      const calcResult = document.querySelector('.calculation-result');
      const resultLog = document.querySelector('.result-log p');
      
      if (calcResult && calcResult.offsetWidth <= 450) {
          calcResult.style.paddingLeft = '16px';
          if (resultLog){
            resultLog.style.fontSize = '15px';

          }
      } else if(calcResult && calcResult.offsetWidth > 450){
          calcResult.style.paddingLeft = '50px';
          if (resultLog){
            resultLog.style.fontSize = '24px';

          }
      }
      if (window.innerWidth > 700){
          if (menu.classList.contains("active")){
              menu.classList.toggle('active');
          }
      }
      if (twentySolverInputContainer){
        const form = twentySolverInputContainer.querySelector(".form-container")
        if (form && form.offsetWidth < 471){
          form.querySelector("p").style.display = 'none';
          form.querySelectorAll("input").forEach(element => {
            element.style.marginLeft = "4px";
            element.style.paddingLeft = "8px";
          })
        }
        if (form && form.offsetWidth >=471){
          form.querySelector("p").style.display = 'block';
          form.querySelectorAll("input").forEach(element => {
            element.style.marginLeft = "20px";
            element.style.paddingLeft = "15px";
          })
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

window.addEventListener('resize', function() {

});

window.addEventListener("popstate", router);




  

