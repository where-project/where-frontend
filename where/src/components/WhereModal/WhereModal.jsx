import React from 'react'
import { Modal, Button } from 'react-rainbow-components';
import MainPage from '../../pages/MainPage/MainPage';
const WhereModal = ({ isOpen, description, title, setIsOpen, isRedirect, ...props }) => {

    const handleOnClose = () => {
        setIsOpen(false)
    }

    const handleOnOkButton = () => {
        setIsOpen(false);
        if (isRedirect) {
            window.location.href = "/mainpage";
        }
    }
    return (
        <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
            <Modal
                isOpen={isOpen}
                onRequestClose={handleOnClose}
                title={title}
                footer={
                    <div className="rainbow-flex rainbow-justify_end">
                        <Button label="OK" variant="brand" onClick={handleOnOkButton} />
                    </div>
                }
            >
                <p >
                    {description}
                </p>
            </Modal>
        </div>
    );
}

export default WhereModal