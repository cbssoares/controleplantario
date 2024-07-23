import ContainerPlantas from "../ContainerPlantas/index.jsx"
import { useState, useEffect} from "react"
// oi
export default function BlocoPlantas(props) {
    console.log(props.Lista)
    const BlocoLista = props.Lista
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
      setDomLoaded(true);
    }, []);
  

    
    return(
    <div id="bloco-plantas">
        {domLoaded && (
        BlocoLista.map( (e) => 
            <ContainerPlantas key = {e.id} chave = {e.id} foto = {e.imagem}  tipo = {e.Tipo} pote = {e.Pote} unidade = {e.Unidade} preco = {e.Preço} ApagaPlanta = {props.ApagaPlanta} abreFormulario = {props.abreFormulario} recebeInformacao = {props.recebeInformacao} ></ContainerPlantas>
        )
        )}
        
    </div>

    )
} 