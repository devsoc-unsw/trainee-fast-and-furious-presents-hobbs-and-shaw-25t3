import classes from './ResultsCard.module.css';
import type { ResultsCardProps } from '../../utils/types';
import star from '../../assets/star.png'
import { saveRestaurant } from '../../api/saveRestaurant';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCuisineImage } from '../../utils/images';
// TODO: we'll make a function that converts the pricing from maps API to $-$$ type beat

function confirmResto(restaurantName: string | undefined, setConfirmed: (confirmed: boolean) => void) {
  if (restaurantName) {
    saveRestaurant(restaurantName);
    setConfirmed(true);
  }
}

export default function ResultsCard(props: ResultsCardProps) {
  const [confirmed, setConfirmed] = useState(props.confirmed);
  const navigate = useNavigate();
  const firstCuisine = props.cuisine
    ? props.cuisine
        .toLowerCase()
        .split(/[;,]/)
        .map(c => c.trim())[0]
    : undefined;

  const cuisine = firstCuisine ? firstCuisine.charAt(0).toUpperCase() + firstCuisine.slice(1) : undefined;

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
                Cuisine:
              </p>
              <p className={classes.infoBlockEntryValue}>
                {cuisine}
              </p>
            </div>
            <div className={classes.infoBlockEntry}>
              <p>
                Website:
              </p>
              {props.website ? (
                <a href={props.website} target="_blank" className={classes.website}>
                  <span className={classes.infoBlockEntryValue}>{props.website}</span>
                </a>
              ) : (
                <a href="">
                <span className={classes.infoBlockEntryValue}>N/A</span>
                </a>
              )
            }
            </div>
            <div className={classes.infoBlockEntry}>
              <p className={classes.infoBlockEntryValue}>
                Rating:
              </p>
              <p>
                {[...Array(props.starRating)].map(() => {
                  return (<img src={star} className={classes.starStyle} />)
                })}
              </p>
            </div>
          </div>
          {!confirmed &&
            <div className={classes.buttonSection}>
              <button onClick={props.onNext} className={classes.decisionButton}>
                <p className={classes.buttonText}>
                  Choose another option
                </p>
              </button>
              <button onClick={() => confirmResto(props.restaurantName, setConfirmed)} className={classes.decisionButton}>
                <p className={classes.buttonText}>
                  Yes, I wanna go here!
                </p>
              </button>
            </div>
          }
          {confirmed &&
            <div className={classes.confirmedSection}>
              <div className={classes.buttonText}>
                Yay! Enjoy your food!!
              </div>
              <button onClick={() => navigate('/')} className={classes.decisionButton}>
                <p className={classes.buttonText}>
                  Back to home
                </p>
              </button>
            </div>
          }
        </div>
        <div className={classes.imageContainer}>
          <img
            src={getCuisineImage(props.cuisine)}
            className={classes.restaurantImg}
            alt={props.restaurantName}
          />
        </div>
      </div>
    </>
  );
}
