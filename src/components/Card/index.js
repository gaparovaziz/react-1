import styles from './Card.module.scss';
import React from 'react'
console.log(styles);

function Card(props) {
  const [isAdded, setisAdded] = React.useState(false)

  const onClickPlus = () => {
    setisAdded(!isAdded)
  }
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
          <img onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"} alt="Plus" />
      </div>
    </div>
  );
}

export default Card;