import * as React from 'react';
import Modal from '@mui/material/Modal';
import s from "./Photos.module.css";

const style = {
    position: 'absolute',

    boxShadow: 24,
};

export default function BasicModal({children}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className={s.single_photo}>
            <div  onClick={handleOpen}>{children}</div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={s.single_photo_modal}>
                    {children}
                </div>
            </Modal>
        </div>
    );
}