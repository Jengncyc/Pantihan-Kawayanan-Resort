
  function expandImage(image) {
    var overlay = document.getElementById("overlay");
    var expandedImage = document.getElementById("expandedImage");
  
    overlay.style.display = "block";
    expandedImage.src = image.src;
    document.body.classList.add("expanded");
  }
  
  function shrinkImage() {
    var overlay = document.getElementById("overlay");
  
    overlay.style.display = "none";
    document.body.classList.remove("expanded");
  }