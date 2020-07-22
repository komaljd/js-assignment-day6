console.log("Batch-1 day 6 :question 1");
// ARRAY HERE
let list = document.getElementById('list');
list.getAttribute('id');
console.log(list);
let frutis = ["apple","banana","orange"];
console.log(frutis);
frutis.forEach(el=>{
    // console.log(el);
   list.innerHTML += `<li>${el}</li>`
   list.setAttribute("style","color:#f00");
})

// background color

setTimeout(() => {
    
      document.body.style.backgroundColor = "rgb(232 232 232)";

      document.body.style.color = "rgb(109 109 109)";
    
}, 5000);
