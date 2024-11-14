import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, handleAvatar} = useContext(TwitterContext);


    return (
        <img className={`user-avatar ${size ?? ''}`} src={user.avatar} alt={user.name}
             onClick={()=>{ const url = prompt("Enter new avatar url")
             handleAvatar(url)}} />
    );
};

export default Avatar;