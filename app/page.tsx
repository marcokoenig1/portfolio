import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Marco König
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer & Software Engineer
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-400">
              Welcome to my portfolio! I'm a passionate developer who loves creating
              innovative solutions and building amazing user experiences.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <a 
                href="https://github.com/marcokoenig1" 
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a 
                href="mailto:your-email@example.com" 
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
