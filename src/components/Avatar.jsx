const Avatar = ({user, size, handleAvatar}) => {
    return (
        <img className={`user-avatar ${size ?? ''}`} src={user.avatar} alt={user.name}
        onClick={() => {const url = prompt("Enter new avatar url:")
            handleAvatar(url)}
        }/>
    );
};

export default Avatar;