console.log("Question 2")


let EnterVal = prompt("enter Number:");
let intVal = parseInt(EnterVal);


let valDis = document.querySelector('.value');
let UserValue = valDis.innerText =  intVal

let NumVal = document.querySelector('.numberformate');


for(let i = 1; i <=10; i++){
    let result =  UserValue * i;
    NumVal.innerHTML += `<li>${UserValue} x ${i} = ${result}</li>`;
}

