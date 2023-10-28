
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyAxIJ024q3QySy-TmZEocgkq3Jhnz-HOgU",
      authDomain: "kwitter-51db1.firebaseapp.com",
      databaseURL: "https://kwitter-51db1-default-rtdb.firebaseio.com",
      projectId: "kwitter-51db1",
      storageBucket: "kwitter-51db1.appspot.com",
      messagingSenderId: "879060703484",
      appId: "1:879060703484:web:41346b6ce7b4f2a7799f79",
      measurementId: "G-DVRE50BQJE"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addroom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
    }
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
