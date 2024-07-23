export default function ContainerPlantas(props) {
    return (
        <section className="divPlanta" data-chave={props.chave} >
            <span className="iconeOption material-icons" onClick={(e) => {
                const icones = e.target
                icones.classList.toggle('ativo')
                console.log(icones)
            }} data-chave={props.chave}>
                settings
                <span className="material-icons iconeX icones " onClick={(e) => props.ApagaPlanta(e.target.parentNode)} >
                    cancel
                </span>
                <span className="material-symbols-outlined icones iconeEdit" onClick={(e) => {
                    console.log(props)
                    const identificador = e.target.parentNode
                    props.recebeInformacao(props.foto, props.tipo, props.pote, props.unidade, props.preco, props.chave, "edita", identificador.parentNode.dataset.chave)
                }} >
                    edit
                </span>
            </span>

            <img className='imagemPlanta' src={props.foto} alt="Imagem da planta"></img>
            <h2 className="tituloPlanta">{props.tipo}</h2>
            <p><strong>Pote:</strong>{props.pote}</p>
            <p><strong>Unidade:</strong> {props.unidade}</p>
            <p><strong>Valor:</strong>{props.preco}</p>

        </section>
    )
}