import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Contact() {
    return (
        <div>

            <h3 className="App text-5xl p-12 pt-16">Contact Me!</h3>

            

            <div className='grid grid-cols-3 gap-y-3'>
                <div className='text-center text-2xl'>Email</div>
                <div className='text-center text-2xl'>Phone Number</div>
                <div className='text-center text-2xl'>Linkedin</div>
                <div className='text-center text-2xl'>preston_yong@yahoo.com</div>
                <div className='text-center text-2xl'>(650) 201 - 1938</div>
                <div className='text-center text-2xl'><a href="https://www.linkedin.com/in/preston-yong-6a51442ab/" target='_blank'>Preston Yong</a></div>
            </div>
        </div>
    )
}


export default Contact;