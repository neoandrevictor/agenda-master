
form=document.getElementsByClassName("pure-form pure-form-aligned")[0];
form.addEventListener("submit", adicionar, true);
let tabela=document.getElementsByClassName("pure-table")[0];
tabela.lastElementChild.lastElementChild.lastElementChild.outerHTML="";
coluna=document.createElement("th");
coluna.innerText="Ações";
tabela.children[0].children[0].appendChild(coluna);
let total=localStorage.getItem('contador')*1;
var i;
if(total!=null || total!=""){
    for(i=1;i<=total;i++){

        adicionar(localStorage.getItem(i));
    }
}

document.getElementById("name").setAttribute("required",true);
document.getElementById("email").setAttribute("required",true);
document.getElementById("email").setAttribute("type","email");

function adicionar(codigo){

    if (typeof(codigo)=="object"){
        if (codigo!=null){
            event.preventDefault();
        
        
        } else {
            return;
        }
    }
    let nome=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let contador=localStorage.getItem("contador")*1;
    contador++;
    let linha=document.createElement("tr");
    
    
    if (typeof(codigo)=="object"){
        linha.id=`registro_${contador}`
        codigo=`
        <td>${contador}</td>
        <td>${nome}</td>
        <td>${email}</td>
        <td style='cursor:pointer' id='excluir_${contador}' onclick='excluir(this.id)'>Excluir</td>`;
        localStorage.setItem("contador",contador);
        localStorage.setItem(contador,codigo);

    } else {

        linha.id="registro_"+i;
    }
    linha.innerHTML=codigo;
    
    let tabela=document.getElementsByClassName("pure-table")[0];
    tabela.appendChild(linha);
    


}




function excluir(id){
    
    numeroregistro=id.replace("excluir_","");
    idregistro="registro_"+numeroregistro;
    document.getElementById(idregistro).outerHTML="";
    localStorage.removeItem(numeroregistro);


}

function ajaxPost(data){

    var request = new XMLHttpRequest();
    request.open('POST', '/my/url', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(data);
}

function ajaxDelete(data){

    var request = new XMLHttpRequest();
    request.open('DELETE', '/my/url', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(data);
}