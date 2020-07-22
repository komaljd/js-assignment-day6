console.log("Question 3")


//1) welcome user to Print value
let resutl = prompt("Enter Your Name:",'anonymus');

let getVal = document.querySelector('#Welcomenote');

getVal.innerText += ` ${resutl}`


//2)Clock
  let val = document.querySelector('#date');
  console.log(val);

  function date(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    val.innerText = time
  }
  setInterval(date,1000);

  // 3) .onclick btn dark mode is active
  function darkmode(){  
    let takeVal = document.querySelector("body")
    takeVal.classList.toggle('darkMode')
  }

