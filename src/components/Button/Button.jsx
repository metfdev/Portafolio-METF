function Button({ children, style, onClick = null, icon=null }) {
  return (
    <button onClick={() => onClick("dark")} className={style}>
      {icon? icon : null}
      {children ? children : null}
    </button>
  );
}

export { Button }