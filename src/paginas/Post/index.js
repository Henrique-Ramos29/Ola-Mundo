import "./Post.css"

import styles from "./Post.module.css"

import { useParams } from "react-router-dom"

import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import PostCard from "componentes/PostCard";

import posts from "json/posts.json"


export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    const postsRecomendados = posts.filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id).slice(0, 4);

    return (

        <PostModelo
            fotoCapa={`/posts/${post.id}/capa.png`}
            titulo={post.titulo}>
            <>
                <div classeName="post-markdown-container">
                    <ReactMarkdown >
                        {post.texto}
                    </ReactMarkdown >

                    <h2 className={styles.tituloOutrosPosts}>
                        Outros posts que você pode gostar:
                    </h2>

                    <ul className={styles.postsRecomendados}>
                        
                        {postsRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        ))}

                    </ul>

                </div>
            </>
        </PostModelo>
    )
}
