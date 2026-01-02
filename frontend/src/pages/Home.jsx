import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col max-w-[1440px] mx-auto w-full bg-white relative">
            <section className="relative bg-brand-dark overflow-hidden flex flex-col rounded-[50px] mx-auto"
                style={{
                    width: '1360px',
                    height: '1276px',
                    marginTop: '100px',
                    marginLeft: '40px',
                    marginRight: 'auto'
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-hero-glow pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-900/20 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col">
                    <div className="flex flex-col lg:flex-row justify-between items-start pt-10 mb-20">
                        <div className="max-w-3xl">
                            <h1 className="font-heading text-5xl md:text-7xl font-light text-white leading-tight mb-2">
                                Build Your <span className="font-normal italic border-b border-white pb-2 inline-block">Career</span> Globally,
                            </h1>
                            <h1 className="font-heading text-6xl md:text-8xl font-bold text-white mb-12">
                                Start Right
                            </h1>
                            <div className="flex flex-wrap gap-4 mt-8">
                                <Link to="/usa-pathways" className="gradient-border-btn text-white px-8 py-3 text-sm rounded font-medium hover:bg-white/5 transition-colors">
                                    Move to the USA
                                </Link>
                                <Link to="/ojt" className="border border-purple-500/50 text-white px-8 py-3 text-sm rounded font-medium hover:border-purple-500 transition-colors">
                                    Start Your Career
                                </Link>
                            </div>
                        </div>
                        <div className="max-w-md mt-10 lg:mt-0 lg:pl-10">
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                Niche Tech Career helps individuals build real careers, either by moving to the USA legally or by starting strong through a performance-based On-Job Trainee (OJT) program.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    <img alt="User" className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL3zA9QDWHdXb6-1Yl-Tbu2EHzQ6kjkrB-A1YN2nCI86JIvll0mza3u3PGvRbhXFZ3xj9WS93RHdMAtYpEu-iwvfEKPjoFM3HJnwKSR8sqrDYsRndSW3m9UZZ96HlZWfswOQ3voXFB72i3gOXovv_WPp6diMyH1Sj8DCM8r0i-uscG7YLMa_iW5HRqAWlFhjUCd6cJMIxbklUB1rGsAV6YzaFEtqYpj2Ws6szyaNshSGWHdquLUYL_oJ8hqFregsTQexs1Pk6Umw" />
                                    <img alt="User" className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn0LQ2dh_Wvago-Xf4HatRFC8pQUiqSDZDOEAyDMS2rWuF1nWRzX37R2ptZbe46TSPdiF4u5Iv3HUNWbu7sHyKHHkxqs_xKTDUABs9DLTzAOVDj_cTb8yXp35O4MMAh1p-3s7ROsxyB5HzYW_yEkQg0QI9CZK7-nknjJZ7NMHM-sOEDr-Ls7MoiSpt4R7wudsJZyo64qc26ZO8jFE39beZKGD7YoOO0rU2f6-z85SUcZhrzGKv2cXBTPSjWguG9kCGr869fLEWDw" />
                                    <img alt="User" className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOU1v2-X4X9icN_RWyXCbuk66NcV0zXJGALrDF1YsSTueT9L6BInUbDRQ0aSv1YMLwcIsVxBvynKfbsqfZON7asKTU-PCfry5vq0C18qJNJ5GFTHYfvvYtiL27L1na7O_oN--jkyrphs4ngsPVsGL0--W_e7lfpnTcaacOj0cxWyXFM-bEKyKXjAYVq7m63DRtuYMQcwdt37QaI0AEIvF0F0YvwC-hJjUcsJ1vsfmaFOKsDcjng_h7MP5U4dk4I9MYogjNdul-6w" />
                                </div>
                                <div>
                                    <span className="block text-white font-bold text-lg leading-none">90%</span>
                                    <span className="text-gray-500 text-xs uppercase tracking-wider">Success Rate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full mt-auto">
                        <img
                            src="/hero-mask-group.png"
                            alt="Professionals"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl font-thin tracking-tight uppercase">
                        <span className="text-brand-dark">START</span> <span className="font-normal">YOUR</span> <span className="text-outline font-light">CAREER</span>
                    </h2>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-brand-dark">
                            Why Niche <span className="font-bold">Tech Career</span>
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We don't sell dreams.<br />
                            We evaluate profiles, explain realistic options, and guide candidates through<br className="hidden md:block" />
                            structured, legal, and outcome-driven pathways.
                        </p>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <img
                            src="/services-cards.png"
                            alt="Why Niche Tech Career – Services Overview"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="text-center mt-20 pb-10">
                        <Link to="/contact" className="border border-purple-500 text-brand-dark px-8 py-3 rounded text-sm font-medium hover:bg-purple-50 transition-colors uppercase tracking-widest">
                            Get a Free Profile Evaluation
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-black py-20 border-t border-gray-900">
                <div className="container mx-auto px-6">
                    <img
                        src="/group-cta.png"
                        alt="Ready to Take the Next Step?"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;
