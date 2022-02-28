import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleDetailCard from "../Components/ArticleDetailCard";
import NotFound from "./NotFound";

const BlogDetail = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState({});
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        const getBlogs = async () => {
            const req = await fetch(`https://api.spaceflightnewsapi.net/v3/blogs/${id}`);

            console.log(req.ok);

            if (!req.ok) {
                setLoading(false);
                return setNotFound(true);
            }
            
            const res = await req.json();
            setBlog(res);
            setLoading(false);
        }
        getBlogs();
        
    },[id, setNotFound])

    return(
        <>
            <div className="article-detail">
                {loading ? <p>Loading....</p> :
                    notFound ? 
                    <NotFound /> : 
                    <ArticleDetailCard 
                        title={blog.title}
                        imageUrl={blog.imageUrl}
                        description={blog.summary}
                        source={blog.newsSite}
                        url={blog.url}
                    />
                }
            </div>

        </>
    )
}

export default BlogDetail;