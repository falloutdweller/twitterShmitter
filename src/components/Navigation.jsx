import Avatar from "./Avatar.jsx";

const Navigation = ({user, handleAvatar}) => {
    return (
        <div className={'nav'}>
            <Avatar user={user} size={'small'} handleAvatar={handleAvatar}/>
        </div>
    );
};

export default Navigation;