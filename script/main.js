

 

// reference messages collection
var messagesRef = firebase.firestore();
 
// listern for form

document.getElementById('contactForm').addEventListener('submit', submitForm);
 
// submit form

function submitForm(e){
    e.preventDefault();
  
    // get values 

    var name = getInputVal('name');
    var email= getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // save message
    saveMessage(name, email, phone, message);

    // show alert
    document.querySelector('.alert').style.display = 'block';

    // hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);

    // reset field

    document.getElementById('contactForm').reset();

}
// function to get form values


function getInputVal(id){
   return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, email, phone, message){
  messagesRef.collection('contact').doc().set({
    name: name,
     email: email,
     phone: phone,
     message: message
  }).then(function (){
    console.log("meassage sent");
  }).catch(function(error){
    console.log("message not sent");
  })
    
}

