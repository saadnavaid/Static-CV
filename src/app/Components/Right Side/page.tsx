import Experience from "../Experience"
import Skills from "../Skills"



export default function RightSide () {
    return (
        <div className="flex-grow bg-gray-300 min-h-full p-4">
           <Experience />
           <Skills />
        </div>
    )
}