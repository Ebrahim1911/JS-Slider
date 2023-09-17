// Declaring
const sliderImages=[...document.querySelectorAll(".slider-container img")];
const slidesCount=sliderImages.length;
let currentSlide=1;
const slideNumberElement=document.getElementById("slider-number");
const prevButton=document.getElementById("prev");
const nextButton=document.getElementById("next");
// Handling Click on previous and Next Button
prevButton.addEventListener("click",prevSlide);
nextButton.addEventListener("click",nextSlide);
//Create The Main Ul Element
const paginationElement=document.createElement("ul");
paginationElement.id="pagination-ul";
for(let i=1;i<=slidesCount;i++){
    const paginationItem=document.createElement("li");
    paginationItem.dataset.index=i;
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}
document.getElementById('indicators').appendChild(paginationElement)
const paginationCreatedUl=document.getElementById("pagination-ul");
const paginationBullets=[...document.querySelectorAll("#pagination-ul li")];
for(let i=0;i<paginationBullets.length;i++){
    paginationBullets[i].addEventListener("click",function(){
        currentSlide=parseInt(this.getAttribute("data-index"))
        theChecker();
    });
}
theChecker();
//Funcations
//prevSlideFunction
function prevSlide(){
    if(prevButton.classList.contains("disabled")){
        return false;
    }else{
        currentSlide--;
        theChecker();
    }
}
//nextSlideFunction
function nextSlide(){
    if(nextButton.classList.contains("disabled")){
        return false;
    }else{
        currentSlide++;
        theChecker();
    }
}
//Checker Funcation
function theChecker(){
    slideNumberElement.textContent=`Slide # ${currentSlide} of ${slidesCount}`;
    removeAllActives()
    sliderImages[currentSlide - 1].classList.add("active");
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");
    if(currentSlide==1){
        prevButton.classList.add("disabled");
    }else{
        prevButton.classList.remove("disabled"); 
    }
    if(currentSlide==slidesCount){
        nextButton.classList.add("disabled");
    }else{
        nextButton.classList.remove("disabled"); 
    }
}
//Remove All Actives Classes
function removeAllActives(){
    sliderImages.forEach((img)=>img.classList.remove("active")) 
    paginationBullets.forEach((bullet)=>bullet.classList.remove("active")) 
}

