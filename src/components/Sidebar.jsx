import Stats from "./Stats.jsx";

const Sidebar = ({user, stats, handleAvatar}) => {
    return (
        <div className={'sidebar'}>
            <Stats user={user} stats={stats} handleAvatar={handleAvatar}/>
        </div>
    );
};

export default Sidebar;