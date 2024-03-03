import overviewCardstyle from "./OverviewCard.module.scss";
import { Button } from "../Buttons/Button";


export const OverviewCard = ({ stage, startDate, stopDate, title, imgSrc }) => {

    
    let start = new Date(startDate)
    let startConversion = start.toLocaleDateString("da-DK")

    let stop = new Date(stopDate)
    let stopConversion = stop.toLocaleDateString("da-DK")

    return (
        <figure className={overviewCardstyle.OverviewCard}>
            <div>
                <img src={imgSrc} alt="show" />
            </div>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <p>{stage}</p>
                <p><b>{startConversion} - {stopConversion}</b></p>
            </div>
            <footer>

                <Button
                    text="LÆS MERE"
                    bgColor="var(--black)"

                />
                <Button
                    text="KØB BILLET"
                    bgColor="var(--gold)"
                />
            </footer>
        </figure>

    );
};
