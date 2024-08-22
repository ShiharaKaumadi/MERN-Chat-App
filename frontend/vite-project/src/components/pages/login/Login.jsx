import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div
                className='h-full p-6 w-full bg-blue-200 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
                    <span className='text-green-200'> WeChat</span>
                </h1>
                <form action="">
                    <div>
                        <label className='label p-2' htmlFor="">
                            <span className='text-blue-100 label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
                    </div>
                    <div>
                        <label className='label p-2' htmlFor="">
                            <span className='text-blue-100 label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password'
                               className='w-full input input-bordered h-10'/>
                    </div>
                    <Link to='/signup'
                       className='text-sm text-green-200 p-3 hover:underline hover:text-blue-100 mt-2 inline-block'>{"Don't"} have
                        an account?</Link>
                    <div>
                        <button className="btn btn-block p-2 btn-info text-green-100">Login</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Login;

//start
/*const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div
                className='h-full p-6 w-full bg-blue-200 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
                    <span className='text-green-200'> WeChat</span>
                </h1>
                <form action="">
                    <div>
                        <label className='label p-2' htmlFor="">
                            <span className='text-blue-100 label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
                    </div>
                    <div>
                        <label className='label p-2' htmlFor="">
                            <span className='text-blue-100 label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password'
                               className='w-full input input-bordered h-10'/>
                    </div>
                    <a href="#"
                       className='text-sm text-green-200 p-3 hover:underline hover:text-blue-100 mt-2 inline-block'>{"Don't"} have
                        an account?</a>
                    <div>
                        <button className="btn btn-block p-2 btn-info text-green-100">Login</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Login;*/
