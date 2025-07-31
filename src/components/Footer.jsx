export const Footer = () => {
  return (
    <div className="text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-8 pb-6  border-bordercolor">
        <div className="max-w-80">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
            alt="logo"
            className="mb-4 h-8 md:h-9"
          />
          <p className="text-sm max-w-80 mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
          <div className="flex items-center gap-3 mt-6">
            {/* Instagram */}
            <a href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p className="text-base font-medium text-gray-800 uppercase">
            quicks links
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Brwse Cars</a>
            </li>
            <li>
              <a href="#">List Your Car</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-base font-medium text-gray-800 uppercase">
            Resuorces
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">Help Cener</a>
            </li>
            <li>
              <a href="#">Terms & Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Insurence</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-base font-medium text-gray-800 uppercase">
            Conatct
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">1234 Luxury driver</a>
            </li>
            <li>
              <a href="#">Brwse Cars</a>
            </li>
            <li>
              <a href="#">123 3085342445</a>
            </li>
            <li>
              <a href="#">sunnykhan@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <span>|</span>
          <li>
            <a href="#">Terms</a>
          </li>
          <span>|</span>
          <li>
            <a href="#">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};






// import Image from "next/image";
// import Link from "next/link";
// import { Plane, Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function Homepage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Top Contact Bar */}
//       <div className="bg-[#ff6600] py-2 text-white text-sm flex justify-end px-4 md:px-8 lg:px-16">
//         <div className="flex flex-col md:flex-row md:space-x-4">
//           <span className="whitespace-nowrap">info@binhamaviation.com</span>
//           <span className="hidden md:inline">|</span>
//           <span className="whitespace-nowrap">+92 (335) 6777777</span>
//           <span className="hidden md:inline">|</span>
//           <span className="whitespace-nowrap">+92 (311) 9843152</span>
//           <span className="hidden md:inline">|</span>
//           <span className="whitespace-nowrap">+92 (334) 5421633</span>
//         </div>
//       </div>

//       {/* Navigation Bar */}
//       <nav className="bg-white shadow-sm py-4 px-4 md:px-8 lg:px-16 flex items-center justify-between relative z-10">
//         <div className="flex items-center">
//           <h1 className="text-2xl font-bold text-gray-800">Binham Group</h1>
//         </div>
//         <div className="hidden lg:flex items-center space-x-8">
//           <Link
//             href="#"
//             className="text-gray-700 hover:text-[#ff6600] font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             href="#"
//             className="text-gray-700 hover:text-[#ff6600] font-medium"
//           >
//             Destinations
//           </Link>
//           <Link
//             href="#"
//             className="text-gray-700 hover:text-[#ff6600] font-medium"
//           >
//             Domestic
//           </Link>
//           <Link
//             href="#"
//             className="text-gray-700 hover:text-[#ff6600] font-medium"
//           >
//             International
//           </Link>
//           <Link
//             href="#"
//             className="text-gray-700 hover:text-[#ff6600] font-medium"
//           >
//             Umrah
//           </Link>
//           <Link
//             href="#"
//             className="text-gray-700 hover:text-[#ff6600] font-medium"
//           >
//             Visa
//           </Link>
//           <Link
//             href="#"
//             className="text-gray-700 hover:text-[#ff6600] font-medium"
//           >
//             Gallery
//           </Link>
//           <Link
//             href="#"
//             className="text-gray-700 hover:text-[#ff6600] font-medium"
//           >
//             About Us
//           </Link>
//           <Button className="bg-[#ff6600] hover:bg-orange-700 text-white px-6 py-2 rounded-full">
//             Contact Us
//           </Button>
//         </div>
//         <div className="lg:hidden">
//           <Button variant="ghost" size="icon" aria-label="Toggle menu">
//             <Menu className="h-6 w-6" />
//           </Button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <main className="relative w-full h-[calc(100vh-120px)] md:h-[calc(100vh-100px)] overflow-hidden flex items-center justify-center">
//         <Image
//           src="/images/hero-bg.png"
//           alt="Tropical beach background"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//           className="z-0"
//         />

//         {/* Central Content */}
//         <div className="relative z-10 text-white text-center flex flex-col items-center justify-center p-4">
//           <h2 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none drop-shadow-lg flex items-center">
//             Binham
//             <Plane className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-2 text-[#ff6600]" />
//             Group
//           </h2>
//           <p className="mt-8 text-lg md:text-xl lg:text-2xl font-semibold drop-shadow-md">
//             www.binhamaviation.com
//           </p>
//         </div>

//         {/* Smaller Images (Polaroid style) */}
//         <div className="absolute z-10 w-full h-full">
//           {/* Image 1: Istanbul (Top Left) */}
//           <div className="absolute top-[15%] left-[5%] md:top-[20%] md:left-[10%] lg:top-[25%] lg:left-[15%] w-[150px] h-[100px] md:w-[200px] md:h-[130px] lg:w-[250px] lg:h-[160px] bg-white p-2 shadow-lg rotate-[-10deg]">
//             <Image
//               src="/images/istanbul.png"
//               alt="Istanbul cityscape"
//               layout="fill"
//               objectFit="cover"
//               className="border border-gray-200"
//             />
//           </div>

//           {/* Image 2: Dubai (Bottom Left) */}
//           <div className="absolute bottom-[15%] left-[10%] md:bottom-[20%] md:left-[15%] lg:bottom-[25%] lg:left-[20%] w-[150px] h-[100px] md:w-[200px] md:h-[130px] lg:w-[250px] lg:h-[160px] bg-white p-2 shadow-lg rotate-[10deg]">
//             <Image
//               src="/images/dubai.png"
//               alt="Dubai modern building"
//               layout="fill"
//               objectFit="cover"
//               className="border border-gray-200"
//             />
//           </div>

//           {/* Image 3: Kuala Lumpur (Top Right) */}
//           <div className="absolute top-[15%] right-[5%] md:top-[20%] md:right-[10%] lg:top-[25%] lg:right-[15%] w-[150px] h-[100px] md:w-[200px] md:h-[130px] lg:w-[250px] lg:h-[160px] bg-white p-2 shadow-lg rotate-[15deg]">
//             <Image
//               src="/images/kuala-lumpur.png"
//               alt="Kuala Lumpur skyline"
//               layout="fill"
//               objectFit="cover"
//               className="border border-gray-200"
//             />
//           </div>

//           {/* Image 4: Beach Scene (Bottom Right) */}
//           <div className="absolute bottom-[15%] right-[10%] md:bottom-[20%] md:right-[15%] lg:bottom-[25%] lg:right-[20%] w-[150px] h-[100px] md:w-[200px] md:h-[130px] lg:w-[250px] lg:h-[160px] bg-white p-2 shadow-lg rotate-[-5deg]">
//             <Image
//               src="/images/beach-scene.png"
//               alt="Secluded beach scene"
//               layout="fill"
//               objectFit="cover"
//               className="border border-gray-200"
//             />
//           </div>

//           {/* Swirl Graphics */}
//           <Image
//             src="/images/orange-swirl.png"
//             alt="Orange swirl graphic"
//             width={150}
//             height={150}
//             className="absolute top-[30%] left-[25%] md:top-[35%] md:left-[30%] lg:top-[40%] lg:left-[35%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] opacity-80"
//           />
//           <Image
//             src="/images/white-swirl.png"
//             alt="White swirl graphic"
//             width={150}
//             height={150}
//             className="absolute bottom-[30%] right-[25%] md:bottom-[35%] md:right-[30%] lg:bottom-[40%] lg:right-[35%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] opacity-80"
//           />
//         </div>
//       </main>
//     </div>
//   );
// }
