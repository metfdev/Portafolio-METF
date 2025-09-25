function Paragraph({ children, style = "hidden lg:block" }) {
  return <p className={style}>{children}</p>;
}

export { Paragraph };
