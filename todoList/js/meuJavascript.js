var meuForm = document.getElementById("meuForm")
var conteudo = document.getElementById("conteudo")
var i = 0
var contador = 0

meuForm.addEventListener("submit", function(e){
	novaTarefa()
	e.preventDefault()
});

function novaTarefa(){
	var id ="afazer"+contador
	criaTarefa(id)
	adicionaListener(id)
	contador++
}

function criaTarefa(id){
	if(meuForm.elements["tarefa"].value == ""){
		prompt("Digite uma tarefa!")
	}else {
	var tarefa = meuForm.elements["tarefa"].value
	var checkbox = document.createElement('input')
	checkbox.type = "checkbox"
	checkbox.id = id
	
	var label = document.createElement('label')
	label.htmlFor = id
	label.appendChild(checkbox)
	label.appendChild(document.createTextNode(tarefa))
	conteudo.appendChild(label)
	}
}

function adicionaListener(id){
	document.getElementById(id).addEventListener("click", function(){
		if(this.checked){
			this.parentElement.className = "concluido"
			if(document.getElementById("esconder").checked){
				this.parentElement.className = "concluido esconder"
			}
		}else{
			this.parentElement.className = " "
		}
	});
}

document.getElementById("esconder").addEventListener("click", function(){
	var tarefas = conteudo.getElementsByClassName("concluido")
	for(var i = 0; i < tarefas.length; i++){
		if(this.checked){
		tarefas.item(i).className = "concluido esconder "
		}else{
		tarefas.item(i).className = "concluido"
		}
	}
})