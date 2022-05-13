 function addUser()
{
 var NameStore= document.getElementById("user_name").value;
localStorage.setItem("user_name", NameStore);
window.location="cyber_room.html"

}