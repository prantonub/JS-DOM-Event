//option 1 Direct function call from HTML element

// <button onclick="makeOrange()">Make Orange</button> 
 function makeOrange(){
     document.body.style.backgroundColor = 'Orange';
 }

 //option 2: Using `onclick` property with a named function

 //<button id="make-green">Make Green</button>
 const makeGreenButton = document.getElementById('make-green');
 makeGreenButton.onclick = makeGreen;

 function makeGreen(){
    document.body.style.backgroundColor = 'Green';
 } 

//option 3: Using `onclick` property with an anonymous function expression

//<button id="make-purple">Make Purple</button>
const makePurpleButton = document.getElementById('make-perple');
makePurpleButton.onclick = function makePurple(){
 document.body.style.backgroundColor = 'Purple';
}