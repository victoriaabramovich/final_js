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
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
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






// Delete method
 
//  deleteBtn.addEventListener("click", function (event) {
//     event.stopPropagation();
//     let deleteBtnId = event.target.getAttribute("data-id");
//     console.log("DELETE BUTTON", deleteBtnId);
//     let DeleteUrl = `https://jsonplaceholder.typicode.com/posts/${deleteBtnId}`;
//     console.log(DeleteUrl);

//     fetch(DeleteUrl, {
//       method: "DELETE",
//     }).then(() => divElement.remove());
//   });

//   divWraperPost.appendChild(divElement);
// });

