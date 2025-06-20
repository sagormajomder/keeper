type InputFieldProps = React.ComponentPropsWithoutRef<"input"> & {
  placeholder: string;
  title?: string;
  isSearch?: boolean;
  search?: string;
  dispatch: React.Dispatch<{
    type: string;
    payload: string;
  }>;
};

function InputField({
  placeholder,
  title,
  isSearch = false,
  search,
  dispatch,
}: InputFieldProps) {
  const inputValue = isSearch ? search : title;
  const inputActionType = isSearch ? "searchNotes" : "addNoteTitle";
  const titleStyle = `bg-primary/10 focus:outline-primary/75 rounded-lg px-4 py-3 w-full`;
  const searchStyle =
    "bg-primary/10 focus:outline-primary/75 rounded-lg pl-10 py-2 w-full shadow-lg";
  return (
    <input
      className={isSearch ? searchStyle : titleStyle}
      value={inputValue}
      onChange={(e) =>
        dispatch({
          type: inputActionType,
          payload: e.target.value,
        })
      }
      type="text"
      placeholder={placeholder}
    />
  );
}

export default InputField;
