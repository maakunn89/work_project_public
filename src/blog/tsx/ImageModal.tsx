import React, { useState } from 'react'
import '../css/ImageModal.css'

const ImageModal = (src: string, alttext: string) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <img className="thumbnail" onClick={handleOpen} src={src} alt={alttext} />
      {isOpen && (
        <div onClick={handleClose} className="modal-overlay">
          <div className="modal-content">
            <img src={src} alt={alttext} />
          </div>
        </div>
      )}
    </>
  )
}

export default ImageModal
