export default function Formulario(props) {
    return (
        <div id="editaBloco" className="invisivel" >
        <span className="material-icons iconeApaga" onClick={() => {props.fechaFormulario()}}>
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
                <p className="pLabel">
                    <label htmlFor="formEditaNome"><strong>Nome</strong></label>
                    <label htmlFor="formEditaPote"><strong>Pote</strong></label>
                    <label htmlFor="formEditaUnidade"><strong>Unidade</strong></label>
                    <label htmlFor="formEditaPreco"><strong>Preço</strong></label>
                    <label htmlFor="formEditaImage"><strong>Imagem</strong></label>
                    <label htmlFor="formFoto">Foto</label>
                </p>
                <p className="pInput">
                    <input type="text" name="nome" id="formEditaNome" required/>
                    <input type="text" name="pote" id="formEditaPote" required/>
                    <input type="text" id="formEditaUnidade" name="unidade" required/>
                    <input type="number" id="formEditaPreco" name="preco" required pattern=""/>
                    <input type="url" id="formEditaImage" name="imagem"/>
                </p>
            </div>
            <input type="submit" value="Concluido" className="botaoPlanta"/>
        </form>
    </div>
    )
}