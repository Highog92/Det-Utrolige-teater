import style from './Modal.module.scss'
import { useState } from 'react';

// Modal lavet og modtaget af Kamilla.

export const Modal = (props) => {
    const [modalOpen, setModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalOpen(false);
    };

    // Function to close the modal when clicking outside
    const handleOutsideClick = (e) => {
        if (modalOpen && e.target === e.currentTarget) {
            closeModal();
        }
    };

    //STYLING
    //Button
    let buttonFontColor = props.buttonFontColor || "var(--white)"
    let buttonColor = props.buttonColor || "var(--black)"
    let buttonFontFamily = props.buttonFontFamily || "var(--text)"
    //Modal
    let modalFontColor = props.modalFontColor || "var(--black)"
    let modalColor = props.modalColor || "var(--gold)"
    let modalFontFamily = props.modalFontFamily || "var(--text)"


    return (
        <>
            <button onClick={openModal} style={{ color: buttonFontColor, backgroundColor: buttonColor, fontFamily: buttonFontFamily }} className={style.button}>Læs mere</button>

            {modalOpen && (
                <>
                    <div className={style.modalOverlay} onClick={closeModal}></div>


                    <dialog open/* ={modalOpen} */ className={style.modal} style={{ backgroundColor: modalColor }} onClick={handleOutsideClick}>
                        <div className={style.modalContent} style={{ backgroundColor: modalColor }}>
                            <span className={style.close} onClick={closeModal}>&times;</span>
                            <article style={{ color: modalFontColor, fontFamily: modalFontFamily }}>
                                {props.children}
                            </article>
                               
                        </div>


                    </dialog>
                </>
            )}
        </>
    );
};
