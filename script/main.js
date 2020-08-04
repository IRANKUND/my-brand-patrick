 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyB0kVYClsmrQCKbTCetXAz1OB9EQl6wtJM",
  authDomain: "contactform-92a99.firebaseapp.com",
  databaseURL: "https://contactform-92a99.firebaseio.com",
  projectId: "contactform-92a99",
  storageBucket: "contactform-92a99.appspot.com",
  messagingSenderId: "275859048372",
  appId: "1:275859048372:web:20c3ff10b5c69d365394e1",
  measurementId: "G-V99Y10MJCF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 

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









// function saveMessage(name, email, phone, message){
//     var newMessagesRef= messagesRef.push();
//     newMessagesRef.set({
//      name: name,
//      email: email,
//      phone: phone,
//      message: message
//     });
// }