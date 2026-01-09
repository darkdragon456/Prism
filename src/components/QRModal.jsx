import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'

export default function QRModal({ open, onClose, value, label }) {
  const [dataUrl, setDataUrl] = useState('')

  useEffect(() => {
    if (!open) return
    let mounted = true
    QRCode.toDataURL(value, { width: 320 })
      .then(url => { if (mounted) setDataUrl(url) })
      .catch(() => { if (mounted) setDataUrl('') })
    return () => { mounted = false }
  }, [open, value])

  if (!open) return null

  return (
    <div className="qr-backdrop" role="dialog" aria-modal="true">
      <div className="qr-modal">
        <button className="qr-close" onClick={onClose} aria-label="Close">×</button>
        <h3>{label}</h3>
        {dataUrl ? (
          <img src={dataUrl} alt={`QR code for ${label}`} />
        ) : (
          <div className="qr-placeholder">Generating…</div>
        )}
        <div className="qr-actions">
          <a className="btn" href={value} target="_blank" rel="noopener noreferrer">Open</a>
          <button className="btn" onClick={() => navigator.clipboard && navigator.clipboard.writeText(value)}>Copy Link</button>
        </div>
      </div>
    </div>
  )
}
