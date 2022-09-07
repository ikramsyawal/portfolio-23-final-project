function myFunction() {
    var x = document.getElementById("top-nav");
    if (x.className === "last") {
      x.className += " responsive";
    } else {
      x.className = "last";
    }
  }

var typed = new Typed(".auto-type", {
    strings: ['front end developer', 'python developer', '3d artist'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})