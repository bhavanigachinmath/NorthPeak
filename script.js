<<<<<<< HEAD
const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

const message=document.getElementById("message").value;

const error=document.getElementById("error");

if(name=="" || email=="" || message==""){

error.innerHTML="Please fill all fields.";

return;

}

error.style.color="green";

error.innerHTML="Message Sent Successfully!";

form.reset();

});
});

}
=======
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

const message=document.getElementById("message").value;

const error=document.getElementById("error");

if(name=="" || email=="" || message==""){

error.innerHTML="Please fill all fields.";

return;

}

error.style.color="green";

error.innerHTML="Message Sent Successfully!";

form.reset();

});
>>>>>>> ef7b6c7c84364d1b442bcbb84fd5158aceb83af3
