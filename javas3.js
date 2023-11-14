let btntoggle = document.getElementById("btntoggle");

btntoggle.onclick = function click() {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "main2.css") {
    theme.href = "dark-theme2.css";
  }else{
    theme.href = "main2.css";
  }
}