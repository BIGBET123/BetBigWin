<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VIP SCOREX BUSINESS</title>

<script src="https://js.paystack.co/v1/inline.js"></script>

<!-- Firebase -->
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"></script>

<style>
body{margin:0;font-family:Arial;background:#0b1020;color:white}
.container{width:92%;max-width:500px;margin:auto}
.card{background:#121a2c;padding:15px;margin:10px;border-radius:15px}
.btn{width:100%;padding:12px;background:#27ae60;border:none;color:white;border-radius:10px}
input{width:100%;padding:10px;margin:5px 0;border-radius:8px;border:none}
.hidden{display:none}
.admin{background:#111a2d;padding:15px;border-radius:15px}
</style>
</head>

<body>

<div class="container">

<h2 style="text-align:center">VIP BUSINESS SYSTEM</h2>

<!-- LOGIN -->
<div id="loginBox">
    <input id="email" placeholder="Email">
    <input id="password" type="password" placeholder="Password">
    <button class="btn" onclick="login()">Login</button>
</div>

<!-- APP -->
<div id="app" class="hidden">

    <div id="matches"></div>

    <!-- ADMIN -->
    <div id="adminPanel" class="admin hidden">
        <h3>ADMIN PANEL</h3>

        <input id="home" placeholder="Home">
        <input id="away" placeholder="Away">
        <input id="league" placeholder="League">
        <input id="score" placeholder="Score">
        <input id="price" placeholder="Price">

        <button class="btn" onclick="addMatch()">Add Match</button>
    </div>

</div>

</div>

<script>

/* ================= FIREBASE ================= */
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

/* ================= STATE ================= */
let matches = [];
let unlocked = {};

/* ================= LOGIN ================= */
function login(){
    let e = email.value;
    let p = password.value;

    auth.signInWithEmailAndPassword(e,p)
    .catch(()=>auth.createUserWithEmailAndPassword(e,p));
}

/* ================= AUTH ================= */
auth.onAuthStateChanged(user=>{
    if(user){
        loginBox.classList.add("hidden");
        app.classList.remove("hidden");

        if(user.email === "admin@vip.com"){
            adminPanel.classList.remove("hidden");
        }

        loadMatches();
    }
});

/* ================= LOAD MATCHES ================= */
function loadMatches(){
    db.collection("matches").onSnapshot(snap=>{
        matches = [];
        snap.forEach(d=>{
            matches.push({...d.data(), id:d.id});
        });
        render();
    });
}

/* ================= RENDER ================= */
function render(){

    matchesDiv = document.getElementById("matches");

    matchesDiv.innerHTML = matches.map(m=>`

    <div class="card">
        <h3>${m.home} vs ${m.away}</h3>
        <p>${m.league}</p>
        <p>Price: ${m.price} GHS</p>
        <p>Score: ${m.score}</p>
    </div>

    `).join("");
}

/* ================= ADD MATCH ================= */
function addMatch(){

    db.collection("matches").add({
        home: home.value,
        away: away.value,
        league: league.value,
        score: score.value,
        price: price.value
    });

    alert("Match added");
}

</script>

</body>
</html>
