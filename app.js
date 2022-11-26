// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  import { getDatabase,remove, ref, set,push,onChildAdded } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAsqmHHm5NUlv1XsnWZPVnsf8YmNSkTKbk",
    authDomain: "todoapp-a2.firebaseapp.com",
    projectId: "todoapp-a2",
    storageBucket: "todoapp-a2.appspot.com",
    messagingSenderId: "959341191884",
    appId: "1:959341191884:web:3e513a5c9c4b086d0e5869",
    measurementId: "G-W1SH9QZGGJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase()

  var arr = []
  
  var inp = document.getElementById("inp")
  var parent = document.getElementById("parent")

window.addData = function(){
    var obj = {
       task :inp.value,
        time : `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`

    }

    const keyRef = ref(db, "users/")
    obj.id = push(keyRef).key


    const reference = ref(db,`users/${obj.id}`)
    set(reference,obj)
}
function renderData(){
    parent.innerHTML = "";
    
    for( var i=0; i<arr.length; i++){
        parent.innerHTML += `<li class="bg_clr">${arr[i].task}  <button onclick="delData('${arr[i].id}')"> Delect </button> <button onclick="editData('${arr[i].task}','${arr[i].id}')">Edit</button> <br> <br> ${arr[i].time}</li>`
    }
}

window.delData = function(e){
    const keyRe = ref(db, `users/${e}`)
    remove(keyRe)   
}

window.editData = function(a,id){
    inp.value = a
    editId = id;
    // console.log(inp.value)
    
}   


window.getData = function(){
    const keyRefere = ref(db, "users")
    onChildAdded(keyRefere,function(data){
        arr.push(data.val())
        console.log(data.val())
        renderData()
    })  

}


























// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// import { getDatabase,remove, ref, set,push,onChildAdded } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAsqmHHm5NUlv1XsnWZPVnsf8YmNSkTKbk",
//   authDomain: "todoapp-a2.firebaseapp.com",
//   projectId: "todoapp-a2",
//   storageBucket: "todoapp-a2.appspot.com",
//   messagingSenderId: "959341191884",
//   appId: "1:959341191884:web:3e513a5c9c4b086d0e5869",
//   measurementId: "G-W1SH9QZGGJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getDatabase()

// var arr = []

// var inp = document.getElementById("inp")
// var parent = document.getElementById("parent")

// var editId;
// window.addData = function(){
//   var obj;
//   let reference
//   if(editId){
//        obj = {
//           task :inp.value,
//            time : `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
          
//        }    
//    reference = ref(db,`users/${editId}`)
//    console.log(editId)    
//   }else{
//    obj = {
//           task :inp.value,
//           time : `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
//       }
      
//       const keyRef = ref(db, "users/")
//       obj.id = push(keyRef).key
      
      
//       const reference = ref(db,`users/${obj.id}`)
//   }
//   set(reference,obj)
// }
// function renderData(){
//   parent.innerHTML = "";
  
//   for( var i=0; i<arr.length; i++){
//       parent.innerHTML += `<li class="bg_clr">${arr[i].task}  <button onclick="delData('${arr[i].id}')"> Delect </button> <button onclick="editData('${arr[i].task}','${arr[i].id}')">Edit</button> <br> <br> ${arr[i].time}</li>`
//   }
// }

// window.delData = function(e){
//   const keyRe = ref(db, `users/${e}`)
//   remove(keyRe)   
// }

// window.editData = function(a,id){
//   inp.value = a
//   editId = id;
//   // console.log(inp.value)
// addData()
// }   


// window.getData = function(){
//   const keyRefere = ref(db, "users")
//   onChildAdded(keyRefere,function(data){
//       arr.push(data.val())
//       // console.log(data.val())
//       renderData()
//   })  

// }








