// import React, { useState } from 'react';

// const JobApplicationTracker = () => {
//     const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//     const toggleSidebar = () => {
//         setSidebarCollapsed(!sidebarCollapsed);
//     };

//     return (
//         <div>
//             <body class="bg-gray-900 text-gray-100 min-h-screen font-[&#39;Inter&#39;]">
//                 <div class="flex h-screen overflow-hidden"><nav class="w-64 bg-gray-800 border-r border-gray-700 flex-shrink-0 relative transition-all duration-300" style="margin-top: 64px"><div class="p-4 space-y-6 transition-all duration-300"><div class="space-y-4"><div class="px-3"><h2 class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Menu</h2></div><div class="space-y-1"><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-gray-700 text-white"><i class="fas fa-home w-5 h-5 mr-3"></i><span>Dashboard</span></a><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-briefcase w-5 h-5 mr-3"></i><span>Jobs</span></a><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-calendar w-5 h-5 mr-3"></i><span>Schedule</span></a><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-chart-bar w-5 h-5 mr-3"></i><span>Analytics</span></a><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-cog w-5 h-5 mr-3"></i><span>Settings</span></a></div></div><div class="space-y-4"><div class="px-3"><h2 class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Tools</h2></div><div class="space-y-1"><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-file-alt w-5 h-5 mr-3"></i><span>Resume Builder</span></a><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-comments w-5 h-5 mr-3"></i><span>Interview Prep</span></a></div></div></div><button class="absolute right-0 top-8 w-5 h-5 flex items-center justify-center bg-gray-700 rounded-l-lg text-gray-400 hover:text-white transform translate-x-full" id="sidebar-collapse"><i class="fas fa-chevron-left text-xs"></i></button></nav>
//                     <div class="flex-1 flex flex-col" style="padding-top: 64px">
//                         <header class="bg-gray-800 border-b border-gray-700" style="position: fixed; top: 0; left: 0; right: 0; z-index: 10">
//                             <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//                                 <div class="flex justify-between h-16">
//                                     <div class="flex">
//                                         <div class="flex-shrink-0 flex items-center">
//                                             <img class="h-8 w-auto" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" />
//                                         </div>
//                                         <div class="ml-6 flex items-center">
//                                             <div class="relative">
//                                                 <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                                     <i class="fas fa-search text-gray-400"></i>
//                                                 </div>
//                                                 <input type="text" class="!rounded-button bg-gray-700 border-0 pl-10 pr-4 py-2 w-96 text-sm text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-custom focus:bg-gray-600" placeholder="Search jobs, companies, or notes..." />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="flex items-center space-x-4">
//                                         <button class="!rounded-button relative p-2 text-gray-400 hover:text-white">
//                                             <i class="fas fa-bell"></i>
//                                             <span class="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
//                                         </button>
//                                         <div class="relative">
//                                             <button class="!rounded-button flex items-center space-x-3 bg-gray-700 px-3 py-2">
//                                                 <img class="h-8 w-8 rounded-full object-cover" src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young professional with a friendly smile, wearing business attire, against a neutral background&width=100&height=100&orientation=squarish&flag=5e433858-be33-45bc-800c-7d0cdb78007c&flag=74d73b66-0c13-405f-90db-a44ab2f3401e&flag=72528588-ae79-4a7c-9fde-3fe1cc0fb082&flag=70b81a02-292e-4d3c-b3ae-d553d2ea9ec1&flag=c63d3910-18b5-4fe3-8fca-64cfb5b779f6" alt="Profile" />
//                                                 <span class="text-sm font-medium">John Doe</span>
//                                                 <i class="fas fa-chevron-down text-xs"></i>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </header>
//                         <main class="flex-1 overflow-auto bg-gray-900 p-6">
//                             <div class="flex gap-6">
//                                 <div class="flex-1 flex space-x-6">
//                                     <div class="w-1/3">
//                                         <div class="bg-gray-800 rounded-lg p-4"><div class="flex justify-between items-center mb-2"><button class="text-gray-400 hover:text-white" onclick="this.closest(&#34;.bg-gray-800&#34;).classList.toggle(&#34;collapsed&#34;)"><i class="fas fa-chevron-down"></i></button></div>
//                                             <h3 class="font-semibold text-lg mb-4 flex items-center">
//                                                 <i class="fas fa-paper-plane mr-2 text-custom"></i>
//                                                 Applied
//                                                 <span class="ml-auto bg-gray-700 text-sm px-2 py-1 rounded-full">12</span>
//                                             </h3>
//                                             <div class="space-y-4">
//                                                 <div class="bg-gray-700 p-4 rounded-lg">
//                                                     <div class="flex items-start justify-between">
//                                                         <img src="https://creatie.ai/ai/api/search-image?query=Modern tech company logo design with abstract geometric shapes in blue and white&width=40&height=40&orientation=squarish&flag=a5471df5-4b53-47bb-a205-d79fa0647d0a&flag=85a72bb7-6eae-4896-aa09-11686f9de9ff&flag=3bdfd921-ca88-461b-a298-928c04cd0933&flag=100a1947-524d-4701-9596-8bdacf9f5aa3&flag=4d05bdb6-43fa-4157-811f-4ec35c3daf1c" class="w-10 h-10 rounded" alt="Company logo" />
//                                                         <span class="text-xs font-medium bg-custom/10 text-custom px-2 py-1 rounded">New</span>
//                                                     </div>
//                                                     <h4 class="font-medium mt-3">Senior Frontend Developer</h4>
//                                                     <p class="text-sm text-gray-400 mt-1">TechCorp Inc.</p>
//                                                     <div class="flex items-center mt-3 text-sm text-gray-400">
//                                                         <i class="fas fa-location-dot mr-1"></i>
//                                                         Remote
//                                                     </div>
//                                                     <div class="flex items-center justify-between mt-4">
//                                                         <span class="text-xs text-gray-400">Applied 2d ago</span>
//                                                         <button class="!rounded-button text-sm bg-gray-600 px-3 py-1 hover:bg-gray-500">
//                                                             <i class="fas fa-ellipsis-h"></i>
//                                                         </button>
//                                                     </div>
//                                                 </div>

