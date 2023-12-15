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