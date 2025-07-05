import { RiHome9Fill } from "react-icons/ri";
import { IoBook } from "react-icons/io5";
import { CgPhone } from "react-icons/cg";
import { BiSolidCartDownload } from "react-icons/bi";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import {Link} from "react-router"
function Header(){
    return <div className="header">

        <img className="logo"src="logo.png"></img>

        <div className="nav">
            <Link to="/"><RiHome9Fill />Home</Link>
            <Link to="/about"><IoBook />About</Link>
            <Link to="/contact"><CgPhone />Contacts</Link>
            <Link to="/cart"><BiSolidCartDownload />Cart</Link>
             <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>

    </div>
}

export default Header;