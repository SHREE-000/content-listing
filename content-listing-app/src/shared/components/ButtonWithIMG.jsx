import React from 'react'

const index = ({
    style,
    src,
    alt
}) => {
  return (
        <button style={style}>
        <img width={20} height={20} src={src} alt={alt}/>
        </button>
  )
}

export default index;