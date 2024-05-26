const pw = document.querySelector("#password");
const cpw = document.querySelector("#confirm-password");
const fb = document.querySelector("#password");

cpw.addEventListener('focusout',controlar)

function controlar(){
    //console.log('inside the function')
    if(pw.value !== cpw.value ) {
        //console.log('No match')
        pw.value=""
        cpw.value=""
        pw.focus()
        fb.textContent = "Values do not match. Try again" 
    }
    else{
        //console.log('YEA the match')
        fb.textContent=""
    }
}