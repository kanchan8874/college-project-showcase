const AboutUs = () => {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg">
                        <h1 className="mb-2 text-4xl capitalize  font-extrabold leading-none text-center tracking-normal text-gray-900 md:text-6xl md:tracking-tight lg:mb-7">
                            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-900 to-purple-500 lg:inline">About Us </span>
                        </h1>
                        <p className="text-gray-600 text-center font-serif text-lg">
                            This platform is designed to display the innovative projects created by students.
                            Our goal is to provide a space where creativity meets technology, allowing students
                            to present their work to a wider audience.
                        </p>
                        <div className="mt-6 text-center">
                            <h2 className="text-xl font-bold font-serif text-gray-800">Why Choose Us?</h2>
                            <ul className="list-disc list-inside text-gray-600 mt-2 font-serif text-lg">
                                <li>Showcase student projects effectively</li>
                                <li>Easy navigation and user-friendly design</li>
                                <li>Connect students with industry experts</li>
                                <li>Encourage learning and innovation</li>
                            </ul>
                        </div>
                        <div className="mt-6 text-center font-serif text-lg">
                            <p className="text-gray-700">Join us in celebrating creativity and innovation! 🎉</p>
                        </div>

                    </div>
                    <div className="mt-12 md:mt-0">
                        <img
                            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                            alt="About Us Image"
                            className="object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AboutUs;
