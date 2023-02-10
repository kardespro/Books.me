
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import config from "../../config";
import Link from "next/link";
export default function Header() {
  const router = useRouter();

  
  const [open, setOpen] = useState(false);

  const [width, setWidth] = useState(0);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
    if (width > 640) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);

  return (
    <nav className="p-4 ">
      <div className="flex reliative justify-between items-center">
        <div className="flex items-center space-x-4">
          <p
            href="/"
            className="text-2xl font-bold text-gray-800 dark:text-gray-100"
          >
            Books.<span className="text-blue-600">me</span>
          </p>
          
        </div>
        <div className="space-x-7 hidden sm:flex">
          {config.titles.map((title, index) => (
            <Link href={title.url.toLowerCase()} key={index}>
              <a
                className={` text-lg font-light translation duration-300 ${
                  router.pathname === title.url
                    ? "text-indigo"
                    : "text-black/75 hover:text-indigo dark:text-white/50 dark:hover:text-white"
                } `}
              >
                {title.title}
              </a>
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <button className="bg-blue-600 dark:bg-indigo/75 font-medium p-2 w-32 translation duration-300 hover:bg-indigo/60 rounded-md text-white">
           <Link href="https://github.com/kardespro">
               <a>
              Github
            </a>
         
           </Link>
          </button>
        </div>

        {open ? (
          <div className="border-[1px] border-[#e2e3e5] dark:border-[#1a1a1c]  bg-[#fafcfb] dark:bg-[#151516] w-full mx-auto h-16 px-10 py-2 flex justify-between text-gray-font left-0 fixed bottom-0 shadow-lg z-40 border-t border-gray-99">
            {config.titles.map((title, index) => (
              <Link href={title.url.toLowerCase()} key={index}>
                <a>
                  <span className="px-2 py-1 cursor-pointer hover:bg-back/25 dark:text-white text-black dark:hover:bg-indigo/25  text-sm rounded-md font-light  flex flex-col items-center text-center">
  
                    {title.icon === "home" &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

                    }
          {title.icon === "search" && 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

          }
                    {title.icon === "settings" && 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

                    }
                    <span className="mx-1 font-roboto">{title.title}</span>
                  </span>
                </a>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}