//                                                 <div class="bg-gray-700 p-4 rounded-lg">
//                                                     <div class="flex items-start justify-between">
//                                                         <img src="https://creatie.ai/ai/api/search-image?query=Modern startup company logo with minimalist design in green and white&width=40&height=40&orientation=squarish&flag=44533a01-3c41-43b4-844b-675beb63d96b&flag=961ad3e5-a38f-42e9-ba5b-790f2d2243b0&flag=761acc82-4a10-4142-8f78-5aad8db0e85f&flag=80740164-bc0d-4afe-aa09-141aff471507&flag=978e2f48-4500-4150-8ef9-5dc7b9499577" class="w-10 h-10 rounded" alt="Company logo" />
//                                                         <span class="text-xs font-medium bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded">Follow up</span>
//                                                     </div>
//                                                     <h4 class="font-medium mt-3">Product Designer</h4>
//                                                     <p class="text-sm text-gray-400 mt-1">Design Studio X</p>
//                                                     <div class="flex items-center mt-3 text-sm text-gray-400">
//                                                         <i class="fas fa-location-dot mr-1"></i>
//                                                         New York, NY
//                                                     </div>
//                                                     <div class="flex items-center justify-between mt-4">
//                                                         <span class="text-xs text-gray-400">Applied 5d ago</span>
//                                                         <button class="!rounded-button text-sm bg-gray-600 px-3 py-1 hover:bg-gray-500">
//                                                             <i class="fas fa-ellipsis-h"></i>
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="w-1/3">
//                                         <div class="bg-gray-800 rounded-lg p-4"><div class="flex justify-between items-center mb-2"><button class="text-gray-400 hover:text-white" onclick="this.closest(&#34;.bg-gray-800&#34;).classList.toggle(&#34;collapsed&#34;)"><i class="fas fa-chevron-down"></i></button></div>
//                                             <h3 class="font-semibold text-lg mb-4 flex items-center">
//                                                 <i class="fas fa-calendar mr-2 text-blue-500"></i>
//                                                 Interview Scheduled
//                                                 <span class="ml-auto bg-gray-700 text-sm px-2 py-1 rounded-full">3</span>
//                                             </h3>
//                                             <div class="space-y-4">
//                                                 <div class="bg-gray-700 p-4 rounded-lg">
//                                                     <div class="flex items-start justify-between">
//                                                         <img src="https://creatie.ai/ai/api/search-image?query=Corporate technology company logo with modern typography in blue&width=40&height=40&orientation=squarish&flag=47c2af1d-8998-4f0b-91d0-019dd1ca4931&flag=da44951d-465e-4dcf-94a8-a77138efb69e&flag=65cef1c0-851a-4801-a151-583e62f289bb&flag=afb99578-6fe7-409b-a5b8-eb16e89cffeb&flag=76d555f4-37e8-4d29-9cc6-2564cb4f3298" class="w-10 h-10 rounded" alt="Company logo" />
//                                                         <span class="text-xs font-medium bg-blue-500/10 text-blue-500 px-2 py-1 rounded">Tomorrow</span>
//                                                     </div>
//                                                     <h4 class="font-medium mt-3">Full Stack Engineer</h4>
//                                                     <p class="text-sm text-gray-400 mt-1">Innovation Labs</p>
//                                                     <div class="flex items-center mt-3 text-sm text-gray-400">
//                                                         <i class="fas fa-video mr-1"></i>
//                                                         Remote Interview
//                                                     </div>
//                                                     <div class="flex items-center justify-between mt-4">
//                                                         <span class="text-xs text-gray-400">10:00 AM EST</span>
//                                                         <button class="!rounded-button text-sm bg-gray-600 px-3 py-1 hover:bg-gray-500">
//                                                             <i class="fas fa-ellipsis-h"></i>
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="w-1/3">
//                                         <div class="bg-gray-800 rounded-lg p-4"><div class="flex justify-between items-center mb-2"><button class="text-gray-400 hover:text-white" onclick="this.closest(&#34;.bg-gray-800&#34;).classList.toggle(&#34;collapsed&#34;)"><i class="fas fa-chevron-down"></i></button></div>
//                                             <h3 class="font-semibold text-lg mb-4 flex items-center">
//                                                 <i class="fas fa-check-circle mr-2 text-green-500"></i>
//                                                 Offer Received
//                                                 <span class="ml-auto bg-gray-700 text-sm px-2 py-1 rounded-full">2</span>
//                                             </h3>
//                                             <div class="space-y-4">
//                                                 <div class="bg-gray-700 p-4 rounded-lg">
//                                                     <div class="flex items-start justify-between">
//                                                         <img src="https://creatie.ai/ai/api/search-image?query=Software company logo with modern abstract design in purple&width=40&height=40&orientation=squarish&flag=39b8ac6a-dcd1-4f1a-be7f-e1c5adc05046&flag=7fe4e1ad-8d35-45b5-af6f-a45dac32df5e&flag=8d05048f-257e-4575-b8b2-70f8b5556f76&flag=a5fc432c-ada7-43af-87d1-3e5f2906db98&flag=72704530-78ee-4678-a6f2-44c0a28a9d08" class="w-10 h-10 rounded" alt="Company logo" />
//                                                         <span class="text-xs font-medium bg-green-500/10 text-green-500 px-2 py-1 rounded">New Offer</span>
//                                                     </div>
//                                                     <h4 class="font-medium mt-3">UI/UX Designer</h4>
//                                                     <p class="text-sm text-gray-400 mt-1">Creative Solutions</p>
//                                                     <div class="flex items-center mt-3 text-sm text-gray-400">
//                                                         <i class="fas fa-dollar-sign mr-1"></i>
//                                                         120K - 150K
//                                                     </div>
//                                                     <div class="flex items-center justify-between mt-4">
//                                                         <span class="text-xs text-gray-400">Expires in 5 days</span>
//                                                         <button class="!rounded-button text-sm bg-gray-600 px-3 py-1 hover:bg-gray-500">
//                                                             <i class="fas fa-ellipsis-h"></i>
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="w-1/5" style="display: none;">
//                                         <div class="bg-gray-800 rounded-lg p-4">
//                                             <h3 class="font-semibold text-lg mb-4 flex items-center">
//                                                 <i class="fas fa-times-circle mr-2 text-red-500"></i>
//                                                 Rejected
//                                                 <span class="ml-auto bg-gray-700 text-sm px-2 py-1 rounded-full">4</span>
//                                             </h3>
//                                             <div class="space-y-4">
//                                                 <div class="bg-gray-700 p-4 rounded-lg opacity-75">
//                                                     <div class="flex items-start justify-between">
//                                                         <img src="https://creatie.ai/ai/api/search-image?query=Tech startup logo with minimalist design in grayscale&width=40&height=40&orientation=squarish&flag=bbcc3e2b-c774-4108-b683-327ecbc269cd&flag=19aafc6d-7753-48a8-81d3-5a8111a08c07&flag=c3c99ba7-edb6-4e37-93da-8ea845387510&flag=f15a0411-fbd3-488e-ac8d-f0a715b68bfe&flag=86701129-e1cf-4c61-802d-8913c84e3e33" class="w-10 h-10 rounded" alt="Company logo" />
//                                                         <span class="text-xs font-medium bg-red-500/10 text-red-500 px-2 py-1 rounded">Closed</span>
//                                                     </div>
//                                                     <h4 class="font-medium mt-3">Software Engineer</h4>
//                                                     <p class="text-sm text-gray-400 mt-1">Tech Innovators</p>
//                                                     <div class="flex items-center mt-3 text-sm text-gray-400">
//                                                         <i class="fas fa-clock mr-1"></i>
//                                                         2 weeks ago
//                                                     </div>
//                                                     <div class="flex items-center justify-between mt-4">
//                                                         <span class="text-xs text-gray-400">Position filled</span>
//                                                         <button class="!rounded-button text-sm bg-gray-600 px-3 py-1 hover:bg-gray-500">
//                                                             <i class="fas fa-ellipsis-h"></i>
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="w-80 flex-shrink-0">
//                                     <div class="bg-gray-800 rounded-lg p-4">
//                                         <h3 class="font-semibold text-lg mb-4">AI Insights</h3>

