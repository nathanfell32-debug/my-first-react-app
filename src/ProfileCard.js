function ProfileCard({ image, name, jobTitle, bio, skills }) {
    return (
        <div className="profile-card">
            <img src={image} alt={name} className="profile-image" />
            <h2>{name}</h2>
            <h4>{jobTitle}</h4>
            <p>{bio}</p>

            <div className="skills">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
            </div>
        </div>
    );
}

export default ProfileCard;