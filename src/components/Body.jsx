import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";

const Body = ({user, stats, handleAvatar}) => {
    return (
        <div className={'body'}>
            <Sidebar user={user} stats={stats} handleAvatar={handleAvatar}/>
            <Content/>
        </div>
    );
};

export default Body;