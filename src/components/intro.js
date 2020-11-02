import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl';
import './intro.css'
export default class introduction extends Component {
    render() {
        return (
            <div id="intro">
               <div id="intro1">
                    <section className="title">
                        <h2 style={{textAlign:"right"}}>
                            <FormattedMessage id="part1.title" />
                        </h2>
                    </section>
                    <div className="hr hr-short hr-right">
                        <span className="hr-inner">
                            <span className="hr-inner-style"></span>
                        </span>
                    </div>
                    <section className="content">
                        <p style={{textAlign: "right"}}>
                            <FormattedMessage id="part1.content" />
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
                            <div className="icon">                           
                            </div>
                            <article>
                                <div className="article_content">
                                    <header>
                                        <h4>
                                        <FormattedMessage id="part2.title1" />
                                        </h4>
                                    </header>
                                    <div className="article_p">
                                        <p>
                                        <FormattedMessage id="part2.content1" />
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li>
                            <div className="icon">                           
                            </div>
                            <article>
                                <div className="article_content">
                                    <header>
                                        <h4>
                                        <FormattedMessage id="part2.title2" />
                                        </h4>
                                    </header>
                                    <div className="article_p">
                                        <p>
                                        <FormattedMessage id="part2.content2" />
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li>
                            <div className="icon">                           
                            </div>
                            <article>
                                <div className="article_content">
                                    <header>
                                        <h4>
                                        <FormattedMessage id="part2.title3" />
                                        </h4>
                                    </header>
                                    <div className="article_p">
                                        <p>
                                        <FormattedMessage id="part2.content3" />
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
