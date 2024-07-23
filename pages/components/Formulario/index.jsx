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
                    list[props.info.chave].Tipo = form.target.nome.value
                    list[props.info.chave].Pote = form.target.pote.value
                    list[props.info.chave].Unidade = form.target.unidade.value
                    list[props.info.chave].Preço = form.target.preco.value
                    list[props.info.chave].imagem = form.target.imagem.value
                    props.enviaLista(list)
                    props.fechaFormulario()
                } else {
                    let imagem = form.target.imagem.value
                    let nome = form.target.nome.value
                    let pote = form.target.pote.value
                    let unidade = form.target.unidade.value
                    let preco = form.target.preco.value
                    const listaNova = props.Listap
                    const novaPlanta = {
                        imagem: imagem,
                        Tipo: nome,
                        Pote: pote,
                        Unidade: unidade,
                        Preço: preco
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
                        <input type="text" name="disponibilidade" id="formEditaDisponibilidade" required />
                        <div id="formEditaEstado">
                            <input type="radio" name="Estado" id="estadoBom" />
                            <label htmlFor="estadoBom">Bom</label>

                            <input type="radio" name="Estado" id="estadoRazoavel" />
                            <label htmlFor="estadoRazoavel">Razoavel</label>

                            <input type="radio" name="Estado" id="estadoRuim" />
                            <label htmlFor="estadoRuim">Ruim</label>
                        </div>
                        <input type="text" id="formEditaOrigem" name="origem" required />
                        <input type="date" id="formEditaEntrada" name="Entrada" required />
                        <input type="date" id="formEditaSaida" name="Saida" required />
                        <input type="text" id="formEditaDestino" name="Destino" required />
                        <input type="url" id="formEditaImage" name="imagem" />
                    </div>
                </div>
                <input type="submit" value="Concluido" className="botaoPlanta" />
            </form>
        </div>
    )
}