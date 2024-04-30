import QRCode from "react-qr-code"
import { useState } from "react";

export default function QrCodeGenerator(){

    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    function habdleGenerateQrCode(){
        setQrCode(input)
        setInput('')
    }

    return <div>
        <h1>QR Code Generator</h1>
        <div>
            <input onChange={(e) => setInput(e.target.value)} type="text" name="qr-code" placeholder="Enter a value here" value={input}/>
            <button disabled={input && input.trim() !== "" ? false : true} onClick={habdleGenerateQrCode}>Generate</button>
        </div>
        <div>
            <QRCode
                id = "qr-code-value"
                value={qrCode}
                size={400}
                bgColor = "white"
            />
        
        </div>
    </div>
}