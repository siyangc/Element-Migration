import React from 'react';
import './services.css';
import { FormattedMessage } from 'react-intl';
import {Link} from "react-router-dom"
export default function services() {
    return (
        <div id="services">
            <div className="title">
                <h2><FormattedMessage id="part4.title" /></h2>
            </div>
            <div className="hr hr-short hr-right">
                <span className="hr-inner">
                    <span className="hr-inner-style"></span>
                </span>
            </div>
            <section className="content">
                <p>
                <FormattedMessage id="part4.content" />
                </p>
            </section>
            <div className="part">
                <ul>
                    <li>
                        <div className="icon"></div>
                        <article>
                            <div>
                                <header>
                                    <h3><FormattedMessage id="part4.part1.title" /></h3>
                                </header>
                            </div>
                            <div>
                                <p>&gt;
                                    <Link to={{
                                        pathname: "/visa",
                                        state: "A188"
                                        }}>
                                        <FormattedMessage id="part4.part1.content1" />
                                    </Link>
                                </p>
                                <p>&gt;<Link to={{
                                        pathname: "/visa",
                                        state: "B188"
                                        }}><FormattedMessage id="part4.part1.content2" /></Link></p>
                                <p>&gt;<Link to={{
                                        pathname: "/visa",
                                        state: "C188"
                                        }}><FormattedMessage id="part4.part1.content3" /></Link></p>
                                <p>&gt;<Link to={{
                                        pathname: "/visa",
                                        state: "132"
                                        }}><FormattedMessage id="part4.part1.content4" /></Link></p>
                            </div>
                        </article>
                    </li>
                    <li>
                        <div className="icon"></div>
                        <article>
                            <div>
                                <header>
                                    <h3><FormattedMessage id="part4.part2.title" /></h3>
                                </header>
                            </div>
                            <div>
                                <p>&gt;<Link to={{
                                        pathname: "/visa",
                                        state: "186"
                                        }}><FormattedMessage id="part4.part2.content1" /></Link></p>
                                <p>&gt;<Link to={{
                                        pathname: "/visa",
                                        state: "482"
                                        }}><FormattedMessage id="part4.part2.content2" /></Link></p>                                
                            </div>
                        </article>
                    </li>
                </ul>
            </div>
            <div className="hr">
                <span className="hr-inner">
                    <span className="hr-inner-style"></span>
                </span>
            </div>
            <div className="part">
                <ul>
                    <li>
                        <div className="icon"></div>
                        <article>
                            <div>
                                <header>
                                    <h3><FormattedMessage id="part4.part3.title" /></h3>
                                </header>
                            </div>
                            <div>
                                <p>&gt;<Link to={{
                                        pathname: "/visa",
                                        state: "189"
                                        }}><FormattedMessage id="part4.part3.content1" /></Link></p>
                                <p>&gt;<Link to={{
                                        pathname: "/visa",
                                        state: "190"
                                        }}><FormattedMessage id="part4.part3.content2" /></Link></p>
                            </div>
                        </article>
                    </li>
                    <li>
                        <div className="icon"></div>
                        <article>
                            <div>
                                <header>
                                    <h3><FormattedMessage id="part4.part4.title" /></h3>
                                </header>
                            </div>
                            <div>
                                <p>&gt;<Link to={{
                                        pathname: "/visa",
                                        state: "491"
                                        }}><FormattedMessage id="part4.part4.content1" /></Link></p>                                
                                <p>&gt;<Link to={{
                                        pathname: "/visa",
                                        state: "494"
                                        }}><FormattedMessage id="part4.part4.content2" /></Link></p>       
                                <p>&gt;<Link to={{
                                        pathname: "/visa",
                                        state: "191"
                                        }}><FormattedMessage id="part4.part4.content3" /></Link></p>                              
                            </div>
                        </article>
                    </li>
                </ul>
            </div>
            <div className="hr">
                <span className="hr-inner">
                    <span className="hr-inner-style"></span>
                </span>
            </div>
            <div className="part">
                <ul>
                    <li>
                        <div className="icon"></div>
                        <article>
                            <div>
                                <header>
                                    <h3><FormattedMessage id="part4.part5.title" /></h3>
                                </header>
                            </div>
                            <div>
                                <p>&gt;<Link to={{
                                        pathname: "/visa",
                                        state: "couple"
                                        }}><FormattedMessage id="part4.part5.content1" /></Link></p>
                                <p>&gt;<Link to={{
                                        pathname: "/visa",
                                        state: "parent"
                                        }}><FormattedMessage id="part4.part5.content2" /></Link></p>
                            </div>
                        </article>
                    </li>
                    <li>
                        <div className="icon"></div>
                        <article>
                            <div>
                                <header>
                                    <h3><FormattedMessage id="part4.part6.title" /></h3>
                                </header>
                            </div>
                            <div>
                                <p>&gt;<Link to={{
                                        pathname: "/visa",
                                        state: "student"
                                        }}><FormattedMessage id="part4.part6.content1" /></Link></p>
                                <p>&gt;<Link to={{
                                        pathname: "/visa",
                                        state: "visit"
                                        }}><FormattedMessage id="part4.part6.content2" /></Link></p>
                                <p>&gt;<Link to={{
                                        pathname: "/visa",
                                        state: "business"
                                        }}><FormattedMessage id="part4.part6.content3" /></Link></p>                                     
                            </div>
                        </article>
                    </li>
                </ul>
            </div>
        </div>
    )
}
