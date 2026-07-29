import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

function GithubSection() {
    const [total, setTotal] = useState(0);

    return (
        <div className="github-section">
            <GitHubCalendar
                username="shwifty-man"
                theme={{
                    dark: [
                        "#1C2128",
                        "#4d1a1a",
                        "#7d2b2b",
                        "#b63f3f",
                        "#D74A49",
                    ]
                }}
                blockSize={8}
                blockMargin={4}
                fontSize={8}
                year={2026}
                showWeekdayLabels={true}
                showMonthLabels={true}
                showColorLegend={true}
                ariaLabel="Timothy's GitHub activity"
                showTotalCount={false}
                transformData={(data) => {
                    setTotal(data.reduce((sum, day) => sum + day.count, 0));
                    return data;
                }}
            />
            <p className="github-total">
                <span>{total}</span> contributions in {new Date().getFullYear()}
            </p>
        </div>
    );
}


export default GithubSection;



/* 

<GithubSection />
import GithubSection from './Content/Github-cons.jsx'
import "./Styles/Github.css"


*/