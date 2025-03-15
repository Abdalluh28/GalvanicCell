import React from "react";

export default function App() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-blue-600 text-white text-center py-4 shadow-md">
                <h1 className="text-2xl md:text-3xl font-semibold">Galvanic/Voltaic Cells</h1>
            </header>

            {/* Main Content - Keeps Natural Height */}
            <main className="flex flex-grow justify-center items-center py-6">
                <iframe
                    id="simulation-frame"
                    className="lg:w-[90%] w-full lg:h-[900px] md:h-[1400px] h-[1300px] border-2 border-black rounded-lg"
                    title="App Simulation"
                    src="https://teachchemistry.org/simulations/2021/may/"
                ></iframe>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white pl-5 py-6 shadow-md flex flex-col">
                {/* Contributors */}
                <div className="flex lg:flex-row flex-col">
                    <div className="flex md:flex-row flex-col lg:w-1/2 w-full mb-4">
                        <div className="mb-2 md:w-1/2 w-full">
                            <h2 className="text-lg font-semibold">Developed By</h2>
                            <p className="text-sm md:text-base pl-2 font-bold">Omnia Essam</p>
                            <p className="text-sm md:text-base pl-2 font-bold">Rokaya Ayman</p>
                            <p className="text-sm md:text-base pl-2 font-bold">Sohaila Mohamed</p>
                            <p className="text-sm md:text-base pl-2 font-bold">Somaya Salah</p>
                            <p className="text-sm md:text-base pl-2 font-bold">Esraa Mamdouh</p>
                            <p className="text-sm md:text-base pl-2 font-bold">Mai Ali</p>
                        </div>

                        <div className="mb-2 md:w-1/2 w-full">
                            <h2 className="text-lg font-semibold">Contact</h2>
                            <p className="text-sm md:text-base pl-2">STEM-Chemistry2022_23@edu.asu.edu.eg</p>
                            <p className="text-sm md:text-base pl-2">STEM-Chemistry2022_5@edu.asu.edu.eg</p>
                            <p className="text-sm md:text-base pl-2">STEM-Chemistry2022_8@edu.asu.edu.eg</p>
                            <p className="text-sm md:text-base pl-2">STEM-Chemistry2022_7@edu.asu.edu.eg</p>
                            <p className="text-sm md:text-base pl-2">STEM-Chemistry2022_1@edu.asu.edu.eg</p>
                            <p className="text-sm md:text-base pl-2">STEM-Chemistry2022_21@edu.asu.edu.eg</p>
                        </div>
                    </div>

                    {/* Supervisor */}
                    <div className="flex md:flex-row flex-col lg:w-1/2 w-full mb-4">
                        <div className="mb-2 md:w-1/2 w-full">
                            <h2 className="text-lg font-semibold">Supervisor</h2>
                            <p className="text-sm md:text-base pl-2">Dr. Raghda Kamal Elden</p>
                        </div>

                        {/* College/Institution */}
                        <div className="mb-2 md:w-1/2 w-full">
                            <h2 className="text-lg font-semibold">University</h2>
                            <p className="text-sm md:text-base pl-2">Ain Shams University</p>
                            <p className="text-sm md:text-base pl-2">Bachelor of Science and Education (STEM Chemistry, English)</p>
                            <p className="text-sm md:text-base pl-2">Group 307</p>
                        </div>
                    </div>


                    {/* Contact Emails */}
                </div>

                {/* Rights */}
                <p className="text-sm md:text-base mt-2 md:w-full text-center">© 2025 STEM Chemistry Program, Ain Shams University. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
