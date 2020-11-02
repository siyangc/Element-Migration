import React from 'react'
import './detail.css'
import { FormattedMessage } from 'react-intl';
export default function detail() {
    return (
        
        <div id="detail">
            <div id="color_wrapper">
            <div>
                <h2>
                    <FormattedMessage id="part3.title" />
                </h2>
            </div>
            <div>
                <p>
                <FormattedMessage id="part3.content1" />
                </p>
                <ul>
                    <li>
                    <FormattedMessage id="part3.content2" />
                    </li>
                    <li>
                    <FormattedMessage id="part3.content3" />
                    </li>
                    <li>
                    <FormattedMessage id="part3.content4" />
                    </li>
                    <li>
                    <FormattedMessage id="part3.content5" />
                    </li>
                    <li>
                    <FormattedMessage id="part3.content6" />
                    </li>
                    <li>
                    <FormattedMessage id="part3.content7" />
                    </li>
                    <li>
                    <FormattedMessage id="part3.content8" />
                    </li>
                </ul>
                <p>
                <FormattedMessage id="part3.content9" />
                </p>
            </div>
            </div>
        </div>
    )
}
