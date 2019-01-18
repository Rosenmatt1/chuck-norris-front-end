import React from 'react'
import Button from './Button.js'

const Card = (props) => {

  return (
    <div className="card col-sm-4 mx-2 my-2">
      <div className="card-body">
        <p className="card-text">{props.quote}</p>
        {props.tags.map((tag, idx) => {
          return <Button
            key={idx}
            tag={tag} />
        })}
      </div>
    </div>
  )
}

export default Card