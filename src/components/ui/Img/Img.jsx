function Img({ src, style = "w-5 lg:hidden", alt }) {
  return <img className={style} src={src} alt={alt} />
}

export { Img }