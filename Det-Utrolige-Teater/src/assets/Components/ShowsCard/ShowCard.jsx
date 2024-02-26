import style from "./ShowCard.module.scss";
import { Button } from "../Buttons/Button";
export const ShowCard = ({ stage, date, title, genre, imgSrc }) => {
  return (
    <figure className={style.ShowCardStyle}>
      <img src={imgSrc} alt="show" />
      <figcaption>
        <p>{stage}</p>
        <p><b>{date}</b></p>
        <h2>{title}</h2>
        <h3>{genre}</h3>
      </figcaption>
      <footer>

        <Button
          text="LÆS MERE"
          bgColor="var(--black)"
        // action={handleClick}

        />
        <Button
          text="KØB BILLET"
          bgColor="var(--gold)"
        // action={handleClick}
        />
      </footer>
    </figure>

  );
};
