<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ScoreX VIP PRO FIXED</title>

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
}

.card{
    background:rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.1);
    padding:15px;
    margin:10px 0;
    border-radius:15px;
}

.btn{
    width:100%;
    padding:12px;
    border:none;
    border-radius:10px;
    background:#27ae60;
    color:white;
    font-weight:bold;
    cursor:pointer;
}

.lock{
    text-align:center;
    color:#aaa;
    margin-top:10px;
}

input{
    width:100%;
    padding:10px;
    margin:5px 0;
    border-radius:8px;
    border:none;
}

.adminBox{
    background:#111a2d;
    padding:15px;
    border-radius:15px;
    margin-top:20px;
}

.hidden{display:none}
</style>
</head>

<body>

<div class="header">ScoreX VIP PRO 🔥</div>

<div class="container">

<div id="games"></div>

<div class="adminBox hidden" id="adminBox">
    <h3>ADMIN PANEL</h3>

    <input id="home" placeholder="Home">
    <input id="away" placeholder="Away">
    <input id="league" placeholder="League">
    <input id="score" placeholder="Score">
    <input id="price" placeholder="Price (GHS)">

    <button class="btn" onclick="addMatch()">Add Match</button>
</div>

</div>

<script>

/* ================= PAYSTACK ================= */
const PAYSTACK_KEY = "pk_live_YOUR_KEY_HERE";

/* ================= DATA ================= */
let matches = [];
let unlocked = {};

/* ================= LOAD STORAGE ================= */
if(localStorage.getItem("matches")){
    matches = JSON.parse(localStorage.getItem("matches"));
}

if(localStorage.getItem("unlocked")){
    unlocked = JSON.parse(localStorage.getItem("unlocked"));
}

/* ================= RENDER ================= */
function render(){

    let html = "";

    for(let i=0;i<matches.length;i++){

        let m = matches[i];

        html += `
        <div class="card">
            <div><b>${m.league}</b></div>
            <h3>${m.home} vs ${m.away}</h3>
            <div>Price: ${m.price} GHS</div>

            ${
                unlocked[i]
                ? `<h3 style="color:#00ff88">Score: ${m.score}</h3>`
                : `<div class="lock">🔒 Locked</div>
                   <button class="btn" onclick="pay(${i})">Unlock</button>`
            }

        </div>
        `;
    }

    document.getElementById("games").innerHTML = html;
}

/* ================= PAYSTACK ================= */
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
            alert("Unlocked!");
            render();
        }
    });

    handler.openIframe();
}

/* ================= ADMIN PASSWORD ================= */
function openAdmin(){
    let pass = prompt("Enter admin password:");
    if(pass === "admin123"){
        document.getElementById("adminBox").classList.remove("hidden");
    } else {
        alert("Wrong password");
    }
}

/* ================= ADD MATCH ================= */
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

/* ================= INIT ================= */
render();

/* make admin accessible */
document.addEventListener("keydown", function(e){
    if(e.key === "A"){
        openAdmin();
    }
});

</script>

</body>
</html>
