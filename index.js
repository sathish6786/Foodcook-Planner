var a=document.getElementById("input")
var b=document.getElementById("food-container")
var nolist=document.getElementById("nolist")
var foodcount=document.getElementById("foodcount")

var c=document.getElementById("alert")


function output(){
    //css for successful
    c.style.backgroundColor="#7eef6f"
    c.style.color="white"  
    c.hidden=false

    //creating a new elements
    let newfood=document.createElement("li");
    const divitem=document.createElement("div");
    const divremove=document.createElement("div");

    //adding classname now new li created
    newfood.className="food-item";

    //input value storing
    divitem.textContent=a.value;

    //all appendings
    newfood.append(divitem);
    newfood.append(divremove);
    newfood.append(divitem,divremove);
    b.append(newfood);
   
    //seeting attribute to remove while clicking x
    divremove.setAttribute("onclick","deleteitem(event)");
     
    //Here adding x button with element & attribute
    divremove.innerHTML =`<button class="button">x</button>`;

    if(b.children.length>0){
        //to hide the img
        nolist.hidden=true
        //to count the list
        foodcount.innerText=`List of foods is: ${b.children.length-1}`
   }
}

//event for enter btn
a.addEventListener("keyup",(event)=>{
    if(event.key==='Enter'){
        output()
    }
});

//removing
function deleteitem(event)
{
    //.parentNode refers to <div>panipoori</div>, another .parentNode refers to <li class="food-item">
    let exixtinglist= event.target.parentNode.parentNode 
    exixtinglist.remove();
    //reducing the count of list while removing(x) list
    foodcount.innerText=`List of foods is ${b.children.length-1}`   
}
