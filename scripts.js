/* Add your JavaScript to this file */
window.onload = function(){
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var email = document.getElementById("email");
    var messageDiv = document.getElementsByClassName("message")[0];
    var submitbutton = document.getElementsByTagName("button")[0];
    submitbutton.addEventListener("click", (e)=>{
        e.preventDefault();

    if (email.value =="" || !(email.value.match(mailFormat))){
        messageDiv.innerHTML = "Please enter a valid email address.";
        email.value ="";
    }else{
        messageDiv.innerHTML = "Thank you! Your email address " + email.value + " has been added to our mailing list";
    }
}
)}




