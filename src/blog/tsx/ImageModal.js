import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../css/ImageModal.css';
const ImageModal = (src, alttext) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    useEffect(() => {
        if (!isOpen)
            return;
        // モーダル表示中は背景のスクロールを止める
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        // Escapeキーでも閉じられるように
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);
    return (_jsxs(_Fragment, { children: [_jsx("img", { className: "thumbnail", onClick: handleOpen, src: src, alt: alttext }), isOpen &&
                createPortal(_jsx("div", { onClick: handleClose, className: "modal-overlay", children: _jsx("div", { className: "modal-content", onClick: (e) => e.stopPropagation(), children: _jsx("img", { src: src, alt: alttext }) }) }), document.body)] }));
};
export default ImageModal;
