import { useState } from "react"
import BlocoPlantas from "./components/Blocoplantas/index.jsx"
import { listaDePlantas } from './api/api.js'
import { atualizaLista } from "./api/api.js"
import Formulario from "./components/Formulario/index.jsx"
const listaP = await listaDePlantas()

export default function App() {

    const [classeForm, setClasseForm] = useState('invisivel')

    const [lista, setlista] = useState(listaP)

    const [funcao, setFuncao] = useState('')

    const [info, setInfo] = useState({})


    const enviaLista = (listaAlvo) => {
        const listaNova = listaAlvo.map((e) => {
            e.id = `${listaAlvo.indexOf(e)}`
            return e
        })
        atualizaLista(listaNova)
        setlista(listaNova)
        const resultado = document.querySelector(".pesquisa").value
        if (resultado != "") {
            salvaResultado(resultado)
        }


    }

    const apagaItens = (bloco) => {
        console.log(bloco)
        if (window.confirm("Tem certeza que quer apagar este item ?")) {
            const item = bloco.dataset.chave
            console.log(item)
            listaP.splice(item, 1)
            console.log(listaP)
            enviaLista(listaP)
        }

    }

    const abreFormulario = async (func, inf) => {
        setClasseForm("")
        const divEditaBloco = document.querySelector("#editaBloco")
        setFuncao(func)
        const form = document.querySelector('#formEditaBloco')
        if (func === "edita") {
            form.nome.value = inf.tipo
            form.imagem.value = inf.foto
            form.disponibilidade.value = inf.disponibilidade
            form.estado.value = inf.estado
            form.origem.value = inf.origem
            form.entrada.value = inf.entrada
            form.saida.value = inf.saida
            form.destino.value = inf.destino
        } else {
            form.nome.value = ""
            form.imagem.value = ""
            form.disponibilidade.value = ""
            form.estado.value = ""
            form.origem.value = ""
            form.entrada.value = ""
            form.saida.value = ""
            form.destino.value = ""
        }

        divEditaBloco.classList.remove('invisivel')

    }

    const fechaFormulario = () => {
        const divEditaBloco = document.querySelector("#editaBloco")
        divEditaBloco.classList.add('invisivel')
    }


    const recebeInformacao = (foto, tipo, disponibilidade, estado, origem, entrada, saida, destino, chave, func) => {
        const informacao = {
            foto: foto,
            tipo: tipo,
            disponibilidade: disponibilidade,
            estado: estado,
            origem: origem,
            entrada: entrada,
            saida: saida,
            destino: destino,
            chave: chave
        }
        setInfo(informacao)
        abreFormulario(func, informacao)
    }





    function salvaResultado(busca) {
        if (busca == "") {
            setlista(listaP)
        } else {
            console.log(busca)
            const listaFiltrada = listaP.filter(plantas => plantas.Tipo.toLowerCase().includes(busca.toLowerCase()))
            console.log(listaFiltrada)
            setlista(listaFiltrada)


        }

    }

    return (
        <main className="principal">
            <div className="divPesquisa">
                <input className="pesquisa" type="search" placeholder="Digite o nome da planta" onKeyUp={(e) => salvaResultado(e.target.value)} />
                <button className="botaoPlanta" id="botaoCadastra" onClick={() => {
                    recebeInformacao("", "", "", "", "", "", "cadastra", "")
                    abreFormulario("cadastra")

                }}>Cadastrar um novo item</button>
            </div>
            <BlocoPlantas Lista={lista} ApagaPlanta={apagaItens} abreFormulario={abreFormulario} recebeInformacao={recebeInformacao} ></BlocoPlantas>
            <Formulario Lista={lista} Listap={listaP} enviaLista={enviaLista} fechaFormulario={fechaFormulario} func={funcao} info={info}></Formulario>
        </main>
    )


}