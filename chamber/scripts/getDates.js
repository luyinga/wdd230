//create year and last modified varables
const now = new Date();
const currentYear = now.getFullYear();
let dateTime = document.lastModified;

// Append to footer paragraphs
document.querySelector('#currentyear').innerText = currentYear;


document.querySelector('#lastmodification').innerText = dateTime
