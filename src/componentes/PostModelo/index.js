import styles from './PostModelo.module.css'

export default function PostModelo({ children, fotoCapa, titulo}) {
    return (
        <article className={styles.postModeloConatiner}>
             <div className={styles.fotoCapa}
                   style={{ backgroundImage: `url(${fotoCapa})`}}>
             </div>

             <h2 className={styles.titulo}>
                    {titulo}
             </h2>

             <div className={styles.postModeloConatiner}>
                  {children}
             </div>

        </article>
    )
}