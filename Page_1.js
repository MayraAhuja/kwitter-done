function login() {
   var username= document.getElementById("user_name").value;
    localStorage.setItem("usernameK", username);
    window.location="Page_2.html";
}