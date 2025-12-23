import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, BookOpen, Briefcase, Users, Play, Star, ArrowRight, ArrowUpRight } from 'lucide-react';

const OJT = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-[#0B0F19] min-h-[90vh] flex items-center pt-20 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                        <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
                            Building <span className="italic font-light">Careers,</span><br />
                            Breaking<br />
                            <span className="italic font-light">Barriers</span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-10 max-w-lg border-l-4 border-[#FACC15] pl-6 py-2">
                            Connecting underrepresented professionals with global opportunities, insights, and networks needed to build thriving tech careers.
                        </p>
                        <button className="bg-transparent border border-white text-white px-8 py-3 uppercase text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all">
                            Join Our Talent Network
                        </button>
                    </div>
                    <div className="relative h-[600px] hidden lg:block">
                        {/* Abstract Background Elements mimicking the image */}
                        <div className="absolute right-0 top-0 w-3/4 h-full bg-gradient-to-b from-gray-800 to-transparent opacity-20 rounded-l-[100px]"></div>
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOU1v2-X4X9icN_RWyXCbuk66NcV0zXJGALrDF1YsSTueT9L6BInUbDRQ0aSv1YMLwcIsVxBvynKfbsqfZON7asKTU-PCfry5vq0C18qJNJ5GFTHYfvvYtiL27L1na7O_oN--jkyrphs4ngsPVsGL0--W_e7lfpnTcaacOj0cxWyXFM-bEKyKXjAYVq7m63DRtuYMQcwdt37QaI0AEIvF0F0YvwC-hJjUcsJ1vsfmaFOKsDcjng_h7MP5U4dk4I9MYogjNdul-6w"
                            alt="Professional Team"
                            className="grayscale opacity-60 w-full h-full object-cover rounded-tl-[100px] border-l border-t border-gray-700"
                        />
                        <div className="absolute bottom-10 right-10 flex items-center gap-2 bg-[#0B0F19] p-4 rounded-full border border-gray-800">
                            <div className="flex -space-x-3">
                                <img className="w-8 h-8 rounded-full border border-black" src="https://i.pravatar.cc/100?img=1" alt="User" />
                                <img className="w-8 h-8 rounded-full border border-black" src="https://i.pravatar.cc/100?img=2" alt="User" />
                                <div className="w-8 h-8 rounded-full border border-black bg-yellow-400 text-black text-xs flex items-center justify-center font-bold">+2k</div>
                            </div>
                            <span className="text-gray-400 text-xs uppercase tracking-wide">Big Community Members</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white py-16 border-b border-gray-100">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-4xl font-heading font-light text-black">130<span className="text-xs align-top">+</span></h3>
                        <p className="text-gray-400 text-xs uppercase tracking-widest mt-2">Tech Giants</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-heading font-light text-black">1500<span className="text-xs align-top">+</span></h3>
                        <p className="text-gray-400 text-xs uppercase tracking-widest mt-2">Happy Clients</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-heading font-light text-black">2150<span className="text-xs align-top">+</span></h3>
                        <p className="text-gray-400 text-xs uppercase tracking-widest mt-2">Successful Projects</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-heading font-light text-black">16<span className="text-xs align-top">+</span></h3>
                        <p className="text-gray-400 text-xs uppercase tracking-widest mt-2">Countries</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-6 text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-4">
                        World Class Services For<br />
                        Crafting Your <span className="border-b-4 border-gray-200">Global Success</span>
                    </h2>
                </div>
                <div className="container mx-auto px-6 grid md:grid-cols-4 gap-6">
                    <ServiceCard
                        icon={<Plane className="text-blue-500" size={32} />}
                        title="USA Pathways"
                        desc="Comprehensive visa strategies for H1B, L1, and O1 applicants. Designed for seamless transitions."
                    />
                    <ServiceCard
                        icon={<BookOpen className="text-purple-500" size={32} />}
                        title="OJT Program"
                        desc="Intensive on-the-job training modules that bridge the gap between academic theory and practice."
                    />
                    <ServiceCard
                        icon={<Briefcase className="text-red-500" size={32} />}
                        title="Job Placement"
                        desc="Direct connection to our network of 500+ tech partners actively hiring skilled talent."
                    />
                    <ServiceCard
                        icon={<Users className="text-yellow-500" size={32} />}
                        title="Community Access"
                        desc="Join an exclusive network of peers and mentors for guidance, networking, and career support."
                    />
                </div>
            </section>

            {/* Clients Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-6">Happy Clients</p>
                    <h2 className="text-3xl font-heading font-bold text-black mb-12">Our Network of Trusted Brands</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {['Inter/Smart', 'TechCareer', 'DATAFlow', 'NextGen', 'CloudSys', 'BlockChain', 'DBEX', 'Nexus', 'Velvet', 'LaunchPad'].map(brand => (
                            <div key={brand} className="flex justify-center items-center h-12 border border-dashed border-gray-200 rounded">
                                <span className="font-bold text-gray-800">{brand}</span>
                            </div>
                        ))}
                    </div>
                    <button className="mt-12 text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-purple-600 hover:border-purple-600 transition-colors">
                        See All Clients
                    </button>
                </div>
            </section>

            {/* Voices of Success */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-6 mb-16 text-center">
                    <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-4">Voices of Success</h2>
                    <h2 className="text-4xl font-heading font-bold text-black">Tales from Our Esteemed Clientele</h2>
                </div>
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                    {/* Left Column: Rating Card */}
                    <div className="bg-[#6366F1] p-10 flex flex-col justify-center items-center text-white relative group overflow-hidden">
                        <div className="relative z-10 text-center">
                            <h3 className="text-7xl font-bold mb-2">4.9</h3>
                            <p className="text-sm opacity-80 mb-4">Average Review</p>
                            <div className="flex gap-1 text-yellow-400">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={20} />)}
                            </div>
                        </div>
                        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    </div>

                    {/* Middle Column: User Testimonial */}
                    <div className="relative group overflow-hidden bg-[#EAB308]">
                        <img
                            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
                            alt="Client"
                            className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-xs mb-2">PRODUCT MANAGER @ VENUS</p>
                            <h4 className="text-white font-bold text-xl">Vanessa Moore</h4>
                            <button className="absolute right-8 bottom-8 bg-white text-black p-3 rounded-full hover:scale-110 transition-transform">
                                <Play size={20} fill="currentColor" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Text Testimonials */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-white border border-gray-100 p-8 shadow-lg hover:shadow-xl transition-shadow flex-1">
                            <div className="flex gap-1 text-yellow-400 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={12} />)}
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                "Niche Tech is always available to help. Incredibly focused, efficient, communicative and driven with must-win fundraising team."
                            </p>
                            <p className="text-xs font-bold text-black">Kamal Teronco</p>
                        </div>
                        <div className="bg-[#EC4899] p-8 text-white flex flex-col justify-center items-center text-center flex-1">
                            <h3 className="text-2xl font-bold mb-2">Happy Clients</h3>
                            <p className="text-xs opacity-80 uppercase tracking-widest mb-6">ETUIS, INDUSTRIAL AND CHARITIES</p>
                            <ArrowRight size={24} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Yellow CTA Section (Footer Top) */}
            <section className="bg-[#FACC15] py-20">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">🚀</span>
                            <h2 className="text-4xl font-black italic text-black uppercase">Start Now!</h2>
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-6">Let's Get Your Career Moving</h3>
                        <div className="space-y-2 text-sm font-medium">
                            <p className="flex items-center gap-2"><span className="w-5">✉️</span> support@nichetech.com</p>
                            <p className="flex items-center gap-2"><span className="w-5">📞</span> +1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-8 rounded-lg border border-black/5">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="text-xs font-bold uppercase mb-1 block">Name *</label>
                                <input type="text" className="w-full bg-transparent border-b border-black/20 focus:border-black outline-none py-2 text-sm" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase mb-1 block">Phone *</label>
                                <input type="text" className="w-full bg-transparent border-b border-black/20 focus:border-black outline-none py-2 text-sm" placeholder="Your Number" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="text-xs font-bold uppercase mb-1 block">Email *</label>
                            <input type="email" className="w-full bg-transparent border-b border-black/20 focus:border-black outline-none py-2 text-sm" placeholder="Your Email" />
                        </div>
                        <button className="w-full bg-white text-black font-bold uppercase text-xs py-4 hover:bg-black hover:text-white transition-colors tracking-widest">
                            Submit Request
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ServiceCard = ({ icon, title, desc }) => (
    <div className="p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white group text-left">
        <div className="mb-6 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-black">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
        <div className="flex items-center text-xs font-bold uppercase tracking-wider text-black group-hover:text-purple-600 transition-colors cursor-pointer">
            View More <ArrowUpRight size={14} className="ml-1" />
        </div>
    </div>
);

export default OJT;
