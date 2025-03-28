import { Members } from "./sections/Members";
import { Acknowledgments } from "./sections/Acknowledgments";
import { Cite } from "./sections/Cite";
import { Abstract } from "./sections/Abstract";
import { Footer } from "./sections/Footer";
import { Demo } from "./sections/Demo";
import { Video } from "./sections/Video";
import { TrophyIcon } from "@heroicons/react/20/solid";

export function App() {
  return (<>
    <main className="container mx-auto px-4 sm:px-12 pt-6">
      <div>
        <div className="font-bold text-lg text-[#4592ec] mb-3 flex items-center gap-2">
          <TrophyIcon className="w-6 h-6 text-[#4592ec]"/>
          <span>CHI 2025 Best Paper Award</span>
        </div>
        <img className="mb-2 h-[95px] ml-[-30px] md:h-[110px] md:ml-[-37px]" src={require("../public/images/logos/aacesstalk-logo.svg")}/> 
        <div className="font-light leading-8 sm:leading-[2.5rem] text-2xl sm:text-3xl">Fostering Communication between <strong>Minimally Verbal Autistic Children</strong> and <strong>Parents</strong> with Contextual Guidance and Card Recommendation</div>
      </div>
      
      <Demo/>
      <Abstract/>
      <Video/>
      <Members/>
      <Cite/>
      <Acknowledgments/>
    </main><Footer/></>
  );
}
