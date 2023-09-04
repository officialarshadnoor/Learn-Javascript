let description = document.querySelector('h5');
description.innerText = "This is modified heading!";
description.innerText +=" This is another added text";

let navLi = document.querySelectorAll('ul.top-nav li');
// we use foreach method to get individual access to all li elements
navLi.forEach((element) => {
    element.innerText += "--";
}); 

const link = document.querySelector("a");
link.setAttribute("href","https://www.blogginghindi.com");
link.setAttribute("target","_blank");
link.setAttribute("class","active");

const brandName = document.querySelector(".brand");
brandName.setAttribute("style","color:blue;");
brandName.setAttribute("style","margin:20px;");

// Above method overrides the style property

// To avoid overriding we use .style property to give the style
brandName.style.margin = "50px";
brandName.style.color = "blue";
brandName.style.fontSize = "100px";

const heading = document.querySelector("h1");
heading.classList.add("heading");