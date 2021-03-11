import { useContext } from 'react'
import Sidebar from './Sidebar'
import Menu from './Menu'
import Modal from './Modal'
import ShowModalButton from './ShowModalButton'
import { AppContext } from './Context'

export default function App() {
    const { menuIsOpen, showModal } = useContext(AppContext)

    return (
        <div>
            {menuIsOpen ?
                <Sidebar />
                :
                <Menu />
            }
            {showModal ?
                <Modal />
                :
                <ShowModalButton />
            }
        </div>
    )
}