//                                         <div class="space-y-6">
//                                             <div>
//                                                 <h4 class="text-sm font-medium text-gray-400 mb-3">Application Success Rate</h4>
//                                                 <div class="bg-gray-700 rounded-lg p-4">
//                                                     <div class="flex items-center justify-between mb-2">
//                                                         <span class="text-2xl font-semibold">42%</span>
//                                                         <span class="text-green-500 text-sm">
//                                                             <i class="fas fa-arrow-up mr-1"></i>
//                                                             8%
//                                                         </span>
//                                                     </div>
//                                                     <div class="w-full bg-gray-600 rounded-full h-2">
//                                                         <div class="bg-custom h-2 rounded-full" style="width: 42%"></div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <h4 class="text-sm font-medium text-gray-400 mb-3">Weekly Activity</h4>
//                                                 <div class="bg-gray-700 rounded-lg p-4">
//                                                     <div class="space-y-3">
//                                                         <div class="flex items-center justify-between">
//                                                             <span class="text-sm">Applications Sent</span>
//                                                             <span class="font-medium">15</span>
//                                                         </div>
//                                                         <div class="flex items-center justify-between">
//                                                             <span class="text-sm">Interviews Scheduled</span>
//                                                             <span class="font-medium">3</span>
//                                                         </div>
//                                                         <div class="flex items-center justify-between">
//                                                             <span class="text-sm">Offers Received</span>
//                                                             <span class="font-medium">1</span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <h4 class="text-sm font-medium text-gray-400 mb-3">Suggested Actions</h4>
//                                                 <div class="space-y-3">
//                                                     <div class="bg-gray-700 rounded-lg p-3 flex items-start">
//                                                         <i class="fas fa-bell text-yellow-500 mt-1"></i>
//                                                         <div class="ml-3">
//                                                             <p class="text-sm">Follow up with TechCorp Inc. about your application</p>
//                                                             <span class="text-xs text-gray-400">Recommended time: Tomorrow</span>
//                                                         </div>
//                                                     </div>
//                                                     <div class="bg-gray-700 rounded-lg p-3 flex items-start">
//                                                         <i class="fas fa-file-alt text-blue-500 mt-1"></i>
//                                                         <div class="ml-3">
//                                                             <p class="text-sm">Update your resume with recent project highlights</p>
//                                                             <span class="text-xs text-gray-400">Last updated 2 weeks ago</span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </main>
//                     </div>
//                 </div>
//             </body>
//         </div>
//     );
// };
// export default JobApplicationTracker;




