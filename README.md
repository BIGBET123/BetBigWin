<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ScoreX VIP PRO</title>

<script src="https://js.paystack.co/v1/inline.js"></script>

<style>
body{
    margin:0;
    font-family:Arial;
    background:#0b1020;
    color:white;
}

.header{
    text-align:center;
    padding:20px;
    font-size:22px;
    font-weight:bold;
}

.container{
    width:92%;
    max-width:500px;
    margin:auto;
    padding-bottom:120px;
}

.card{
    background:rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.1);
    padding:15px;
    margin:10px 0;
    border-radius:15px;
    backdrop-filter: blur(10px);
}

.title{
    font-size:18px;
    font-weight:bold;
}

.small{
    color:#aaa;
    font-size:13px;
}

.btn{
    width:100%;
    padding:12px;
    border:none;
    border-radius:10px;
    background:linear-gradient(45deg,#2ecc71,#27ae60);
    color:white;
    font-weight:bold;
    cursor:pointer;
    margin-top:10px;
}

.lock{
    text-align:center;
    padding:10px;
    background:rgba(0,0,0,0.3);
    border-radius:10px;
    color:#aaa;
}

.admin{
    background:#111a2d;
    padding:15px;
    border-radius:15px;
    margin-top:20px;
}

input{
    width:100%;
    padding:10px;
    margin:5px 0;
    border-radius:8px;
    border:none;
}

.nav{
    position:fixed;
    bottom:15px;
    left:5%;
    width:90%;
    display:flex;
    justify-content:space-around;
    background:#111;
    padding:12px;
    border-radius:20px;
}

.nav div{
    cursor:pointer;
    color:#aaa;
}

.hidden{display:none}
</style>
</head>

<body>

<div class="header">ScoreX VIP PRO 🔥</div>

<div class="container">

<div id="games"></div>

<!-- ADMIN PANEL -->
<div id="adminPanel" class="admin hidden">
    <h3>ADMIN PANEL</h3>

    <input id="home" placeholder="Home team">
    <input id="away" placeholder="Away team">
    <input id="league" placeholder="League">
    <input id="score" placeholder="Correct score">
    <input id="price" placeholder="Price (GHS)">

    <button class="btn" onclick="addMatch()">Add Match</button>

    <button class="btn" onclick="clearAll()" style="background:red;margin-top:10px">
        Clear All Matches
    </button>
</div>

</div>

<!-- NAV -->
<div class="nav">
    <div onclick="toggleAdmin()">Admin</div>
    <div onclick="resetUnlocks()">Reset</div>
</div>

<script>

/* =======================
   CONFIG
======================= */
const PAYSTACK_KEY = "pk_live_YOUR_KEY_HERE";

/* =======================
   DATABASE (LOCAL)
======================= */
let matches = JSON.parse(localStorage.getItem("matches")) || [];

let unlocked = JSON.parse(localStorage.getItem("unlocked")) || {};

/* =======================
   RENDER
======================= */
function render(){

    let html = "";

    matches.forEach((m, i)=>{

        html += `
        <div class="card">

            <div class="small">${m.league}</div>
            <div class="title">${m.home} vs ${m.away}</div>
            <div class="small">Price: ${m.price} GHS</div>

            ${
                unlocked[i]
                ? `<div class="lock" style="color:#00ff88;font-weight:bold">Score: ${m.score}</div>`
                : `<div class="lock">🔒 Locked</div>
                   <button class="btn" onclick="pay(${i})">Unlock Score</button>`
            }

        </div>
        `;
    });

    document.getElementById("games").innerHTML = html;
}

/* =======================
   PAYSTACK
======================= */
function pay(index){

    let amount = matches[index].price * 100;

    let handler = PaystackPop.setup({
        key: PAYSTACK_KEY,
        email: "user@gmail.com",
        amount: amount,
        currency: "GHS",

        callback: function(){

            unlocked[index] = true;
            localStorage.setItem("unlocked", JSON.stringify(unlocked));

            alert("Payment successful! Score unlocked 🔥");
            render();
        }
    });

    handler.openIframe();
}

/* =======================
   ADMIN FUNCTIONS
======================= */
function addMatch(){

    let newMatch = {
        home: home.value,
        away: away.value,
        league: league.value,
        score: score.value,
        price: price.value
    };

    matches.push(newMatch);

    localStorage.setItem("matches", JSON.stringify(matches));

    alert("Match added!");

    render();
}

function clearAll(){
    if(confirm("Delete all matches?")){
        matches = [];
        unlocked = {};
        localStorage.clear();
        render();
    }
}

/* =======================
   ADMIN TOGGLE
======================= */
function toggleAdmin(){

    let pass = prompt("Enter admin password:");

    if(pass === "admin123"){
        document.getElementById("adminPanel").classList.toggle("hidden");
    } else {
        alert("Wrong password");
    }
}

/* =======================
   RESET UNLOCKS
======================= */
function resetUnlocks(){
    unlocked = {};
    localStorage.setItem("unlocked", JSON.stringify(unlocked));
    render();
}

/* INIT */
render();

</script>

</body>
</html>
