import {React , useEffect } from 'react';
import './portfolio.css';
import Dealbreaker from '../src/assets/dealbreaker.png';
import Patatos from '../src/assets/patatos.png';
import IMG3 from '../src/assets/portfolio3.jpg';
// import IMG4 from '../src/assets/portfolio4.jpg';
// import IMG5 from '../src/assets/portfolio5.png';
// import IMG6 from '../src/assets/portfolio6.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        id: 1,
        image: Dealbreaker,
        title: 'Dealbreaker',
        type: 'E-commerce',
        desc: 'Dealbreaker is a ecommerce website that allows users to browse their favorite pics, add items to the cart, make orders, read blogs. It is built using the React frontend and is deployed on github pages.',
        tools: ["HTML", "CSS", "Javascript", "React", "Redux", "Github Pages"],
        toolID: 11,
        github: 'https://github.com',
        livedemo: 'https://dribble.com'
    },
    {
        id: 2,
        image: Patatos,
        title: 'Patatos',
        type: 'Recipe App',
        desc: 'BookMe is a web application that give users the platform they need to bring their business to the next level. The application is designed to give customers the ability to book appointments online and manage their appointments.',
        tools: ["HTML", "CSS", "Javascript", "React", "Redux", "Github Pages"],
        toolID: 22,
        github: 'https://github.com',
        livedemo: 'https://dribble.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'ProPet',
        type: 'E-Commerce',
        desc: 'ProPet is an online store that allows buyers to log in, browse through multiple categories of pets, pick out products, select favorite products, and them to cart and complete the purchase.',
        tools: ["React", "Redux", "Tailwind", "Javascript", "NodeJS", "GraphQL", "Stripe API", "Heroku"],
        toolID: 33,
        github: 'https://github.com',
        livedemo: 'https://dribble.com'
    }
]

