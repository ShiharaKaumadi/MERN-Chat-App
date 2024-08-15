import Sidebar from "../../sidebar/Sidebar.jsx";
import MessageContainer from "../../messages/MessageContainer.jsx";

const Home = () =>{
    return (
        <div className='flex sm:h[450px] md:h-[550px] p-6 rounded-lg overflow-hidden bg-blue-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar/>
            <MessageContainer/>
        </div>
            )
}
export default Home;