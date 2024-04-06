import {ModeToggle} from "../ModeToggle"
import LinksNavbar from "./LinksNavbar"
import Logo from "./Logo"
import UserBtn from "./UserBtn"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {FaBarsStaggered} from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full py-2 shadow-md bg-background">
      <div className="container flex flex-row items-center justify-between gap-4 ">
        <Logo />
        <div className="flex-row items-center justify-center flex-1 hidden md:flex">
          <LinksNavbar />
          <div className="flex flex-row items-center gap-2 px-4">
            {/* <UserBtn /> */}
            <ModeToggle />
          </div>
        </div>
        <Sheet>
          <SheetTrigger className="block md:hidden">
            <FaBarsStaggered />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center md:hidden">
            <LinksNavbar />
            <div className="flex flex-row items-center justify-center gap-4">
              {/* <UserBtn /> */}
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default Navbar
