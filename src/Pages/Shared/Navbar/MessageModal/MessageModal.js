import React from 'react';
import profile from '../../../../assets/profile.jpg';
import './MessageModal.css'
const threeDots =
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
const square =
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
const video =
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
const pen =
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
const search =
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>


const MessageModal = () => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn  bg-[#8a1f9c] btn-circle avatar offline ring ring-purple-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg></label>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle justify-start ">
                <div className="modal-box relative custom-modal text-black">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="flex justify-between items-center">
                        <div className="">
                            <h3 className="text-2xl font-bold">Chats</h3>
                        </div>
                        <div className="mr-7">
                            <button className='mr-3 rounded-full bg-slate-100 hover:bg-slate-300'>{threeDots}</button>
                            <button className='mr-3 rounded-2xl bg-slate-100 hover:bg-slate-300'>{square}</button>
                            <button className='mr-3 rounded-2xl bg-slate-100 hover:bg-slate-300'>{video}</button>
                            <button className='rounded-2xl bg-slate-100 hover:bg-slate-300'>{pen}</button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <input type="text" placeholder="Search Conversations" className="input input-bordered w-full rounded-lg" />
                    </div>
                    <div className="flex gap-3 mt-4">
                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
                                <span><img src={profile} alt="" /></span>
                            </div>
                        </div>
                        <div className="">
                            <h3 className='font-semibold text-lg text-black'>Rocky islam</h3>
                            <p className='font-semibold text-sm text-black'>You: Kmn asen vai?</p>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
                                <span><img className='' src="https://scontent.fspd3-1.fna.fbcdn.net/v/t39.30808-6/284042946_3341635036155608_5029948779167674778_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEUS0HUQ22u86mvK2bREGg7fdz__thI-px93P_-2Ej6nMJbeNaQ1xBWBzCoOtnbK23poySSomnYigjdO9CQJerz&_nc_ohc=Jrxr-ieZi5EAX_CH_mC&_nc_ht=scontent.fspd3-1.fna&oh=00_AfDKTm7IHHxOgu2lOrzxszHiG9qvVD28hoNKo7Skk685Ew&oe=63B378A1" alt="" /></span>
                            </div>
                        </div>
                        <div className="">
                            <h3 className='font-semibold text-lg text-black'>Murad Wahid Moon</h3>
                            <p className='font-semibold text-sm text-black'>Apnar basa kothay vaia?</p>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
                                <span><img src={profile} alt="" /></span>
                            </div>
                        </div>
                        <div className="">
                            <h3 className='font-semibold text-lg text-black'>Rocky islam</h3>
                            <p className='font-semibold text-sm text-black'>You: Kmn asen vai?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageModal;