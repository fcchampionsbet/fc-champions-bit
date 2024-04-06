import Image from "next/image"

const Logo = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-1 uppercase tracking-wider font-bold">
      <Image src={"/images/svg/logo.svg"} alt="logo" width={20} height={20} />
      <span className="">champions</span>
      <span className=" text-red-600">bet</span>
    </div>
  )
}

export default Logo
