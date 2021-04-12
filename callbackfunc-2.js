// CALLBACK 
function sayFirst(){
  setTimeout(() => {
    console.log("1-First Bye...");
    callback();
  }, 2000);
    
    
}

function saySecond(){
  console.log("2- Second byeee ....");
  sayThird();
}
function sayThird(){
  console.log("2- Third byeee ....");
}

sayFirst();
// saySecond();
sayThird();
