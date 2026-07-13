import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import '../css/ImageModal.css'

const ImageModal = (src: string, alttext: string) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (!isOpen) return

    // モーダル表示中は背景のスクロールを止める
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Escapeキーでも閉じられるように
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <img className="thumbnail" onClick={handleOpen} src={src} alt={alttext} />
      {isOpen &&
        createPortal(
          <div onClick={handleClose} className="modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={src} alt={alttext} />
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

export default ImageModal