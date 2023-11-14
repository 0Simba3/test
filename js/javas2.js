let btntoggle = document.getElementById("btntoggle");

btntoggle.onclick = function click() {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "main.css") {
    theme.href = "dark-theme.css";
  }else{
    theme.href = "main.css";
  }
}