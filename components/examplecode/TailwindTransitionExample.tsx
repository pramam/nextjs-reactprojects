import { Transition } from '@headlessui/react'
import { useState } from 'react'

export default function TailwindTransitionExample() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="mt-2 mb-5 flex justify-center">
            <div className="flex flex-col">
                <button onClick={() => setIsOpen(!isOpen)}
                    className="bg-blue-500 text-white inline-block px-2 py-2 focus:outline-none border border-transparent">
                    Toggle Tailwind Transition</button>
                <Transition
                    show={isOpen}
                    enter="transition-opacity duration-700"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-700"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <p>I will fade in and out</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,quaerat?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,quaerat?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,quaerat?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,quaerat?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,quaerat?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,quaerat?</p>
                </Transition>
            </div>
        </div>
    )
}