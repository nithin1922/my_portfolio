// pages/page.tsx
import  NavbarDemo  from "../components/Navbar.js"; // Adjust the path if needed
import  BackgroundLinesDemo  from "../components/backgroundlines.js";
import { FloatingNavDemo } from "../components/FloatingNav.js"

export default function Home() {
    return(
        <div>
            <NavbarDemo/>
            <BackgroundLinesDemo/>
        </div>

    )
}