import React from 'react'

export default function ImageComponent(props) {
  return (
    <div id="123">
      <img src={props.imageSrc} alt="render image component"/>
    </div>
  )
}
