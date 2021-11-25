var firebaseConfig = {
  apiKey: "AIzaSyBW9oaqU_KEEbuJFQXo1ylaTKtyjbD2v3c",
  authDomain: "classtest-2ed76.firebaseapp.com",
  databaseURL: "https://classtest-2ed76-default-rtdb.firebaseio.com",
  projectId: "classtest-2ed76",
  storageBucket: "classtest-2ed76.appspot.com",
  messagingSenderId: "380572309766",
  appId: "1:380572309766:web:c747b0a7e10fd63cce6687",
  measurementId: "G-E3M4R6HQQR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
{ childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
