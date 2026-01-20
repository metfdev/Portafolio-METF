function Anchor({
  children,
  style = "flex flex-col bg-gradient-to-r  from-cyan-800 to-teal-600  dark:from-cyan-500/50 dark:to-teal-400/50 p-2 rounded-lg  lg:from-transparent lg:to-transparent dark:lg:from-transparent dark:lg:to-transparent lg:hover:text-gray-900 dark:lg:hover:text-gray-200 lg:after:origin-left lg:after:scale-x-0 lg:after:w-full lg:after:h-[1px] lg:hover:after:scale-x-100 lg:after:content-[''] lg:after:bg-cyan-500 lg:after:trasition-all lg:after:duration-300 lg:after:ease trasition-all lg:duration-200 lg:ease  lg:cursor-pointer ",
  onclick = null,
}) {
  return (
    <button className={style} onClick={() => onclick && onclick()}>
      {children}
    </button>
  );
}

export { Anchor };
