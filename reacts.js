  // First Like Button   
  var btnvar1 = document.getElementById('btnh1');
  var btnvar2 = document.getElementById('btnh2');
  var btnvar3 = document.getElementById('btnh3');
  var btnvar4 = document.getElementById('btnh4');
  var btnvar5 = document.getElementById('btnh5');
  


function Toggle1(){
       if (btnvar1.style.color =="blue") {
          btnvar1.style.color = "grey"
         
          console.log('unreacted');
       }
       else{
           btnvar1.style.color = "blue"
           
           console.log('reacted');
       }
}
function Toggle2(){
       if (btnvar2.style.color =="red") {
          btnvar2.style.color = "grey"
          console.log('unreacted')
       }
       else{
           btnvar2.style.color = "red"
           console.log('reacted');
           
       }
}
function Toggle3(){
       if (btnvar3.style.color =="yellow") {
          btnvar3.style.color = "grey"
          console.log('unreacted')
       }
       else{
           btnvar3.style.color = "yellow"
           
           console.log('reacted');
       }
}
function Toggle4(){
       if (btnvar4.style.color =="yellow") {
          btnvar4.style.color = "grey"
          console.log('unreacted');
       }
       else{
           btnvar4.style.color = "yellow"
           console.log('reacted');
           
       }
}
function Toggle5(){
       if (btnvar5.style.color =="red") {
          btnvar5.style.color = "grey"
          console.log('unreacted');

       }
       else{
           btnvar5.style.color = "red"
           console.log('reacted');
           
       }
}