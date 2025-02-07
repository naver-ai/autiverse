import { Section } from "../components/Section"

export const Acknowledgments = () => {
    return <Section title="Acknowledgments">
        <ul className="list-disc list-outside ml-4">
            <li>This work was supported through a research internship at NAVER AI Lab of NAVER Cloud.</li>
            <li>AACessTalk leverages symbol images from <a className="underline" href="http://symbol.ksaac.or.kr/searchsymbols/index.jsp">KAAC Symbol Database</a> by Eun-Hye Park (Ewha Women's Univ.), Young Tae Kim (Ewha Womans Univ.), and Ki-Hyung Hong (Sungshin Women's Univ.).</li>
        </ul>
    </Section>
}