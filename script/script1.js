const caraselSlider=document.querySelector(".carasel-slider");
const caraselImage=document.querySelectorAll(".carasel-slider img");

const previousBtn=document.querySelector("#previous");
const nextButton=document.querySelector("#next");

let imageLength=8;
let counter=0;
const size=caraselImage[0].clientWidth;

previousBtn.addEventListener("click",()=>{
	if(counter>0){
	counter--;
	caraselSlider.style.transition="transform 0.8s ease-in-out";
    caraselSlider.style.transform="translateX("+(-size*counter)+"px)";
   }
})
nextButton.addEventListener("click",()=>{
    if(counter<imageLength){
    counter++;
    caraselSlider.style.transition="transform 0.8s ease-in-out";
    caraselSlider.style.transform="translateX("+(-size*counter)+"px)";
   }
})

caraselSlider.addEventListener("transitionend",()=>{
    if(caraselImage[counter].id==="lastclone"){
    caraselSlider.style.transition="none";
    counter=caraselImage.length-2;
    caraselSlider.style.transform="translateX("+(-size*counter)+"px)";
    }
    else if(caraselImage[counter].id==="firstclone"){
    caraselSlider.style.transition="none";
    counter=caraselImage.length-counter;
    caraselSlider.style.transform="translateX("+(-size*counter)+"px)";
    }
});