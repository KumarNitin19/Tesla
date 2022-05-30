import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import './Car.css'

function Car({imgSrc,model,Testdrive}) {
    return (
        <div className="Car"> 
        <div className="Car__image">
            <img src={imgSrc} />
            </div>
            <h2 className="Car__model" > {model}</h2>
            <div className="Car__actions">
               <ButtonPrimary name='Order' />
               {Testdrive && <ButtonSecondary name="Test Drive" />}
            </div>
        </div>
    )
}

export default Car
