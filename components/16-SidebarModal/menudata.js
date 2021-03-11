import SVGHome from "../svgicons/SVGHome";
import SVGUsers from "../svgicons/SVGUsers";
import SVGFolderOpen from "../svgicons/SVGFolderOpen";
import SVGCalendar from "../svgicons/SVGCalendar";
import SVGDocumentDuplicate from "../svgicons/SVGDocumentDuplicate";
import { FaTwitter, FaFacebook, FaLinkedin, FaBehance } from 'react-icons/fa'

export const menuData = [
    {
        id: 1,
        label: "Home",
        icon: SVGHome
    },
    {
        id: 2,
        label: "Team",
        icon: SVGUsers
    },
    {
        id: 3,
        label: "Projects",
        icon: SVGFolderOpen
    },
    {
        id: 4,
        label: "Calendar",
        icon: SVGCalendar
    },
    {
        id: 5,
        label: "Documents",
        icon: SVGDocumentDuplicate
    }
]

export const socialData = [
    {
        "id": 1,
        "url": "https://www.twitter.com",
        "icon": <FaTwitter />
    },
    {
        "id": 2,
        "url": "https://facebook.com",
        "icon": <FaFacebook />
    },
    {
        "id": 3,
        "url": "https://linkedin.com",
        "icon": <FaLinkedin />
    },
    {
        "id": 4,
        "url": "https://behance.com",
        "icon": <FaBehance />
    },
]