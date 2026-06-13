<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Daily Prediction Hub</title>

<style>
body{
    margin:0;
    font-family:Arial;
    background:#0b1020;
    color:white;
}

.header{
    text-align:center;
    padding:18px;
    font-size:22px;
    font-weight:bold;
}

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

.active{color:#00ff88}

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

.tag{color:#00ff88;font-size:13px}
.lock{color:#ffcc00}

input{
    width:100%;
    padding:10px;
    margin:5px 0;
    border:none;
    border-radius:8px;
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

/* simple highlight */
.small{
    font-size:13px;
    color:#aaa;
}
</style>
</head>

<body>

<div class="header">⚽ Daily Prediction Hub</div>

<!-- NAV -->
<div class="nav">
    <div onclick="show('home')" class="active" id="n1">Home</div>
    <div onclick="show('free')" id="n2">Free Games</div>
    <div onclick="show('vip')" id="n3">VIP</div>
    <div onclick="show('results')" id="n4">Results</div>
</div>

<div class="container">

<!-- HOME -->
<div id="home">
    <div class="card">
        <h3>Welcome 👋</h3>
        <p>Daily football correct score predictions platform.</p>
        <p class="tag">✔ Updated every day • Trusted system</p>
    </div>

    <div class="card">
        <h3>Why users trust us</h3>
        <p class="small">✔ Daily free games</p>
        <p class="small">✔ VIP premium predictions</p>
        <p class="small">✔ Verified past results</p>
    </div>
</div>

<!-- FREE (ONLY 2 GAMES) -->
<div id="free" class="hidden">
    <div class="card">
        <h3>Dock Sud vs Real Pilar</h3>
        <div class="tag">Prediction: 1 - 1</div>
    </div>

    <div class="card">
        <h3>Merlo vs Liniers</h3>
        <div class="tag">Prediction: 2 - 0</div>
    </div>
</div>

<!-- VIP -->
<div id="vip" class="hidden">

    <div class="card">
        <h3>VIP Game 1</h3>
        <div class="lock">🔒 Locked Prediction</div>
    </div>

    <div class="card">
        <h3>VIP Game 2</h3>
        <div class="lock">🔒 Locked Prediction</div>
    </div>

    <div class="card">
        <h3>VIP Game 3</h3>
        <div class="lock">🔒 Locked Prediction</div>
    </div>

    <button class="btn">Unlock VIP (Add Paystack later)</button>
</div>

<!-- RESULTS -->
<div id="results" class="hidden">

    <div class="card">
        <h3>Yesterday Result</h3>
        <p>Dock Sud vs Real Pilar</p>
        <div class="tag">Result: 1 - 1 ✔ WON</div>
    </div>

    <div class="card">
        <h3>Yesterday Result</h3>
        <p>Merlo vs Liniers</p>
        <div class="tag">Result: 2 - 0 ✔ WON</div>
    </div>

</div>

<!-- ADMIN -->
<div id="admin" class="card hidden">
    <h3>ADMIN PANEL</h3>

    <input id="section" placeholder="free / vip / results">
    <input id="title" placeholder="Match title">
    <input id="desc" placeholder="Prediction or result">

    <button class="btn" onclick="add()">Add Content</button>
</div>

</div>

<script>

/* NAV SYSTEM */
function show(page){

    ["home","free","vip","results"].forEach(p=>{
        document.getElementById(p).classList.add("hidden");
    });

    document.getElementById(page).classList.remove("hidden");

    document.querySelectorAll(".nav div").forEach(x=>{
        x.classList.remove("active");
    });

    event.target.classList.add("active");
}

/* ADMIN OPEN */
document.addEventListener("keydown",e=>{
    if(e.key.toLowerCase()==="a"){
        document.getElementById("admin").classList.toggle("hidden");
    }
});

/* SIMPLE ADD (LOCAL ONLY) */
function add(){

    let sec = document.getElementById("section").value;
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;

    let box = document.getElementById(sec);

    if(!box){
        alert("Invalid section!");
        return;
    }

    box.innerHTML += `
        <div class="card">
            <h3>${title}</h3>
            <div class="tag">${desc}</div>
        </div>
    `;

    alert("Added!");
}

</script>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Prediction Hub FIXED</title>

<style>
body{
    margin:0;
    font-family:Arial;
    background:#0b1020;
    color:white;
}

.header{
    text-align:center;
    padding:18px;
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

.active{color:#00ff88}

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
}

.tag{color:#00ff88}

.hidden{display:none}
</style>
</head>

<body>

<div class="header">⚽ Prediction Hub</div>

<div class="nav">
    <div onclick="show('home', this)" class="active">Home</div>
    <div onclick="show('free', this)">Free</div>
    <div onclick="show('vip', this)">VIP</div>
    <div onclick="show('results', this)">Results</div>
</div>

<div class="container">

<!-- HOME -->
<div id="home">
    <div class="card">
        <h3>Welcome 👋</h3>
        <p>Site is working correctly now.</p>
    </div>
</div>

<!-- FREE -->
<div id="free" class="hidden">
    <div class="card">
        <h3>Dock Sud vs Real Pilar</h3>
        <div class="tag">1 - 1</div>
    </div>

    <div class="card">
        <h3>Merlo vs Liniers</h3>
        <div class="tag">2 - 0</div>
    </div>
</div>

<!-- VIP -->
<div id="vip" class="hidden">
    <div class="card">
        <h3>VIP Match 1</h3>
        <div class="tag">🔒 Locked</div>
    </div>
</div>

<!-- RESULTS -->
<div id="results" class="hidden">
    <div class="card">
        <h3>Yesterday</h3>
        <div class="tag">All correct ✔</div>
    </div>
</div>

</div>

<script>

/* SAFE NAVIGATION */
function show(page, el){

    document.querySelectorAll(".container > div").forEach(d=>{
        d.classList.add("hidden");
    });

    document.getElementById(page).classList.remove("hidden");

    document.querySelectorAll(".nav div").forEach(n=>{
        n.classList.remove("active");
    });

    el.classList.add("active");
}

/* SHOW HOME BY DEFAULT */
document.getElementById("home").classList.remove("hidden");

</script>

</body>
</html>
