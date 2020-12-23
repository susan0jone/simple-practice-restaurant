let angularApp = angular.module('nibbleApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home'); 
     $stateProvider
     .state('home', {
      url: '/home',
      templateUrl: '/Public/main.html',
      controller: "myCtrl as ctrl"
   })
     
     .state('about', {
        url: '/about',
        templateUrl: '/Public/home.html',
        Controller : "myAboutCtrl as Aboutctrl"
     })
     .state('menu', {
      url: '/menu',
      templateUrl: '/Public/menu.html',
   });
  })
.controller('myCtrl', function(){
    this.onload = function (){
        const preloader = document.getElementsByClassName("preloader-box")
        const nav = document.getElementsByTagName("nav")
        const nimblesMain = document.getElementsByClassName("nimbles-main")
        setTimeout(() => {
            preloader[0].style.opacity = 0;
            preloader[0].style.display = "none";
            
        } , 3000)
    }
    this.nav = function (){
        const navButton = document.getElementById("nav-button")
       

        if (navButton.style.width === "0px"){
            navButton.style.opacity = "1"
           
            
            navButton.style.width = "300px";
            navButton.style.padding = "15px";
            navButton.style.transition = "all 1s ease-in-out";
        }
        else{
           
            navButton.style.width = "0px";
            navButton.style.padding = "0px";
            navButton.style.opacity = "0"
            navButton.style.transition = "all 0.5s ease-in-out";
        }
 
    
    
    }
 

})
    .controller('myAboutCtrl', function(){
        this.style = "active";
        const imageContent = document.getElementsByClassName("home-image-content");
        const img = document.getElementById("home-img");
        const info = document.getElementsByClassName("info");
        const menu = document.getElementsByClassName("home-menu");;
        let index=4;
         
        this.fetchImg = function () {
           

            setTimeout (() =>{
                img.style.transition = "all 1s ease-in-out";
                img.style.marginTop = "60px";
                img.style.paddingRight = "50px"
                imageContent[0].style.transition= "all 1s ease-in-out"
                imageContent[0].style.marginTop = "40px";
               
    
            }, 1000)
            window.addEventListener("scroll", function(){
                if (window.pageYOffset > 100 && window.pageYOffset < 300){
                    imageContent[0].style.padding = "70px";
               
                }
                else if (window.pageYOffset > 400 && window.pageYOffset < 800){
                  const menu = document.getElementsByClassName("home-menu");
                  menu[0].style.transition= "all 1s ease-in-out"
                  menu[0].style.marginTop = "40px";
                }
                else if (window.pageYOffset > 700) {
                    const reviews = document.getElementsByClassName("review-content");
                    reviews[0].style.transition= "all 1s ease-in-out"
                    reviews[0].style.marginTop = "20px";
                    reviews[0].style.width = "250px";
                    reviews[0].style.color = "white";
                    reviews[1].style.transition= "all 1s ease-in-out"
                    reviews[1].style.marginTop = "20px";
                    reviews[1].style.transitionDelay = "0.2s";
                    reviews[1].style.width = "250px";
                    reviews[1].style.color = "white";
                    reviews[2].style.transition= "all 1s ease-in-out"
                    reviews[2].style.marginTop = "20px";
                    reviews[2].style.transitionDelay = "0.4s";
                    reviews[2].style.width = "250px";
                    reviews[2].style.color = "white";
                  
                  }
                    
              });
            
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(response => {
            let resp = response
            let chars= resp.categories;
            img.src = resp.categories[index].strCategoryThumb;
           setInterval(()=> {
           
            img.src = resp.categories[index].strCategoryThumb;
                 index++;
                 if (index > 8){
                     index=4;
                 }

           }, 2000)
        })
      

        }
    

    
        
        
    })
    .controller('myMenuCtrl', function(){
        this.style = "active";
        this.message = 'Hello World!';
        const menuContent = document.getElementsByClassName("menu-content");
        const drinksContent = document.getElementsByClassName("drinks-content");
        const foodContent = document.getElementsByClassName("food-content");
        const title = document.getElementsByClassName("menu-title");
        const url = 'data.json';
        
        this.drinksDisplay = function (){
           
            drinksContent[0].style.transition = "opacity 1s ease-in-out";
            drinksContent[0].style.opacity = "1";
            foodContent[0].style.opacity = "0";
            title[1].style.backgroundColor = "orangered";
            title[0].style.backgroundColor = " rgba(245, 222, 179, 0.5)";
        }
        this.foodDisplay = function (){
            foodContent[0].style.transition = "opacity 1s ease-in-out";
            foodContent[0].style.opacity = "1";
            drinksContent[0].style.opacity = "0";
            title[0].style.backgroundColor = "orangered";
            title[1].style.backgroundColor = " rgba(245, 222, 179, 0.5)";
           
        }
      
     
       
       
    
        fetch("data.json")
        .then(res => res.json())
        .then(response => {
            let menuItems = response.menu;
            for (p=0; p<menuItems.length; p++){
                let drinksTitle = document.createElement("div");
                drinksTitle.className = "drinkStyle"
                drinksTitle.innerHTML = menuItems[p].drinks;
                let foodTitle = document.createElement("div");
                foodTitle.className = "foodStyle"
                foodTitle.innerHTML = menuItems[p].name;
                drinksContent[0].appendChild(drinksTitle);
                foodContent[0].appendChild(foodTitle);
                console.log(menuItems[p].drinks);
            }
           
     
        });
      

        
    
    })

