import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import { BiSolidMessageDetail } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";
const MessageContainer = () =>{
    const noChatSelected = true;
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {NoChatSelected?(<NoChatSelected/>):(
                <>
                    {/*header*/}
                    <div className='bg-slate-500 px-4 py-2 mb-2'>
                        <span className='label-text'>To:</span>{" "}
                        <span className='text-gray-900 font-bold'>Thomas</span>
                    </div>
                    {/*messages*/}
                    <Messages/>
                    <MessageInput/>
                </>
            )}
        </div>
    )
}
export default MessageContainer;

const NoChatSelected = () =>{
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm-text-lg md-text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome Thomas 👋</p>
                <p>Select a chat to start messaging.</p>
                <LuMessagesSquare className='text-3xl md:text-6xl text-center'/>
            </div>
        </div>
    )
}


/*const MessageContainer = () =>{
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            <></>
            {/!*header*!/}
            <div className='bg-slate-500 px-4 py-2 mb-2'>
                <span className='label-text'>To:</span>{" "}
                <span className='text-gray-900 font-bold'>Thomas</span>
            </div>
            {/!*messages*!/}
            <Messages/>
            <MessageInput/>
        </div>
    )
}
export default MessageContainer;*/
