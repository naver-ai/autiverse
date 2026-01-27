import { Section } from "../components/Section"
import { ArxivIcon, GithubIcon } from "../components/icons"
import { NewspaperIcon, TrophyIcon } from "@heroicons/react/20/solid"

export const Abstract = () => {
    return <Section title="Abstract" className="flex-1 pt-0 md:pt-12">
        <p>
        Journaling can potentially serve as an effective method for autistic adolescents to improve narrative skills.
        However, its text-centric nature and high executive functioning demands present barriers to practice.
        We present Autiverse, an AI-guided multimodal journaling app for tablets that scaffolds daily narratives through conversational prompts and visual supports.
        Autiverse elicits key details of an adolescent-selected event through a stepwise dialogue with peer-like, customizable AI and composes them into an editable four-panel comic strip.
        Through a two-week deployment study with 10 autistic adolescent-parent dyads, we examine how Autiverse supports autistic adolescents to organize their daily experience and emotion.
        Our findings show Autiverse scaffolded adolescents' coherent narratives, while enabling parents to learn additional details of their child's events and emotions.
        Moreover, the customized AI peer created a comfortable space for sharing, fostering enjoyment and a strong sense of agency.
        Drawing on these results, we discuss implications for adaptive scaffolding across autism profiles, socio-emotionally appropriate AI peer design, and balancing autonomy with parental involvement.
        </p>

        {/* <div className="flex items-center gap-2 my-4">
            <TrophyIcon className="w-6 h-6 text-pink-600"/>
            <span className="font-semibold text-pink-600 text-xl">CHI 2026</span>
        </div> */}

        <div className="flex flex-wrap gap-4 mt-4">
            <a className="icon-label-button bg-teal-500 pl-4" aria-disabled={true} href={"./public/autiverse-chi26.pdf"} target="_blank">
                <NewspaperIcon className="w-6 h-6 text-white"/>
                <span>Paper</span>
            </a>
            <a className="icon-label-button bg-red-400 pl-4" href="https://arxiv.org/abs/2509.17466" target="_blank">
                <ArxivIcon size={20}/>
                <span>arXiv</span>
            </a>
            <a className="icon-label-button" href="https://github.com/naver-ai/autiverse-monorepo" target="_blank">
                <GithubIcon size={28}/>
                <span>Source code</span>
            </a>
        </div>
        
    </Section>
}