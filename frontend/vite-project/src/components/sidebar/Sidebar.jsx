import Searchbar from "./Searchbar.jsx";
import Conversations from "./Conversations.jsx";
import Logout from "./Logout.jsx";

const Sidebar = () => {
    return(
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <Searchbar/>
            <div className='divider px-3'></div>
            <Conversations/>
            <Logout/>
        </div>
    )
}
export default Sidebar;

//start
/*
import Searchbar from "./Searchbar.jsx";
import Conversations from "./Conversations.jsx";
import Logout from "./Logout.jsx";

const Sidebar = () => {
    return(
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <Searchbar/>
            <div className='divider px-3'></div>
            <Conversations/>
            <Logout/>
        </div>
    )
}
export default Sidebar;*/
