import heroCardStyle from "./HeroCard.module.scss";
import bugsy_malone from '../../Img/events/large/bugsy-malone.jpg'
export const HeroCard = ({ stage, date, title, genre, imgSrc }) => {
  return (
    <div className={heroCardStyle.heroCard}>
      <section>
        <p>{stage}</p>
        <p><b>{date}</b></p>
        <h2>{title}</h2>
        <h3>{genre}</h3>
      </section>
      <img src={bugsy_malone} alt="bugsy malone show"></img>
    </div>

  );
};
