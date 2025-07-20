import Select from "react-select";

const CustomSelect = ({
  options,
  placeholder,
  value,
  onChange,
  isMulti = false,
}) => {
  return (
    <Select
      isMulti={isMulti}
      options={options}
      value={
        isMulti
          ? options.filter(
              (option) => Array.isArray(value) && value.includes(option.value)
            )
          : options.find((option) => option.value === value) || null
      }
      onChange={(selected) =>
        isMulti
          ? onChange(selected ? selected.map((opt) => opt.value) : [])
          : onChange(selected ? selected.value : "")
      }
      placeholder={placeholder}
      classNamePrefix="react-select"
    />
  );
};

export default CustomSelect;
