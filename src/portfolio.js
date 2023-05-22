import {React , useEffect } from 'react';
import './portfolio.css';
import Dealbreaker from '../src/assets/dealbreaker.png';
import Patatos from '../src/assets/patatos.png';
import WeatherAPP from '../src/assets/weatherapp.png';
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
        type: 'E-commerce Website',
        desc: 'Dealbreaker is a ecommerce website that allows users to browse their favorite pics, add items to the cart, make orders, read blogs. It is built using the React frontend and is deployed on github pages.',
        tools: ["HTML", "CSS", "Javascript", "React"],
        toolID: 11,
        github: 'https://github.com/benbasty/ecommercereact',
        livedemo: 'https://benbasty.github.io/ecommercereact/'
    },
    {
        id: 2,
        image: Patatos,
        title: 'Patatos',
        type: 'Restaurant App',
        desc: 'Patatos is a website and a restaurant app that give users the possibility to browse the food menu and all list of menus items specials. The application is designed to give customers the ability to book and reserve seats online.',
        tools: ["HTML", "CSS", "Javascript", "React"],
        toolID: 22,
        github: 'https://github.com/benbasty/littlelemon',
        livedemo: 'https://benbasty.github.io/littlelemon/'
    },
    {
        id: 3,
        image: WeatherAPP,
        title: 'Weather App',
        type: 'Weather App',
        desc: 'This weather app displays real-time data for a given location. It uses two external APIs to fetch the weather data and has features such as search, auto-complete and location detection. This weather app is fully responsive.',
        tools: ["HTML", "CSS", "React", "Javascript", "Rapid API GoeCities", "OpenWeatherMap API"],
        toolID: 33,
        github: 'https://github.com/benbasty/weatherapp',
        livedemo: 'https://benbasty.github.io/weatherapp/'
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
                                        <a href={github} className="btn sourcecode" target='_blank' rel="noreferrer">Source Code</a>
                                        <a href={livedemo} className="btn btn-primary livedemo" target='_blank' rel="noreferrer">Live demo</a>
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