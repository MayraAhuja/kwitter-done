//YOUR FIREBASE LINKS
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
     
     var username= localStorage.getItem("usernameK");
     var roomname= localStorage.getItem("roomnameK");



function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name= message_data["namekey"];
var message= message_data["messagekey"];
var like= message_data["likekey"];
var label_name='<h4>'+name+'<img class="user_tick" src="star.png"></h4>';
var label_message='<h4 class="message_h4">'+message+'</h4>';
var like_button= '<button class="btn btn-default" id="'+firebase_message_id+'" value="'+like+'" onclick="update_likes(this.id)"><img src="heart.png">'+like+'</button> <hr>';
var message_row= label_name+label_message+like_button;
document.getElementById("output").innerHTML+=message_row; 
//End code
      } });  }); }
getData();


function send() {
      var usermsg= document.getElementById("msg_input").value;
      firebase.database().ref(roomname).push({
            namekey:username,
            messagekey:usermsg,
            likekey:0
      });                 
      document.getElementById("msg_input").value="";
}




function update_likes(this_id){
      likes= document.getElementById("this_id").value;
      updated_likes= Number(likes)+100;
      firebase.database().ref(roommname).child(this_id).update({likekey:updated_likes});
}

function logout() {
      localStorage.removeItem("usernameK");
      localStorage.removeItem("roomnameK");
      window.location="Page_1.html"
}