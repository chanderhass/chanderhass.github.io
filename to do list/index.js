let arrayListOfTasks = [];
let taskId = 0;

let parentDivForElements = document.getElementById("target");
let inputTag = document.getElementById("task");
inputTag.addEventListener("keypress",function(event){
    if(event.key===13 || event.key==='Enter'){
        addDataToArray();
    }
});

function addDataToArray(){
    let objectOfData = new Object();
    objectOfData.taskId = taskId;
    objectOfData.taskName = inputTag.value;
    objectOfData.status = "pending";
    arrayListOfTasks.push(objectOfData);
    taskId++;
    addDataToDom(objectOfData);
}

function addDataToDom(objectOfData){
    //create div
    let parentDiv = document.createElement("div");
    parentDiv.setAttribute("id",`${objectOfData.taskId}`);
    
    //create span
    let spanForText = document.createElement("span");
    spanForText.innerHTML = objectOfData.taskName;
    
    // create icons
    let divForIcons = document.createElement("div");
    let checkBoxIcon = document.createElement("input");
    checkBoxIcon.setAttribute("type","checkbox");
    checkBoxIcon.addEventListener("click",function(){
        spanForText.style.textDecoration = "line-through";
        objectOfData.status = "completed";
    });
   
    
    
    // create delete icon
    let deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class","fa fa-trash");
    deleteIcon.addEventListener("click",function(){
        removeFromObject(objectOfData.taskId);
        target.removeChild(parentDiv);
        
        
    });
    
    
    // add elements to parentDiv
    divForIcons.appendChild(checkBoxIcon);
    divForIcons.appendChild(deleteIcon);
    parentDiv.appendChild(spanForText);
  
    parentDiv.appendChild(divForIcons);
    parentDivForElements.appendChild(parentDiv);
    inputTag.value = "";


    parentDiv.style.background="black";
    parentDiv.style.color="white";
    parentDiv.style.display="flex";
    parentDiv.style.justifyContent="space-between";
    parentDiv.style.padding="10px";
    parentDiv.style.marginTop="3px";
    parentDiv.style.marginLeft="5px";
    parentDiv.style.marginRight="5px";
    parentDiv.style.BorderRadius="30px";
    checkBoxIcon.style.marginRight="5px";
    checkBoxIcon.style.marginTop="6px"; 
    deleteIcon.style.marginRight="10px";
    deleteIcon.style.cursor="pointer";
    
}

function removeFromObject(id){
    let i;
    for(i=0; i < arrayListOfTasks.length; i++){
        let identifiedObject = arrayListOfTasks[i];
        if(identifiedObject.taskId == id){
            break;
        }
    }
    arrayListOfTasks.splice(i,1);
}