import React from "react";

const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
  icon,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full group">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400"
        >
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3 text-gray-400 group-focus-within:text-cyan-500 transition-colors">
            {icon}
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full px-4 py-3 ${icon ? "pl-10" : ""} bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 dark:focus:border-cyan-400 shadow-sm hover:border-slate-300 dark:hover:border-slate-700`}
        />
      </div>
    </div>
  );
};

export { Input };
