import style from "./ShowCard.module.scss";
import { Button } from "../Buttons/Button";
export const ShowCard = ({ stage, startDate, stopDate, title, genre, imgSrc, altTag }) => {

  let start = new Date(startDate)
  let startConversion = start.toLocaleDateString("da-DK")

  let stop = new Date(stopDate)
  let stopConversion = stop.toLocaleDateString("da-DK")

  return (
    <figure className={style.ShowCardStyle}>
      <img src={imgSrc} alt={altTag} />
      <figcaption>
        <p>{stage}</p>
        <p><b>{startConversion} - {stopConversion}</b></p>
        <h2>{title}</h2>
        <h3>{genre}</h3>
      </figcaption>
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
