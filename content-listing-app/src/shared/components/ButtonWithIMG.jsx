import React from 'react'

const index = ({
    style,
    src,
    alt,
    handlerClick = () => {}
}) => {
  return (
        <button style={style} onClick={handlerClick}>
        <img width={20} height={20} src={src} alt={alt}/>
        </button>
  )
}

export default index;