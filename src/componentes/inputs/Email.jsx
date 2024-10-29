import { MdEmail } from "react-icons/md";



function Input_Texto() {
  return (
    <div className="relative">
      <input
        placeholder="Email"
        className="p-2.5 pl-10 text-sm border text-gray-700 border-gray-300 rounded-lg w-full focus:outline-none focus:border-gray-400 overflow-hidden text-ellipsis whitespace-nowrap"
        type="email"
      />
      <div className="absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-lg">
        <MdEmail   />
      </div>
    </div>
  );
}

export default Input_Texto;
