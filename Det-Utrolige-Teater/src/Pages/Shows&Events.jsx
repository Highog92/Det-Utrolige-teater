import showsEventsStyle from './Styles/Shows&Events.module.scss'
import { useFetch } from '../Hooks/useFetch'
import { OverviewCard } from '../assets/Components/OverveiwCard/OverviewCard'

export function ShowsEvents() {

  const eventList = useFetch(`http://localhost:3000/events?attributes=image,price,startdate,stopdate,title`)
  console.log(eventList);
  
  const imageList = useFetch(`http://localhost:3000/Assets/Images/events/small/${eventList?.image}`)


  return (
    <section className={showsEventsStyle.showsEvents}>
      <h2>Oversigt</h2>
      {eventList?.map((item) => {
        return (
          <OverviewCard
            key={item.id}
            startDate={item.startdate}
            stopDate={item.stopdate}
            stage={item.stage.name}
            title={item.title}
            genre={item.genre.name}
            imgSrc={`http://localhost:3000/Assets/Images/events/small/${item?.image}`}
          />
        )
      })}


    </section>
  )
}
