// document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

document.querySelector("p a");
anchorElement.href = "https://instagram.com";


//add an element

//1. create the new element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "wikipedia.com";

//2. get access to the parent element that the new element will reside

let firstParagraph = document.querySelector('p');

//3. insert the new element

firstParagraph.append(newAnchorElement);

//remove elements
//1. select the element to be removed
let firstH1Element = document.querySelector("h1");

//2. remove it
firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element); //alternative way


// move elements - append the to be moved element to the desired position
firstParagraph.parentElement.append(firstParagraph);

// innerHTML

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = "Hi! This is <strong>important</strong>!";

