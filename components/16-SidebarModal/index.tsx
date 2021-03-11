import { useState } from 'react'
import Menu from './Menu'
import Sidebar from './Sidebar'
// import SVGX from '../svgicons/SVGX'
import Modal from './Modal'
import ShowModalButton from './ShowModalButton'
import { AppProvider } from './Context'
import App from './App'

export default function SidebarModal() {
    // const [menuIsOpen, setMenuIsOpen] = useState(false)
    // const [showModal, setShowModal] = useState(false)

    // const menuHandler = () => {
    //     setMenuIsOpen(!menuIsOpen)
    // }

    // const showModalHandler = () => {
    //     setShowModal(!showModal)
    // }
    return (
        <AppProvider>
            {/* <div className="flex flex-row"> */}
            <App />
            {/* <Sidebar />
                <Menu /> */}
            {/* {menuIsOpen ?
                    <Sidebar menuIsOpen={menuIsOpen} closeHandler={menuHandler} />

                    :
                    <Menu clickHandler={menuHandler} />
                } */}
            {/* </div> */}
            
            {/* <Modal /> */}
            {/* <ShowModalButton /> */}
            {/* {showModal ?
                <Modal closeModalHandler={showModalHandler} />
                : 
                <ShowModalButton showModalHandler={showModalHandler} />
            } */}
        </AppProvider>
    )
}