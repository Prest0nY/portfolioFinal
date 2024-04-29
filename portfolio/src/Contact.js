import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Contact() {
    return (
        <div>

            <h3 className="App font-serif text-3xl p-12 pt-16">Contact Me!</h3>

            

            <div className='grid grid-cols-3 gap-y-3'>
                <div className='text-center text-xl'>Email</div>
                <div className='text-center text-xl'>Phone Number</div>
                <div className='text-center text-xl'>Linkedin</div>
                <div className='text-center text-xl'>preston_yong@yahoo.com</div>
                <div className='text-center text-xl'>(650) 201 - 1938</div>
                <div className='text-center text-xl'>Preston Yong</div>
            </div>
        </div>
    )
}


export default Contact;