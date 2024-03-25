import React from 'react';
import Contact from '../../components/contact/Contact';
import './growth.css';

function Growth(){

    return (
        <>

        <section className='container-graphic bg-white mobile-margin padding-top margin-bottom'>
            <div className="container-info display-flex-living">
                <div className='container-info__intro'>
                    <h1 className="container-info__intro__title main-titles">Growth AI</h1>
                    <p className="container-info__intro__p atom-margin-link text-align-center p-tweenty">AI-optimized stock portfolios</p>
                </div>
                <img className="img-banner" src="images/growth/growth-banner.png"></img>
                <p>Overview of some Growth AI screens after redesigning it</p>
                {/* <video  type="video/mp4" src="images/weliving/vide-weliving.mp4" autoPlay loop muted controls></video> */}
            </div>

            <div className="flex-row margin-top-living display-flex-living">
                <div className="container-graphic__info">
                    <div className="cont-subtitles">
                        <h3 className="subtitles-work padding-top">My role</h3>
                        <ul>
                            <li>Partnering with PM, alogorithm ad machine learning  engineers, a development team</li>
                            <br></br>
                            <li>Design of the application involved in all phases from definition to design</li>
                            <br></br>
                            <li>Scalability of the project with existing and upcoming features</li>
                            <br></br>
                            <li>Creating documentation for implementation and QA before every release</li>
                            <br></br>
                            <li>Qualitative and quantitative data analysis</li>
                            <br></br>
                            <li>Conceptualizing, analysing usability tests and user interviews</li>
                            <br></br>

                        </ul>
                    </div>

                    <div className="cont-subtitles">
                        <h3 className="subtitles-work margin-top-sm">Project Overview</h3>
                        <br></br>
                        <br></br>
                        <p className='font-size-m'>This project comes from StockFink, a company whose aim is to make stock market investment accessible to people, breaking down the barriers and myths about this world. Through algorithmic technology, it makes tools available that provide information in a simple and transparent way. In this way anyone can put their money to work obtaining quality results and improving their financial life. </p>
                        <br></br>
                        <br></br>
                        <p className='font-size-m'>In StockFink several products were created and Growth AI is one of them,<b> a portfolio creator to invest in the stock market based on machine learning and reiforcemnt learning algorithms. Made to maximise profits and minimise losses. </b> </p>
                    </div>

                    <div className="cont-subtitles">
                        <h3 className="subtitles-work margin-top-sm">The problems</h3>
                        <br></br>
                        <ul>
                            <li> Growth AI was an existing product but its capability was very limited, users only obtained portfolio compositions according to markets so they were portfolios generated by the AI but it did not take into account the investor profile of each person so it lacked flexibility and customisation.</li>
                            <br></br>
                            <li>The language used was very technical and the organisation of the information on the screens meant that the value of the product was not understood. </li>
                            <br></br>
                            <li>The application suffered 35% abandonment rate.</li>
                        </ul>
                    </div>

                    <div className="cont-subtitles">
                        <h3 className="subtitles-work margin-top-sm">The goals</h3>
                        <br></br>
                        <ul>
                            <li> Improve product retention</li>
                            <br></br>
                            <li>Improve UI for better information architecture</li>
                            <br></br>
                            <li>Personalisation in the creation of portfolios</li>
                            <br></br>
                            <li>That anyone, including non-experts, can make use of the product.</li>
                        </ul>
                    </div>

                    <div className="cont-subtitles">
                        <h3 className="subtitles-work margin-top-sm">Research</h3>
                        <br></br>
                        <p className='font-size-m'>One of the main absences we noticed when we started improving this product was the <strong className='hightlight-yellow'>lack of information about our target audience.</strong> What were their real needs? What did they think about investing in the stock market? Why would they want to invest?... such basic questions were not answered. </p>
                        <br></br>
                        <br></br>
                        <p className='font-size-m'><strong className='hightlight-yellow'>Through surveys and interviews</strong> (64 interviews in total) one to one <strong className='hightlight-yellow'>we were able to segment users.</strong> We discovered that in addition to having two different types of users among them there were common patterns.</p>
                        <br></br>
                        <br></br>
                        <p className='font-size-m'><b className='circle-number'>1</b><b>  Our users are between 24-50 years old. And we can divide them into two groups:</b></p>
                        <br></br>
                        <ul>
                            <li>
                                <b>Primary users:</b> They are a more inexperienced audience, their main barrier is time and lack of education. They need a portfolio optimiser and so they tried growth.
                            </li>
                            <br></br>
                            <li>
                                <b>Secondary users:</b> Experienced stock market investors, many of them interested in complex financial analysis, use the tool to double check their decisions. They saved time by consulting the AI insights instead of doing it manually. 
                            </li>
                        </ul>
                        <br></br>
                        <br></br>
                        <p className='font-size-m'><b className='circle-number'>2</b><b>  Mostly men with a university education. Although this did not imply that they were financially educated, just informed enough to be aware of the importance of investing.</b></p>
                        <br></br>
                        <ul>
                            <li>
                            The strengths of these users were their main interest in the subject, many of them young people between 24-35 years old who dedicate part of their income to their future. They are motivated to learn about the subject. 
                            </li>
                            <br></br>
                            <li>
                            <b>As weaknesses</b> we can highlight the <strong>need to obtain results in a short time,</strong> as well as their lack of free time makes them very selective with the type of service they choose. They need one that demonstrates that the results they offer are reliable and that <strong>the time investment in this task is minimal.</strong> 
                            </li>
                            <br></br>
                            <li>The mobile application could not be used because it did not display well so they could only access it through the computer.</li>
                        </ul>
                        <br></br>
                        <br></br>
                        <p className='font-size-m'><b className='circle-number'>3</b><b>  Common problems faced by our clients with the application were as follows; </b></p>
                        <br></br>
                        <br></br>
                        <ul>
                            <li>
                            They did not know what information to take to their broker once a portfolio was created.
                            </li>
                            <br></br>
                            <li>
                            They did not understand what many securities and information provided by the portfolio meant.
                            </li>
                            <br></br>
                            <li>They had little or no information about the results provided by the AI, so they were left with a portfolio composition that they did not understand if it was right for them. </li>
                            <br></br>
                            <li>The portfolios offered in Growth were not personalised, they were the same portfolios for all users. </li>
                            <br></br>
                            <li>They did not know what their investor profile was, an important point to know your interests and your level of risk. </li>
                        </ul>
                        <br></br>
                        <br></br>
                        <p className='font-size-m'><b className='circle-number'>4</b><b>  From these surveys and interviews, we were able to conduct user journeys, flows and user personas. </b></p>
                    </div>

                    <div className="cont-subtitles">
                        <h3 className="subtitles-work margin-top-sm">Competitive Analysis</h3>
                        <br></br>
                        <p className='font-size-m'>In researching what other companies were doing we realised <b>there were several things that we could do better and differentiate ourselves from them, </b><strong className='hightlight-yellow'>and create our space in the market (our blue ocean):</strong> </p>
                        <br></br>
                        <br></br>

                        <p className='font-size-m'>All the tools although many of them had a good interface failed to use complex language and many of them offered too much information which can cause overwhelm and a sense of complexity to the user. Our aim is to make the investment world simple so we must offer the essentials in simple and concise language. </p>
                        <br></br>
                        <ul>
                            <li>
                                <b>High payment rates, </b> so many people cannot afford such services, it is left to high net worth individuals. 
                            </li>
                            <br></br>
                            <li>
                            Most applications were <b>aimed at an expert audience,</b> people who have experience with investment.
                            </li>
                            <br></br>
                            <li>The questionnaires and forms to get a customisable portfolio are very long and sometimes ask you questions you don't know how to answer. We had to address that and we saw that as one of our strengths to differentiate ourselves. </li>
                            <br></br>
                            <li>In order to make use of these tools many of them required a lot of registration steps. </li>
                        </ul>
                        <br></br>
                        <br></br>
                    </div>


                    <div className="cont-subtitles">
                        <h3 className="subtitles-work margin-top-sm">Result</h3>
                        <br></br>
                        <p className='font-size-l'><b>Inclusive, understandable and with valuable information.</b></p>
                        <br></br>
                        <br></br>

                        <p className='font-size-m'>We took the application to the next level, improving accessibility for those with no investment experience, being transparent with the information we provide, as well as presenting the information in a clear, organised and attractive way. </p>
                        <br></br>
                        <br></br>
                        <p className='font-size-m'><strong className='hightlight-yellow'>We have achieved a portfolio builder that simplifies and streamlines the task for the investor.</strong> A tool that gives the opportunity to improve the financial future of any person even if they do not have the investment and financial knowledge to do it on their own. </p>
                        <br></br>
                        <section className='display-flex-row'>
                            <section className='container'>
                                <p className='number'><b>30%</b></p>
                                <p>Conversion rate</p>
                            </section>
                            <section className='container'>
                                <p className='number'><b>12%</b></p>
                                <p>Reduction of drop-out rate</p>
                            </section>
                            <section className='container'>
                                <p className='number'><b>4,5/5</b></p>
                                <p>Users rating</p>
                            </section>
                        </section>
                        <br></br>
                        <br></br>
                    </div>

                    <div className="cont-subtitles">
                        <h3 className="subtitles-work margin-top-sm">Learnings</h3>
                        <br></br>
                        <p className='font-size-l'>Being able to distinguish between signal and noise is crucial. <b>You need to know hat need more attention and what should be disregarded.</b></p>
                        <br></br>
                        <br></br>
                        <p className='font-size-l'>When analyzing user feedback, start by <b>linking it to a clear user problem.</b> Is obviously important to building a great product. However, not every piece of feedback should be implemented</p>
                        <br></br>
                        <br></br>
                        <p className='font-size-l'>Understanding why a customer uses a product to perform a job can help to find innovation opportunities. </p>
                    </div>
                </div>

            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img className="width-gif" src="images/growth/design-growth.png"></img>
        </section>
        <Contact></Contact>
        </>
    );
}

export default Growth;