// // ```
// // <!DOCTYPE html><html lang="en"><head>
// //     <meta charset="UTF-8"/>
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
// //     <title>Job Application Tracker</title>
// //     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
// //     <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>
// //     <link href="https://ai-public.creatie.ai/gen_page/tailwind-custom.css" rel="stylesheet"/>
// //     <script src="https://cdn.tailwindcss.com/3.4.5?plugins=forms@0.5.7,typography@0.5.13,aspect-ratio@0.4.2,container-queries@0.1.1"></script>
// //     <script src="https://ai-public.creatie.ai/gen_page/tailwind-config.min.js" data-color="#000000" data-border-radius="medium"></script>
// // </head>
// // <body class="bg-gray-900 text-gray-100 min-h-screen font-[&#39;Inter&#39;]">
// //     <div class="flex h-screen overflow-hidden"><nav class="w-64 bg-gray-800 border-r border-gray-700 flex-shrink-0 relative transition-all duration-300" style="margin-top: 64px"><div class="p-4 space-y-6 transition-all duration-300"><div class="space-y-4"><div class="px-3"><h2 class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Menu</h2></div><div class="space-y-1"><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-gray-700 text-white"><i class="fas fa-home w-5 h-5 mr-3"></i><span>Dashboard</span></a><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-briefcase w-5 h-5 mr-3"></i><span>Jobs</span></a><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-calendar w-5 h-5 mr-3"></i><span>Schedule</span></a><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-chart-bar w-5 h-5 mr-3"></i><span>Analytics</span></a><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-cog w-5 h-5 mr-3"></i><span>Settings</span></a></div></div><div class="space-y-4"><div class="px-3"><h2 class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Tools</h2></div><div class="space-y-1"><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-file-alt w-5 h-5 mr-3"></i><span>Resume Builder</span></a><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-comments w-5 h-5 mr-3"></i><span>Interview Prep</span></a></div></div></div><button class="absolute right-0 top-8 w-5 h-5 flex items-center justify-center bg-gray-700 rounded-l-lg text-gray-400 hover:text-white transform translate-x-full" id="sidebar-collapse"><i class="fas fa-chevron-left text-xs"></i></button></nav>
// //         <div class="flex-1 flex flex-col" style="padding-top: 64px">
// //             <header class="bg-gray-800 border-b border-gray-700" style="position: fixed; top: 0; left: 0; right: 0; z-index: 10">
// //                 <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
// //                     <div class="flex justify-between h-16">
// //                         <div class="flex">
// //                             <div class="flex-shrink-0 flex items-center">
// //                                 <img class="h-8 w-auto" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo"/>
// //                             </div>
// //                             <div class="ml-6 flex items-center">
// //                                 <div class="relative">
// //                                     <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                                         <i class="fas fa-search text-gray-400"></i>
// //                                     </div>
// //                                     <input type="text" class="!rounded-button bg-gray-700 border-0 pl-10 pr-4 py-2 w-96 text-sm text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-custom focus:bg-gray-600" placeholder="Search jobs, companies, or notes..."/>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div class="flex items-center space-x-4">
// //                             <button class="!rounded-button relative p-2 text-gray-400 hover:text-white">
// //                                 <i class="fas fa-bell"></i>
// //                                 <span class="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
// //                             </button>
// //                             <div class="relative">
// //                                 <button class="!rounded-button flex items-center space-x-3 bg-gray-700 px-3 py-2">
// //                                     <img class="h-8 w-8 rounded-full object-cover" src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young professional with a friendly smile, wearing business attire, against a neutral background&width=100&height=100&orientation=squarish&flag=5e433858-be33-45bc-800c-7d0cdb78007c&flag=74d73b66-0c13-405f-90db-a44ab2f3401e&flag=72528588-ae79-4a7c-9fde-3fe1cc0fb082&flag=70b81a02-292e-4d3c-b3ae-d553d2ea9ec1&flag=c63d3910-18b5-4fe3-8fca-64cfb5b779f6" alt="Profile"/>
// //                                     <span class="text-sm font-medium">John Doe</span>
// //                                     <i class="fas fa-chevron-down text-xs"></i>
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </header>
// //             <main class="flex-1 overflow-auto bg-gray-900 p-6">
// //                 <div class="flex gap-6">
// //                     <div class="flex-1 flex space-x-6">
// //                         <div class="w-1/3">
// //                             <div class="bg-gray-800 rounded-lg p-4"><div class="flex justify-between items-center mb-2"><button class="text-gray-400 hover:text-white" onclick="this.closest(&#34;.bg-gray-800&#34;).classList.toggle(&#34;collapsed&#34;)"><i class="fas fa-chevron-down"></i></button></div>
// //                                 <h3 class="font-semibold text-lg mb-4 flex items-center">
// //                                     <i class="fas fa-paper-plane mr-2 text-custom"></i>
// //                                     Applied
// //                                     <span class="ml-auto bg-gray-700 text-sm px-2 py-1 rounded-full">12</span>
// //                                 </h3>
// //                                 <div class="space-y-4">
// //                                     <div class="bg-gray-700 p-4 rounded-lg">
// //                                         <div class="flex items-start justify-between">
// //                                             <img src="https://creatie.ai/ai/api/search-image?query=Modern tech company logo design with abstract geometric shapes in blue and white&width=40&height=40&orientation=squarish&flag=a5471df5-4b53-47bb-a205-d79fa0647d0a&flag=85a72bb7-6eae-4896-aa09-11686f9de9ff&flag=3bdfd921-ca88-461b-a298-928c04cd0933&flag=100a1947-524d-4701-9596-8bdacf9f5aa3&flag=4d05bdb6-43fa-4157-811f-4ec35c3daf1c" class="w-10 h-10 rounded" alt="Company logo"/>
// //                                             <span class="text-xs font-medium bg-custom/10 text-custom px-2 py-1 rounded">New</span>
// //                                         </div>
// //                                         <h4 class="font-medium mt-3">Senior Frontend Developer</h4>
// //                                         <p class="text-sm text-gray-400 mt-1">TechCorp Inc.</p>
// //                                         <div class="flex items-center mt-3 text-sm text-gray-400">
// //                                             <i class="fas fa-location-dot mr-1"></i>
// //                                             Remote
// //                                         </div>
// //                                         <div class="flex items-center justify-between mt-4">
// //                                             <span class="text-xs text-gray-400">Applied 2d ago</span>
// //                                             <button class="!rounded-button text-sm bg-gray-600 px-3 py-1 hover:bg-gray-500">
// //                                                 <i class="fas fa-ellipsis-h"></i>
// //                                             </button>
// //                                         </div>
// //                                     </div>

