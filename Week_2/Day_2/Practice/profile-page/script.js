function edit(){
    var username=document.querySelector("#username")
    username.innerText='Rania';
}
function accept(id){
    var element=document.querySelector(id)
    element.remove();
    yourconnections.innerText++;
    connectionsrqst.innerText--;
}
