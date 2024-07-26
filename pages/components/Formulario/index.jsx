

export default function Formulario(props) {
    return (
        <div id="editaBloco" className="invisivel" >
            <span className="material-icons iconeApaga" onClick={() => { props.fechaFormulario() }}>
                cancel
            </span>
            <form id="formEditaBloco" onSubmit={(form) => {
                form.preventDefault()
                if (props.func === "edita") {
                    const list = props.Listap
                    console.log(list[props.info.chave])
                    list[props.info.chave].imagem = form.target.imagem.value
                    list[props.info.chave].Tipo = form.target.nome.value
                    list[props.info.chave].disponibilidade = form.target.disponibilidade.value
                    list[props.info.chave].estado = form.target.estado.value
                    list[props.info.chave].origem= form.target.origem.value
                    list[props.info.chave].entrada = form.target.entrada.value
                    list[props.info.chave].saida = form.target.saida.value
                    list[props.info.chave].destino = form.target.destino.value
                    props.enviaLista(list)
                    props.fechaFormulario()
                } else {
                    let imagem = form.target.imagem.value
                    let nome = form.target.nome.value
                    let disponibilidade = form.target.disponibilidade.value
                    let estado = form.target.estado.value
                    let origem = form.target.origem.value
                    let entrada = form.target.entrada.value
                    let saida = form.target.saida.value
                    let destino = form.target.destino.value
                    const listaNova = props.Listap
                    const novaPlanta = {
                        imagem: imagem,
                        Tipo: nome,
                        disponibilidade: disponibilidade,
                        estado: estado,
                        origem: origem,
                        entrada: entrada,
                        saida: saida,
                        destino: destino
                    }
                    listaNova.push(novaPlanta)
                    listaNova.sort(function (a, b) {
                        if (a.Tipo.toLowerCase() < b.Tipo.toLowerCase()) {
                            return -1;
                        }
                        if (a.Tipo.toLowerCase > b.Tipo.toLowerCase) {
                            return 1;
                        }
                        return 0;
                    })
                    console.log(listaNova)
                    props.enviaLista(listaNova)
                    props.fechaFormulario()

                }

            }}>
                <div className="divDados">
                    <div className="pLabel">
                        <label htmlFor="formEditaNome"><strong>Nome</strong></label>
                        <label htmlFor="formEditaDisponibilidade"><strong>Disponibilidade</strong></label>
                        <label htmlFor="formEditaEstado"> <strong>Estado</strong></label>
                        <label htmlFor="formEditaOrigem"><strong>Origem</strong></label>
                        <label htmlFor="formEditaEntrada"><strong>Data de Entrada</strong></label>
                        <label htmlFor="formEditaSaida"><strong>Data de Saída</strong></label>
                        <label htmlFor="formEditaDestino"><strong>Destino</strong></label>
                        <label htmlFor="formEditaImage"><strong>Imagem</strong></label>

                    </div>
                    <div className="pInput">
                        <input type="text" name="nome" id="formEditaNome" required />
                        <div id="formEditaDisponibilidade" name="disponibilidade">
                            <input type="radio" name="disponibilidade" id="opDisponivel" value="Disponivel"/>
                            <label htmlFor="opDisponivel">Disponivel</label>

                            <input type="radio" name="disponibilidade" id="opIndisponivel" value="Indisponivel" />
                            <label htmlFor="opIndisponivel"> Indisponivel</label>
                        </div>

                        <div id="formEditaEstado" name= "estado" required>
                            <input type="radio" name="estado" id="estadoBom" value="Bom" />
                            <label htmlFor="estadoBom">Bom</label>

                            <input type="radio" name="estado" id="estadoRazoavel"  value="Razoavel"/>
                            <label htmlFor="estadoRazoavel">Razoavel</label>

                            <input type="radio" name="estado" id="estadoRuim" value= "Ruim" />
                            <label htmlFor="estadoRuim">Ruim</label>
                        </div>
                        <input type="text" id="formEditaOrigem" name="origem" required />
                        <input type="date" id="formEditaEntrada" name="entrada" required />
                        <input type="date" id="formEditaSaida" name="saida"  required />
                        <input type="text" id="formEditaDestino" name="destino" required />
                        <input type="url" id="formEditaImage" name="imagem" />
                    </div>
                </div>
                <input type="submit" value="Concluido" className="botaoPlanta" />
            </form>
        </div>
    )
}