// //                                     <div class="bg-gray-700 p-4 rounded-lg">
// //                                         <div class="flex items-start justify-between">
// //                                             <img src="https://creatie.ai/ai/api/search-image?query=Modern startup company logo with minimalist design in green and white&width=40&height=40&orientation=squarish&flag=44533a01-3c41-43b4-844b-675beb63d96b&flag=961ad3e5-a38f-42e9-ba5b-790f2d2243b0&flag=761acc82-4a10-4142-8f78-5aad8db0e85f&flag=80740164-bc0d-4afe-aa09-141aff471507&flag=978e2f48-4500-4150-8ef9-5dc7b9499577" class="w-10 h-10 rounded" alt="Company logo"/>
// //                                             <span class="text-xs font-medium bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded">Follow up</span>
// //                                         </div>
// //                                         <h4 class="font-medium mt-3">Product Designer</h4>
// //                                         <p class="text-sm text-gray-400 mt-1">Design Studio X</p>
// //                                         <div class="flex items-center mt-3 text-sm text-gray-400">
// //                                             <i class="fas fa-location-dot mr-1"></i>
// //                                             New York, NY
// //                                         </div>
// //                                         <div class="flex items-center justify-between mt-4">
// //                                             <span class="text-xs text-gray-400">Applied 5d ago</span>
// //                                             <button class="!rounded-button text-sm bg-gray-600 px-3 py-1 hover:bg-gray-500">
// //                                                 <i class="fas fa-ellipsis-h"></i>
// //                                             </button>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div class="w-1/3">
// //                             <div class="bg-gray-800 rounded-lg p-4"><div class="flex justify-between items-center mb-2"><button class="text-gray-400 hover:text-white" onclick="this.closest(&#34;.bg-gray-800&#34;).classList.toggle(&#34;collapsed&#34;)"><i class="fas fa-chevron-down"></i></button></div>
// //                                 <h3 class="font-semibold text-lg mb-4 flex items-center">
// //                                     <i class="fas fa-calendar mr-2 text-blue-500"></i>
// //                                     Interview Scheduled
// //                                     <span class="ml-auto bg-gray-700 text-sm px-2 py-1 rounded-full">3</span>
// //                                 </h3>
// //                                 <div class="space-y-4">
// //                                     <div class="bg-gray-700 p-4 rounded-lg">
// //                                         <div class="flex items-start justify-between">
// //                                             <img src="https://creatie.ai/ai/api/search-image?query=Corporate technology company logo with modern typography in blue&width=40&height=40&orientation=squarish&flag=47c2af1d-8998-4f0b-91d0-019dd1ca4931&flag=da44951d-465e-4dcf-94a8-a77138efb69e&flag=65cef1c0-851a-4801-a151-583e62f289bb&flag=afb99578-6fe7-409b-a5b8-eb16e89cffeb&flag=76d555f4-37e8-4d29-9cc6-2564cb4f3298" class="w-10 h-10 rounded" alt="Company logo"/>
// //                                             <span class="text-xs font-medium bg-blue-500/10 text-blue-500 px-2 py-1 rounded">Tomorrow</span>
// //                                         </div>
// //                                         <h4 class="font-medium mt-3">Full Stack Engineer</h4>
// //                                         <p class="text-sm text-gray-400 mt-1">Innovation Labs</p>
// //                                         <div class="flex items-center mt-3 text-sm text-gray-400">
// //                                             <i class="fas fa-video mr-1"></i>
// //                                             Remote Interview
// //                                         </div>
// //                                         <div class="flex items-center justify-between mt-4">
// //                                             <span class="text-xs text-gray-400">10:00 AM EST</span>
// //                                             <button class="!rounded-button text-sm bg-gray-600 px-3 py-1 hover:bg-gray-500">
// //                                                 <i class="fas fa-ellipsis-h"></i>
// //                                             </button>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div class="w-1/3">
// //                             <div class="bg-gray-800 rounded-lg p-4"><div class="flex justify-between items-center mb-2"><button class="text-gray-400 hover:text-white" onclick="this.closest(&#34;.bg-gray-800&#34;).classList.toggle(&#34;collapsed&#34;)"><i class="fas fa-chevron-down"></i></button></div>
// //                                 <h3 class="font-semibold text-lg mb-4 flex items-center">
// //                                     <i class="fas fa-check-circle mr-2 text-green-500"></i>
// //                                     Offer Received
// //                                     <span class="ml-auto bg-gray-700 text-sm px-2 py-1 rounded-full">2</span>
// //                                 </h3>
// //                                 <div class="space-y-4">
// //                                     <div class="bg-gray-700 p-4 rounded-lg">
// //                                         <div class="flex items-start justify-between">
// //                                             <img src="https://creatie.ai/ai/api/search-image?query=Software company logo with modern abstract design in purple&width=40&height=40&orientation=squarish&flag=39b8ac6a-dcd1-4f1a-be7f-e1c5adc05046&flag=7fe4e1ad-8d35-45b5-af6f-a45dac32df5e&flag=8d05048f-257e-4575-b8b2-70f8b5556f76&flag=a5fc432c-ada7-43af-87d1-3e5f2906db98&flag=72704530-78ee-4678-a6f2-44c0a28a9d08" class="w-10 h-10 rounded" alt="Company logo"/>
// //                                             <span class="text-xs font-medium bg-green-500/10 text-green-500 px-2 py-1 rounded">New Offer</span>
// //                                         </div>
// //                                         <h4 class="font-medium mt-3">UI/UX Designer</h4>
// //                                         <p class="text-sm text-gray-400 mt-1">Creative Solutions</p>
// //                                         <div class="flex items-center mt-3 text-sm text-gray-400">
// //                                             <i class="fas fa-dollar-sign mr-1"></i>
// //                                             120K - 150K
// //                                         </div>
// //                                         <div class="flex items-center justify-between mt-4">
// //                                             <span class="text-xs text-gray-400">Expires in 5 days</span>
// //                                             <button class="!rounded-button text-sm bg-gray-600 px-3 py-1 hover:bg-gray-500">
// //                                                 <i class="fas fa-ellipsis-h"></i>
// //                                             </button>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div class="w-1/5" style="display: none;">
// //                             <div class="bg-gray-800 rounded-lg p-4">
// //                                 <h3 class="font-semibold text-lg mb-4 flex items-center">
// //                                     <i class="fas fa-times-circle mr-2 text-red-500"></i>
// //                                     Rejected
// //                                     <span class="ml-auto bg-gray-700 text-sm px-2 py-1 rounded-full">4</span>
// //                                 </h3>
// //                                 <div class="space-y-4">
// //                                     <div class="bg-gray-700 p-4 rounded-lg opacity-75">
// //                                         <div class="flex items-start justify-between">
// //                                             <img src="https://creatie.ai/ai/api/search-image?query=Tech startup logo with minimalist design in grayscale&width=40&height=40&orientation=squarish&flag=bbcc3e2b-c774-4108-b683-327ecbc269cd&flag=19aafc6d-7753-48a8-81d3-5a8111a08c07&flag=c3c99ba7-edb6-4e37-93da-8ea845387510&flag=f15a0411-fbd3-488e-ac8d-f0a715b68bfe&flag=86701129-e1cf-4c61-802d-8913c84e3e33" class="w-10 h-10 rounded" alt="Company logo"/>
// //                                             <span class="text-xs font-medium bg-red-500/10 text-red-500 px-2 py-1 rounded">Closed</span>
// //                                         </div>
// //                                         <h4 class="font-medium mt-3">Software Engineer</h4>
// //                                         <p class="text-sm text-gray-400 mt-1">Tech Innovators</p>
// //                                         <div class="flex items-center mt-3 text-sm text-gray-400">
// //                                             <i class="fas fa-clock mr-1"></i>
// //                                             2 weeks ago
// //                                         </div>
// //                                         <div class="flex items-center justify-between mt-4">
// //                                             <span class="text-xs text-gray-400">Position filled</span>
// //                                             <button class="!rounded-button text-sm bg-gray-600 px-3 py-1 hover:bg-gray-500">
// //                                                 <i class="fas fa-ellipsis-h"></i>
// //                                             </button>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div class="w-80 flex-shrink-0">
// //                         <div class="bg-gray-800 rounded-lg p-4">
// //                             <h3 class="font-semibold text-lg mb-4">AI Insights</h3>

