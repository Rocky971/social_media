import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse w-3/4">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-center font-semibold text-4xl'>Login</h1>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href className="label-text-alt link link-hover hover:text-red-800 font-semibold text-base">Forgot password?</a>
                                </label>
                                <p className='text-center'>Don't have an account?<Link className='underline text-blue-700 font-semibold' to="/register">Register</Link></p>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;