import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { bestSkills, socialImgs } from '../constants';
import TitleHeader from '../components/TitleHeader';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import Divider from '../components/Divider';
import { div } from 'three/tsl';



const ContactMe = () => {
    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);

    const initialValues = {
        senderName: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
    };

    const validationSchema = Yup.object({
        senderName: Yup.string().required('Fullname is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        subject: Yup.string().required('Subject is required'),
        phone: Yup.string()
            .required('Phone number is required')
            .matches(/^[0-9]{10,15}$/, 'Phone must be 10 to 15 digits'),
        message: Yup.string().required('Message is required'),
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...FormData,
            [name]: value
        })
    }

    const onSubmit = async (values, { resetForm }) => {
        setLoading(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );
            resetForm();
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Your message was successfully sent. I’ll get back to you soon.',
            });
        } catch (error) {
            console.error('Email error', error);

            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Something went wrong while sending your message. Try again later.',
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <Divider />
            <section id='contact' className='w-full setion-padding xl:px-0'>


                <TitleHeader title="Contact With Me" sub='Contact' />

                <div className="w-full h-full md:px-20 p-5  flex flex-col mt-17  md:flex-row gap-6 md:gap-10">


                    <div className="w-full md:w-1/3 flex flex-col gap-5 rounded-xl font2 shadow-md ">
                        <div class="outer">
                            <div class="dot"></div>
                            <div class="card">
                                <div class="ray"></div>
                                <div class="text"></div>
                                <div></div>
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
                                    <SocialIcon className="text-2xl text-white size-6 md:size-8" />
                                </a>
                            ))}

                        </div>

                    </div>

                    {/* Right Section - Form */}
                    <div className="w-full md:w-2/3 card2 shadow-lg rounded-lg p-5 mt-17">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            <Form className="flex flex-col gap-4" ref={formRef}>
                                {/* Fullname */}
                                <div>
                                    <label className="text-sm font-semibold font2">FullName</label>
                                    <Field name="senderName" placeholder="Enter your fullname" className="font2 w-full p-2 rounded-md bg-gray-300 text-black font-medium focus:outline-none" />
                                    <ErrorMessage name="senderName" component="div" className="text-red-500 text-sm" />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="text-sm font-semibold font2">Email</label>
                                    <Field name="email" type="email" placeholder="Enter your email" className="font2 w-full p-2 rounded-md bg-gray-300 text-black font-medium focus:outline-none" />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="text-sm font-semibold font2">Phone</label>
                                    <Field name="phone" placeholder="Enter your phone" className="font2 w-full p-2 rounded-md bg-gray-300 text-black font-medium focus:outline-none" />
                                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="text-sm font-semibold font2">Subject</label>
                                    <Field name="subject" placeholder="Enter subject" className="font2 w-full p-2 rounded-md bg-gray-300 text-black font-medium focus:outline-none" />
                                    <ErrorMessage name="subject" component="div" className="text-red-500 text-sm" />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="text-sm font-semibold font2">Message</label>
                                    <Field as="textarea" rows="5" name="message" placeholder="Type your message..." className="font2 w-full p-2 rounded-md bg-gray-300 text-black font-medium focus:outline-none" />
                                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="font2 w-fit cursor-pointer px-6 py-3 mt-2 bg-white shadow-md text-red-600 hover:text-red-700 font-bold rounded-md flex items-center gap-2 transition"
                                >
                                    {loading ? 'Sending...' : 'Send Message'} <FaArrowRight size={18} />
                                </button>

                            </Form>
                        </Formik>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default ContactMe;
