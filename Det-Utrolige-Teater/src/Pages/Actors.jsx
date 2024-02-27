import actorsStyle from './Styles/Actors.module.scss'
import { useFetch } from "../Hooks/useFetch";
import { ActorsCard } from "../assets/Components/ActorsCard/ActorsCard"
import { Modal } from '../assets/Components/Modal/Modal';
export function Actors() {

  const actorsList = useFetch(`http://localhost:3000/actors`)
  console.log(actorsList, "skuespillerliste");

  return (
    <section className={actorsStyle.actors}>

      <h2>Skuespillere</h2>
      {actorsList?.map((item, index) => {
        return (

          <ActorsCard
            key={index}
            actorImg={`http://localhost:3000/Assets/Images/actors/${item?.image}`}
            name={item.name}
            decription={item.description}
          >
          </ActorsCard>
        )
      })}
      {/* <Modal></Modal> */}
    </section>
  )
}
