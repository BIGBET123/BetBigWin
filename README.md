<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VIP SCOREX PRO</title>

<script src="https://js.paystack.co/v1/inline.js"></script>

<!-- Firebase -->
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"></script>

<style>
body{margin:0;font-family:Arial;background:#0b1220;color:#fff}
.center{display:flex;height:100vh;justify-content:center;align-items:center;flex-direction:column}

.card{background:#121a2c;padding:15px;margin:10px;border-radius:12px}
.btn{padding:12px;width:100%;border:none;border-radius:10px;background:#27ae60;color:white;font-weight:bold}

input{padding:10px;width:90%;margin:5px;border-radius:8px;border:none}

.admin{background:#1a2338;padding:10px;margin:10px;border-radius:10px}
.hidden{display:none}
.nav{position:fixed;bottom:10px;left:5%;width:90%;display:flex;justify-content:space-around;background:#111;border-radius:15px;padding:10px}
.nav div{cursor:pointer;color:#aaa}
.nav .active{color:#00ff88}
</style>
</head>

<body>

<!-- LOGIN -->
<div id="login" class="center">
    <h2>VIP LOGIN</h2>
    <input id="email" placeholder="email">
    <input id="password" type="password" placeholder="password">
    <button class="btn" onclick="login()">Login</button>
</div>

<!-- APP -->
<div id="app" class="hidden">

    <h2 style="text-align:center">VIP Matches</h2>

    <div id="matchList"></div>

    <!-- ADMIN PANEL -->
    <div id="adminPanel" class="hidden">
        <h3 style="text-align:center">ADMIN PANEL 🔐</h3>

        <div class="admin">
            <input id="home" placeholder="Home team">
            <input id="away" placeholder="Away team">
            <input id="league" placeholder="League">
            <input id="score" placeholder="Score e.g 2-1">
            <input id="price" placeholder="Price (100 GHS)">
            <button class="btn" onclick="addMatch()">Add Match</button>
        </div>

    </div>

</div>

<!-- NAV -->
<div class="nav hidden" id="nav">
    <div onclick="showAdmin()">Admin</div>
    <div onclick="logout()">Logout</div>
</div>

<script>

/* ================= FIREBASE CONFIG ================= */
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

/* ================= PAYSTACK ================= */
const PAYSTACK_KEY = "pk_live_xxxxxxxxx";

/* ================= USER STATE ================= */
let isAdmin = false;
let matches = [];

/* ================= LOGIN ================= */
function login(){
    let email = email.value;
    let password = password.value;

    auth.signInWithEmailAndPassword(email,password)
    .then(checkUser)
    .catch(()=>auth.createUserWithEmailAndPassword(email,password)
    .then(checkUser));
}

auth.onAuthStateChanged(user=>{
    if(user){
        checkUser();
    }
});

function checkUser(){
    document.getElementById("login").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    document.getElementById("nav").classList.remove("hidden");

    // SIMPLE ADMIN CHECK
    if(auth.currentUser.email === "admin@vip.com"){
        isAdmin = true;
        document.getElementById("adminPanel").classList.remove("hidden");
    }

    loadMatches();
}

/* ================= LOAD MATCHES ================= */
function loadMatches(){
    db.collection("matches").onSnapshot(snapshot=>{
        matches = [];
        snapshot.forEach(doc=>{
            matches.push({...doc.data(), id:doc.id});
        });
        render();
    });
}

/* ================= RENDER ================= */
function render(){
    document.getElementById("matchList").innerHTML = matches.map(m=>`

    <div class="card">
        <h4>${m.league}</h4>
        <h3>${m.home} vs ${m.away}</h3>
        <p>Price: ${m.price} GHS</p>
        <p>Score: ${m.score}</p>
    </div>

    `).join("");
}

/* ================= ADMIN: ADD MATCH ================= */
function addMatch(){

    db.collection("matches").add({
        home: document.getElementById("home").value,
        away: document.getElementById("away").value,
        league: document.getElementById("league").value,
        score: document.getElementById("score").value,
        price: document.getElementById("price").value
    });

    alert("Match Added!");
}

/* ================= ADMIN PANEL ================= */
function showAdmin(){
    if(isAdmin){
        document.getElementById("adminPanel").classList.toggle("hidden");
    } else {
        alert("Not Admin");
    }
}

/* ================= LOGOUT ================= */
function logout(){
    auth.signOut();
    location.reload();
}

</script>

</body>
</html>
