let tasks=[]
let button01 = document.getElementById("btn")
let input01 = document.querySelector("#input_01")
button01.addEventListener("click", function() {
    let txt = input01.value
    if(txt===""){
        alert("escribir")
    }else{
        tasks.push(txt)
        if(tasks.length ==1){
            document.getElementById("mensaje").innerHTML =
            `${txt} task pushed.`
        }
        else{
            document.getElementById("mensaje").innerHTML=
            `${txt} task pushed. last task was ${tasks[tasks.length - 2]}.`

        }
        input01.value=""
    }
    
})
