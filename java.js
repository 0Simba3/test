  function showMore() {
    var dots = document.getElementById("dot");
    var moreText = document.getElementById("moree");
    var btnText = document.getElementById("Btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Показать";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Скрытть";
      moreText.style.display = "inline";
    }
  }