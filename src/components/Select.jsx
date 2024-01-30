import { IoIosArrowDown } from "react-icons/io"; 
export function Select({ title, options }) {
  return (
    <div className="relative">
      <select defaultValue={""} className="w-24 appearance-none border border-gray-300 p-4">
        <option value="" desabled hidden> {title}</option>
        {options.map((option) => (
          <option value={option} key={option}>{option}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex-center">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
