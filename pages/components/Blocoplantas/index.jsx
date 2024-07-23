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
            <ContainerPlantas key = {e.id} chave = {e.id} foto = {e.imagem}  tipo = {e.Tipo} disponibilidade = {e.disponibilidade} estado = {e.estado} origem = {e.origem} entrada = {e.entrada}
        saida = {e.saida} destino = {e.destino} ApagaPlanta = {props.ApagaPlanta} abreFormulario = {props.abreFormulario} recebeInformacao = {props.recebeInformacao} ></ContainerPlantas>
        )
        )}
        
    </div>

    )
} 