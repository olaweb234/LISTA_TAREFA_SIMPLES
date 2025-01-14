
var tarefas=[]


function add(){
    let lista = document.getElementById('lista');
    let input =document.getElementById('tesk')

    if (input.value.trim() == ""){
        alert('Escreva uma terefa')
    }else{
    tarefas.push(input.value)
    let listItem= document.createElement('li')
    listItem.textContent=input.value
    let removerbuton = document.createElement('button')
    removerbuton.textContent= 'remover'
    removerbuton.style.marginLeft='10px'
    removerbuton.onclick= function(){
        lista.removeChild(listItem)
    }
    listItem.appendChild(removerbuton)
    lista.appendChild(listItem)


    }

    
}

