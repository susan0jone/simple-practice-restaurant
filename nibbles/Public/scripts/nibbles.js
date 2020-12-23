angular.module('nibbleApp', ['ui.router'])
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
   })
   .state('reservations', {
    url: '/reservations',
    templateUrl: '/Public/reservations.html',
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/Public/contact.html',
  });
  })
.controller('myCtrl', function(){
    this.message = 'Hello World!';
    this.onload = function (){
        // const x = document.getElementsByClassName("message")
        // x[0].style.display = "none";
        // document.getElementById("message").style.transition = "all 2s ease-in-out";
        // document.getElementById("message").style.height = "0px";
        const preloader = document.getElementsByClassName("preloader-box")
        const nav = document.getElementsByTagName("nav")
        const nimblesMain = document.getElementsByClassName("nimbles-main")
        setTimeout(() => {
            preloader[0].style.opacity = 0;
            preloader[0].style.display = "none";
            // nimblesMain[0].style.opacity = 1;
            // nimblesMain[0].style.display = "block";
            
        } , 3000)
        // nimblesMain[0].style.opacity = 1;
    }
    this.nav = function (){
        const navButton = document.getElementById("nav-button")
        // const x = document.getElementsByClassName("message")
        // x[0].style.display = "none";
       

        if (navButton.style.width === "0px"){
            navButton.style.transition = "all 1s ease-in-out";
            navButton.style.width = "200px";
            navButton.style.padding = "15px"
        }
        else{
            navButton.style.transition = "all 0.5s ease-in-out";
            navButton.style.width = "0px";
            navButton.style.padding = "0px"
        }
 
    
    
    }
 
    // this.toggle = function (){
    //     let activeToggle = false;
    // }
})
    .controller('myAboutCtrl', function(){
        this.style = "active";
        this.message = 'Hello secondWorld!';
        // const imageContainer = document.getElementById("image-container");
        const imageContent = document.getElementsByClassName("image-content");
        const img = document.getElementById("intro");
        const info = document.getElementsByClassName("info");
        let index=4;
         
        this.fetchImg = function () {
           

            setTimeout (() =>{
                img.style.transition = "all 1s ease-in-out";
                img.style.marginTop = "60px";
                img.style.paddingRight = "50px"
                imageContent[0].style.transition= "all 1s ease-in-out"
                // imageContent[0].style.height = "0";
                imageContent[0].style.marginTop = "40px";
               
    
            }, 1000)
            window.addEventListener("scroll", function(){
                if (window.pageYOffset > 100 && window.pageYOffset < 300){
                    imageContent[0].style.padding = "70px";
               
                }
                else if (window.pageYOffset > 300 && window.pageYOffset < 700){
                  const menu = document.getElementsByClassName("menu");
                  menu[0].style.transition= "all 1s ease-in-out"
                  menu[0].style.marginTop = "40px";
                }
               
                else if (window.pageYOffset > 700 && window.pageYOffset < 1200) {
                  const reservation = document.getElementsByClassName("reservation");
                  reservation[0].style.transition= "all 1s ease-in-out"
                  reservation[0].style.marginTop = "-20px";
                
                }
                else if (window.pageYOffset > 1300 && window.pageYOffset < 1500) {
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
           
            
            // if (img.style.height === "0px"){
            //     imageContent.style.transition = "all 1s ease-in-out";
            //     imageContent.style.height = "200px";
            //     imageContent.style.padding = "10px";
            //     // imageContent.style.display = "block";
            // }
            // else{
            //     imageContent.style.transition = "all 0.5s ease-in-out";
            //     imageContent.style.height = "0px";
            //     imageContent.style.padding = "0px"
            // }
            
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
        const title = document.getElementsByClassName("title");
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
                // drinksContent[0].innerHTML = menuItems[p].drinks;
                console.log(menuItems[p].drinks);
            }
           
            // let chars= resp.categories;
            // for (i=0; i< 9; i++){
            //     console.log (resp.categories[i]);
                // let foodDescription = document.createElement('div');
                // let foodTitle = document.createElement("p")
                // let img = document.createElement('img');
                // foodDescription.innerHTML=  resp.categories[i].strCategoryDescription;
                // foodTitle.innerHTML = chars[i].strCategory;
                // img.src = resp.categories[i].strCategoryThumb;
                // menuContent[0].appendChild(foodTitle);
                // menuContent[0].appendChild(img);
                // menuContent[0].appendChild(foodDescription);
               
            // }
        })
        .catch(error => {
            console.log("something went wrong")
        })
      

        
    
    })
    .controller('myReserveCtrl', function(){
        this.message = "hello world"
        this.reserve = function (){
            let Reserve = document.getElementsByClassName("Reserve");
            Reserve[0].innerHTML = "Thank you for making a reservation!"
        }
       

        
    
    })
    // .controller('myContactCtrl', function(){
    //     this.message = "hello world"
    //     this.contact = function (){
    //         let contact = document.getElementsByClassName("contact-form");
    //         contact[0].innerHTML = "Thank you for making a request, we'd get back to you as soon as possible"
    //     }
       

        
    
    // })
  
