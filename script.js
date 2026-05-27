function openApp(id){
  document.querySelectorAll(".page").forEach(p=>{
    p.classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");
}

/* LAUNCH GAME */
function launch(name,url){
  document.getElementById("screen").style.display="none";
  document.getElementById("appView").style.display="block";

  document.getElementById("title").innerText=name;
  document.getElementById("frame").src=url;
}

/* BACK */
function back(){
  document.getElementById("screen").style.display="block";
  document.getElementById("appView").style.display="none";
}

/* SEARCH */
function search(){
  let v=document.getElementById("search").value.toLowerCase();

  document.querySelectorAll(".tile,.card").forEach(el=>{
    el.style.display = el.innerText.toLowerCase().includes(v)
      ? "flex"
      : "none";
  });
}
