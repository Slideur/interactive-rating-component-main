let btn1 = document.querySelector(".rating1");
let btn2 = document.querySelector(".rating2");
let btn3 = document.querySelector(".rating3");
let btn4 = document.querySelector(".rating4");
let btn5 = document.querySelector(".rating5");
let submit = document.querySelector('.btn--modifSub');
let box = document.querySelector('.box--hidden');
let box2 = document.querySelector('.box--page2');
let span = document.querySelector('.number');
box2.style.display = "none";

  
  
  
  
  
  
  
  
  btn1.addEventListener('click', () => {
    btn1=true;
    
 });

 btn2.addEventListener('click', () => {
  btn2=true;
 
 })

 btn3.addEventListener('click', () => {
  btn3=true;
  
 })

 btn4.addEventListener('click', () => {
  btn4=true;
  
 })

 btn5.addEventListener('click', () => {
  btn5=true;
  
 })

 
  submit.addEventListener('click', () => {
    box2.style.display = "block";
    box.style.display = "none";
    if (btn1== true) {
      span.textContent = "1 ";
    } else if (btn2==true) {
      span.textContent = "2 ";
    } else if (btn3 ==true) {
      span.textContent = "3 ";
    } else if (btn4 == true) {
      span.textContent = "4 ";
     } else if(btn5==true){
          span.textContent = "5 ";
        }
      });

      


    
    
 




