import AboutMe from "../AboutMe"
import Education from "../Education"
export default function LeftSide () {
    return (
        <div className="flex-col pt-8 px-2 justify-center text-center
       bg-slate-800 text-white h-full rounded-r">
        <img src="Saad.png" alt="saad" width={250} height={250} className="border-4 border-white rounded-full mx-auto" />
        <AboutMe /> 
        <Education />
           
        </div>
    )
}