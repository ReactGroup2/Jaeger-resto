import React from 'react'
import  ReactDOM  from 'react-dom'
import MenuItem from '../Menu/MenuItem'
import classes from './Modal.module.css'

const BackDrop=({onClose})=>{


  return (
    <div className={classes.backdrop} onClick={onClose}></div>
    )
}

function Overlay({item,onClose}) {
  return (
    <div className={classes.modal}>
            {item.title}
            <div className={classes.image}>
              <img src={item.image} alt={item.title}/>
              </div>
              <p>{item.description}</p>
              <span>{item.price}</span>
              <div className={classes.actions}>

                <button className={classes['button--alt']} onClick={onClose}>Close</button>
                <button className={classes.button} >Add To Cart</button>

              </div>

      </div>
  )
}

const Modal = ({item,onClose}) => {
    const Portal=document.getElementById('overlay');
  return (
    <>
{ReactDOM.createPortal(<BackDrop onClose={onClose}/>,Portal)}
{ReactDOM.createPortal(<Overlay item={item} onClose={onClose}/>,Portal)}
   

    </>
  )
}

export default Modal