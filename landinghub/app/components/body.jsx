import React from 'react';

const Body = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        <center>PARAS<br/>CODXO Internship Projects</center>
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        During my CODXO internship, I developed three key projects:
                        A Portfolio-Website, WeatherVue-App, and A Todo-list Application.
                        These experiences sharpened my skills in Web development,
                        emphasizing user-centered design and practical application development.
                    </p>
                </div>

                <div className="flex flex-wrap -m-4">

                    <div className="lg:w-1/3 w-full p-4">
                        <a href="https://parastodolist.vercel.app/" target="_blank" className=" hover:text-black ">
                            <div className="flex relative bg-slate-400 border-4 border-indigo-500/75">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full pt-28 pb-28 object-center"
                                    src="/images/1.png"
                                />
                                <div className="px-8 py-10 relative h-[32rem] z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        parastodolist
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        ToDo App
                                        <hr />
                                    </h1>
                                    <p className="leading-relaxed">
                                        A sleek ToDo List app build using ReactJS.
                                        <br />
                                        <br />
                                        Features:
                                        <br />🔹Landing Page Implementation.
                                        <br />🔹Dark & Light Theme Switch Support.
                                        <br />🔹Fully implemented CRUD : <br /> {" "} (Create, Read, Update, Delete) operations.
                                        <br />🔹Local Storage Support.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="lg:w-1/3 w-full p-4">
                        <a href="https://parasportfolio.vercel.app/" target="_blank" className=" hover:text-black ">
                            <div className="flex relative bg-slate-400 border-4 border-indigo-500/75">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full pt-28 pb-28 object-center"
                                    src="/images/2.png"
                                />
                                <div className="px-8 py-10 relative h-[32rem] z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        parasportfolio
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Portfolio Website
                                        <hr />
                                    </h1>
                                    <p className="leading-relaxed">
                                        A portfolio website build using Next.js 14 & Resend API.
                                        <br />
                                        <br />
                                        Features:
                                        <br />🔹 Professional design to showcase projects and skills.
                                        <br />🔹 Seamless navigation and intuitive layout.
                                        <br />🔹 Designed with TailwindCSS and SASS for a sleek and responsive interface.
                                        <br />🔹 Animated transitions using Framer Motion for dynamic user experience.
                                        <br />🔹 Integration with Resend API for contact functionalities.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="lg:w-1/3 w-full p-4">
                        <a href="https://skyweathervue.vercel.app/" target="_blank" className='hover:text-black'>
                            <div className="flex relative bg-slate-400 border-4 border-indigo-500/75">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full pt-28 pb-28 object-center"
                                    src="/images/3.png"
                                />
                                <div className="px-8 py-10 relative h-[32rem] z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        skyweathervue
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        WeatherVue
                                        <hr />
                                    </h1>
                                    <p className="leading-relaxed">
                                        A feature-rich Weather App build using Next.js 14 & OpenWeatherMap API.
                                        <br />
                                        <br />
                                        Features:
                                        <br />🔹 Responsive design ensuring a seamless user experience across devices.
                                        <br />🔹 Integration with OpenWeatherMap API for real-time weather data.
                                        <br />🔹 Detailed and simplified weather displays.
                                        <br />🔹 Includes temperature, humidity, wind speed, and more.
                                        <br />🔹 Forecasting feature providing hourly and weekly updates.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Body;
