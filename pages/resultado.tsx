import styles from "../styles/Resultado.module.css"
import { useRouter } from "next/router"
import Botao from "../components/Botao"
import Estatistica from "../components/Estatistica"

export default function Resultado(){
    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)

    const corFundo = () => {
        if (percentual >= 60) {
            return "#9CD2A4" 
        }else if(percentual >= 50){
            return "#FDD60F"
        } else{
            return "#DE6A33"
        }
    }

    return(
        <div className={styles.resultado}>
            <h1>Resultado</h1>
            <div style={{display: "flex"}}>
                <Estatistica 
                    texto="Perguntas" 
                    valor={total} />
                <Estatistica 
                    texto="Certas" 
                    valor={certas} 
                    corFundo={corFundo()}/>
                <Estatistica 
                    texto="Percentual" 
                    valor={`${percentual}%`} 
                    corFundo={corFundo()}/>
            </div>
            <Botao herf="/" texto="Tentar novamente" />
        </div>
    )
}