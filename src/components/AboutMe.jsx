import photoMe from "../assets/photo-me.png";

const AboutMe = () => {
    return (
        <section id="about-me" className="px-4 mt-10 mb-40 overflow-hidden">
            <h2 className="font-helvetica text-[100px] font-bold uppercase -mb-4">Me</h2>
            <div className="overflow-scroll">
                <ul className="grid grid-cols-10 grid-rows-2 w-454 h-86">
                    <li className="w-40 h-40 bg-blue text-white flex flex-col-reverse justify-center items-center">
                        <h3 className="font-arial text-[18px] opacity-80 -mt-2">Age</h3>
                        <p className="font-helvetica text-[56px] font-bold">20</p>
                    </li>
                    <li className="w-86 h-40 row-2 col-start-1 col-end-2 text-black border-8 flex flex-col-reverse justify-center items-center mt-auto">
                        <h3 className="font-arial text-[18px] opacity-80 -mt-2">Nationality</h3>
                        <p className="font-helvetica text-[56px] font-bold">Belgian</p>
                    </li>
                    <li className="w-86 h-86 row-start-1 row-end-2 col-start-4 col-end-5">
                        <h3 className="visually-hidden">Picture</h3>
                        <img src={photoMe} alt="" />
                    </li>
                    <li className="w-86 h-40 row-1 col-start-2 col-end-3 bg-black text-white flex flex-col-reverse justify-center items-center pt-3">
                        <h3 className="font-arial text-[18px] opacity-80 mt-1">Languages</h3>
                        <ul className="flex flex-col items-end">
                            <li className="flex flex-row items-center gap-3">
                                <h4 className="font-arial text-[20px]">Dutch</h4>
                                <div className="h-4 w-40 bg-[#474747]"><div className="h-4 w-38 bg-white"></div></div>
                            </li>
                            <li className="flex flex-row items-center gap-3">
                                <h4 className="font-arial text-[20px]">English</h4>
                                <div className="h-4 w-40 bg-[#474747]"><div className="h-4 w-30 bg-white"></div></div>
                            </li>
                        </ul>
                    </li>
                    <li className="w-40 h-86 row-start-1 row-end-2 col-6 border-8 border-blue flex justify-center">
                        <h3 className="visually-hidden">Hobbies</h3>
                        <ul className="text-blue flex flex-col justify-center items-center gap-14">
                            <li className="flex flex-row-reverse items-center gap-3">
                                <h4 className="font-arial text-[16px]">Running</h4>
                                <div className="h-10 w-10 p-1.25 bg-blue">
                                    <svg className="w-full h-full" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.7792 32.8796L22.9467 11.8466L16.7792 12.6497L12.2716 22.0792L8.79949 20.7223L14.3731 9.83885L25.5203 7.8311L31.901 8.88344L38.0381 13.6467L46.033 6.69568L48.5 9.10498L38.0381 18.0222L31.901 13.6467L27.4848 24.3916L38.3883 30.9272L40.0482 47.5847L35.5102 48L33.9112 33.6965L23.9822 29.3072L20.8147 37.6151L0.5 35.455L0.972081 31.5918L16.7792 32.8796Z" fill="#F2F2F2" />
                                        <rect width="7.28982" height="6.6681" transform="matrix(0.986921 0.161205 -0.193824 0.981036 26.7402 0)" fill="#F2F2F2" />
                                    </svg>
                                </div>
                            </li>
                            <li className="flex flex-row-reverse items-center gap-3">
                                <h4 className="font-arial text-[16px]">Fitness</h4>
                                <div className="h-10 w-10 p-0.5 bg-blue">
                                    <svg className="w-full h-full" width="57" height="58" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="7.6582" y="33.1688" width="5.8947" height="23.5776" transform="rotate(-45 7.6582 33.1688)" fill="#F2F2F2" />
                                        <rect x="49.3418" y="24.8311" width="5.8947" height="23.5776" transform="rotate(135 49.3418 24.8311)" fill="#F2F2F2" />
                                        <rect x="5.57617" y="41.505" width="5.8947" height="14.736" transform="rotate(-45 5.57617 41.505)" fill="#F2F2F2" />
                                        <rect x="51.4258" y="16.4952" width="5.8947" height="14.736" transform="rotate(135 51.4258 16.4952)" fill="#F2F2F2" />
                                        <rect x="7.13867" y="47.236" width="1.47367" height="4.42079" transform="rotate(-45 7.13867 47.236)" fill="#F2F2F2" />
                                        <rect x="49.8613" y="10.7643" width="1.47367" height="4.42079" transform="rotate(135 49.8613 10.7643)" fill="#F2F2F2" />
                                        <rect x="37.3574" y="23.269" width="20.6314" height="4.42079" transform="rotate(135 37.3574 23.269)" fill="#F2F2F2" />
                                    </svg>
                                </div>
                            </li>
                            <li className="flex flex-row-reverse items-center gap-3">
                                <h4 className="font-arial text-[16px]">Gaming</h4>
                                <div className="h-10 w-10 p-1.25 bg-blue">
                                    <svg className="w-full h-full" width="49" height="46" viewBox="0 0 49 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.3184 10.3281L42.5061 7.24835L48.4994 38.7514L36.469 41.0403L26.3184 10.3281Z" fill="#F2F2F2" />
                                        <path d="M42.5039 7.24875L6.49249 7.24828L0.499185 38.7514L12.5296 41.0402L17.605 25.6841L42.5039 7.24875Z" fill="#F2F2F2" />
                                        <rect x="7.77734" y="7.26355" width="33.7219" height="20.9271" fill="#F2F2F2" />
                                        <ellipse cx="14.2574" cy="17.6948" rx="5.18319" ry="5.18319" fill="#6693DE" />
                                        <ellipse cx="33.9854" cy="13.5481" rx="2.07328" ry="2.07328" fill="#6693DE" />
                                        <ellipse cx="38.1318" cy="17.6947" rx="2.07328" ry="2.07328" transform="rotate(90 38.1318 17.6947)" fill="#6693DE" />
                                        <ellipse cx="33.9854" cy="21.8412" rx="2.07328" ry="2.07328" fill="#6693DE" />
                                        <ellipse cx="29.8388" cy="17.6947" rx="2.07328" ry="2.07328" transform="rotate(90 29.8388 17.6947)" fill="#6693DE" />
                                        <circle cx="14.258" cy="17.6947" r="3.04512" fill="#F2F2F2" />
                                    </svg>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="w-177.5 row-start-1 row-end-2 col-start-7 col-end-10">
                        <h3 className="visually-hidden">Education</h3>
                        <ul className="flex gap-6">
                            <li className="w-86 h-86 flex flex-col justify-between bg-black p-8 text-white font-arial">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <h4 className="font-helvetica text-[24px] font-bold">Electricity-Electronics</h4>
                                            <p className="text-[16px] italic opacity-60">Secondary school Diploma</p>
                                        </div>
                                        <p className="text-[18px]">Sep 2019 - Jun 2023</p>
                                    </div>
                                    <p className="text-[18px]/5.5">Learned various electronic calculations and gained a solid understanding of electronic components. I also learned how to program them using Arduino.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg className="h-5 w-auto" width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 12 32 12 32C12 32 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z" fill="#F2F2F2" />
                                    </svg>
                                    <p className="text-[18px]">VTI Tielt, Tielt, Belgium</p>
                                </div>
                            </li>
                            <li className="w-86 h-86 flex flex-col justify-between bg-black p-8 text-white">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <h4 className="font-helvetica text-[24px]/7 font-bold">Digital Design and Development</h4>
                                            <p className="text-[16px] italic opacity-60">Bachelor Diploma</p>
                                        </div>
                                        <p className="text-[18px]">Sep 2023 - ...</p>
                                    </div>
                                    <p className="text-[18px]/5.5">Learned to design and develop user-friendly web applications using UX/UI principles and technologies like HTML, CSS, JavaScript, ...</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg className="h-5 w-auto" width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 12 32 12 32C12 32 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z" fill="#F2F2F2" />
                                    </svg>
                                    <p className="text-[18px]">Howest, Kortrijk, Belgium</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default AboutMe;
