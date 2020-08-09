

document.getElementById('loginForm').addEventListener('submit', login);
function login(e){
  e.preventDefault();
  var email=document.getElementById('email');
  var password=document.getElementById('password');
  const promise=firebase.auth().signInWithEmailAndPassword(email.value, password.value);
  promise.catch(error => alert(error.message)); 
  
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        location.replace("../pages/manager.html")
    } else {
        alert(" no user signed in ");
    }
  });
