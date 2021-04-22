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
            meassage:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
