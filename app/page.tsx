import Link from "next/link";

export default function Home() {
  return (

    <div className="min-h-screen flex flex-col gap-33 pt-22 pb-4">

      {/* Hero Section */}
      <section className="flex justify-center">
        <div className="text-center flex flex-col items-center gap-12">

          {/* Logo placeholder */}
          <img src="/Placeholder_Icon.svg" alt="Logo" className="w-16 h-16 mx-auto" />
          
            {/* Name */}
            <h1 className="text-3xl font-normal text-gray-900">
              Marco Koenig<br />
              <span className="text-3xl text-gray-500">Based in Germany</span><br />
              <span className="text-3xl text-gray-500">M.A. Designer</span>
            </h1>
          
          {/* Buttons */}
          <div className="flex items-center justify-center space-x-3">
            <button className="bg-gray-100 text-base text-gray-900 px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
              Resume
            </button>
            <button className="bg-gray-100 text-sm text-gray-900 p-3 rounded-full hover:bg-gray-200 transition-colors">
              <span className="text-sm">📷</span>
            </button>
          </div>
        </div>
      </section>

      {/* Projects Sections */}

      {/*anomalie*/}
      <section className="flex flex-col">
        
        <div className="flex flex-col items-center justify-center">
          <p className="text-base mb-4 text-center text-gray-500">Creative Direction<br />
            <span className="text-base text-center text-gray-950">anomalie</span>
          </p>
          <img src="anomalie_cover.jpg" alt="alu_container" className="w-70 h-auto pb-5" />
          <button className="bg-gray-100 text-base text-gray-900 px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
              Visit anomalie
            </button>
        </div>

      </section>

      {/*reading*/}
      <section className="flex flex-col">
        
        <div className="flex flex-col items-center justify-center">
          <p className="text-base mb-4 text-center text-gray-500">Writing<br />
            <span className="text-base text-center text-gray-950">Words on Play</span>
          </p>
          <img src="play_cover.jpg" alt="alu_container" className="w-70 h-auto" />
          <button className="bg-gray-100 text-base text-gray-900 py-3 px-6 rounded-full hover:bg-gray-200 transition-colors">
              Read Article
            </button>
        </div>

      </section>

      {/* Footer Section */}
      <footer className="w-full px-5 pt-12 flex items-center justify-between gap-3 md:px-0 md:justify-center md:gap-5">
        <p className="text-sm mb-4 text-gray-500">© Marco Koenig 2025</p>
        <Link href="https://www.youtube.com" className="text-sm mb-4 text-gray-500" replace>Imprint</Link>
        <Link href="https://www.youtube.com" className="text-sm mb-4 text-gray-500" replace>Legal Notice</Link>
      </footer>
    </div>
  );
}
