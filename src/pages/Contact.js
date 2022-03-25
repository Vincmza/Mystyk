import React, { useState } from 'react';

const Contact = () => {
    const [howManyLetters, setHowManyLetters]=useState([])
    console.log(howManyLetters)
    const count = (e)=>{    
        setHowManyLetters([e.target.value.length])
    }
    
    return (
        <div className='contact'>
            <h1 className='contactIntro'>Contact us</h1>
            <div className='contact__wrapper'>
                <form className='contact__wrapper__form'>
                    <label htmlFor='name'>Name or Band</label>
                    <input
                    className='contact__wrapper__form--name' 
                    id="name" 
                    type="text" 
                    name='name'
                    placeholder='Write your name here'
                    maxLength="50"
                    minLength="1"
                    pattern={/^[a-zA-Z-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ'_ ]{1,}$/}
                    required/>
                    <label htmlFor='email'>Your email</label>
                    <input
                    className='contact__wrapper__form--email'
                    id="email" 
                    type="email" 
                    name='email'
                    placeholder='your_email@exemple.com'
                    maxLength="80"
                    minLength="10"
                    required/>
                    <label htmlFor='message'>Your message</label>
                    <textarea
                    className='contact__wrapper__form--message'
                    id='message'
                    name='message'
                    maxLength="250"
                    onChange={(e)=>count(e)}
                    required
                    />
                    <div className='contact__wrapper__form--count'>{howManyLetters.length === 0 ? (<>0</>) : (<>{howManyLetters}</>)}/250</div>
                    <input className='contact__wrapper__form--submit' type="submit" value="Send"/>
                </form>
            </div>
        </div>
    );
};

export default Contact;