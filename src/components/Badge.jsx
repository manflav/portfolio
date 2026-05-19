function Badge({ name, bg, label, labelColor }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-gray-200 transition-all duration-200 cursor-default select-none">
      <span className={`w-6 h-6 rounded-[6px] flex items-center justify-center text-[11px] font-bold ${bg} ${labelColor}`}>
        {label}
      </span>
      <span className="text-sm font-semibold text-gray-800 tracking-tight">
        {name}
      </span>
    </div>
  );
}

export default Badge;