import {React , useEffect } from 'react';
import './portfolio.css';
import IMG1 from '../src/assets/portfolio1.jpg';
import IMG2 from '../src/assets/portfolio2.jpg';
import IMG3 from '../src/assets/portfolio3.jpg';
import IMG4 from '../src/assets/portfolio4.jpg';
import IMG5 from '../src/assets/portfolio5.png';
import IMG6 from '../src/assets/portfolio6.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'New Tech Currency DashBoard',
        gihub: 'https://github.com',
        demo: 'https://dribble.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Web Apps and Data Design',
        gihub: 'https://github.com',
        demo: 'https://dribble.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'DashBoard UI Kit',
        gihub: 'https://github.com',
        demo: 'https://dribble.com'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Maintaining tasks and tracking progress',
        gihub: 'https://github.com',
        demo: 'https://dribble.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Charts Templates Abstract',
        gihub: 'https://github.com',
        demo: 'https://dribble.com'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Figma Chart Templates',
        gihub: 'https://github.com',
        demo: 'https://dribble.com'
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
            <h5>My Recent Projects</h5>
            <h1>Portfolio</h1>
            <div className="container portfolio__container">
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
            </div>
        </section>
    )
}

export default Portfolio;