// //                             <div class="space-y-6">
// //                                 <div>
// //                                     <h4 class="text-sm font-medium text-gray-400 mb-3">Application Success Rate</h4>
// //                                     <div class="bg-gray-700 rounded-lg p-4">
// //                                         <div class="flex items-center justify-between mb-2">
// //                                             <span class="text-2xl font-semibold">42%</span>
// //                                             <span class="text-green-500 text-sm">
// //                                                 <i class="fas fa-arrow-up mr-1"></i>
// //                                                 8%
// //                                             </span>
// //                                         </div>
// //                                         <div class="w-full bg-gray-600 rounded-full h-2">
// //                                             <div class="bg-custom h-2 rounded-full" style="width: 42%"></div>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                                 <div>
// //                                     <h4 class="text-sm font-medium text-gray-400 mb-3">Weekly Activity</h4>
// //                                     <div class="bg-gray-700 rounded-lg p-4">
// //                                         <div class="space-y-3">
// //                                             <div class="flex items-center justify-between">
// //                                                 <span class="text-sm">Applications Sent</span>
// //                                                 <span class="font-medium">15</span>
// //                                             </div>
// //                                             <div class="flex items-center justify-between">
// //                                                 <span class="text-sm">Interviews Scheduled</span>
// //                                                 <span class="font-medium">3</span>
// //                                             </div>
// //                                             <div class="flex items-center justify-between">
// //                                                 <span class="text-sm">Offers Received</span>
// //                                                 <span class="font-medium">1</span>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                                 <div>
// //                                     <h4 class="text-sm font-medium text-gray-400 mb-3">Suggested Actions</h4>
// //                                     <div class="space-y-3">
// //                                         <div class="bg-gray-700 rounded-lg p-3 flex items-start">
// //                                             <i class="fas fa-bell text-yellow-500 mt-1"></i>
// //                                             <div class="ml-3">
// //                                                 <p class="text-sm">Follow up with TechCorp Inc. about your application</p>
// //                                                 <span class="text-xs text-gray-400">Recommended time: Tomorrow</span>
// //                                             </div>
// //                                         </div>
// //                                         <div class="bg-gray-700 rounded-lg p-3 flex items-start">
// //                                             <i class="fas fa-file-alt text-blue-500 mt-1"></i>
// //                                             <div class="ml-3">
// //                                                 <p class="text-sm">Update your resume with recent project highlights</p>
// //                                                 <span class="text-xs text-gray-400">Last updated 2 weeks ago</span>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </main>
// //         </div>
// //     </div>
// // <style>.sidebar-collapsed { width: 5rem !important; } .sidebar-collapsed .p-4 { padding: 1rem 0.75rem !important; } .sidebar-collapsed span, .sidebar-collapsed h2 { display: none; } .sidebar-collapsed #sidebar-collapse i { transform: rotate(180deg); }</style><script>document.getElementById('sidebar-collapse').addEventListener('click', function() { document.getElementById('id-13').classList.toggle('sidebar-collapsed'); });</script>
// // ```






import React from 'react'

