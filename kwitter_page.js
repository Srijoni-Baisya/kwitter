//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);

      name= message_data['name'];
      message= message_data['message'];
      like= message_data['like'];

      name_with_tag = "<h4> "+name+" <img class='user_tick' src='tick.png'> </h4>";
      message_with_tag = "<h4 class='message_h4'> "+message+" </h4>";
      like_button = "<button class='btn btn-warning' id= "+firebase_message_id+" value= "+like+" onclick= 'updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+" </span> </button> <hr>"; 

      row= name_with_tag+message_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("Clicked on like button, "+message_id);
      button_id=message_id;
      likes = document.getElementById(button_id).value;
      updatedLikes = Number(likes)+1;
      console.log(updatedLikes);

      firebase.database().ref(room_name).child(message_id).update({
            like:updatedLikes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}