const index = ({
    type = "button",
    style,
    src,
    alt,
    handlerClick = () => {}
}) => {
  return (
        <button type={type} style={style} onClick={handlerClick}>
        <img width={20} height={20} src={src} alt={alt}/>
        </button>
  )
}

export default index;