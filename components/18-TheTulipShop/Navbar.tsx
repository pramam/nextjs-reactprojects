import MenuButton from './MenuButton'
import Logo from './Logo'
import CartIconWithCount from './CartIconWithCount'

export interface IProps {
    navheight: string
    navcartheightlg: string
}

// * navheight is the height of the navbar, needed because it's container has that same mt, 
//   and the nav has to be shifted up by that amount (-translate-y-{num})
// * For md: and lower screens, the MenuButton on the left, Logo in center, Cart on right can be flex centered
// * navcartheightlg:
//   For lg: screens, there is no Menu Button on the left. We want the Logo in center, Cart on right.
//   This is accomplished by `flex justify-center` of Logo. And then a `flex justify-end` of Cart
//   and then UP shifting the Cart to be level with the Logo.
//   That is why navcartheightlg is required. It is not 1/2 the navbarheight, but eyeballed
//   to be leveled with The Tulip Shop.
//   It works because the Cart is position `absolute` and the container Navbar is position `fixed`.
export default function Navbar({ navheight, navcartheightlg }: IProps) {
    // fixed left-0 right-0 makes it centered and fixed; inset-x-0 also centers it
    // To work with translate: 
    //      - inset-x-0 top-0 removed
    //      - left-0 right-0 added 
    const nav_common_props = "z-50 bg-gray-900 fixed left-0 right-0 opacity-100 flex items-center justify-center"
    return (
        <div className={`${nav_common_props} ${navheight}`}>
            <div className="w-full">
                <div className="flex flex-row justify-between lg:hidden">
                    <MenuButton />
                    <Logo />
                    <CartIconWithCount />
                </div>
                <div className="hidden lg:flex flex-row justify-center">
                    <Logo />
                </div>
                <div className="hidden lg:flex flex-row justify-end">
                    {/* Note the absolute here  */}
                    <div className={`absolute ${navcartheightlg}`}>
                        <CartIconWithCount />
                    </div>
                </div>
            </div >
        </div>
    )
}