function Portfolio() {

    useEffect(() => {
        Aos.init(
          {duration: 800}
        );
    }, []);

    return(
        <section id="projects">
            {/* <h5>My Recent Projects</h5> */}
            <h1>Portfolio</h1>
            <div className="divider"></div>
            {/* <div className="container portfolio__container">
                {
                    data.map(({id,image,title,github,demo}) => {
                        return(
                            <article key={id} className='portfolio__item' data-aos='zoom-out'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn'>Github</a>
                                    <a href={demo} className='btn btn-primary'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div> */}
            {/* <div className='container alt_portfolio'>
                <article className='alt_portfolio_item'>
                    <div className='alt_portfolio_item_image'>
                        <img src={IMG4} alt='image1'/>
                    </div>
                    <div className='alt_portfolio_item_description'>
                        <div className='alt_portfolio_project'>
                            <h1 className='alt_portfolio_project_name'>ConnectME</h1>
                            <h4 className='alt_portfolio_project_type'>Social Media</h4>
                            <p className='alt_portfolio_project_desc'>ConnectME is a social media application that allows users to create an account, make posts, and interact with other users. It is built using the MERN stack (MongoDB, Express, React, Node.js) and is deployed on Heroku.</p>
                        </div>
                        <div className="alt_portfolio_project_tools">
                            <h2>Tools</h2>
                            <div className="allTools">
                                <span className="tool">React</span>
                                <span className="tool">Redux</span>
                                <span className="tool">Tailwind</span>
                                <span className="tool">Javascript</span>
                                <span className="tool">NodeJs</span>
                                <span className="tool">Express</span>
                                <span className="tool">MongoDB</span>
                                <span className="tool">GraphQL</span>
                                <span className="tool">Webpack</span>
                                <span className="tool">OAuth2</span>
                                <span className="tool">Heroku</span>
                            </div>
                        </div>
                        <div className='alt-portfolio-item-buttons'>
                            <a href="#soucecode" className="btn sourcecode">Source Code</a>
                            <a href="#livedemo" className="btn btn-primary livedemo">Live demo</a>
                        </div>
                    </div>
                </article>
                <article className='alt_portfolio_item'>
                    <div className='alt_portfolio_item_image'>
                        <img src={IMG2} alt='image1'/>
                    </div>
                    <div className='alt_portfolio_item_description'>
                        <div className='alt_portfolio_project'>
                            <h1 className='alt_portfolio_project_name'>BookMe</h1>
                            <h4 className='alt_portfolio_project_type'>Scheduling App</h4>
                            <p className='alt_portfolio_project_desc'>BookMe is a web application that give users the platform they need to bring their business to the next level. The application is designed to give customers the ability to book appointments online and manage their appointments.</p>
                        </div>
                        <div className="alt_portfolio_project_tools">
                            <h2>Tools</h2>
                            <div className="allTools">
                                <span className="tool">ReactJs</span>
                                <span className="tool">Redux</span>
                                <span className="tool">Tailwind</span>
                                <span className="tool">Javascript</span>
                                <span className="tool">DaisyUI</span>
                                <span className="tool">NodeJs</span>
                                <span className="tool">Express</span>
                                <span className="tool">MongoDB</span>
                                <span className="tool">SquareUp API</span>
                                <span className="tool">Auth0</span>
                                <span className="tool">Heroku</span>
                            </div>
                        </div>
                        <div className='alt-portfolio-item-buttons'>
                            <a href="#soucecode" className="btn sourcecode">Source Code</a>
                            <a href="#livedemo" className="btn btn-primary livedemo">Live demo</a>
                        </div>

                    </div>
                </article>
                <article className='alt_portfolio_item'>
                    <div className='alt_portfolio_item_image'>
                        <img src={IMG3} alt='image1'/>
                    </div>
                    <div className='alt_portfolio_item_description'>
                        <div className='alt_portfolio_project'>
                            <h1 className='alt_portfolio_project_name'>ProPet</h1>
                            <h4 className='alt_portfolio_project_type'>E-Commerce</h4>
                            <p className='alt_portfolio_project_desc'>ProPet is an online store that allows buyers to log in, browse through multiple categories of pets, pick out products, select favorite products, and them to cart and complete the purchase.</p>
                        </div>
                        <div className="alt_portfolio_project_tools">
                            <h2>Tools</h2>
                            <div className="allTools">
                                <span className="tool">MERN</span>
                                <span className="tool">Redux</span>
                                <span className="tool">Tailwind</span>
                                <span className="tool">Javascript</span>
                                <span className="tool">NodeJs</span>
                                <span className="tool">Express</span>
                                <span className="tool">MongoDB</span>
                                <span className="tool">GraphQL</span>
                                <span className="tool">Stripe API</span>
                                <span className="tool">Heroku</span>
                            </div>
                        </div>
                        <div className='alt-portfolio-item-buttons'>
                            <a href="#soucecode" className="btn sourcecode">Source Code</a>
                            <a href="#livedemo" className="btn btn-primary livedemo">Live demo</a>
                        </div>
                    </div>
                </article>
            </div> */}
            <div className='container alt_portfolio'>
                {
                    data.map(({id, image, title, type, desc, tools, toolID, github, livedemo}) => {
                        return(
                            <article key={id} className='alt_portfolio_item'>
                                <div className='alt_portfolio_item_image'>
                                    <img src={image} alt={title} />
                                </div>
                                <div className='alt_portfolio_item_description'>
                                    <div className='alt_portfolio_project'>
                                        <h1 className='alt_portfolio_project_name'>{title}</h1>
                                        <h4 className='alt_portfolio_project_type'>{type}</h4>
                                        <p className='alt_portfolio_project_desc'>{desc}</p>
                                    </div>
                                    <div className="alt_portfolio_project_tools">
                                        <h2>Tools</h2>
                                        <div className="allTools">
                                            {
                                                tools.map((tool, toolID) => {
                                                    return(
                                                        <span key={toolID} className="tool">{tool}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='alt-portfolio-item-buttons'>
                                        <a href={github} className="btn sourcecode">Source Code</a>
                                        <a href={livedemo} className="btn btn-primary livedemo">Live demo</a>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;