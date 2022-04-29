function popup(){
    let blur=document.getElementsByClassName("head");
    blur[0].setAttribute("style","filter:blur(5px);")
    let parblur=document.getElementById("parent");
    parblur.setAttribute("style","filter:blur(5px);")
    let hid=document.getElementById("para1");
    hid.innerText=" ";
    let create=document.createElement("div");
    create.className="creadiv";
    create.setAttribute("style","width:300px; height:150px;border:2px solid orange;background-color:white;border-radius:5px;margin:auto;");
    document.body.append(create);
    let content=document.createElement("label");
    content.innerText="Add New List";
    content.setAttribute("style","display:block;text-align:center;color:orange;")
    create.appendChild(content);
    let inp=document.createElement("input");
    inp.id="name";
    inp.placeholder="Add new List";
    inp.setAttribute("style","border-radius:5px;text-align:center;margin-left:50px;display:block;")
    create.appendChild(inp);
    let adbut=document.createElement("Button");
    adbut.setAttribute("onclick","changeHere()");
    adbut.innerText="Add";
    create.appendChild(adbut);
    let delbut=document.createElement("Button");
    delbut.setAttribute("onclick","closeDisplay()");
    delbut.innerText="Close";
    create.appendChild(delbut);
}
let tasklist=[];
function changeHere(){
    let blur=document.getElementsByClassName("head");
    blur[0].setAttribute("style","filter:none;")
    let parblur=document.getElementById("parent");
    parblur.setAttribute("style","filter:none;")
    let non=document.getElementsByClassName("creadiv");
    non[0].style.display="none";
    let text=document.getElementById("name").value; 
    let obj={
        taskname:text
    }
    tasklist.push(obj);
   addTaskOnScreen();
}
function closeDisplay(){
    let divbox=document.querySelector(".creadiv");
    divbox.style.display="none";
    let blur=document.getElementsByClassName("head");
    blur[0].setAttribute("style","filter:none;");
}
function addTaskOnScreen(){
    let card=document.createElement("div");
    card.className="child";
    card.setAttribute("style","color:orangered;border-radius:5px;");
    card.innerText=tasklist[tasklist.length-1].taskname;
    let hor=document.createElement("hr");
    hor.setAttribute("style","color:white;")
    card.appendChild(hor);
    let addfont=document.createElement("i");
    addfont.setAttribute("class","fa-solid fa-circle-plus");
    addfont.onclick=anotherP;
    card.appendChild(addfont);
    let delfont=document.createElement("i");
    delfont.setAttribute("class","fa-regular fa-trash-can");
    delfont.onclick=removeElem;
    card.appendChild(delfont);
    let cont=document.getElementById("parent");
    cont.appendChild(card);
}
function anotherP(){
    let create=document.createElement("div");
    create.className="creadiv";
    create.setAttribute("style","width:300px; height:150px;border:2px solid orange;background-color:white;border-radius:5px;margin:auto;");
    document.body.append(create);
    let content=document.createElement("label");
    content.innerText="Add New List";
    content.setAttribute("style","display:block;text-align:center;color:orange;")
    create.appendChild(content);
    let inp=document.createElement("input");
    inp.id="text";
    inp.placeholder="Add new List";
    inp.setAttribute("style","border-radius:5px;text-align:center;margin-left:50px;display:block;")
    create.appendChild(inp);
    let adbut=document.createElement("Button");
    adbut.setAttribute("onclick","addToDo()");
    adbut.innerText="Add";
    create.appendChild(adbut);
    let delbut=document.createElement("Button");
    delbut.setAttribute("onclick","closeDisplay()");
    delbut.innerText="Close";
    create.appendChild(delbut); 
}
function addToDo(){
  let adto=document.querySelector(".child");
  let inpu=document.getElementById("text");
  let createElem=document.createElement('div');
  createElem.id="todo";
  createElem.setAttribute("style","width:70px; height:20px;border:2px solid orange;background-color:white;border-radius:5px;margin:auto;");
  createElem.innerText=inpu.value;
  adto.appendChild(createElem);
  adto.onclick=strike;

}
function strike(){
   let crea=document.getElementById("todo");
   crea.style.textDecoration='line-through';
}
function removeElem(){
    let ad=document.querySelector(".child");
    let cr=document.getElementById("todo");
    ad.removeChild(cr);
}