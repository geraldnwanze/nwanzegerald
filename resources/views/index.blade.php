<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ config('app.name') }}</title>
    @vite('resources/css/app.css')
    <script src="https://code.jquery.com/jquery-3.7.0.slim.min.js" integrity="sha256-tG5mcZUtJsZvyKAxYLVXrmjKBVLd6VpVccqz/r4ypFE=" crossorigin="anonymous"></script>
</head>
<body>
    <nav class="w-full p-5 bg-slate-900 flex items-center sticky top-0">
        <div class="w-2/12">
            <img src="{{ asset('nwanze-gerald.png') }}" alt="{{ config('app.name') }}" class="w-12 h-12">
        </div>
        <div id="nav-menu" class="w-8/12 text-white text-lg font-bold text-center space-x-10">
            <a href="#">Home</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#blog">Blog</a>
        </div>
        <div class="w-2/12 text-center">
            <button class="bg-blue-700 text-white font-bold px-5 py-2 rounded-lg hover:bg-blue-600">Login</button>
        </div>
    </nav>

    <section class="flex bg-slate-900 p-20 pt-32">
        <div class="w-2/3">
            <h3 class="text-white text-5xl font-bold">Hi, my name is <span class="text-red-400">Nwanze Gerald</span></h3>
            <h3 class="text-white text-5xl font-bold my-10">A
                <span>Software Developer</span>
            </h3>
            <p class="text-white text-lg">
                I am a goal oriented, problem solving software developer who utilises programming laguages, frameworks and tools available to build problem solving real world applications while maintaining the industry standards for software development.
            </p>

        </div>
        <div class="w-1/3">
            <img src="{{ asset('nwanze-gerald.png') }}" alt="{{ config('app.name') }}" class="-mt-20">
        </div>
    </section>

    <section class="w-full p-10">
        <h2 class="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div class="flex text-center">
            <div class="w-1/4 border-r-4">
                <h3 class="text-xl font-bold mb-5 underline">Languages</h3>
                <ul>
                    <li>Html</li>
                    <li>css</li>
                    <li>javascript</li>
                    <li>php</li>
                </ul>
            </div>
            <div class="w-1/4 border-r-4">
                <h3 class="text-xl font-bold mb-5 underline">Databases</h3>
                <ul>
                    <li>mysql</li>
                    <li>mongodb</li>
                    <li>postgresql</li>
                </ul>
            </div>
            <div class="w-1/4 border-r-4">
                <h3 class="text-xl font-bold mb-5 underline">Frameworks/Libraries</h3>
                <ul>
                    <li>Laravel</li>
                    <li>Nestjs</li>
                    <li>reactjs</li>
                    <li>bootstrap</li>
                    <li>tailwindcss</li>
                </ul>
            </div>
            <div class="w-1/4">
                <h3 class="text-xl font-bold mb-5 underline">Tools</h3>
                <ul>
                    <li>git</li>
                    <li>github</li>
                    <li>agile</li>
                    <li>vercel</li>
                    <li>railway</li>
                    <li>aws ec2</li>
                    <li>digital ocean</li>
                </ul>
            </div>
        </div>
    </section>

    <section id="projects" class="w-full bg-slate-900 p-8">
        <h2 class="text-white text-3xl font-bold text-center mb-10">Projects</h2>
        <div class="container flex justify-center mx-auto gap-10">
            <div class="w-full rounded-lg bg-white p-5 h-96"></div>
            <div class="w-full rounded-lg bg-white p-5 h-96"></div>
            <div class="w-full rounded-lg bg-white p-5 h-96"></div>
        </div>
    </section>

    <section id="experience" class="w-full p-8">
        <h2 class="text-3xl font-bold text-center mb-10">Experience</h2>

        <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Laravel Framework</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
            </li>
            <li class="ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
            </li>
        </ol>
    </section>

    <footer class="w-full bg-slate-900 p-8">
        <h3 class="text-white text-2xl font-bold text-center mb-10">Connect with me on</h3>
        <div class="flex">
            <a href="#" class="flex items-center gap-3 text-white text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                nwanzegerald@gmail.com
            </a>
            <a href="#">

            </a>
        </div>
    </footer>
</body>
</html>
