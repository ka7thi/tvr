window.addEventListener('load', function(){
    changePlatform();
    showMenu();
    clearForm();
    
    setTimeout(function(){
        document.querySelector("body").style.overflow = "auto";
        const loading = document.querySelector(".loading");
        loading.style.display = "none";  
    }, 1000);
    
    const headerList = document.querySelector(".header__list");
    function showMenu(){
        const hamburger = document.querySelector(".header__hamburger");
        hamburger.addEventListener("click", function(){
            headerList.classList.toggle("menu-padding");
        })
    }
    
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function(){
        var currentScrollPos = window.pageYOffset;
        if(prevScrollpos > currentScrollPos){
            document.querySelector(".header").style.top = "0";
            headerList.classList.remove("menu-padding");
        } 
        else
        {
            document.querySelector(".header").style.top = "-80px";
            headerList.classList.remove("menu-padding");
        }
        prevScrollpos = currentScrollPos;
    }
    
    function changePlatform(){
        const tab1 = document.querySelector(".tab__1");
        const tab2 = document.querySelector(".tab__2");
        const tab3 = document.querySelector(".tab__3");
        const description1 = document.querySelector(".description__1");
        const description2 = document.querySelector(".description__2");
        const description3 = document.querySelector(".description__3");

        tab1.addEventListener("click", function(){
            description1.classList.remove("hide");
            description2.classList.add("hide");
            description3.classList.add("hide");
            this.classList.add("tabs__button--clicked");
            tab2.classList.remove("tabs__button--clicked");
            tab3.classList.remove("tabs__button--clicked");
        });

        tab2.addEventListener("click", function(){
            description1.classList.add("hide");
            description2.classList.remove("hide");
            description3.classList.add("hide");
            this.classList.add("tabs__button--clicked");
            tab1.classList.remove("tabs__button--clicked");
            tab3.classList.remove("tabs__button--clicked");
        });

        tab3.addEventListener("click", function(){
            description1.classList.add("hide");
            description2.classList.add("hide");
            description3.classList.remove("hide");
            this.classList.add("tabs__button--clicked");
            tab1.classList.remove("tabs__button--clicked");
            tab2.classList.remove("tabs__button--clicked");
        }); 
    }
    
    function clearForm(){
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");
        const nameContact = document.querySelector("#contact__name");
        const emailContact = document.querySelector("#contact__email");
        const subjectContact = document.querySelector("#contact__subject");
        
        const form = [name, email, password, nameContact, emailContact, subjectContact];
        for(i=0; i<=5; i++){
            form[i].addEventListener("focus", function(){
            this.placeholder = "";
            })
        }
        
        const formName = [name, nameContact];
        for(i=0; i<=1; i++){
            formName[i].addEventListener("blur", function(){
            this.placeholder = "Imię";
            })
        }
        
        const formEmail = [email, emailContact];
        for(i=0; i<=1; i++){
            formEmail[i].addEventListener("blur", function(){
            this.placeholder = "Email";
            })
        }
        
        password.addEventListener("blur", function(){
            this.placeholder = "Hasło";
        })
        subjectContact.addEventListener("blur", function(){
            this.placeholder = "Temat";
        })
        
    }
} , false);








