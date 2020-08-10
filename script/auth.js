


// listern for form

document.getElementById('signupForm').addEventListener('submit', signup);

function signup(e){
  e.preventDefault();

    var email=document.getElementById('email');
    var password=document.getElementById('password');

    const promise=firebase.auth().createUserWithEmailAndPassword(email.value, password.value); 
        promise.catch(error => alert(error.message));
        alert("signed Up");
        document.getElementById('signupForm').reset();
      

}



