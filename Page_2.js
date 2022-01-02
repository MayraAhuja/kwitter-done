// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA7Pw2NKopq6BrCwyIAlITTlyikNkbIu3E",
      authDomain: "lastchance-dc641.firebaseapp.com",
      databaseURL: "https://lastchance-dc641-default-rtdb.firebaseio.com",
      projectId: "lastchance-dc641",
      storageBucket: "lastchance-dc641.appspot.com",
      messagingSenderId: "217935306667",
      appId: "1:217935306667:web:dfd60b39b6c9f621537cee"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     username= localStorage.getItem("usernameK");

document.getElementById("whatever_you_want").innerHTML= "Welcome "+ username+" !";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("TrendingRooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname- "+Room_names);

      var roomDiv= '<div class="room_name" id="' + Room_names + '" onclick="goToRoom(this.id)">#' + Room_names + '</div> <hr> ';
      document.getElementById("TrendingRooms").innerHTML+=roomDiv;
      
      //End code
      });});}
getData();


function AddRoom() {
      var roomname= document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      }); 
      localStorage.setItem("roomnameK", roomname);
      window.location="Page_3.html";
}


function goToRoom(RoomID) {
      console.log(RoomID);
      localStorage.setItem("RoomIDK", RoomID);
      window.location="Page_3.html";
}

function logout() {
      localStorage.removeItem("usernameK");
      localStorage.removeItem("roomnameK");
      window.location="Page_1.html"
}
 




