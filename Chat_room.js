const firebaseConfig = {
    apiKey: "AIzaSyCujhRMX1QANTpEIq_I36qmZzmIZcfvKL8",
    authDomain: "let-s-chat-46f24.firebaseapp.com",
    databaseURL: "https://let-s-chat-46f24-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-46f24",
    storageBucket: "let-s-chat-46f24.appspot.com",
    messagingSenderId: "550576748149",
    appId: "1:550576748149:web:9e11b8ef317df4849c2a3c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
      localStorage.setItem("room_name", room_name);
      window.location = "Chat_room.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Chat_room.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}