const SocialMedia = (props) => {

    return (
        <div>
            <a href={props.link} target='_blank' rel="noreferrer" >
                <article>
                <img
                    width={75}
                    height={75}
                    alt="socmed"
                    src={props.image}
                />
                <p>{props.text}</p>
                </article>
            </a>
        </div>
    )
}

export default SocialMedia;