const ProfileCard = () => {
    return(
        <div className="section">
            <img
                className="section-profile-img"
                width={75}
                height={75}
                alt="socmed"
                src="https://media-exp1.licdn.com/dms/image/C5103AQHgVH8XOLZ4Pg/profile-displayphoto-shrink_400_400/0/1580121953992?e=1651708800&v=beta&t=J996mEMbUF5VBj75ioP477g3xglX-TNqZu5frLLpAsY"
            />
            <p className="profile-title">Ilham Alamsyah</p>
            <p>Hello, I'm Ilham Alamsyah. I'm a Software Engineer. My hobby is play simulator game. I love Indonesian food, currently try to learn japanese. I like watch anime, my favorite anime is jujutsu kaisen.</p>
        </div>
    )
}

export default ProfileCard;