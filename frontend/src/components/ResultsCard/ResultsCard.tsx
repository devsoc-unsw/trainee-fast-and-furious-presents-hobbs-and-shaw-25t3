import classes from './ResultsCard.module.css
import { ResultsCardProps } from '../../utils/types';

export default function ResultsCard(props: ResultsCardProps) {
  return (
    <>
      <div className={classes.cardWrapper}>
        <div className={classes.infoBlockWrapper}>
          <div className={classes.header}>
            {props.restaurantName}
          </div>
          <div className={classes.address}>
            {props.address}
          </div>
        </div>
        <div>
          Map
        </div>
      </div>
    </>
  );
}
