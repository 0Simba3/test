function show() {
    var dots = document.getElementById("dos");
    var moreText = document.getElementById("moe");
    var btnText = document.getElementById("myn");
    
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Читать больше";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Читать меньше";
      moreText.style.display = "inline";
    }
  }