import classes from './ResultsCard.module.css';
import type { ResultsCardProps } from '../../utils/types';
import star from '../../assets/star.png'

// TODO: we'll make a function that converts the pricing from maps API to $-$$ type beat

export default function ResultsCard(props: ResultsCardProps) {
  return (
    <>
      <div className={classes.cardWrapper}>
        <div className={classes.infoSideWrapper}>
          <div className={classes.header}>
            {props.restaurantName}
          </div>
          <div className={classes.address}>
            {props.address}
          </div>
          <div className={classes.infoBlockWrapper}>
            <div className={classes.infoBlockEntry}>
              <p>
                Price Range
              </p>
              <p>
                {props.priceRange}
              </p>
            </div>
            <div className={classes.infoBlockEntry}>
              <p>
                Website
              </p>
              <a href={props.website} target="_blank">
                <span>{props.website}</span>
              </a>
            </div>
            <div className={classes.infoBlockEntry}>
              <p>
                Rating
              </p>
              <p>
                {[...Array(props.starRating)].map(() => {
                  return (<img src={star} className={classes.starStyle} />)
                })}
              </p>
            </div>
          </div>
          <div className={classes.buttonSection}>
            <button>
              <p>
                No... show me more!
              </p>
            </button>
            <button>
              <p>
                Yes, I wanna go here!
              </p>
            </button>
          </div>
        </div>
        <div>
          Map
        </div>
      </div>
    </>
  );
}
