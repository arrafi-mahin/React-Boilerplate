import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ show = false, onClose, children }) => {

    return ReactDOM.createPortal(
        <div className={`modal absolute ${show ? '' : 'hidden'}`}>
            <div className="fixed z-[999] top-0 bottom-0 left-0 right-0 bg-[#0000008c]">
                <div className="flex w-full h-full items-center justify-center ">
                    <div className="relative bg-white rounded-lg p-5 min-w-[30vw]">
                        <div className="flex justify-end">
                            <span onClick={onClose} className="cursor-pointer font-bold mb-3">X</span>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
};

export default Modal;
