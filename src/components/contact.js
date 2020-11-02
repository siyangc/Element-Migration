import React from 'react'
import { FormattedMessage } from 'react-intl';
import './contact.css';
export default function contact() {
    return (
        <div id='contact'>
            <h1><FormattedMessage id="part5.title" /></h1>
            <div className='contact'>            
                <h4><FormattedMessage id="part5.content1" /></h4>
                <h6>Suite 4, level 1, 14-16 Prospect St, Box Hill, VIC 3128</h6>                           
                <h4><FormattedMessage id="part5.content2" /></h4>
                <h6>(03) 99397658</h6>                
                <h4><FormattedMessage id="part5.content3" /></h4>
                <h6>zenelement@gmail.com</h6>
            </div>
        </div>
    )
}
