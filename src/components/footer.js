/*import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/20/solid'
export default function Home() {
    return (
      <div className="w-full h-1/2 bg-black flex flex-col items-center">
        <div className="w-3/5 h-full grid grid-cols-3">
            <div className="w-full h-full bg-[rgba(255,255,255,0.05)] flex flex-col justify-center items-center">
                <div className="p-3 bg-white rounded-full">
                 <PhoneIcon className='h-10 w-10 bg-white text-black text-lg rounded-full'/> 
                </div>
                <br />
                <p className='text-lg font-semibold text-white'>+880 1234567891</p>
            </div>
            <div className="w-full h-full bg-[rgba(255,255,255,0.08)] flex flex-col justify-center items-center">
            <div className="p-3 bg-white rounded-full">
                 <EnvelopeIcon className='h-10 w-10 bg-white text-black text-lg rounded-full'/> 
                </div>
                <br />
                <p className='text-lg font-semibold text-white'>email@gmail.com</p>
            </div>
            <div className="w-full h-full bg-[rgba(255,255,255,0.1)] flex flex-col justify-center items-center">
            <div className="p-3 bg-white rounded-full">
                 <MapPinIcon className='h-10 w-10 bg-white text-black text-lg rounded-full'/> 
                </div>
                <br />
                <p className='text-lg font-semibold text-white'>Office address, Bangladesh</p>
            </div>
            <div className="w-full h-full bg-black flex flex-col justify-center items-center">
                <a href='/'><img src='/logo2.png' width={150} height={120}/></a>
            </div>
            <div className="w-full h-full bg-black">
                <div className='h-full w-full p-4'>
                <h1 className="font-extralight text-xl text-white text-center">L I N K S</h1>
                
                <div className='w-full h-3/4 grid grid-cols-2 place-items-center mt-2'>
                    <a href="#" className="text-sm text-gray-400 w-4/5 h-full grid place-items-center p-4 hover:bg-[rgba(255,255,255,0.1)]">About Us</a>
                    <a href="#" className="text-sm text-gray-400 w-4/5 h-full grid place-items-center p-4 hover:bg-[rgba(255,255,255,0.1)]">Clients</a>
                    <a href="#" className="text-sm text-gray-400 w-4/5 h-full grid place-items-center p-4 hover:bg-[rgba(255,255,255,0.1)]">Gallery</a>
                    <a href="#" className="text-sm text-gray-400 w-4/5 h-full grid place-items-center p-4 hover:bg-[rgba(255,255,255,0.1)]">Contact Us</a>
                    
                </div>
                
                </div>

            </div>
            <div className="w-full h-full bg-black grid place-content-center">
            <div className="mapouter"><div className="gmap_canvas"><iframe src="https://maps.google.com/maps?q=nayagaon,%20munshiganj,%20dhaka,%20bangladesh&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder={0} scrolling="no" ></iframe></div></div>
            </div>
        </div>
        <div className="w-3/5 h-1/6 border-t border-gray-600 flex items-center">
            <div className='w-4/5 h-full p-2 flex items-center text-gray-500'>
                <p>Copyright &copy; 2024 | All rights reserved | Designed and Developed by Tamvir</p>
            </div>
            <div className='w-1/5 h-full p-2'></div>
        </div>
      </div>
    );
  }
  */
  import { Users, Heart, MailOpen, ShieldCheck } from "lucide-react";

  const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 pt-6 pb-4">
        <div className="container mx-auto px-6 md:px-16 lg:px-12">
          <div className="flex flex-wrap justify-between">
            {/* Contact Section */}
            <div className="mb-2">
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className=" hover:text-white">
                    Add: 4th Floor, Navana Tower, 45 Gulshan Ave<br/>
                    Dhaka-1212, Bangladesh.
                  </span>
                </li>
                <li className="flex flex-col gap-1">
                  <span >Phone: <span className=" hover:text-white">+8801995767752</span> , <span className=" hover:text-white">+8801929969797</span></span>
                  <span className="pl-[3.4rem]"><span className=" hover:text-white">+8801990009039</span> , <span className=" hover:text-white">+8801910519200</span></span>
                </li>
                <li className="flex flex-col gap-1">
                <span>Hotline: <span className=" hover:text-white">+8801886610800</span></span>
                </li>
                <li className="flex flex-col gap-1">
                <span>WeChat: <span className=" hover:text-white">+8801995767752</span></span>
                </li>
                <li className="flex flex-col gap-1">
                <span>Email: <span className=" hover:text-white">gawsiainternationaltrade.com</span></span>
                </li>
              </ul>
            </div>
  
            {/* Logo & Text Section */}
            <div className="mr-10 flex justify-center items-center">  
              <img src="/logo2.png" width={250} height={200} />
            </div>
          </div>
        
          <div className="w-full text-center text-gray-500 text-sm mt-8">
          <div className="w-full h-[1px] bg-slate-800"></div>

        <br/>
            © 2025 Gawsia International Trade. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  