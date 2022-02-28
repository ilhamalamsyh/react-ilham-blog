import { useEffect, useState } from "react";
import ArticleCard from "../Components/ArticleCard";

const Blog = () => {
    const [articles, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getArticle = async () => {
            const req = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
            const res = await req.json();

            console.log(res);
            setArticle(res);
            setLoading(false);
        }
        getArticle();
    },[]);

    return(
        <div className="articles">
            {loading ? 'Loading....' : <div><h4 className="blog-list-title">Here are my blogs</h4>
                {articles.map((article => 
                     <ArticleCard
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        publishedAt={article.publishedAt}                        
                    />
                ))}
                </div>
            }
        </div>
    )
}

export default Blog;