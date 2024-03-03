import homepageStyle from './Styles/Homepage.module.scss'
import { useFetch } from "../Hooks/useFetch";
import { ShowCard } from '../assets/Components/ShowsCard/ShowCard';
import { HeroCard } from '../assets/Components/HeroCard/HeroCard';
import { Button } from '../assets/Components/Buttons/Button';
import { Link } from 'react-router-dom';
import kejserensNyeKlaeder from '../assets/Img/events/small/kejserens-nye-klaeder.jpg'
import mitLivSomeTim from '../assets/Img/events/small/mit-liv-som-tim.jpg'
import nordKraft from '../assets/Img/events/small/nordkraft.jpg'
import bugsyMalone from '../assets/Img/events/medium/bugsy-malone.jpg'

export function Homepage() {


  const eventImages = [kejserensNyeKlaeder, mitLivSomeTim, nordKraft, bugsyMalone];

  const events = useFetch(`http://localhost:3000/events?attributes=image,price,startdate,stopdate,title`)
  console.log(events, "eventliste");

  return (
    <section className={homepageStyle.homepage}>
      <header className={homepageStyle.hero}>
        {events?.slice(1, 2).map((item, index) => {
          return (
            <HeroCard
              key={item.id}
              stage={item.stage.name}
              date={'14.  2023 - 10 februar 2023'}
              title={item.title?.toUpperCase()}
              genre={item.genre.name}
              imgSrc={eventImages[index, 3]}
              altTag={item.image}
            />
          )
        })}
      </header>
      <section className={homepageStyle.showCardWrapper}>

        {events?.slice(2, 5).map((item, index) => {
          return (
            <ShowCard
              key={item.id}
              startDate={item.startdate}
              stopDate={item.stopdate}
              stage={item.stage.name}
              title={item.title?.toUpperCase()}
              genre={item.genre.name}
              imgSrc={eventImages[index]}
              altTag={item.image}
            />

          )
        })}

      </section>
      <div className={homepageStyle.moreEvents}>
        <Link to='/showsevents'>
          <Button
            text="SE ALLE FORESTILLINGER"
            bgColor="var(--brown)"
          />
        </Link>
      </div>
    </section>
  )
}
