
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDu2QX1o6lv9CGX9JNNAmo1hrdKncXh55Q",
      authDomain: "classtest-815bc.firebaseapp.com",
      databaseURL: "https://classtest-815bc-default-rtdb.firebaseio.com",
      projectId: "classtest-815bc",
      storageBucket: "classtest-815bc.appspot.com",
      messagingSenderId: "199370877751",
      appId: "1:199370877751:web:ec3b9a0b5bfbbc8136c8b2"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome  "+user_name+" !";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      console.log(row);
      document.getElementById("output").innerHTML += row;
      //End code
      });
    });
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}