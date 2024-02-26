import actorCardStyle from './ActorsCard.module.scss'
import { Button } from '../Buttons/Button'

export function ActorsCard({ actorImg, name, decription }) {

    return (
        <figure className={actorCardStyle.actorsCard}>
            <img src={actorImg} alt="Actor" />
            <figcaption>
                <h3>{name}</h3>
                <p>{decription}...</p>
            </figcaption>
            <Button
                text="Læs Mere"
                bgColor="var(--black)"
                sizeH={"40px"}
                sizeW={"110px"}
            // action={handleClick}
            />
        </figure>
    )
}
