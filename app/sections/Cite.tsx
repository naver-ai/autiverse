import { Section } from "../components/Section"

const bibTex = "@inproceedings{yang2026autiverse,<br/>\n\
&emsp;&emsp;title={Autiverse: Eliciting Autistic Adolescents' Daily Narratives through AI-guided Multimodal Journaling},<br/>\n\
&emsp;&emsp;author={Migyeong Yang and Kyungah Lee and Jinyoung Han and SoHyun Park and Young-Ho Kim},<br/>\n\
&emsp;&emsp;year = {2026},<br/>\n\
&emsp;&emsp;publisher = {Association for Computing Machinery},<br/>\n\
&emsp;&emsp;address = {New York, NY, USA},<br/>\n\
&emsp;&emsp;url = {https://doi.org/10.1145/3772318.3791381},<br/>\n\
&emsp;&emsp;doi = {10.1145/3772318.3791381},<br/>\n\
&emsp;&emsp;booktitle = {Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems},<br/>\n\
&emsp;&emsp;location = {Barcelona, Spain},<br/>\n\
&emsp;&emsp;series = {CHI '26}<br/>\n\
}"

export const Cite = () => {
    return <Section title="Citing This Work">
        <div className="border-y-2 border-blue-500/30 py-3">
            <div>Migyeong Yang, Kyungah Lee, Jinyoung Han, SoHyun Park, and Young-Ho Kim. 2026.</div>
            <div className="font-bold">Autiverse: Eliciting Autistic Adolescents' Daily Narratives through AI-guided Multimodal Journaling.</div>
            <div>In CHI Conference on Human Factors in Computing Systems (CHI ’26)</div>
            <div>https://doi.org/10.1145/3772318.3791381</div>
        </div>
        <div className="mt-4">
            <div className="font-bold mb-1">BibTeX</div>
            <p className={"p-3 font-mono text-xs sm:text-sm border-2 rounded-lg border-blue-500/30 decoration-none"} dangerouslySetInnerHTML={{__html: bibTex}}/>
        </div>
        
    </Section>
}