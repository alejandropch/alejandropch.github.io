import React, { useEffect, useRef, useState } from 'react';
import ContactForm from '../components/Form/Form.Contact'
import axios from '../http-common'
export default function Form() {
    const [message, setMessage] = useState("")
    const form = useRef<HTMLFormElement>(null);
    const http = axios()
    const handleClick = async() =>{
         // as any 'cause fromEntries doesn't support null value and data don't accept undefined values already 'cause of useRef
        let data = form.current as any 
            data = Object.fromEntries(data)
            console.log(data);
        try{
            const response = await http.post('/messages',data)
            const newMessage = response.data.message
            setMessage(newMessage)
        }catch(e :any){
            const error = e.response?.data?.message ?? "Fatal error, we are going to fix it!";
            setMessage(error)
        }
    }
    
  return (
    <form className="d-flex align-items-center flex-column" ref={form}>
        
        <p className="fs-3">Contact</p>
            <ContactForm />
        <p className="text">{message}</p>

        <button type="button" className="btn btn-outline-light" onClick={handleClick}>Send</button>
    </form>
);
}
