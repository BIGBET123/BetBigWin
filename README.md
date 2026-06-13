<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ScoreX Football Predictions</title>

<style>
body{
    margin:0;
    font-family:Arial;
    background:#0b1020;
    color:white;
}

/* HEADER */
.header{
    text-align:center;
    padding:18px;
    font-size:22px;
    font-weight:bold;
}

/* NAV */
.nav{
    display:flex;
    justify-content:space-around;
    background:#111a2d;
    padding:12px;
    position:sticky;
    top:0;
}

.nav div{
    cursor:pointer;
    color:#aaa;
    font-weight:bold;
}

.active{
    color:#00ff88;
}

/* CONTENT */
.container{
    width:92%;
    max-width:500px;
    margin:auto;
    padding-bottom:80px;
}

.card{
    background:rgba(255,255,255,0.06);
    padding:15px;
    margin:10px 0;
    border-radius:15px;
    border:1px solid rgba(255,255,255,0.1);
}

.tag{
    color:#00ff88;
    font-size:13px;
}

.lock{
    color:#ffcc00;
}

/* TRUST BOX */
.trust{
    background:#111a2d;
    padding:15px;
    border-radius:15px;
    margin:10px 0;
}

.badge{
    display:inline-block;
    padding:5px 10px;
    background:#27ae60;
    border-radius:6px;
    font-size:12px;
    margin-top:5px;
}

/* BUTTON (fake VIP unlock placeholder) */
.btn{
    width:100%;
    padding:12px;
    background:#27ae60;
    border:none;
    border-radius:10px;
    color:white;
    font-weight:bold;
}
.hidden{display:none}
</style>
</head>

<body>

<div class="header">⚽ ScoreX Football Predictions</div>

<!-- NAV -->
<div class="nav">
    <div onclick="show('home')" class="active" id="n1">Home</div>
    <div onclick="show('free')" id="n2">Free Games</div>
    <div onclick="show('vip')" id="n3">VIP Premium</div>
    <div onclick="show('history')" id="n4">Results</div>
</div>

<div class="container">

<!-- HOME -->
<div id="home">

    <div class="card">
        <h3>🔥 Welcome to ScoreX</h3>
        <p>Daily football correct score predictions.</p>
        <div class="tag">✔ Trusted System • Updated Daily</div>
    </div>

    <div class="trust">
        <h3>📊 Why users trust us</h3>
        <div class="badge">80%+ accuracy claims</div><br>
        <div class="badge">Daily updates</div><br>
        <div class="badge">VIP insider tips</div>
    </div>

</div>

<!-- FREE -->
<div id="free" class="hidden">

    <div class="card">
        <h3>Free Game 1</h3>
        <p>Dock Sud vs Real Pilar</p>
        <div class="tag">Prediction: 1 - 1</div>
    </div>

    <div class="card">
        <h3>Free Game 2</h3>
        <p>Merlo vs Liniers</p>
        <div class="tag">Prediction: 2 - 0</div>
    </div>

</div>

<!-- VIP -->
<div id="vip" class="hidden">

    <div class="card">
        <h3>VIP Game 1</h3>
        <p>Team A vs Team B</p>
        <div class="lock">🔒 Locked Prediction</div>
    </div>

    <div class="card">
        <h3>VIP Game 2</h3>
        <p>Team C vs Team D</p>
        <div class="lock">🔒 Unlock with VIP access</div>
    </div>

    <button class="btn">Unlock VIP (Paystack later)</button>

</div>

<!-- HISTORY -->
<div id="history" class="hidden">

    <div class="card">
        <h3>Yesterday Result</h3>
        <p>Team X vs Team Y</p>
        <div class="tag">Result: 2 - 1 ✔ WON</div>
    </div>

    <div class="card">
        <h3>Yesterday Result</h3>
        <p>Team A vs Team B</p>
        <div class="tag">Result: 1 - 1 ✔ WON</div>
    </div>

</div>

</div>

<script>

function show(tab){

    let pages = ["home","free","vip","history"];

    pages.forEach(p=>{
        document.getElementById(p).classList.add("hidden");
    });

    document.getElementById(tab).classList.remove("hidden");

    document.querySelectorAll(".nav div").forEach(x=>{
        x.classList.remove("active");
    });

    event.target.classList.add("active");
}

</script>

</body>
</html>
