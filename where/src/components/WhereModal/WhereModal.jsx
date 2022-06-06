import React from 'react'
import { Modal, Button } from 'react-rainbow-components';

const WhereModal = ({ isOpen, description, title, setIsOpen, ...props }) => {

    const handleOnClose = () => {
        setIsOpen(false)
    }
    return (
        <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
            <Modal
                isOpen={isOpen}
                onRequestClose={handleOnClose}
                title={title}
                footer={
                    <div className="rainbow-flex rainbow-justify_end">
                        <Button label="OK" variant="brand" onClick={handleOnClose} />
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