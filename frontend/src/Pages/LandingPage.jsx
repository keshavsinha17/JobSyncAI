import React from 'react'

const LandingPage = () => {
    return (
        <div>
            <body class="bg-gray-900 text-gray-100 font-[&#39;Space_Grotesk&#39;]">
                <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
                    <div class="max-w-8xl mx-auto px-4">
                        <div class="flex items-center justify-between h-16">
                            <div class="flex items-center">
                                <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" class="h-8" />
                            </div>
                            <div class="hidden md:block">
                                <div class="flex items-center space-x-8">
                                    <a href="#features" class="text-gray-300 hover:text-white">Features</a>
                                    <a href="#testimonials" class="text-gray-300 hover:text-white">Testimonials</a>
                                    <a href="#faq" class="text-gray-300 hover:text-white">FAQ</a>
                                    <button class="!rounded-button bg-custom text-white px-6 py-2 font-medium">Join Waitlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <main class="pt-16">
                    <section class="relative min-h-screen flex items-center overflow-hidden">
                        <div class="absolute inset-0">
                            <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-custom/10 rounded-full blur-3xl"></div>
                        </div>
                        <div class="max-w-8xl mx-auto px-4 relative z-10 py-32">
                            <div class="grid lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <h1 class="text-6xl font-bold leading-tight mb-6">Never Lose Track of Your Job Applications Again 🚀</h1>
                                    <p class="text-xl text-gray-300 mb-8">Auto-import, organize, and get AI-driven insights for your job search. Take control of your career journey with smart automation.</p>
                                    <div class="flex gap-4">
                                        <input type="email" placeholder="Enter your email" class="bg-gray-800 border-gray-700 text-white px-6 py-3 rounded-lg flex-1 max-w-md" />
                                        <button class="!rounded-button bg-custom text-white px-8 py-3 font-medium">Join Waitlist</button>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://creatie.ai/ai/api/search-image?query=A 3D vector-style image with a clean, solid background color that contrasts significantly with the main theme. The content includes a modern dashboard interface with job application tracking cards, AI insights panel, and notification elements. The style is minimalist and professional with a futuristic touch&width=600&height=500&orientation=portrait&removebg=true&flag=6db8c573-7c51-48d0-9276-e230a3b5573f&flag=d31f971d-6fd2-4892-8513-6410795f00fc" alt="Dashboard Preview" class="rounded-lg shadow-2xl" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="py-32 bg-gray-800/50" id="features">
                        <div class="max-w-8xl mx-auto px-4">
                            <div class="grid lg:grid-cols-2 gap-16 items-center mb-32">
                                <div>
                                    <h2 class="text-4xl font-bold mb-6">Track Your Job Search Journey</h2>
                                    <p class="text-xl text-gray-300">Job seekers apply to 50+ jobs but struggle to track interviews, referrals, and follow-ups. Our AI-powered dashboard automates this process—so you never miss an opportunity.</p>
                                </div>
                                <div>
                                    <div class="bg-gray-800 rounded-lg p-8">
                                        <div class="flex items-center justify-between mb-6">
                                            <div>
                                                <span class="text-4xl font-bold text-custom">50+</span>
                                                <p class="text-gray-400">Average Applications</p>
                                            </div>
                                            <div>
                                                <span class="text-4xl font-bold text-custom">85%</span>
                                                <p class="text-gray-400">Better Organization</p>
                                            </div>
                                        </div>
                                        <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div class="h-full bg-custom w-3/4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid md:grid-cols-3 gap-8">
                                <div class="bg-gray-800 rounded-lg p-8">
                                    <div class="w-12 h-12 bg-custom/20 rounded-lg flex items-center justify-center mb-6">
                                        <i class="fas fa-file-import text-white text-xl"></i>
                                    </div>
                                    <h3 class="text-xl font-bold mb-4">Auto-Import</h3>
                                    <p class="text-gray-300">Automatically import job applications from your email and popular job boards. Never manually enter data again.</p>
                                </div>
                                <div class="bg-gray-800 rounded-lg p-8">
                                    <div class="w-12 h-12 bg-custom/20 rounded-lg flex items-center justify-center mb-6">
                                        <i class="fas fa-brain text-white text-xl"></i>
                                    </div>
                                    <h3 class="text-xl font-bold mb-4">AI Insights</h3>
                                    <p class="text-gray-300">Get personalized recommendations and analytics to improve your application success rate.</p>
                                </div>
                                <div class="bg-gray-800 rounded-lg p-8">
                                    <div class="w-12 h-12 bg-custom/20 rounded-lg flex items-center justify-center mb-6">
                                        <i class="fas fa-bell text-white text-xl"></i>
                                    </div>
                                    <h3 class="text-xl font-bold mb-4">Smart Reminders</h3>
                                    <p class="text-gray-300">Never miss a follow-up or interview with intelligent notifications and calendar integration.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="py-32" id="testimonials">
                        <div class="max-w-8xl mx-auto px-4">
                            <h2 class="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
                            <div class="grid md:grid-cols-3 gap-8">
                                <div class="bg-gray-800 rounded-lg p-8">
                                    <div class="flex items-center mb-6">
                                        <img src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young female professional with a warm smile, wearing business attire, against a neutral background&width=100&height=100&orientation=squarish&flag=8d3b17b3-dd50-4180-b495-89aa8cd6313d&flag=81b6755b-f6c0-4228-9ebe-d02a81289ec5" alt="Sarah" class="w-12 h-12 rounded-full mr-4" />
                                        <div>
                                            <h4 class="font-bold">Sarah Johnson</h4>
                                            <p class="text-gray-400">Software Engineer</p>
                                        </div>
                                    </div>
                                    <p class="text-gray-300">&#34;This tool has completely transformed my job search. The AI insights helped me focus on the right opportunities and land my dream job.&#34;</p>
                                </div>
                                <div class="bg-gray-800 rounded-lg p-8">
                                    <div class="flex items-center mb-6">
                                        <img src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a middle-aged male professional with glasses, wearing a business suit, against a neutral background&width=100&height=100&orientation=squarish&flag=69ee5e76-ec38-4ded-b200-9222a275b043&flag=f3eaffec-c64a-4e2b-a6fb-eaf0e72651ed" alt="Michael" class="w-12 h-12 rounded-full mr-4" />
                                        <div>
                                            <h4 class="font-bold">Michael Chen</h4>
                                            <p class="text-gray-400">Product Manager</p>
                                        </div>
                                    </div>
                                    <p class="text-gray-300">&#34;The automatic import feature saved me hours of manual data entry. Now I can focus on preparing for interviews instead.&#34;</p>
                                </div>
                                <div class="bg-gray-800 rounded-lg p-8">
                                    <div class="flex items-center mb-6">
                                        <img src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young male professional with a confident smile, wearing business casual attire, against a neutral background&width=100&height=100&orientation=squarish&flag=7652f200-ddfd-49e8-8712-77c8ac023ccb&flag=ed4ab946-27e1-46b2-8820-e35877f654e4" alt="Alex" class="w-12 h-12 rounded-full mr-4" />
                                        <div>
                                            <h4 class="font-bold">Alex Rodriguez</h4>
                                            <p class="text-gray-400">Marketing Director</p>
                                        </div>
                                    </div>
                                    <p class="text-gray-300">&#34;The smart reminders ensure I never miss a follow-up. My application success rate has improved significantly.&#34;</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="py-32 bg-gray-800/50" id="faq">
                        <div class="max-w-4xl mx-auto px-4">
                            <h2 class="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
                            <div class="space-y-4">
                                <div class="bg-gray-800 rounded-lg">
                                    <button class="w-full text-left px-6 py-4 font-medium flex items-center justify-between">
                                        <span>How does the auto-import feature work?</span>
                                        <i class="fas fa-plus text-white"></i>
                                    </button>
                                </div>
                                <div class="bg-gray-800 rounded-lg">
                                    <button class="w-full text-left px-6 py-4 font-medium flex items-center justify-between">
                                        <span>What job boards are supported?</span>
                                        <i class="fas fa-plus text-white"></i>
                                    </button>
                                </div>
                                <div class="bg-gray-800 rounded-lg">
                                    <button class="w-full text-left px-6 py-4 font-medium flex items-center justify-between">
                                        <span>Is my data secure?</span>
                                        <i class="fas fa-plus text-white"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer class="bg-gray-900 border-t border-gray-800">
                    <div class="max-w-8xl mx-auto px-4 py-16">
                        <div class="grid md:grid-cols-4 gap-8">
                            <div>
                                <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" class="h-8 mb-4" />
                                <p class="text-gray-400">Revolutionizing job search tracking with AI-powered insights and automation.</p>
                            </div>
                            <div>
                                <h4 class="font-bold mb-4">Product</h4>
                                <ul class="space-y-2 text-gray-400">
                                    <li><a href="#" class="hover:text-white">Features</a></li>
                                    <li><a href="#" class="hover:text-white">Pricing</a></li>
                                    <li><a href="#" class="hover:text-white">Security</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold mb-4">Company</h4>
                                <ul class="space-y-2 text-gray-400">
                                    <li><a href="#" class="hover:text-white">About</a></li>
                                    <li><a href="#" class="hover:text-white">Blog</a></li>
                                    <li><a href="#" class="hover:text-white">Careers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold mb-4">Connect</h4>
                                <div class="flex space-x-4">
                                    <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
                                    <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin"></i></a>
                                    <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="mt-16 pt-8 border-t border-gray-800 flex items-center justify-between">
                            <p class="text-gray-400">© 2024 AI Job Tracker. All rights reserved.</p>
                            <div class="flex items-center text-gray-400">
                                <span class="mr-2">Powered by</span>
                                <i class="fas fa-robot text-white"></i>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </div>
    )
}

export default LandingPage
