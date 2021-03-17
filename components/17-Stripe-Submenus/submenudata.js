import SVGHomeSmall from '../svgicons/SVGHomeSmall'
import SVGCreditCardSmall from '../svgicons/SVGCreditCardSmall'
import SVGDesktopComputerSmall from '../svgicons/SVGDesktopComputerSmall'
import SVGAnnotationSmall from '../svgicons/SVGAnnotationSmall'
import SVGArrowsExpandSmall from '../svgicons/SVGArrowsExpandSmall'
import SVGServerSmall from '../svgicons/SVGServerSmall'
import SVGUserAddSmall from '../svgicons/SVGUserAddSmall'
import SVGDocumentTextSmall from '../svgicons/SVGDocumentTextSmall'
import SVGDocumentSearchSmall from '../svgicons/SVGDocumentSearchSmall'
import SVGPhoneSmall from '../svgicons/SVGPhoneSmall'
import SVGUsersSmall from '../svgicons/SVGUsersSmall'
import SVGGlobeAltSmall from '../svgicons/SVGGlobeAltSmall'
import SVGBriefcaseSmall from '../svgicons/SVGBriefcaseSmall'

export const signin_url = "/stripe/products"
export const startnow_url = "/stripe/products"

export const submenuData = [
    {
        page: "Products",
        links: [
            {
                id: 1,
                name: "Payment",
                icon: SVGCreditCardSmall,
                textcolor: "text-blue-500",
                url: "/stripe/products"
            },
            {
                id: 2,
                name: "Terminal",
                icon: SVGDesktopComputerSmall,
                textcolor: "text-red-500",
                url: "/stripe/products"
            },
            {
                id: 3,
                name: "Connect",
                icon: SVGAnnotationSmall,
                textcolor: "text-green-500",
                url: "/stripe/products"
            },
        ]
    },
    {
        page: "Use cases",
        links:
            [
                {
                    id: 1,
                    name: "Ecommerce",
                    icon: SVGArrowsExpandSmall,
                    textcolor: "text-pink-400",
                    url: "/stripe/products"
                },
                {
                    id: 2,
                    name: "SaaS",
                    icon: SVGServerSmall,
                    textcolor: "text-green-500",
                    url: "/stripe/products"
                },
                {
                    id: 3,
                    name: "Marketplaces",
                    icon: SVGUserAddSmall,
                    textcolor: "text-blue-500",
                    url: "/stripe/products"
                },
            ]
    },
    {
        page: "Developers",
        links: [
            {
                id: 1,
                name: "Documentation",
                icon: SVGDocumentTextSmall,
                textcolor: "text-blue-500",
                url: "/stripe/products"
            },
            {
                id: 2,
                name: "API Reference",
                icon: SVGDocumentSearchSmall,
                textcolor: "text-pink-500",
                url: "/stripe/products"
            },
            {
                id: 3,
                name: "Support",
                icon: SVGPhoneSmall,
                textcolor: "text-green-500",
                url: "/stripe/products"
            },
        ]
    },
    {
        page: "Company",
        "links": [
            {
                id: 1,
                name: "About Stripe",
                icon: SVGHomeSmall,
                textcolor: "text-red-500",
                url: "/stripe/company"
            },
            {
                id: 2,
                name: "Customers",
                icon: SVGUsersSmall,
                textcolor: "text-green-500",
                url: "/stripe/products"
            },
            {
                id: 3,
                name: "Enterprise",
                icon: SVGGlobeAltSmall,
                textcolor: "text-blue-700",
                url: "/stripe/products"
            },
            {
                id: 4,
                name: "Jobs",
                icon: SVGBriefcaseSmall,
                textcolor: "text-purple-500",
                url: "/stripe/products"
            },
        ]
    },
]
export default submenuData