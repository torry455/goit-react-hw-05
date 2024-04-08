import { getImg } from "../../services/getImg";
import css from "./ActorCard.module.css";

const ActorCard = ({ actor }) => {
  return (
    <div className={css.ActorCard}>
      <div className={css.ActorCardContainer}>
        <img
          className={css.actorImg}
          src={getImg(actor.profile_path)}
          width="200"
          alt={actor.name}
        />
      </div>
      <div className={css.actorInfoWrapper}>
        <p>{actor.name}</p>
        <p>
          Character:{" "}
          <span>
            <i>
              <b>{actor.character || "Character"}</b>
            </i>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ActorCard;
