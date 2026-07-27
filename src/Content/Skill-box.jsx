import { SiJavascript, SiHtml5, SiJson, SiPython, SiReact, SiNodedotjs, SiExpress, SiPostgresql, SiGit, SiGithub, SiLinux, SiMistralai, SiNpm, SiVite, SiMysql, SiCloudflare } from "react-icons/si";
import { FaCss3Alt, FaWindows, FaFigma } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

function SkillBox() {
    const skills = [
        { Icon: SiJavascript, color: "#F7DF1E" },
        { Icon: SiHtml5, color: "#E34F26" },
        { Icon: FaCss3Alt, color: "#1572B6" },
        { Icon: SiJson, color: "#000000" },
        { Icon: SiPython, color: "#3776AB" },
        { Icon: SiReact, color: "#61DAFB" },
        { Icon: SiNodedotjs, color: "#339933" },
        { Icon: SiExpress, color: "#FFFFFF" },
        { Icon: SiPostgresql, color: "#4169E1" },
        { Icon: SiGit, color: "#F05032" },
        { Icon: SiGithub, color: "#181717" },
        { Icon: SiLinux, color: "#FCC624" },
        { Icon: FaWindows, color: "#0078D4" },
        { Icon: FaFigma, color: "#F24E1E" },
        { Icon: SiMistralai, color: "#FF7000" },
        { Icon: SiNpm, color: "#CB3837" },
        { Icon: SiVite, color: "#646CFF" },
        { Icon: VscCode, color: "#007ACC" },
        { Icon: SiMysql, color: "#4479A1" },
        { Icon: SiCloudflare, color: "#F38020" },
    ];

    // split skills into four quadrant groups of 5
    const topLeft = skills.slice(0, 5);
    const topRight = skills.slice(5, 10);
    const bottomLeft = skills.slice(10, 15);
    const bottomRight = skills.slice(15, 20);

    const renderBoxes = (items, prefix) =>
        items.map(({ Icon, color }, i) => (
            <div className="skill-card" key={`${prefix}-${i}`}>
                <Icon className="skill" size={28} color={color} />
            </div>
        ));

    return (
        <div className="skills-grid">
            <div className="quad quad-top-left">
                <div className="quad-row">{renderBoxes([topLeft[0]], 'tl1')}</div>
                <div className="quad-row">{renderBoxes(topLeft.slice(1, 3), 'tl2')}</div>
                <div className="quad-row">{renderBoxes(topLeft.slice(3, 5), 'tl3')}</div>
            </div>

            <div className="quad quad-top-right">
                <div className="quad-row">{renderBoxes([topRight[0]], 'tr1')}</div>
                <div className="quad-row">{renderBoxes(topRight.slice(1, 3), 'tr2')}</div>
                <div className="quad-row">{renderBoxes(topRight.slice(3, 5), 'tr3')}</div>
            </div>

            <div className="skills-pill"><h2>SKILLS</h2></div>

            <div className="quad quad-bottom-left">
                <div className="quad-row">{renderBoxes(bottomLeft.slice(0, 2), 'bl1')}</div>
                <div className="quad-row">{renderBoxes(bottomLeft.slice(2, 4), 'bl2')}</div>
                <div className="quad-row">{renderBoxes([bottomLeft[4]], 'bl3')}</div>
            </div>

            <div className="quad quad-bottom-right">
                <div className="quad-row">{renderBoxes(bottomRight.slice(0, 2), 'br1')}</div>
                <div className="quad-row">{renderBoxes(bottomRight.slice(2, 4), 'br2')}</div>
                <div className="quad-row">{renderBoxes([bottomRight[4]], 'br3')}</div>
            </div>
        </div>
    );
}

export default SkillBox;