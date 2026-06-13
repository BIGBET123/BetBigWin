
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SPORTY FIXED GAMES</title>

<script src="https://js.paystack.co/v1/inline.js"></script>

<style>
:root {
    --bg: linear-gradient(135deg, #0f172a, #020617);
    --glass: rgba(255,255,255,0.05);
    --border: rgba(255,255,255,0.1);
    --gold: #ffcc00;
    --green: #00ff88;
    --text: #ffffff;
    --dim: #94a3b8;
}

body {
    margin:0;
    font-family: Arial;
    background: var(--bg);
    color: var(--text);
    display:flex;
    justify-content:center;
}

.container {
    width:92%;
    max-width:500px;
    padding-bottom:120px;
}

.header {
    text-align:center;
    padding:40px 0 10px;
}

.logo {
    font-size:2.3rem;
    font-weight:900;
}

.logo span { color: var(--gold); }

.section-title {
    text-align:center;
    color: var(--gold);
    font-weight:800;
    margin:20px 0;
}

.card {
    background: var(--glass);
    border:1px solid var(--border);
    padding:20px;
    border-radius:20px;
    margin-bottom:15px;
    backdrop-filter: blur(10px);
}

.league {
    text-align:center;
    font-size:12px;
    color: var(--green);
    margin-bottom:8px;
}

.teams {
    text-align:center;
    font-size:18px;
    font-weight:800;
    margin-bottom:15px;
}

.btn {
    width:100%;
    padding:15px;
    border:none;
    border-radius:12px;
    background: linear-gradient(45deg,#2ecc71,#27ae60);
    color:white;
    font-weight:800;
    cursor:pointer;
}

.locked {
    text-align:center;
    padding:10px;
    background: rgba(0,0,0,0.3);
    border-radius:12px;
    font-size:14px;
    color: var(--dim);
}

.result-box {
    display:none;
    text-align:center;
    margin-top:10px;
    padding:10px;
    border-radius:12px;
    background: rgba(0,255,136,0.1);
    border:1px solid var(--green);
}

.bottom-nav {
    position:fixed;
    bottom:20px;
    width:90%;
    max-width:420px;
    display:flex;
    justify-content:space-around;
    background: rgba(0,0,0,0.6);
    padding:12px;
    border-radius:25px;
    border:1px solid var(--border);
}

.nav {
    color:var(--dim);
    font-size:12px;
    text-align:center;
    cursor:pointer;
}

.nav.active {
    color: var(--green);
}
.hidden { display:none; }
</style>
</head>

<body>

<div class="container">

<div class="header">
    <div class="logo">Score <span>X</span></div>
</div>

<div id="home">

    <div class="section-title">Today's VIP Games</div>

    <div id="games"></div>

</div>

<div id="history" class="hidden">

    <div class="section-title">Verified Results</div>

    <div class="card">
        <div class="league">PRIMERA C</div>
        <div class="teams">Team A vs Team B</div>
        <div class="result-box" style="display:block;">
            WON 2 - 1
        </div>
    </div>

</div>

</div>

<div class="bottom-nav">
    <div class="nav active" onclick="show('home')">🏠<br>Games</div>
    <div class="nav" onclick="show('history')">🏆<br>History</div>
    <div class="nav" onclick="payInfo()">💳<br>Payment</div>
</div>

<script>

const PAYSTACK_PUBLIC_KEY = "pk_live_fab8f565edadd3f8bba5dbfac56d969f21ee313c";

const games = [
    { league:"PRIMERA B", home:"Dock Sud", away:"Real Pilar", time:"18:30", score:"1 - 1" },
    { league:"PRIMERA B", home:"Dep. Merlo", away:"Liniers", time:"22:00", score:"2 - 0" }
];

// store unlocked matches
let unlocked = {};

function render() {
    document.getElementById("games").innerHTML = games.map((g, i)=>`

    <div class="card">
        <div class="league">${g.league} • ${g.time}</div>
        <div class="teams">${g.home} vs ${g.away}</div>

        ${
            unlocked[i]
            ? `<div class="result-box" style="display:block;">Correct Score: ${g.score}</div>`
            : `<div class="locked">🔒 Locked - Pay 100 GHS to unlock</div>
               <button class="btn" onclick="pay(${i})">Unlock Score</button>`
        }

    </div>

    `).join("");
}

function pay(index) {

    let handler = PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email: "user@vip.com",
        amount: 10000,
        currency: "GHS",

        callback: function(response) {
            unlocked[index] = true;
            alert("Payment Successful! Score unlocked.");
            render();
        }
    });

    handler.openIframe();
}

function show(page){
    document.getElementById("home").classList.toggle("hidden", page!=="home");
    document.getElementById("history").classList.toggle("hidden", page!=="history");

    document.querySelectorAll(".nav").forEach(n=>n.classList.remove("active"));
    event.target.classList.add("active");
}

function payInfo(){
    alert("Pay 100 GHS to unlock correct score predictions.");
}

window.onload = render;

</script>

</body>
</html>
