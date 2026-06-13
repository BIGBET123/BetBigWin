<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ScoreX VIP</title>

<style>
body{
    margin:0;
    font-family:Arial;
    background:#0b1020;
    color:white;
}

.header{
    text-align:center;
    padding:15px;
    font-size:22px;
    font-weight:bold;
}

.nav{
    display:flex;
    justify-content:space-around;
    background:#111a2d;
    padding:12px;
}

.nav div{
    cursor:pointer;
    color:#aaa;
    font-weight:bold;
}

.active{
    color:#00ff88;
}

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

.btn{
    width:100%;
    padding:12px;
    background:#27ae60;
    border:none;
    border-radius:10px;
    color:white;
    font-weight:bold;
    cursor:pointer;
}

.hidden{display:none}

.tag{
    color:#00ff88;
    font-size:13px;
}
</style>
</head>

<body>

<div class="header">ScoreX VIP SYSTEM 🔥</div>

<!-- NAV -->
<div class="nav">
    <div onclick="showTab('home')" class="active" id="nav-home">Home</div>
    <div onclick="showTab('free')" id="nav-free">Free Games</div>
    <div onclick="showTab('vip')" id="nav-vip">VIP Premium</div>
</div>

<div class="container">

<!-- HOME -->
<div id="home">
    <div class="card">
        <h3>Welcome 👋</h3>
        <p>This is ScoreX VIP system for correct score predictions.</p>
        <p class="tag">🔥 Daily updated games</p>
    </div>
</div>

<!-- FREE GAMES (ONLY 2) -->
<div id="free" class="hidden">

    <div class="card">
        <h3>FREE GAME 1</h3>
        <p>Dock Sud vs Real Pilar</p>
        <p class="tag">Prediction: 1 - 1</p>
    </div>

    <div class="card">
        <h3>FREE GAME 2</h3>
        <p>Merlo vs Liniers</p>
        <p class="tag">Prediction: 2 - 0</p>
    </div>

</div>

<!-- VIP PREMIUM -->
<div id="vip" class="hidden">

    <div class="card">
        <h3>VIP GAME 1</h3>
        <p>Boysu SP vs Addo FC</p>
        <p class="tag">🔒 Locked Prediction</p>
    </div>

    <div class="card">
        <h3>VIP GAME 2</h3>
        <p>Ghana Boysvs Alfredf GC</p>
        <p class="tag">🔒 Locked Prediction</p>
    </div>

    <div class="card">
        <h3>VIP GAME 3</h3>
        <p>Paya Ghvs Ghana FC</p>
        <p class="tag">🔒 Locked Prediction</p>
    </div>

</div>

</div>

<script>

/* ================= TAB SYSTEM ================= */
function showTab(tab){

    document.getElementById("home").classList.add("hidden");
    document.getElementById("free").classList.add("hidden");
    document.getElementById("vip").classList.add("hidden");

    document.getElementById(tab).classList.remove("hidden");

    document.getElementById("nav-home").classList.remove("active");
    document.getElementById("nav-free").classList.remove("active");
    document.getElementById("nav-vip").classList.remove("active");

    document.getElementById("nav-"+tab).classList.add("active");
}

</script><div onclick="alert('Working!')" id="nav-free">Free Games</div>

</body><div onclick="alert('Working!')" id="nav-free">Free Games</div>
</html><div onclick="alert('Working!')" id="nav-free">Free Games</div>
