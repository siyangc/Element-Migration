import React, { Component } from 'react'

import './intro.css'
export default class introduction extends Component {
    render() {
        return (
            <div id="intro">
               <div id="intro1">
                    <section className="title">
                        <h2 style={{textAlign:"right"}}>ABOUT US</h2>
                    </section>
                    <div className="hr hr-short hr-right">
                        <span className="hr-inner">
                            <span className="hr-inner-style"></span>
                        </span>
                    </div>
                    <section className="content">
                        <p style={{textAlign: "right"}}>
                            Element Migration and Recruitment Consulting was established in 2001 to meet a 
                            growing need for professional migration services for both 
                            organisations as well as individuals. 
                            With over 18 years’ experience, 
                            we specialise in professional migration and recruitment 
                            services and take pride in our high success rates and our 
                            outstanding service to our customers. As a registered 
                            migration agent in Melbourne, our staff are highly 
                            experienced and skilled migration agents who can assist 
                            with all of your migration and recruitment needs. 
                            We work with clients ranging from standard migration, 
                            as well as highly complex migrations, often acting as 
                            professional migration consultants appointed for many 
                            Australian businesses.
                        </p>
                    </section>
                    <div className="hr hr-short hr-right">
                        <span className="hr-inner">
                            <span className="hr-inner-style"></span>
                        </span>
                    </div>
               </div>
               <div id="intro2">
                    <ul>
                        <li>
                            <div class="icon">                           
                            </div>
                            <article>
                                <div className="article_content">
                                    <header>
                                        <h4>
                                            ESTABLISHED FOR 18 YEARS
                                        </h4>
                                    </header>
                                    <div className="article_p">
                                        <p>
                                        Element was established in 2001, since then we have provided 
                                        migration and recruitment services for over a thousand successful 
                                        clients.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li>
                            <div class="icon">                           
                            </div>
                            <article>
                                <div className="article_content">
                                    <header>
                                        <h4>
                                        REGISTERED MIGRATION AGENTS
                                        </h4>
                                    </header>
                                    <div className="article_p">
                                        <p>
                                        Element has multiple staff registered as Australian migration agents. 
                                        Our founder was even recognised as a Fellow of the Migration Institute of Australia (FMIA) 
                                        which is awarded only to the top 20 migration agents in Australia.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li>
                            <div class="icon">                           
                            </div>
                            <article>
                                <div className="article_content">
                                    <header>
                                        <h4>
                                        VERY HIGH SUCCESS RATES
                                        </h4>
                                    </header>
                                    <div className="article_p">
                                        <p>
                                        We have consistently exceeded the industry average with an impressive 96% overall success rate. 
                                        Contact us today to see how we can help you too!
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </li>
                    </ul>
               </div>
            </div>
        )
    }
}
