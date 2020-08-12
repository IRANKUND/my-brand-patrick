const db=firebase.firestore();

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
     db.collection('user').doc(user.uid).get().then((doc) =>{
      
      if(doc.data().role === "admin"){
      location.replace("../pages/manager.html");
    }else{
      location.replace("../pages/blog.html");
    }
     })
    } else {
        alert(" no user signed in ");
    }
  });

  function logOut(){
    firebase.auth().signOut();
  }
  