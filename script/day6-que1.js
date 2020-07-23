console.log("Batch-1 day 6 :question 1");
// array using change backgournd color

let i = 0;
function my(){
      let doc = document.querySelector("body");
      console.log(doc);
      let arrclr = ["#f7f3f3","#3adcd9","#aedcaf"];
      doc.style.backgroundColor = arrclr[i];
      console.log(arrclr[i])
      i = (i + 1) % arrclr.length; 
}
setInterval(my, 5000);
