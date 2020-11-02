import React from 'react'
import './visa.css'
import { FormattedMessage } from 'react-intl';
export default function visa(props) {
    const visaTitle = props.location.state + '.title'
    const visaContent1 = props.location.state + '.content1'
    const visaContent2 = props.location.state + '.content2'
    return (
        <div id="visa">
            <div className="title">
                <h3><FormattedMessage id={visaTitle}/></h3>
            </div>
            <div>
                <div className="content">
                    <p><FormattedMessage id={visaContent1} values={{ br: <br />  }}/></p>
                    <p><FormattedMessage id={visaContent2} values={{ br: <br />  }}/></p>
                </div>
                
            </div>
        </div>
    )
}
