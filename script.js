document.getElementById("leftBtn").addEventListener("click",()=>{
    const slider = document.getElementsByClassName("reviewBoxCont");
    for (let i = 0 ; i < slider.length; i++){
        let string = slider[i].getAttribute("style");
        let number = Number(string.split('(')[1].split('%')[0]);
        if (number < 0){
            number+=100;
            slider[i].setAttribute("style",`transform: translateX(${number}%);`);
        }
    }
})

document.getElementById("rightBtn").addEventListener("click",()=>{
    const slider = document.getElementsByClassName("reviewBoxCont");
    for (let i = 0 ; i < slider.length; i++){
        let string = slider[i].getAttribute("style");
        let number = Number(string.split('(')[1].split('%')[0]);
        if (number > -500){
            number-=100;
            slider[i].setAttribute("style",`transform: translateX(${number}%);`);
        }
    }
})

const fBtns = document.getElementsByClassName("fBtns");
const faqText = document.getElementsByClassName("faqText");
const fBtnsImg = document.querySelectorAll(".fBtns img");
console.log(fBtnsImg);

for(let i = 0; i < fBtns.length;i++){
    fBtns[i].addEventListener("click",()=>{
      faqText[i].classList.toggle("show");

      const currentSRC = fBtnsImg[i].getAttribute("src");

      if(currentSRC.includes("plus.svg")){
        fBtnsImg[i].setAttribute("alt", "-Btn")
        fBtnsImg[i].setAttribute("src", "/assets/icons/minus.svg");
      } else{
        fBtnsImg[i].setAttribute("alt", "+Btn")
        fBtnsImg[i].setAttribute("src", "/assets/icons/plus.svg");
      }
    })
}