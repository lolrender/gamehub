function openGame(url){
  document.getElementById("frame").src = url;
}

function filterGames(){
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for(let c of cards){
    c.style.display = c.innerText.toLowerCase().includes(input)
      ? "flex"
      : "none";
  }
}
