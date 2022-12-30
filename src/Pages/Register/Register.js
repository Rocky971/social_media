import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div className="bg-base-100 shadow-2xl rounded-lg w-2/6 m-auto">
            <h1 className='font-semibold text-4xl text-center mt-5 p-3 pt-2'>Sign Up</h1>
            <form className='p-5'>
                <div className="">
                    <label htmlFor="" className='block font-semibold text-black mb-1'>User Name</label>
                    <input type="text" name="name" className='w-full p-2 outline-none border-custom border-slate-400 rounded-md' placeholder='Type your name' />
                </div>
                <div className="mt-2">
                    <label htmlFor="" className='block font-semibold text-black mb-1'>Email</label>
                    <input type="text" name="email" className='w-full p-2 outline-none border-custom border-slate-400 rounded-md' placeholder='Type your email' />
                </div>
                <div className="mt-2">
                    <label htmlFor="" className='block font-semibold text-black mb-1'>Password</label>
                    <input type="password" name="password" className='w-full p-2 outline-none border-custom border-slate-400 rounded-md' placeholder='Type your password' />
                </div>
                <p className='font-semibold underline hover:text-blue-800 cursor-pointer'>Forgot password</p>
                <p className='font-semibold text-center hover:text-blue-800 '>Already have an account?
                    <Link className='underline cursor-pointer' to='/login'>Login</Link></p>
                <input type="submit" className='w-full border-custom border-blue-600 rounded-lg p-2 mt-5 font-semibold hover:bg-blue-600 text-black mb-2' value="Sign Up" />
                <p className='text-center max-w-fit bg-slate-400 p-1 m-auto'>Sign up with social</p>

                <button className='w-full border-custom border-blue-600 rounded-lg p-2 font-semibold hover:bg-blue-600 text-black mt-2'><i class="fa-brands fa-facebook"></i> Continue with Facebook</button>
                <button className='w-full border-custom border-blue-600 rounded-lg p-2 font-semibold hover:bg-blue-600 text-black mt-2'><i class="fa-brands fa-google"></i> Continue with Google</button>
            </form>
        </div>
    );
};

export default Register;