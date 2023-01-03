import { Modalhook } from "../hooks/Modalhook";
import Login from "../login/Login";
import Signin from "../signin/Signin";
import Modal from "./Modal";

const Modals =() => {
    const [isOpenLogin, openModalLogin, closeModalLogin] = Modalhook(false);
    const [isOpenSignin, openModalSignin, closeModalSignin] = Modalhook(false);

    return (
        <div>
            <button onClick={openModalLogin}>Ingresar</button>
            <Modal isOpen={isOpenLogin} closeModal={closeModalLogin}>
            <Login />
            </Modal>
            <button onClick={openModalSignin}>Registrarse</button>
            <Modal isOpen={isOpenSignin} closeModal={closeModalSignin}>
            <Signin />
            </Modal>
        </div>
    )
}
export default Modals;