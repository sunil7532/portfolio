//method  = "POST

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBh64cHTHiyFz1f8uM6cgNy_TVpP5F9wn4",
    authDomain: "contact-form-118e3.firebaseapp.com",
    projectId: "contact-form-118e3",
    storageBucket: "contact-form-118e3.appspot.com",
    messagingSenderId: "380365126138",
    appId: "1:380365126138:web:5c3fa721d8631efa108c43"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //referance contactInfo collection
  let contactInfo = firebase.database().ref("infos")

document.querySelector('.contact-form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

 let name = document.querySelector("#name").value;
 let company = document.querySelector("#company").value;
 let email = document.querySelector("#email").value;
 let phone = document.querySelector("#phone").value;
 let message = document.querySelector("#message").value;

    saveContactInfo(name, company, email, phone, message)
}

function saveContactInfo(name, company, email, phone, message){
    let newContactInfo = contactInfo.push()

    newContactInfo.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message})
}