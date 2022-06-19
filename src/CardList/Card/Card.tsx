import React, { useEffect, useState } from 'react';
import styles from './card.css';

interface ICardProps {
  subheader: string,
  description: string,
  special: string,
  label: string,
  note: string,
  disable: boolean
}

export function Card({subheader, description, special, label, note, disable}:ICardProps) {
  const [isSelect, setSelect] = useState(false);
  const [isHover, setHover] = useState(false);
  const [isDisable, setDisable] = useState(disable);

  function handleClick() {
    if(isSelect) {
      setSelect(false)
    }
    else {
      setSelect(true)
    }
  }

  useEffect(()=>{}, [isHover, isSelect]);

  return (
    <li className={styles.cardContainer}>
      {isDisable && (<div className={styles.cover}></div>)}
        <div className={styles.card} tabIndex={0} onMouseOver={()=>{setHover(true)}} onMouseOut={()=>{setHover(false)}} onClick={handleClick}>
          {isDisable && <div className={styles.border+' '+styles.borderDisable}></div>}
          {isHover && isSelect && !isDisable && <div className={styles.border+' '+styles.borderSelectHover}></div>}
          {!isHover && isSelect && !isDisable && <div className={styles.border+' '+styles.borderSelect}></div>}
          {isHover && !isSelect && !isDisable && <div className={styles.border+' '+styles.borderHover}></div>}
          {!isHover && !isSelect && !isDisable && <div className={styles.border}></div>}
          {isSelect && isHover ? (<p className={styles.cardTopTextSelect+' '+styles.cardTopText}>Котэ не одобряет?</p>) :
            <p className={styles.cardTopText}>Сказочное заморское яство</p>}
          <h2 className={styles.cardHeader}>Нямушка</h2>
          <h3 className={styles.cardSubheader}>{subheader}</h3>
          <span className={styles.cardSpanText}>{description}</span>
          <span className={styles.cardSpanText}>{special}</span>
          {isDisable && (<span className={ styles.cardSpanLabel +' '+styles.cardSpanLabelDisable}>{label} <p className={styles.cardSpanLabeltext}>кг</p></span>)}
          {isHover && isSelect && !isDisable && (<span className={ styles.cardSpanLabel +' '+styles.cardSpanLabelSelectHover}>{label} <p className={styles.cardSpanLabeltext}>кг</p></span>)}
          {!isHover && isSelect && !isDisable && (<span className={ styles.cardSpanLabel +' '+styles.cardSpanLabelSelect}>{label} <p className={styles.cardSpanLabeltext}>кг</p></span>)}
          {isHover && !isSelect && !isDisable &&(<span className={ styles.cardSpanLabel +' '+styles.cardSpanLabelHover}>{label} <p className={styles.cardSpanLabeltext}>кг</p></span>)}
          {!isHover && !isSelect && !isDisable &&(<span className={styles.cardSpanLabel}>{label} <p className={styles.cardSpanLabeltext}>кг</p></span>)}
        </div>
      { !isSelect && !isDisable &&  (<p className={styles.cardNote}>Чего сидишь? Порадуй котэ, <a className={styles.cardLink} onClick={handleClick}>купи.</a></p>) }
      { isSelect &&  !isDisable && (<p className={styles.cardNote}>{note}</p>) }
      { isDisable && (<p className={styles.cardNoteDisable}>Печалька, {subheader} закончился.</p>) }
    </li>
  );
}
