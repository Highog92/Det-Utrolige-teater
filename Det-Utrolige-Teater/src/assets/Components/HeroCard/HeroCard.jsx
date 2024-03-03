import heroCardStyle from "./HeroCard.module.scss";
import bugsy_malone from '../../Img/events/large/bugsy-malone.jpg'
export const HeroCard = ({ stage, startDate, stopDate, title, genre, imgSrc, altTag }) => {
 
 
  let start = new Date(startDate)
  let startConversion = start.toLocaleDateString("da-DK")

  let stop = new Date(stopDate)
  let stopConversion = stop.toLocaleDateString("da-DK")

 
  return (
    <div className={heroCardStyle.heroCard}>
      <section>
        <p>{stage}</p>
        <p><b>{startConversion} - {stopConversion}</b></p>
        <h2>{title}</h2>
        <h3>{genre}</h3>
      </section>
      <img src={imgSrc} alt={altTag}></img>
    </div>

  );
};
