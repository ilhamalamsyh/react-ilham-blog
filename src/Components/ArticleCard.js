import { Link } from "react-router-dom";

const ArticleCard = (props) => {
    return(
                <Link to={`/blog/${props.id}`} className='article-card' >
                    <article key={props.id} className='article'><h3>{props.title}</h3>
                    <time style={{color: 'gray'}}>{new Date(props.publishedAt).toLocaleDateString()}</time>
                    </article>
                </Link>
    )
}

export default ArticleCard;