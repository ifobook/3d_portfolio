import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { bestSkills, socialImgs } from '../constants';
import TitleHeader from '../components/TitleHeader';


const ContactMe = () => {
    return (
        <section id='contact' className='flex flex-col w-full md:mt-40 mt-20 setion-padding xl:px-0 '>
            <TitleHeader title="Contact With Me" sub='Contact' />

            <div className=" w-full pt-16 mt-10 p-6 md:p-10 flex flex-col  md:flex-row gap-6 md:gap-10">


                <div className="w-full md:w-1/3 flex flex-col gap-5 rounded-xl font2 shadow-md p-4 ">
                    <div class="outer">
                        <div class="dot"></div>
                        <div class="card">
                            <div class="ray"></div>
                            <div class="text">750K</div>
                            <div>Views</div>
                            <div class="line topl"></div>
                            <div class="line leftl"></div>
                            <div class="line bottoml"></div>
                            <div class="line rightl"></div>
                        </div>
                    </div>
                    <div class="card2  w-full z-10 -mt-55 flex justify-center" >
                        <img src="/images/franklinrbg.png" alt="" />
                    </div>
                    <h2 className="font-bold text-3xl">Franklin Ibeh Onyeka</h2>
                    <p className="font-semibold bg-gradient-to-tr from-[#17EAD9] to-[#6078EA] bg-clip-text text-transparent text-xl">FullStack Developer</p>
                    <p className=" text-white-50 my-4 text-lg">
                        I am open to freelance opportunities and collaborative team projects. You're welcome to get in touch with me directly through my contact information.
                    </p>
                    <p className="text-lg text-white-50 font-semibold font-lg">Phone: <span className='text-xl '>+234 814 040 3064</span></p>
                    <p className="text-lg text-white-50 font-semibold">Email: ifobook@gmail.com</p>
                    <p className="text-sm font-bold">Find me with</p>
                    <div className='flex gap-3'>
                        {socialImgs.map(({ url, SocialIcon, name }, index) => (
                            <a
                                key={index}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card2 relative h-17 w-17 flex items-center justify-center cursor-pointer md:mt-10 mt-5"
                                aria-label={name}
                            >
                                <SocialIcon className="text-2xl text-white size-8" />
                            </a>
                        ))}

                    </div>

                </div>

                {/* Right Section - Form */}
                <div className="w-full md:w-2/3 card2 shadow-lg rounded-lg p-5">
                    <form className="flex flex-col gap-4">
                        <div>
                            <label className="text-sm font-semibold font2">FullName</label>
                            <input
                                type="text"
                                placeholder="Enter your fullname"
                                className="font2 w-full p-2 rounded-md bg-gray-300 text-black font-medium focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold font2">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="font2 w-full p-2 rounded-md bg-gray-300 text-black font-medium focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold font2">Phone</label>
                            <input
                                type="text"
                                placeholder="Enter your Phone"
                                className="font2 w-full p-2 rounded-md bg-gray-300 text-black font-medium focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold font2">Subject</label>
                            <input
                                type="text"
                                placeholder="Enter your Email"
                                className="font2 w-full p-2 rounded-md bg-gray-300 text-black font-medium focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold font2">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Type your message..."
                                className="font2 w-full p-2 rounded-md bg-gray-300 text-black font-medium focus:outline-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="font2 w-fit px-6 py-3 mt-2 bg-white shadow-md text-red-600 hover:text-red-700 font-bold rounded-md flex items-center gap-2 transition"
                        >
                            Send Message <FaArrowRight size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
