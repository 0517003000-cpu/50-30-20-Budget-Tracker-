function getNumber(text){
return Number(text.replace(/[^0-9]/g,'')) || 0
}

document.addEventListener("input",calculate)

function calculate(){

let essentialBudget =
getNumber(document.getElementById("essentialBudget").innerText)

let nonBudget =
getNumber(document.getElementById("nonBudget").innerText)

let saveBudget =
getNumber(document.getElementById("saveBudget").innerText)



let essentialTotal=0
document.querySelectorAll(".essential").forEach(c=>{
essentialTotal+=getNumber(c.innerText)
})

let nonTotal=0
document.querySelectorAll(".non").forEach(c=>{
nonTotal+=getNumber(c.innerText)
})

let saveTotal=0
document.querySelectorAll(".save").forEach(c=>{
saveTotal+=getNumber(c.innerText)
})



document.getElementById("essentialTotal").innerText=
essentialTotal.toLocaleString("id-ID")

document.getElementById("nonTotal").innerText=
nonTotal.toLocaleString("id-ID")

document.getElementById("saveTotal").innerText=
saveTotal.toLocaleString("id-ID")



updateStatus("essential",essentialTotal,essentialBudget)
updateStatus("non",nonTotal,nonBudget)
updateStatus("save",saveTotal,saveBudget)

}



function updateStatus(type,total,budget){

let status=document.getElementById(type+"Status")

if(total>budget){

status.innerText="Over Budget"
status.style.color="red"

}else{

status.innerText="Under Budget"
status.style.color="green"

}

}
