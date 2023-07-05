const CustomBut = ({
  name,
  color,
}: {
  name: string
  color: string
}) => {
  return (
    <div className="group text-[#eeeeee]  z-2 relative inline-block overflow-hidden text-center cursor-pointer focus:border-[#1B1B1B] dark:focus:border-[#eeeeee]  focus:ring-2 focus:ring-indigo-200 dark:focus:ring-white py-3 focus:outline-none ">
      <div className="absolute block inset-y-0 left-0 w-[1px]  rounded-sm bg-[#1B1B1B] transition-all group-hover:w-full  group-active:bg-green-700"></div>

      <div
        className={`relative block text-2xl font-medium px-10 dark:text-${color} transition-colors group-hover:text-white`}
      >
        {name}
      </div>
    </div>
  )
}

export default CustomBut
