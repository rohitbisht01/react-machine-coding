import { useState } from "react";

const QrGenerator = () => {
  return (
    <div>
      <h3>QR Generator</h3>
      <QrCode />
    </div>
  );
};

const QrCode = () => {
  const [url, setUrl] = useState("");
  const [showQr, setShowQr] = useState(false);

  const handleQrCode = (e) => {
    e.preventDefault();
    setShowQr(true);
  };

  return (
    <div>
      <form onSubmit={handleQrCode}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your url to generate qr code"
        />
        <button type="submit">Generate QR Code</button>
      </form>
      {url && showQr && (
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?data=${url}&amp;size=100x100`}
          alt="QR Image"
        />
      )}
    </div>
  );
};

export default QrGenerator;
