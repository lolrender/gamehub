let fav = JSON.parse(localStorage.getItem("fav")) || [];
let recent = JSON.parse(localStorage.getItem("recent")) || {};
let playTime = JSON.parse(localStorage.getItem("time")) || {};

function play(name,url){
  document.getElementById("game").style.display="block";

  document.querySelectorAll("header,.hero,h2,.row,.grid")
    .forEach(e=>e.style.display="none");

  document.getElementById("frame").src=url;
  document.getElementById("title").innerText=name;

  recent[name] = (recent[name]||0)+1;
  localStorage.setItem("recent",JSON.stringify(recent));

  playTime[name] = (playTime[name]||0)+1;
  localStorage.setItem("time",JSON.stringify(playTime));

  updateRecommended();
}

function back(){
  document.getElementById("game").style.display="none";

  document.querySelectorAll("header,.hero,h2,.row,.grid")
    .forEach(e=>e.style.display="block");
}

/* SEARCH */
function search(){
  let v=document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".card").forEach(c=>{
    c.style.display=c.innerText.toLowerCase().includes(v)?"flex":"none";
  });
}

/* FAVORITES */
function addFav(name){
  if(!fav.includes(name)){
    fav.push(name);
    localStorage.setItem("fav",JSON.stringify(fav));
  }
}

/* PANEL SYSTEM */
function openPanel(type){
  document.getElementById("panel").style.display="block";

  let data = [];

  if(type==="favorites") data=fav;
  if(type==="recent") data=Object.keys(recent);
  if(type==="stats") data=Object.entries(playTime).map(x=>`${x[0]} - ${x[1]} plays`);

  document.getElementById("panelTitle").innerText=type.toUpperCase();
  document.getElementById("panelContent").innerHTML=
    data.map(x=>`<p>${x}</p>`).join("");
}

function closePanel(){
  document.getElementById("panel").style.display="none";
}

/* SIMPLE RECOMMENDER */
function updateRecommended(){
  let box=document.getElementById("recommended");
  if(!box) return;

  let sorted = Object.entries(playTime)
    .sort((a,b)=>b[1]-a[1])
    .slice(0,3);

  box.innerHTML = sorted.map(x=>`
    <div class="card">${x[0]}</div>
  `).join("");
}

updateRecommended();
