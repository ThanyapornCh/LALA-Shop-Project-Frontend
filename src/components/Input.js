export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <>
      <input
        className={`w-full py-1 px-1 rounded-md border ${
          error ? 'border-red-500' : ' border-sky-500'
        }  `}
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="text-sm font-light text-red-600">{error}</div>}
    </>
  );
}
