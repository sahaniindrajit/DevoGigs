import Card from "../Components/Card"
import { redirect, useNavigate } from "react-router-dom";
import { Briefcase, Calendar, Github, Twitter,Linkedin  } from "lucide-react"

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header className="flex items-center justify-between p-4 bg-gray-100">
                    <div className="text-2xl font-bold text-gray-800">DevConnect</div>
                    <nav className="flex space-x-4">
                        <button onClick={() => { navigate('/job') }}

                            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            <Briefcase className="w-4 h-4 mr-1" />
                            Job Opportunities
                        </button>
                        <button
                            to="/events"
                            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            <Calendar className="w-4 h-4 mr-1" />
                            Tech Events
                        </button>
                    </nav>
                </header>

                <main className="flex-grow">
                    <section className="container mx-auto px-4 py-16 text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to DevConnect</h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            A thriving community of developers, fostering collaboration, learning, and growth in the world of technology.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={() => { navigate('/join') }}
                                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                            >
                                Join Our Community
                            </button>
                            <button
                                onClick={() => { navigate('/about') }}
                                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
                            >
                                Learn More
                            </button>
                        </div>
                    </section>
                </main>

                <footer className="bg-gray-100 py-8">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center space-x-6">
                            <button
                                 onClick={() => { window.location.href = 'https://discord.com/invite/axf2Qwv3' }}
                                className="text-gray-600 hover:text-gray-800 transition-colors">
                                <span className="sr-only">Discord</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => { window.location.href = 'https://x.com/devogigs' }}
                                className="text-gray-600 hover:text-gray-800 transition-colors">
                                <span className="sr-only">Linkedin</span>
                                <Linkedin  className="h-6 w-6" />
                            </button>
                            <button
                                onClick={() => { window.location.href = 'https://x.com/devogigs' }}
                                className="text-gray-600 hover:text-gray-800 transition-colors">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" />
                            </button>
                            <button
                                onClick={() => { window.location.href = 'https://github.com/devogigs' }}
                                className="text-gray-600 hover:text-gray-800 transition-colors">
                                <span className="sr-only">GitHub</span>
                                <Github className="h-6 w-6" />
                            </button>
                        </div>
                        <p className="mt-8 text-center text-gray-500 text-sm">
                            Â© {new Date().getFullYear()} DevConnect. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
export default Home