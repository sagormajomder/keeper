function InputField({
  placeholder,
  title,
  onTitle,
  isSearch = false,
  search,
  onSearch,
}) {
  const inputValue = isSearch ? search : title;
  const inputHanlder = isSearch ? onSearch : onTitle;
  const titleStyle = `bg-primary/10 focus:outline-primary/75 rounded-lg px-4 py-3 w-full`;
  const searchStyle =
    "bg-primary/10 focus:outline-primary/75 rounded-lg pl-10 py-2 w-full shadow-lg";
  return (
    <input
      className={isSearch ? searchStyle : titleStyle}
      value={inputValue}
      onChange={(e) => inputHanlder(e.target.value)}
      type="text"
      placeholder={placeholder}
    />
  );
}

export default InputField;
