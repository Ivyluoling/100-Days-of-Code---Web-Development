let paragraphElement = document.querySelector("p");

function changeParagraphText() {
    paragraphElement.textContent = "Clicked";
    console.log("Paragraph clicked");
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
    // let enteredText = inputElement.value;
    let enteredText = event.target.value; // =>will display what's inside the input box
    // let enteredText = event.data; => only will display the data input each time
    console.log(enteredText);
    // console.log(event);
}

inputElement.addEventListener('input', retrieveUserInput);