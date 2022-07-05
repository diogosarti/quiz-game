import styles from '../styles/Enunciado.module.css'

interface EnunciadoProps {
    text: string
}

export default function Enunciado(props: EnunciadoProps){
    return(
        <div className={styles.enunciado}>
            <span className={styles.texto}>{props.text}</span>
        </div>
    )
}