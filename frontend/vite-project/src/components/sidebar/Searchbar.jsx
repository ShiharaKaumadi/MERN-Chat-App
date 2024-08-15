import { BiSearch } from "react-icons/bi";
const Searchbar = () =>{
    return (
        <form>
            <input type="text" placeholder='search here' className='input input-bordered rounded-full'/>
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <BiSearch/>
            </button>
        </form>
    )
}
export default Searchbar;

//start
/*
const Searchbar = () =>{
    return (
        <form>
            <input type="text" placeholder='search here' className='input input-bordered rounded-full'/>
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                icon
            </button>
        </form>
    )
}
export default Searchbar;*/
