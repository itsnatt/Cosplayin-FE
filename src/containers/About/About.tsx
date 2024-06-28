// import NavBar from 'components/Layout/Header/Navbar/Navbar';
// import Link from 'next/link';
// import React from "react"

// const About = () => {
//   return (
//     <div>
//       <NavBar />
//       <div className="pt-20 bg-white">
//         <div className="container mx-auto px-4 py-8">
//           <h2 className="mb-4 lg:mb-5 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">About Us</h2>
//           <p className="text-center text-lg text-gray-700">Welcome to Cosplay.in! We are the best cosplay rental service in the world. Whether you need a full costume, accessories, or wigs, we've got you covered. Rent with us and experience top-quality service and a wide variety of options.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// pages/about.js


import NavBar from 'components/Layout/Header/Navbar/Navbar';
import Link from 'next/link';
import { FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';

const About = () =>  {
    return (
        <div>
          <NavBar />
            <section className="bg-white dark:bg-blue-500" style={{ backgroundImage: "url('/img-use/BGCosplayIn.JPG')" }}>
                <div className="container mx-auto px-6 py-16 text-center flex flex-col justify-center items-center h-screen">
                    <div className="max-w-lg">
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-white lg:text-4xl">Tempat Mencari Costume Cosplay Pertama Di Indonesia!</h1>
                        <p className="mt-6 text-gray-500 dark:text-gray-300">Tempat dimana anda mencari costume pilihan anda tanpa ribet mencari akun penyewaan Costume</p>
                    </div>
                </div>
            </section>

            <section className="w-100 mx-auto text-center pt-16">
                <h1 className="text-4xl font-semibold">Apa yang kamu dapat di Cosplay.in?</h1>
                <p className="text-gray-700 my-4">Di Cosplay.In bahan-bahan yang <br />digunakan terbuat dari bahan yang premium dan berkualitas<br />dan info atau berita mengenai Event Jejepangan sesuai dengan daerah anda</p>
            </section>

            <section>
                <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
                    <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
                        <div className="flex flex-col items-center sm:px-5 md:flex-row">
                            <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
                                <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
                                    <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">Penyewaan Costume Cosplay Terlengkap.</a>
                                    <div className="pt-2 pr-0 pb-0 pl-0"></div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="block">
                                    {/* <img src="/img-use/Photo1.JPG" className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
                            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                                {/* <img src="/img-use/Photo2.JPG" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-" /> */}
                                <a className="text-lg font-bold sm:text-xl md:text-2xl">Improving your day to the MAX</a>
                                <p className="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                                <div className="pt-2 pr-0 pb-0 pl-0">
                                    <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Jack Sparrow</a>
                                    <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, March 2021 ·</p>
                                    <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                                {/* <img src="/img-use/Photo6.JPG" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-" /> */}
                                <a className="text-lg font-bold sm:text-xl md:text-2xl">Improving your day to the MAX</a>
                                <p className="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                                <div className="pt-2 pr-0 pb-0 pl-0">
                                    <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Jack Sparrow</a>
                                    <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, March 2021 ·</p>
                                    <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                                {/* <img src="/img-use/Photo4.JPG" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-" /> */}
                                <a className="text-lg font-bold sm:text-xl md:text-2xl">Improving your day to the MAX</a>
                                <p className="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                                <div className="pt-2 pr-0 pb-0 pl-0">
                                    <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Jack Sparrow</a>
                                    <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, March 2021 ·</p>
                                    <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
                    <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
                        <div className="flex flex-col items-center sm:px-5 md:flex-row">
                            <div className="w-full md:w-1/2">
                                <div className="block">
                                    {/* <img src="/img-use/event1.JPG" className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full" /> */}
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
                                <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
                                    <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl text-right">Info Event Jejepangan di Indonesia.</a>
                                    <div className="pt-2 pr-0 pb-0 pl-0"></div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
                            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                                {/* <img src="/img-use/event2.JPG" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-" /> */}
                                <a className="text-lg font-bold sm:text-xl md:text-2xl">Improving your day to the MAX</a>
                                <p className="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                                <div className="pt-2 pr-0 pb-0 pl-0">
                                    <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Jack Sparrow</a>
                                    <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, March 2021 ·</p>
                                    <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                                {/* <img src="/img-use/event3.JPG" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-" /> */}
                                <a className="text-lg font-bold sm:text-xl md:text-2xl">Improving your day to the MAX</a>
                                <p className="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                                <div className="pt-2 pr-0 pb-0 pl-0">
                                    <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Jack Sparrow</a>
                                    <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, March 2021 ·</p>
                                    <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                                {/* <img src="/img-use/event4.JPG" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-" /> */}
                                <a className="text-lg font-bold sm:text-xl md:text-2xl">Improving your day to the MAX</a>
                                <p className="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                                <div className="pt-2 pr-0 pb-0 pl-0">
                                    <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Jack Sparrow</a>
                                    <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, March 2021 ·</p>
                                    <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="footer w-full text-center py-8 bg-gray-200">
                <p className="mb-4">Disini kami memaksa anda untuk menyewa di tempat cosplay.in. karena ditempat kami adalah tempat rental terbaik didunia ajg<br />dah kubilang disini aja kalo nyewa Ngeyell, dah dah dah nanti sewa disini aja yaa, ga mau tau</p>
                <div className="flex justify-center mb-6">
                    <Link href="https://discord.gg/h65vrTdZcZ" legacyBehavior passHref>
                        <a target="_blank"><FaDiscord className="mx-2 text-red-500" /></a>
                    </Link>
                    <Link href="https://twitter.com/kobokanaeru" legacyBehavior passHref>
                        <a target="_blank"><FaTwitter className="mx-2 text-red-500" /></a>
                    </Link>
                    <Link href="https://www.instagram.com/animexepriwer/" legacyBehavior passHref>
                        <a target="_blank"><FaInstagram className="mx-2 text-red-500" /></a>
                    </Link>
                </div>
                <p className="mb-2">Made with <i className="fa fa-heart-o text-red-500"></i> by Cosplay.In</p>
            </section>
        </div>
    );
}
export default About;