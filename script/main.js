  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBvq5EpdFtZNC1j6aFsNbARdf7F2hFvtgE",
    authDomain: "mybrand-patrick.firebaseapp.com",
    databaseURL: "https://mybrand-patrick.firebaseio.com",
    projectId: "mybrand-patrick",
    storageBucket: "mybrand-patrick.appspot.com",
    messagingSenderId: "281232257418",
    appId: "1:281232257418:web:9c884c681f0d741ac41873",
    measurementId: "G-YPFPHB9BK2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 

  // reference messages collection
  var messagesRef = firebase.database().ref('messages');

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
    var newMessagesRef= messagesRef.push();
    newMessagesRef.set({
     name: name,
     email: email,
     phone: phone,
     message: message
    });
}