const table=document.querySelector("table");
let selectedID;//here undefined

table.addEventListener("click",(event)=>{
    const targetel= event.target;//it select <td>
    const closesttr=targetel.closest("tr");//this method nearest or closest tr to clicked td 
    
    if(selectedID != undefined){ //defined means this condition works
    selectedID.classList.remove("active");//removing class
    }
    selectedID=closesttr;//here defined
  
    closesttr.classList.add("active");//adding class from css

    if(targetel.tagName==="TH") return;// if we click <th> this click event will not work
    
    alert(`Hello..You have clicked: ${targetel.innerText}`);
 });

//support authors
const showbtn=document.querySelector("#showbtn");
const inputcontainer=document.querySelector(".input-container");
const donatebtn=document.querySelector(".Donatebtn");
const inputel=document.querySelector("#in-put");

showbtn.addEventListener("click",()=>{
         inputcontainer.style.display="block";
});

donatebtn.addEventListener("click",()=>{
    alert(`Thank you...For donating🙏: ₹ ${ inputel.value}`);
});
