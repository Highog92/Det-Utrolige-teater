import actorCardStyle from './ActorsCard.module.scss'
import { Button } from '../Buttons/Button'
import { Modal } from '../Modal/Modal'
export function ActorsCard({ actorImg, altTag, name, decription }) {

    return (
        <figure className={actorCardStyle.actorsCard}>
            <img src={actorImg} alt={altTag} />
            <figcaption>
                <h3>{name}</h3>
                <p>{decription.substring(0, 450) + "..."}</p>
            </figcaption>
            <Modal>


            </Modal>
        </figure>

    )
}
