function Button({ children, style, onClick = null, icon = null }) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`transition-all duration-200 active:scale-95 ${style}`}
    >
      {icon}
      {children}
    </button>
  );
}

export { Button };
