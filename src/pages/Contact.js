import React, { useState } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
    const [data, setData]=useState({name : "", email : "", message : "" })
    //STATE TO KNOW IF FORM HAS BEEN SUBMITTED PROPERLY
    const [isEmailOk, setIsEmailOk]=useState(null)
    //LOADER
    const [isLoader, setIsLoader]=useState(false)
    const [countValue, setCountValue]=useState(0)
    //FUNCTION TO CATCH VALUE OF TEXTAREA
    const count = (e)=>{
        getData(e, "message")   
        setCountValue(e.target.value.length)
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
            setData({name : "", email : "", message : "" })
            setCountValue(0)
        })
        .catch(err=>{
            console.log("l'erreur : ", err)
            setIsEmailOk(false)
        })
    }
    const displayIsEmailOk = ()=>{
        if(isEmailOk === true){
            return (<><p style={{color:"green", textAlign: "center"}}>Your message has been sent successfully !</p></>)
        } else if(isEmailOk === false){
            return (<><p style={{color:"red", textAlign: "center"}}>Your message failed to be sent !</p></>)
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
    const getData = (e,name)=>{
        const array = {...data}
        array[name] = e.target.value
        setData({array})
        
    }
    return (
        <div className='contact'>
            <h1 className='contactIntro'>Contact us</h1>
            <div className='contact__wrapper'>
                <div className='contact__wrapper__words'>
                    <p>Weither you are a band or someone who wants informations or share suggestions, feel free to use the form below</p>
                </div>
                <form className='contact__wrapper__form' onSubmit={(e)=>sendEmail(e)}>
                    <label htmlFor='name'>Name or Band</label>
                    <input
                    className='contact__wrapper__form--name' 
                    id="name" 
                    type="text" 
                    name='name'
                    value={data.name}
                    onChange={(e)=>getData(e,"name")}
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
                    value={data.email}
                    onChange={(e)=>getData(e,"email")}
                    placeholder='your_email@exemple.com'
                    maxLength="80"
                    minLength="10"
                    required/>
                    <label htmlFor='message'>Your message</label>

                    <textarea
                    className='contact__wrapper__form--message'
                    id='message'
                    name='message'
                    value={data.message}
                    maxLength="300"
                    onChange={(e)=>count(e)}
                    style={{resize : "none"}}
                    required
                    />
                    <div className='contact__wrapper__form--count'>{countValue}/300</div>
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