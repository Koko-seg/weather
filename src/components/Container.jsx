import { HeartIcon, HomeIcon,  MapPin, UserIcon } from "lucide-react"
 
export  const Container = () => {
    return(
        <div className="w-103 h-207 rounded-[48px] bg-white/750 backdrop-blur-lg shadow-lg absolute z-20">
         
            <div className="py-14 px-10 space-y-12">
                <div className="flex justify-between items-center">
                    <div className="space-y-2">
                        <h1 className="text-gray-400">May 13, 2025</h1>
                        <h2 className="text-gray-900 font-extrabold text-5xl">Ulaanbaatar</h2>
                    </div>
                    <MapPin className="w-[32px] h-[32px] text-gray-700"/>
                </div>
                <img src="/weather/sun.webp" className="w-[274px] h-[274px] m-auto"/>
            </div>
            <div className="px-12">
                <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">10.2</div>
                <h3 className="text-amber-500 font-extrabold mb-12 h-6">Sunny</h3>
                <div className="flex items-center justify-between">
                    <HomeIcon className="w-[32px] h-[32px] text-gray-800"/>
                    <MapPin className="w-[32px] h-[32px] text-gray-300"/>
                    <HeartIcon className="w-[32px] h-[32px] text-gray-300"/>
                    <UserIcon className="w-[32px] h-[32px] text-gray-300"/>
                </div>
            </div>
           
        </div>
    )
}