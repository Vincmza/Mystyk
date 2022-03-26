import React, { useState } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
    //STATE TO KNOW IF FORM HAS BEEN SUBMITTED PROPERLY
    const [isEmailOk, setIsEmailOk]=useState(null)
    //LOADER
    const [isLoader, setIsLoader]=useState(false)
    //STATE TO STORE MESSAGE LENGTH
    const [howManyLetters, setHowManyLetters]=useState([])
    //FUNCTION TO CATCH VALUE OF TEXTAREA
    const count = (e)=>{    
        setHowManyLetters([e.target.value.length])
    }
    //FUNCTION TO SEND DATA FROM FORM BY EMAIL
    const sendEmail = (e)=>{
        e.preventDefault()
        emailjs.sendForm(
            "service_05t4q7e",
            "template_exeks4q",
            e.target,
            "CzcYWSydasLZ1fDH1"
        ).then(res=>{
            console.log("réponse : ", res)
            setIsEmailOk(true)
        })
        .catch(err=>{
            console.log("l'erreur : ", err)
            setIsEmailOk(false)
        })
    }
    const displayIsEmailOk = ()=>{
        if(isEmailOk === true){
            return (<><p style={{color:"green"}}>Message envoyé !</p></>)
        } else if(isEmailOk === false){
            return (<><p style={{color:"red"}}>Echec lors de l'envoi</p></>)
        } else if (isEmailOk === null){
            return(<></>)
        }
    }
    const loading = (state)=>{
        if(isEmailOk === null){
            setIsLoader(true)
        }
        else if(state === false) {
            setIsLoader(false)
        }
    }
    return (
        <div className='contact'>
            <h1 className='contactIntro'>Contact us</h1>
            <div className='contact__wrapper'>
                <form className='contact__wrapper__form' onSubmit={(e)=>sendEmail(e)}>
                    <label htmlFor='name'>Name or Band</label>
                    <input
                    className='contact__wrapper__form--name' 
                    id="name" 
                    type="text" 
                    name='name'
                    placeholder='Write your name here'
                    maxLength="50"
                    minLength="1"
                    pattern="^[a-zA-Z_0-9àáâãäåçèéêëìíîïðòóôõöùúûüýÿ' ]{1,}$"
                    required/>
                    <label htmlFor='email'>Your email</label>

                    <input
                    className='contact__wrapper__form--email'
                    id="user_email" 
                    type="email" 
                    name='user_email'
                    placeholder='your_email@exemple.com'
                    maxLength="80"
                    minLength="10"
                    required/>
                    <label htmlFor='message'>Your message</label>

                    <textarea
                    className='contact__wrapper__form--message'
                    id='message'
                    name='message'
                    maxLength="300"
                    onChange={(e)=>count(e)}
                    style={{resize : "none"}}
                    required
                    />
                    <div className='contact__wrapper__form--count'>{howManyLetters.length === 0 ? (<>0</>) : (<>{howManyLetters}</>)}/300</div>
                    <div className='contact__wrapper__form__isSent'>
                        {isLoader === true && isEmailOk === null ? 
                            (<>
                                <div className='contact__wrapper__form__isSent--loader'>
                                    
                                </div>
                            </>)
                            :
                            (<>
                                {()=>loading(false)}
                            </>)
                        }
                        {displayIsEmailOk()}
                        
                    </div>
                    <input className='contact__wrapper__form--submit' type="submit" value="Send" onClick={loading}/>
                </form>
            </div>
        </div>
    );
};

export default Contact;