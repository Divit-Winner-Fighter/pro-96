  var firebaseConfig = {


  apiKey: "AIzaSyCfrfF_zozVkB1N8fhX7RwgxyjVjK809QA",

  authDomain: "cybergram-d4cd5.firebaseapp.com",
  
  databaseURL: "https://cybergram-d4cd5-default-rtdb.firebaseio.com",
  
  projectId: "cybergram-d4cd5",
  
  storageBucket: "cybergram-d4cd5.appspot.com",
  
  messagingSenderId: "886757924474",
  
  appId: "1:886757924474:web:6e840e14dcd024d4ec25c3",
  
  measurementId: "G-2S3L8S2B40"
};
  firebase.initializeApp( firebaseConfig);
    User_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome  "+ User_name+"!";

    function addroom()
    {
      Room_names=document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_names).update({
        purpose:"adding Room Name"
      });
      localStorage.setItem("room_name",Room_names);
      window.location="cybergram_page.html";
    }
    function getData()
     {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
     snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;  
      Room_names = childKey;
      //Start code
console.log("Room name -"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="cybergram_page.html";
}

function removeUser()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";

}