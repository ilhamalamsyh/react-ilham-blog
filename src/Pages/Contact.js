import SocialMedia from "../Components/SocialMedia";

const Contact  = () => {
    return (
        <div>
        <h3 className="contact-title">You can reach me on</h3>
        <ul className="social-media-list">
            <li className="social-media-item">
                <SocialMedia 
                    link='https://www.instagram.com/'                    
                    image="https://www.pngall.com/wp-content/uploads/5/Instagram-Logo-PNG-Image.png"
                    text='Instagram'
                />
            </li>
            <li className="social-media-item">
                <SocialMedia 
                    link='https://www.linkedin.com/in/ilham-alamsyah-94936717a/'                    
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
                    text='LinkedIn'
                />
            </li>
            <li className="social-media-item">
                <SocialMedia 
                    link='https://www.twitter.com/'                    
                    image="https://www.pngitem.com/pimgs/m/30-300756_vector-twitter-logo-svg-hd-png-download.png"
                    text='Twitter'
                />
            </li>
            <li className="social-media-item">
                <SocialMedia 
                    link='https://www.facebook.com/'                    
                    image="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    text='Facebook'
                />
            </li>
        </ul>
        </div>
    )
}

export default Contact;