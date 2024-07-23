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
            <p><strong>Disponibilidade:</strong>{props.disponibilidade}</p>
            <p><strong>Estado</strong> {props.estado}</p>
            <p><strong>Origem</strong>{props.origem}</p>
            <p><strong>Data de Entrada</strong>{props.entrada}</p>
            <p><strong>Data de Saída</strong>{props.saida}</p>
            <p><strong>Destino</strong>{props.destino}</p>
        </section>
    )
}