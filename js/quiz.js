//VALIDAÇÕES DE RESPOSTA - RESPONDEU OU NÃO
let pontuacao;

function ValidacaoNome() {
    if (document.getElementById('fname').value === "") {
        alert("Por favor, insira o seu nome")
    } else {
        localStorage.setItem("nome",document.getElementById('fname').value)
        window.location.href = "quiz0.html"
        document.getElementById('fname').value = ""
    }
}

function ValidacaoQuestao1() {
    if (document.getElementById('1A').checked == true || document.getElementById('1B').checked == true
        || document.getElementById('1C').checked == true || document.getElementById('1D').checked == true
        || document.getElementById('1E').checked == true) {

            pontuacao = parseInt(localStorage.setItem("pontuacao", 0))

        if (document.getElementById("1A").checked) {

            parseInt(localStorage.setItem("pontuacao", 0))


        } else if (document.getElementById('1B').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 1
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('1C').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 2
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('1D').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 3
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('1E').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 5
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        }


        window.location.href = "quiz2.html"

    } else {
        alert("Por favor, responda à questão.")
    }
}

function ValidacaoQuestao2() {
    if (document.getElementById('2A').checked == true || document.getElementById('2B').checked == true
        || document.getElementById('2C').checked == true || document.getElementById('2D').checked == true
        || document.getElementById('2E').checked == true) {

        if (document.getElementById('2A').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 0
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('2B').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 2
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('2C').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 1
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('2D').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 3
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('2E').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 5
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        }

        window.location.href = "quiz3.html"

    } else {
        alert("Por favor, responda à questão.")
    }
}

function ValidacaoQuestao3() {
    if (document.getElementById('3A').checked == true || document.getElementById('3B').checked == true
        || document.getElementById('3C').checked == true) {

        if (document.getElementById('3A').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 1
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('3B').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 2
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('3C').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 0
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        }

        window.location.href = "quiz4.html"

    } else {
        alert("Por favor, responda à questão.")
    }
}

function ValidacaoQuestao4() {
    if (document.getElementById('4A').checked == true || document.getElementById('4B').checked == true
        || document.getElementById('4C').checked == true || document.getElementById('4D').checked == true
        || document.getElementById('4E').checked == true) {

        if (document.getElementById('4A').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 1
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('4B').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 3
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('4C').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 2
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('4D').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 5
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('4E').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 0
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        }

        window.location.href = "quiz5.html"

    } else {
        alert("Por favor, responda à questão.")
    }
}

function RespostaFinal() {


    if (document.getElementById('5A').checked == true || document.getElementById('5B').checked == true
        || document.getElementById('5C').checked == true || document.getElementById('5D').checked == true
        || document.getElementById('5E').checked == true) {

        if (document.getElementById('5A').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 3
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('5B').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 0
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('5C').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 2
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        } else if (document.getElementById('5D').checked) {

            pontuacao = parseInt(localStorage.getItem("pontuacao")) + 1
            parseInt(localStorage.setItem("pontuacao", pontuacao))

        }


        pontuacao = parseInt(localStorage.getItem("pontuacao"))

        console.log(pontuacao)

            if (pontuacao >= 0 && pontuacao < 5) {

                window.location.href = "respostanormalskin.html"

            } else if (pontuacao >= 5 && pontuacao < 10) {

                window.location.href = "respostaoleosaskin.html"

            } else if (pontuacao >= 10 && pontuacao < 12) {

                window.location.href = "respostamistaskin.html"

            } else if (pontuacao >= 12 && pontuacao < 15) {

                window.location.href = "respostasecaskin.html"

            } else {
                window.location.href = "respostasensívelskin.html"
            }

        } else {
            alert("Por favor, responda à questão.")
        }

    }


    function Voltar(){
        localStorage.clear();
        window.location.href = "quiz.html"
    }


    function Pele() {
        let meuBem = document.querySelector(".meubem");
        meuBem.innerHTML = localStorage.getItem('nome').toLocaleUpperCase()+",";
    
        meuBem.style.fontSize = "35px";
    }
