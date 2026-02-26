window.addEventListener("scroll",function(){
    const nav = document.querySelector("nav");
    if(window.scrollY > 0){
        nav.classList.add("navContShadow");
    } else{
        nav.classList.remove("navContShadow");
    }
})

function DD(){
    const arrow = document.querySelector("#DD .DDarrow");
    const box = document.getElementById("DDBOX");

    box.classList.toggle("show");
    arrow.classList.toggle("rotate");
}

window.addEventListener("click", function (e) {
    const liDD = document.getElementById("liDD");
    const box = document.getElementById("DDBOX");
  
    if (!liDD.contains(e.target)) {
      box.classList.remove("show");
      document.querySelector("#DD .DDarrow").classList.remove("rotate");
    }
  });