// pages/page.tsx
import  NavbarDemo  from "../components/Navbar.js"; // Adjust the path if needed
import  BackgroundLinesDemo  from "../components/backgroundlines.js";
import { FloatingNavDemo } from "../components/FloatingNav.js"
import { FloatingDockDemo } from "../components/FloatingDock.js"
import { HeroScrollDemo } from "../components/Container.js"
import { TimelineDemo } from "../components/Timeline.js";
import { AuroraBackgroundDemo } from "../components/AuroraBackground.js";
import { BackgroundBeamsWithCollisionDemo }  from "../components/BackgroundPops.js"


export default function Home() {
    return(
        <div>
            <NavbarDemo />
            <AuroraBackgroundDemo/>         
            <TimelineDemo/>
            <HeroScrollDemo/>
        </div>

    )
}