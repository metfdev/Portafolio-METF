function Tag({ children }) {
  return (
    <p className="border border-gray-600/50 py-1 px-3 rounded-full text-sm dark:text-gray-300 text-gray-700 transition-colors duration-200">
      {children}
    </p>
  );
}

export { Tag };