const Dashboard = () => {
    return (
        <div>
            {/* <!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Job Application Tracker</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>
    <link href="https://ai-public.creatie.ai/gen_page/tailwind-custom.css" rel="stylesheet"/>
    <script src="https://cdn.tailwindcss.com/3.4.5?plugins=forms@0.5.7,typography@0.5.13,aspect-ratio@0.4.2,container-queries@0.1.1"></script>
    <script src="https://ai-public.creatie.ai/gen_page/tailwind-config.min.js" data-color="#000000" data-border-radius="medium"></script>
</head> */}
            <body class="bg-gray-900 text-gray-100 min-h-screen font-[&#39;Inter&#39;]">
                <div class="flex h-screen overflow-hidden"><nav class="w-64 bg-gray-800 border-r border-gray-700 flex-shrink-0 relative transition-all duration-300" style="margin-top: 64px"><div class="p-4 space-y-6 transition-all duration-300"><div class="space-y-4"><div class="px-3"><h2 class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Menu</h2></div><div class="space-y-1"><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-gray-700 text-white"><i class="fas fa-home w-5 h-5 mr-3"></i><span>Dashboard</span></a><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-briefcase w-5 h-5 mr-3"></i><span>Jobs</span></a><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-calendar w-5 h-5 mr-3"></i><span>Schedule</span></a><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-chart-bar w-5 h-5 mr-3"></i><span>Analytics</span></a><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-cog w-5 h-5 mr-3"></i><span>Settings</span></a></div></div><div class="space-y-4"><div class="px-3"><h2 class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Tools</h2></div><div class="space-y-1"><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-file-alt w-5 h-5 mr-3"></i><span>Resume Builder</span></a><a href="#" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><i class="fas fa-comments w-5 h-5 mr-3"></i><span>Interview Prep</span></a></div></div></div><button class="absolute right-0 top-8 w-5 h-5 flex items-center justify-center bg-gray-700 rounded-l-lg text-gray-400 hover:text-white transform translate-x-full" id="sidebar-collapse"><i class="fas fa-chevron-left text-xs"></i></button></nav>
                    <div class="flex-1 flex flex-col" style="padding-top: 64px">
                        <header class="bg-gray-800 border-b border-gray-700" style="position: fixed; top: 0; left: 0; right: 0; z-index: 10">
                            <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div class="flex justify-between h-16">
                                    <div class="flex">
                                        <div class="flex-shrink-0 flex items-center">
                                            <img class="h-8 w-auto" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" />
                                        </div>
                                        <div class="ml-6 flex items-center">
                                            <div class="relative">
                                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <i class="fas fa-search text-gray-400"></i>
                                                </div>
                                                <input type="text" class="!rounded-button bg-gray-700 border-0 pl-10 pr-4 py-2 w-96 text-sm text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-custom focus:bg-gray-600" placeholder="Search jobs, companies, or notes..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <button class="!rounded-button relative p-2 text-gray-400 hover:text-white">
                                            <i class="fas fa-bell"></i>
                                            <span class="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
                                        </button>
                                        <div class="relative">
                                            <button class="!rounded-button flex items-center space-x-3 bg-gray-700 px-3 py-2">
                                                <img class="h-8 w-8 rounded-full object-cover" src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young professional with a friendly smile, wearing business attire, against a neutral background&width=100&height=100&orientation=squarish&flag=5e433858-be33-45bc-800c-7d0cdb78007c&flag=74d73b66-0c13-405f-90db-a44ab2f3401e&flag=72528588-ae79-4a7c-9fde-3fe1cc0fb082&flag=70b81a02-292e-4d3c-b3ae-d553d2ea9ec1&flag=c63d3910-18b5-4fe3-8fca-64cfb5b779f6" alt="Profile" />
                                                <span class="text-sm font-medium">John Doe</span>
                                                <i class="fas fa-chevron-down text-xs"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <main class="flex-1 overflow-auto bg-gray-900 p-6">
                            <div class="flex gap-6">
                                <div class="flex-1 flex space-x-6">
                                    <div class="w-1/3">
                                        <div class="bg-gray-800 rounded-lg p-4"><div class="flex justify-between items-center mb-2"><button class="text-gray-400 hover:text-white" onclick="this.closest(&#34;.bg-gray-800&#34;).classList.toggle(&#34;collapsed&#34;)"><i class="fas fa-chevron-down"></i></button></div>
                                            <h3 class="font-semibold text-lg mb-4 flex items-center">
                                                <i class="fas fa-paper-plane mr-2 text-custom"></i>
                                                Applied
                                                <span class="ml-auto bg-gray-700 text-sm px-2 py-1 rounded-full">12</span>
                                            </h3>
                                            <div class="space-y-4">
                                                <div class="bg-gray-700 p-4 rounded-lg">
                                                    <div class="flex items-start justify-between">
                                                        <img src="https://creatie.ai/ai/api/search-image?query=Modern tech company logo design with abstract geometric shapes in blue and white&width=40&height=40&orientation=squarish&flag=a5471df5-4b53-47bb-a205-d79fa0647d0a&flag=85a72bb7-6eae-4896-aa09-11686f9de9ff&flag=3bdfd921-ca88-461b-a298-928c04cd0933&flag=100a1947-524d-4701-9596-8bdacf9f5aa3&flag=4d05bdb6-43fa-4157-811f-4ec35c3daf1c" class="w-10 h-10 rounded" alt="Company logo" />
                                                        <span class="text-xs font-medium bg-custom/10 text-custom px-2 py-1 rounded">New</span>
                                                    </div>
                                                    <h4 class="font-medium mt-3">Senior Frontend Developer</h4>
                                                    <p class="text-sm text-gray-400 mt-1">TechCorp Inc.</p>
                                                    <div class="flex items-center mt-3 text-sm text-gray-400">
                                                        <i class="fas fa-location-dot mr-1"></i>
                                                        Remote
                                                    </div>
                                                    <div class="flex items-center justify-between mt-4">
                                                        <span class="text-xs text-gray-400">Applied 2d ago</span>
                                                        <button class="!rounded-button text-sm bg-gray-600 px-3 py-1 hover:bg-gray-500">
                                                            <i class="fas fa-ellipsis-h"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div class="bg-gray-700 p-4 rounded-lg">
                                                    <div class="flex items-start justify-between">
                                                        <img src="https://creatie.ai/ai/api/search-image?query=Modern startup company logo with minimalist design in green and white&width=40&height=40&orientation=squarish&flag=44533a01-3c41-43b4-844b-675beb63d96b&flag=961ad3e5-a38f-42e9-ba5b-790f2d2243b0&flag=761acc82-4a10-4142-8f78-5aad8db0e85f&flag=80740164-bc0d-4afe-aa09-141aff471507&flag=978e2f48-4500-4150-8ef9-5dc7b9499577" class="w-10 h-10 rounded" alt="Company logo" />
                                                        <span class="text-xs font-medium bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded">Follow up</span>
                                                    </div>
                                                    <h4 class="font-medium mt-3">Product Designer</h4>
                                                    <p class="text-sm text-gray-400 mt-1">Design Studio X</p>
                                                    <div class="flex items-center mt-3 text-sm text-gray-400">
                                                        <i class="fas fa-location-dot mr-1"></i>
                                                        New York, NY
                                                    </div>
                                                    <div class="flex items-center justify-between mt-4">
                                                        <span class="text-xs text-gray-400">Applied 5d ago</span>
                                                        <button class="!rounded-button text-sm bg-gray-600 px-3 py-1 hover:bg-gray-500">
                                                            <i class="fas fa-ellipsis-h"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-1/3">
                                        <div class="bg-gray-800 rounded-lg p-4"><div class="flex justify-between items-center mb-2"><button class="text-gray-400 hover:text-white" onclick="this.closest(&#34;.bg-gray-800&#34;).classList.toggle(&#34;collapsed&#34;)"><i class="fas fa-chevron-down"></i></button></div>
                                            <h3 class="font-semibold text-lg mb-4 flex items-center">
                                                <i class="fas fa-calendar mr-2 text-blue-500"></i>
                                                Interview Scheduled
                                                <span class="ml-auto bg-gray-700 text-sm px-2 py-1 rounded-full">3</span>
                                            </h3>
                                            <div class="space-y-4">
                                                <div class="bg-gray-700 p-4 rounded-lg">
                                                    <div class="flex items-start justify-between">
                                                        <img src="https://creatie.ai/ai/api/search-image?query=Corporate technology company logo with modern typography in blue&width=40&height=40&orientation=squarish&flag=47c2af1d-8998-4f0b-91d0-019dd1ca4931&flag=da44951d-465e-4dcf-94a8-a77138efb69e&flag=65cef1c0-851a-4801-a151-583e62f289bb&flag=afb99578-6fe7-409b-a5b8-eb16e89cffeb&flag=76d555f4-37e8-4d29-9cc6-2564cb4f3298" class="w-10 h-10 rounded" alt="Company logo" />
                                                        <span class="text-xs font-medium bg-blue-500/10 text-blue-500 px-2 py-1 rounded">Tomorrow</span>
                                                    </div>
                                                    <h4 class="font-medium mt-3">Full Stack Engineer</h4>
                                                    <p class="text-sm text-gray-400 mt-1">Innovation Labs</p>
                                                    <div class="flex items-center mt-3 text-sm text-gray-400">
                                                        <i class="fas fa-video mr-1"></i>
                                                        Remote Interview
                                                    </div>
                                                    <div class="flex items-center justify-between mt-4">
                                                        <span class="text-xs text-gray-400">10:00 AM EST</span>
                                                        <button class="!rounded-button text-sm bg-gray-600 px-3 py-1 hover:bg-gray-500">
                                                            <i class="fas fa-ellipsis-h"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-1/3">
                                        <div class="bg-gray-800 rounded-lg p-4"><div class="flex justify-between items-center mb-2"><button class="text-gray-400 hover:text-white" onclick="this.closest(&#34;.bg-gray-800&#34;).classList.toggle(&#34;collapsed&#34;)"><i class="fas fa-chevron-down"></i></button></div>
                                            <h3 class="font-semibold text-lg mb-4 flex items-center">
                                                <i class="fas fa-check-circle mr-2 text-green-500"></i>
                                                Offer Received
                                                <span class="ml-auto bg-gray-700 text-sm px-2 py-1 rounded-full">2</span>
                                            </h3>
                                            <div class="space-y-4">
                                                <div class="bg-gray-700 p-4 rounded-lg">
                                                    <div class="flex items-start justify-between">
                                                        <img src="https://creatie.ai/ai/api/search-image?query=Software company logo with modern abstract design in purple&width=40&height=40&orientation=squarish&flag=39b8ac6a-dcd1-4f1a-be7f-e1c5adc05046&flag=7fe4e1ad-8d35-45b5-af6f-a45dac32df5e&flag=8d05048f-257e-4575-b8b2-70f8b5556f76&flag=a5fc432c-ada7-43af-87d1-3e5f2906db98&flag=72704530-78ee-4678-a6f2-44c0a28a9d08" class="w-10 h-10 rounded" alt="Company logo" />
                                                        <span class="text-xs font-medium bg-green-500/10 text-green-500 px-2 py-1 rounded">New Offer</span>
                                                    </div>
                                                    <h4 class="font-medium mt-3">UI/UX Designer</h4>
                                                    <p class="text-sm text-gray-400 mt-1">Creative Solutions</p>
                                                    <div class="flex items-center mt-3 text-sm text-gray-400">
                                                        <i class="fas fa-dollar-sign mr-1"></i>
                                                        120K - 150K
                                                    </div>
                                                    <div class="flex items-center justify-between mt-4">
                                                        <span class="text-xs text-gray-400">Expires in 5 days</span>
                                                        <button class="!rounded-button text-sm bg-gray-600 px-3 py-1 hover:bg-gray-500">
                                                            <i class="fas fa-ellipsis-h"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-1/5" style="display: none;">
                                        <div class="bg-gray-800 rounded-lg p-4">
                                            <h3 class="font-semibold text-lg mb-4 flex items-center">
                                                <i class="fas fa-times-circle mr-2 text-red-500"></i>
                                                Rejected
                                                <span class="ml-auto bg-gray-700 text-sm px-2 py-1 rounded-full">4</span>
                                            </h3>
                                            <div class="space-y-4">
                                                <div class="bg-gray-700 p-4 rounded-lg opacity-75">
                                                    <div class="flex items-start justify-between">
                                                        <img src="https://creatie.ai/ai/api/search-image?query=Tech startup logo with minimalist design in grayscale&width=40&height=40&orientation=squarish&flag=bbcc3e2b-c774-4108-b683-327ecbc269cd&flag=19aafc6d-7753-48a8-81d3-5a8111a08c07&flag=c3c99ba7-edb6-4e37-93da-8ea845387510&flag=f15a0411-fbd3-488e-ac8d-f0a715b68bfe&flag=86701129-e1cf-4c61-802d-8913c84e3e33" class="w-10 h-10 rounded" alt="Company logo" />
                                                        <span class="text-xs font-medium bg-red-500/10 text-red-500 px-2 py-1 rounded">Closed</span>
                                                    </div>
                                                    <h4 class="font-medium mt-3">Software Engineer</h4>
                                                    <p class="text-sm text-gray-400 mt-1">Tech Innovators</p>
                                                    <div class="flex items-center mt-3 text-sm text-gray-400">
                                                        <i class="fas fa-clock mr-1"></i>
                                                        2 weeks ago
                                                    </div>
                                                    <div class="flex items-center justify-between mt-4">
                                                        <span class="text-xs text-gray-400">Position filled</span>
                                                        <button class="!rounded-button text-sm bg-gray-600 px-3 py-1 hover:bg-gray-500">
                                                            <i class="fas fa-ellipsis-h"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-80 flex-shrink-0">
                                    <div class="bg-gray-800 rounded-lg p-4">
                                        <h3 class="font-semibold text-lg mb-4">AI Insights</h3>

                                        <div class="space-y-6">
                                            <div>
                                                <h4 class="text-sm font-medium text-gray-400 mb-3">Application Success Rate</h4>
                                                <div class="bg-gray-700 rounded-lg p-4">
                                                    <div class="flex items-center justify-between mb-2">
                                                        <span class="text-2xl font-semibold">42%</span>
                                                        <span class="text-green-500 text-sm">
                                                            <i class="fas fa-arrow-up mr-1"></i>
                                                            8%
                                                        </span>
                                                    </div>
                                                    <div class="w-full bg-gray-600 rounded-full h-2">
                                                        <div class="bg-custom h-2 rounded-full" style="width: 42%"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 class="text-sm font-medium text-gray-400 mb-3">Weekly Activity</h4>
                                                <div class="bg-gray-700 rounded-lg p-4">
                                                    <div class="space-y-3">
                                                        <div class="flex items-center justify-between">
                                                            <span class="text-sm">Applications Sent</span>
                                                            <span class="font-medium">15</span>
                                                        </div>
                                                        <div class="flex items-center justify-between">
                                                            <span class="text-sm">Interviews Scheduled</span>
                                                            <span class="font-medium">3</span>
                                                        </div>
                                                        <div class="flex items-center justify-between">
                                                            <span class="text-sm">Offers Received</span>
                                                            <span class="font-medium">1</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 class="text-sm font-medium text-gray-400 mb-3">Suggested Actions</h4>
                                                <div class="space-y-3">
                                                    <div class="bg-gray-700 rounded-lg p-3 flex items-start">
                                                        <i class="fas fa-bell text-yellow-500 mt-1"></i>
                                                        <div class="ml-3">
                                                            <p class="text-sm">Follow up with TechCorp Inc. about your application</p>
                                                            <span class="text-xs text-gray-400">Recommended time: Tomorrow</span>
                                                        </div>
                                                    </div>
                                                    <div class="bg-gray-700 rounded-lg p-3 flex items-start">
                                                        <i class="fas fa-file-alt text-blue-500 mt-1"></i>
                                                        <div class="ml-3">
                                                            <p class="text-sm">Update your resume with recent project highlights</p>
                                                            <span class="text-xs text-gray-400">Last updated 2 weeks ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </body>

        </div>
    )
}

export default Dashboard
