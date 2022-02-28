const ArticleDetailCard = (props) => {
    return(
        <>
            <div>
                <h3>{props.title}</h3>
                <br/>
                <img
                    src={props.imageUrl}
                    width={250}
                    height={250}
                    alt='ArticleImage'
                />
                <p>{props.description}</p>
                <i style={{color: 'gray'}}>Source: <a target="_blank" rel="noreferrer" href={props.url}>{props.source}</a></i>
            </div>
        </>
    )
}

export default ArticleDetailCard;