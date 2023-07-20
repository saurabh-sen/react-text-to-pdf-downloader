import { useRef, useState } from 'react';
import './App.css'
import PrintThisComponent from './PrintThisComponent';
import { useReactToPrint } from 'react-to-print';

function App() {

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [message, setMessage] = useState('Hello World!');

  return (
    <>
      <h1>React text to pdf downloader by Saurabh</h1>
      <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}>Write your secrets here</textarea>
      <PrintThisComponent componentRef={componentRef} message={message} />
      <button onClick={handlePrint}>
        Click to print
      </button>
    </>
  )
}

export default App
