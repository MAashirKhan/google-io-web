import React from "react";

const cardData = [
    {
        title: "Android",
        image: "/assets/ourfocus/android.webp",
        gradient: "linear-gradient(180deg,#34a853,#2daeb8,#4285f4)",
        borderColor: "#4285f4",
    },
    {
        title: "AI",
        image: "/assets/ourfocus/ai.webp", // Please replace with the correct image path
        gradient: "linear-gradient(180deg,#fbbc04,#ff902a,#ea4335)",
        borderColor: "#ea4335",
    },
    {
        title: "Web",
        image: "/assets/ourfocus/web.webp", // Please replace with the correct image path
        gradient: "linear-gradient(180deg,#fbbc04,#8cc52f,#34a853)",
        borderColor: "#34a853",
    },
    {
        title: "Cloud",
        image: "/assets/ourfocus/cloud.webp", // Please replace with the correct image path
        gradient: "linear-gradient(180deg,#ea4335,#9b72cb,#4285f4)",
        borderColor: "#4285f4",
    }
]

const WhyAttendSection: React.FC = () => {
    return (
        <section>
            <h1 className="text-4xl font-bold mb-6 text-center mt-20">Our Focus Area's</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="col-span-12">
                    <div className="flex flex-col">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {cardData.map((card, index) => (
                                <div key={index} className="rounded-2xl overflow-hidden">
                                    <div
                                        className="p-6 flex justify-center items-center"
                                        style={{ background: card.gradient }}
                                    >
                                        <img src={card.image} alt={card.title} className="h-46 w-46 object-cover" />
                                    </div>
                                    <div className="bg-white p-4 text-center border-x-2 border-b-2 rounded-b-2xl" style={{ borderColor: card.borderColor }}>
                                        <h3 className="text-lg font-semibold">{card.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold mb-6 mt-20 text-center">What to Expect</h1>
                    <p className="mt-4">
                        An annual event hosted by the Google Developers Group across the world to bring the technology closer to the developers. It is an all-day developer conference where we aim to focus on multiple technologies through lightning talks, sessions, workshops, etc.
                    </p>
                </div>

                <div className="col-span-12 md:col-span-4 rounded-2xl border-2 border-red-500 overflow-hidden">
                    <div className="p-6 flex justify-center items-center" style={{ background: 'linear-gradient(180deg,#fbbc04,#ff902a,#ea4335)' }}>
                        <img src="/assets/whattoexpect/technicalcontent.webp" alt="Tune in live or on demand" className="h-60 w-60 object-cover" />
                    </div>
                    <div className="bg-white h-full p-6">
                        <h2 className="text-xl font-semibold">Technical content</h2>
                        <p className="text-sm mt-2">Worldwide events hosted by the Google Developer Groups community, featuring leading experts on Google technologies in areas like Android, Firebase, Flutter, Machine Learning and so much more!</p>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-4 rounded-2xl border-2 border-blue-500 overflow-hidden">
                    <div className="p-6 flex justify-center items-center" style={{ background: 'linear-gradient(180deg,#34a853,#2daeb8,#4285f4)' }}>
                        <img src="/assets/whattoexpect/panel.svg" alt="Grow your skills" className="h-60 w-60 object-cover" />
                    </div>
                    <div className="bg-white h-full p-6">
                        <h2 className="text-xl font-semibold">Panel Discussions</h2>
                        <p className="text-sm mt-2">Full-day panel-discussions, all centered on your favorite Google technologies.</p>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-4 rounded-2xl border-2 border-blue-500 overflow-hidden">
                    <div className="p-6 flex justify-center items-center" style={{ background: 'linear-gradient(180deg,#ea4335,#9b72cb,#4285f4)' }}>
                        <img src="/assets/whattoexpect/community.webp" alt="Join a community group" className="h-60 w-60 object-cover" />
                    </div>
                    <div className="bg-white h-full p-6">
                        <h2 className="text-xl font-semibold">Networking</h2>
                        <p className="text-sm mt-2">Meet and connect with other developers in your community.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WhyAttendSection;
