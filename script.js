var bar=document.querySelector('.nav-links');
var clas=document.querySelector('.menu i');
clas.addEventListener('click',response);
function response(){
   clas.classList.toggle('fa-times');
    bar.classList.toggle('toggle');
}
var carousel=document.querySelectorAll('.car .card');
var num=0;
var n=2;
function next(){
num++;
if(num>=carousel.length){
num=0;
carousel[num].style.zIndex=n++;
}
else{
carousel[num].style.zIndex=n++;

}
            
};
function prev(){
num--;
if(num<0){
num=carousel.length-1;
carousel[num].style.zIndex=n++;
    }
    else{
        carousel[num].style.zIndex=n++;
    }

};
let view2=document.querySelectorAll('#view');
view2.forEach(function(product){
    product.onclick = function(){
       
            if(product.innerText=='view more'){
                product.innerText='view less';
            }
        else{
            product.innerText='view more';
        }
    };
  });