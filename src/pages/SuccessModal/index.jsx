import React, { useEffect, useState } from "react";
import {
    ModalContainer,
    ModalContent,
    SuccessIcon,
    Button,
    Message
} from "./style";

const SuccessModal = ({ onClose }) => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        onClose();
        window.location.replace('https://www.google.com');
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout();

    }, []);

    return (
        <ModalContainer>
            <ModalContent>
                {
                    !loading ? (
                        <>
                            <SuccessIcon>&#10003;</SuccessIcon>
                            <Message>Your form sended with success</Message>
                            <Button onClick={handleClick}>Okay</Button>
                        </>
                    ) : <p>Loading...</p>
                }
            </ModalContent>
        </ModalContainer>
    );
};

export default SuccessModal;