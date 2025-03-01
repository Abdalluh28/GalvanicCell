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
            <footer className="bg-gray-800 text-white pl-5 py-6 shadow-md flex md:flex-row flex-col">
                {/* Contributors */}
                <div className="mb-2 md:w-1/4">
                    <h2 className="text-lg font-semibold">Developed By</h2>
                    <p className="text-sm md:text-base pl-2">Abdo Khaled</p>
                    <p className="text-sm md:text-base pl-2">Ali Hossom</p>
                    <p className="text-sm md:text-base pl-2">Abdelrhman Osama</p>
                    <p className="text-sm md:text-base pl-2">Mohamed Hamdy</p>
                </div>

                {/* College/Institution */}
                <div className="mb-2 md:w-1/4">
                    <h2 className="text-lg font-semibold">College</h2>
                    <p className="text-sm md:text-base pl-2">Shoubra Faculty of Engineering</p>
                </div>

                {/* Source Link */}
                <div className="mb-2 md:w-1/4">
                    <h2 className="text-lg font-semibold">Source</h2>
                    <a 
                        href="https://teachchemistry.org/simulations/2021/may/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline pl-2"
                    >
                        View Original Simulation
                    </a>
                </div>

                {/* Rights */}
                <p className="text-sm md:text-base mt-2 md:w-1/4">© 2025 Galvanic/Voltaic Cells. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
