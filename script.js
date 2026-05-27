function openGame(name, url) {
  document.getElementById("gameView").style.display = "block";
  document.querySelectorAll("header, .hero, h2, .grid, .row")
    .forEach(e => e.style.display = "none");

  document.getElementById("gameTitle").innerText = name;
  document.getElementById("frame").src = url;
}

function back() {
  document.getElementById("gameView").style.display = "none";

  document.querySelectorAll("header, .hero, h2, .grid, .row")
    .forEach(e => e.style.display = "block");
}

/* SEARCH */
function searchGames() {
  let val = document.getElementById("search").value.toLowerCase();

  document.querySelectorAll(".tile").forEach(tile => {
    tile.style.display =
      tile.innerText.toLowerCase().includes(val)
        ? "block"
        : "none";
  });
}
