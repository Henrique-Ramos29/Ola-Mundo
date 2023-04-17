import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";
import styles from "./SobreMim.module.css";

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa}
            titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                Ola, sou o Henrique Ramos!
            </h3>
            <img src={fotoSobreMim} alt="Foto do Henrique" className={styles.fotoSobreMim} />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou Aluno Oracle One Next Education = Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>Oracle One Next Education
                Eu me chamo Henrique Ramos estou em busca da "tal" transição de carreira,
                e comecei na programação
                em outubro de 2022 fazendo um curso de lógica de programação com a tecnologia JAVA.
                Em novembro do mesmo ano fui agraciado com o , e o privilégio
                de está estudando programação com a Alura.

            </p>
            <p className={styles.paragrafo}>
                Tenho estudando bastante HTML5, CSS3 e JavaScritp, e me dedicado a aprender cada vez mais,
                fazendo meus próprios projetos e desafios.
            </p>
            <p className={styles.paragrafo}>
                Experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.
            </p>
            <p className={styles.paragrafo}>
                E foi enquanto eu estava no PET que decidi procurar um estágio em desenvolvimento web. Eu encontrei uma vaga na Alura para o Scuba Team e percebi que ela aliava duas paixões minhas: programação e educação. Para minha felicidade, fui escolhido para fazer parte do time.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. A Alura é uma escola. Hoje sou muito feliz de ter a oportunidade de trazer esses conteúdos ricos e encantadores para você. Espero que aprenda bastante!
            </p>
        </PostModelo>
    )
}