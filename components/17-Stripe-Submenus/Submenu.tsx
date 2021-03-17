import { useGlobalStripeContext } from './Context'
import { Transition } from '@headlessui/react'
import SubmenuCard from './SubmenuCard'

export default function Submenu() {
    const { isSubmenuOpen, navButtonIndex, navPrevButtonIndex } = useGlobalStripeContext()
    return (
        <div>
            {isSubmenuOpen ?
                // <Transition
                //     // appear doesn't seem to do what I expect
                //     appear={false}
                //     // #SubmenuTransition
                //     show={navButtonIndex != navPrevButtonIndex}
                //     // enter="transform duration-700"
                //     // enterFrom="scale-0 "
                //     // enterTo="scale-100"
                //     // leave="transform duration-700"
                //     // leaveFrom="scale-100"
                //     // leaveTo="scale-0"

                //     enter="transition ease-in-out duration-700 transform"
                //     enterFrom="translate-x-0" //"-translate-x-1/2"
                //     enterTo="translate-x-0"
                //     leave="transition ease-in-out duration-700 transform"
                //     leaveFrom="translate-x-0"
                //     leaveTo="-translate-x-1/2"
                // >
                    <SubmenuCard />
                // </Transition>
                : ``
            }
        </div>
    )
}