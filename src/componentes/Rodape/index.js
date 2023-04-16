import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />

            Desenvolvindo por Henrique Ramos
        </footer>
    )
}