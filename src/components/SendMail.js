import React from 'react';
import './SendMail.css'
import Close from '@material-ui/icons/Close'
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { closeSendMessage } from '../features/mailSlice';

const SendMail = () => {
    const { register, handleSubmit, watch, errors} = useForm();
    const dispatch = useDispatch()

    const onSubmit = (Data) => {
        console.log(Data);
    };

    return (
        <div className='sendMail'>
            <div className='sendMail__header'>
                <h3>New Message</h3>
                    <Button>
                        <Close onClick={() => dispatch(closeSendMessage())} className='sendMail__close' />
                    </Button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input  
                    name='to'
                    placeholder='To' 
                    type="text" 
                    {...register('to', { required: true })}
                    />
                    
                <input 
                    placeholder='Subject' 
                    type="text" 
                    {...register('subject', { required: true })}
                    />
                
                <input 
                    placeholder='Message...' 
                    type="text" 
                    className='sendMail__message'
                    {...register('message', { required: true })}
                    />
                
                    <div className='sendMail__option'>
                        <Button type='submit' className='sendMail__send'>Send</Button>
                    </div>
            </form>
        </div>
    );
}

export default SendMail;
