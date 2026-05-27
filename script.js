function play(name, url) {
  document.getElementById("gameView").style.display = "block";

  document.querySelectorAll("header, .hero, .title, .row, .grid")
    .forEach(e => e.style.display = "none");

  document.getElementById("gameTitle").innerText = name;
  document.getElementById("frame").src = url;
}

function back() {
  document.getElementById("gameView").style.display = "none";

  document.querySelectorAll("header, .hero, .title, .row, .grid")
    .forEach(e => e.style.display = "block");
}

/* SEARCH */
function search() {
  let v = document.getElementById("search").value.toLowerCase();

  document.querySelectorAll(".miniCard, .gameCard").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(v)
      ? "block"
      : "none";
  });
}
