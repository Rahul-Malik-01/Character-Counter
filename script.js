const inputChars = document.querySelector("#input");
const charCount = document.querySelector(".charCount");
const remainChars = document.querySelector(".remainChars");

inputChars.addEventListener("keyup", () => {
    updateCounter();
});

function updateCounter() {
    charCount.innerText = inputChars.value.length;
    remainChars.innerText = inputChars.getAttribute("maxlength") - inputChars.value.length;
}