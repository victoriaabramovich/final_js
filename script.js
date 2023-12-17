'use strict'
// burger bar

let navigationElement = document.getElementById ("navBar");
let burgerElement = document.getElementById ("burgerBar");
let ulElement = document.getElementById('ulBar')

burgerElement.addEventListener('click', function() {
    // navigationElement.classList.add('navActive');-damateba
    burgerElement.classList.toggle('activeBurger');
    // navigationElement.classList.toggle('navActive');
    ulElement.classList.toggle('activeNew');
})
// Slider
let slideIndex = 1;
/* Вызываю функцию */
showSlides(slideIndex);

/* Увеличиваю индекс на 1 — идет следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаю индекс на 1 — идет предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаю текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Вызываем элемент с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");
    
    /* Проверяю количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    /* Прохожу по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаю элемент блочным: */
    slides[slideIndex - 1].style.display = "block";    
}





//Accordion
// let accordionContainers = document.querySelectorAll( ".accordion");
//  for (let i = 0; i < accordionContainers.length; i++) {
//     const element = accordionContainers[i];

//     element.addEventListener('click', function(){
//     this.classList.toggle('activeNew');
//     })
    
//  }


// for (let item of accordionContainers) {
//     item.addEventListener('click', function(){
//     classList.toggle('activeNew');
//     })
    
// }



// accordionContainer.forEach(function (x)) {
//     x.addEventListener('click', function(){
//         classList.toggle('activeNew');
//     })
// }
    
document.addEventListener("DOMContentLoaded", function() {
    var headers = document.querySelectorAll(".header");
    
    headers.forEach(function(header) {
        header.addEventListener("click", function() {
            var content = this.nextElementSibling;
            content.style.display = (content.style.display === "none") ? "block" : "none";
        });
    });
});

// Cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


function checkCookies() {
    let cookieNote = document.getElementById('cookie_note');
    let cookieBtnAccept = cookieNote.querySelector('.cookie_accept');

    // Если куки cookies_policy нет или она просрочена(уведомление) 
    if (!getCookie('cookies_policy')) {
        cookieNote.classList.add('show');
    }

    // // При клике на кнопку устанавливаем куку cookies_policy на один день(1) или если год, то 365
    cookieBtnAccept.addEventListener('click', function () {
        setCookie('cookies_policy', 'true', 1);
        cookieNote.classList.remove('show');
    });
}

checkCookies();


// Ajax GET

// let requistObject = new XMLHttpRequest();

// requistObject.addEventListener('load', function() {
//     console.log(this.responseText);
// });

// requistObject.open('GET', 'https://reqres.in/api/users?page=2');
// requistObject.send();


// // Accept JSON (взятые данные)

// let requistObjectNew = new XMLHttpRequest();

// requistObjectNew.addEventListener('load', function() {
// let acceptInfoText = this.responseText;
// let acceptInfoJs = JSON.parse(acceptInfoText);
// console.log(acceptInfoJs);
// });

// // UL li damateba
// let requistObjectNew = new XMLHttpRequest();

// requistObjectNew.addEventListener('load', function() {

// let ulElements = document.createElement('ul');

// acceptInfoJs.data.forEach((item)=> {
//     let liElement = document.createElement('li');
//     liElement.textContent = `${item.first_name} ${item.last_name}`;
//     ulElements.appendChild(liElement);
// });

// document.getElementById('api-info').appendChild(ulElements);
// });

// requistObjectNew.open('GET', 'https://reqres.in/api/users?page=2');
// requistObjectNew.send();

// Post method

let divPost = document.getElementById('api-info');


function ajaxPosts(){
    let requist = new XMLHttpRequest();
    requist.open("GET", "https://jsonplaceholder.typicode.com/posts");
    requist.addEventListener('load',function(){
        // console.log(requist.responseText);

        let data = JSON.parse(requist.responseText);

        data.forEach(element =>{
            createPost(element);
        });

        console.log(date);
    });
    requist.send();
}

function createPost(item) {
    let divElement = document.createElement("div");
    divElement.classList.add("post");

    let h2PostId = document.createElement("h2");
    h2PostId.textContent = item.id;

    let h3PostTitle = document.createElement("h3");
    h3PostTitle.textContent = item.title;

    divElement.appendChild(h2PostId);
    divElement.appendChild(h3PostTitle);

    divPost.appendChild(divElement);
    console.log(divElement);
}

ajaxPosts();

// Filter
  
let array1 = ['hello1', 14, 24, 'hello2'];
let newArray1 = array1.filter( (item) => typeof item);
console.log(newArray1);


// REgistracion form


let formElement = document.getElementById("resgitration");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = {};

  //username
  let usernameValue = document.getElementById("usernamefield").value;

  if (usernameValue == "") {
    errors.username = "Username field can not be empty";
  }

  // password
  let passwValue = document.getElementById("passwordfield").value;
  let passw2Value = document.getElementById("passwordfield2").value;

  if (passwValue == "") {
    errors.passw = "Password field can not be empty";
  }

  if (passwValue != passw2Value) {
    errors.passw2 = "Passwords do not match";
  }

  // radio
  let gender = false;

  formElement.querySelectorAll('[name = "gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please select Your Gender";
  }

  //checkbox
  let checkInput = document.getElementById("agree").checked;

  if (!checkInput) {
    errors.check = "You must Agree Our Terms and Conditions";
  }

  formElement.querySelectorAll(".error-text").forEach((el) => {
    el.innerText = " ";
  });

  // Errors 
  for (let item in errors) {
    console.log(item); // check; gender; passw;username

    let errorText = document.getElementById("error-" + item);

    if (errorText) {
      errorText.textContent = errors[item];
    }
  }

  console.log(Object.keys(errors));
  if (Object.keys(errors).length == 0) {
    formElement.submit();
  }

  console.log(errors);
});

// error objs
// let errors = {
//   check: "You must Agree Our Terms and Conditions",
//   gender: "Please select Your Gender",
//   passw: "Password field can not be empty",
//  username: "Username field can not be empty"
// }

// show hide password
let passwShow = document.getElementById("passwordfield");
let icon = document.getElementById("showIcon");

showHidePassword = () => {
  if (passwShow.type == "password") {
    passwShow.setAttribute("type", "text");
    // icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwShow.setAttribute("type", "password");
    icon.classList.add("fa-eye");
    // icon.classList.remove("fa-eye-slash");
  }
};

icon.addEventListener("click", showHidePassword);
// function showHidePassword() {

// email validation - regex
let email = document.getElementById("emailfield");

function validationEmail() {
  let emailField = document.getElementById("emailfield").value;
  let errortextEmail = document.getElementById("emailError");
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailField.match(emailRegex)) {
    errortextEmail.textContent = "Your Email is Valid";
    errortextEmail.style.color = "green";
  } else {
    errortextEmail.textContent = "Your Email is Invalid";
    errortextEmail.style.color = "red";
  }

  if (emailField == "") {
    errortextEmail.textContent = "";
  }
}

email.addEventListener("keyup", validationEmail);

// NPM
