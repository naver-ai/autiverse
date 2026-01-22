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
          {/* <TrophyIcon className="w-6 h-6 text-[#4592ec]"/> */}
          {/* <span>CHI 2025 Best Paper Award</span> */}
          <span>CHI 2026 Paper</span>
        </div>
        <img className="mb-2 h-[95px] ml-[-30px] md:h-[110px] md:ml-[-7px]" src={require("../public/images/logos/autiverse-logo.svg")}/> 
        <div className="font-light leading-8 sm:leading-[2.5rem] text-2xl sm:text-3xl">Eliciting <strong>Autistic Adolescent</strong>s' Daily Narratives through AI-guided Multimodal Journaling</div>
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
