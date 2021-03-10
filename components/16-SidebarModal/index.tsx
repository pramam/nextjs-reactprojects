import { useState } from 'react'
import Menu from './Menu'
import Sidebar from './Sidebar'
// import SVGX from '../svgicons/SVGX'
import Modal from './Modal'
import ShowModalButton from './ShowModalButton'

export default function SidebarModal() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const menuHandler = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const showModalHandler = () => {
        setShowModal(!showModal)
    }
    return (
        <>
            <div className="flex flex-row">
                {menuIsOpen ?
                    <Sidebar menuIsOpen={menuIsOpen} closeHandler={menuHandler} />
                    :
                    <Menu clickHandler={menuHandler} />
                }
            </div>

            {showModal ?
                <Modal closeModalHandler={showModalHandler} />
                : 
                <ShowModalButton showModalHandler={showModalHandler} />
            }
        </>
    )
}