


// listern for form

document.getElementById('signupForm').addEventListener('submit', signup);
let db=firebase.firestore();
function signup(e){
  e.preventDefault();

    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var name=document.getElementById('name').value;
    var phone=document.getElementById('phone').value;
    const promise=firebase.auth().createUserWithEmailAndPassword(
      email, password).then((user) =>{
        console.log(user);
        db.collection('user').doc(user.user.uid).set({
          name: name,
          phone: phone,
          role: 'user'
        });
        
      }) 
        
    
    
    
    
    
    // promise.catch(error => alert(error.message));
        // alert("signed Up");
        // document.getElementById('signupForm').reset();

    

}



