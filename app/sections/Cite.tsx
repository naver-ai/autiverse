import { Section } from "../components/Section"

const bibTex = "@inproceedings{choi2025aacesstalk,<br/>\n\
&emsp;&emsp;title={AACessTalk: Fostering Communication between Minimally Verbal Autistic Children and Parents with Contextual Guidance and Card Recommendation},<br/>\n\
&emsp;&emsp;author={Dasom Choi and SoHyun Park and Kyungah Lee and Hwajung Hong and Young-Ho Kim},<br/>\n\
&emsp;&emsp;year = {2025},<br/>\n\
&emsp;&emsp;publisher = {Association for Computing Machinery},<br/>\n\
&emsp;&emsp;address = {New York, NY, USA},<br/>\n\
&emsp;&emsp;url = {https://doi.org/10.1145/3706598.3713792},<br/>\n\
&emsp;&emsp;doi = {10.1145/3706598.3713792},<br/>\n\
&emsp;&emsp;booktitle = {Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems},<br/>\n\
&emsp;&emsp;location = {Yokohama, Japan},<br/>\n\
&emsp;&emsp;series = {CHI '25}<br/>\n\
}"

export const Cite = () => {
    return <Section title="Citing This Work">
        <div className="border-y-2 border-purple-500/30 py-3">
            <div>Dasom Choi, SoHyun Park, Kyungah Lee, Hwajung Hong, and Young-Ho Kim. 2024.</div>
            <div className="font-bold">AACessTalk: Fostering Communication between Minimally Verbal Autistic Children and Parents with Contextual Guidance and Card Recommendation.</div>
            <div>In CHI Conference on Human Factors in Computing Systems (CHI ’25)</div>
            <div>https://doi.org/10.1145/3706598.3713792</div>
        </div>
        <div className="mt-4">
            <div className="font-bold mb-1">BibTeX</div>
            <p className={"p-3 font-mono text-xs sm:text-sm border-2 rounded-lg border-purple-500/30 decoration-none"} dangerouslySetInnerHTML={{__html: bibTex}}/>
        </div>
        
    </Section>
}