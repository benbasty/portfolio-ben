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