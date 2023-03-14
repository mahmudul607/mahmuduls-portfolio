import React, { useContext, useEffect, useState } from 'react';
import { projectContext } from '../../App';
import { ProjectData } from '../ProjectData/ProjectData';
import './Portfolio.css'




const Portfolio = () => {
    const [category, setCategory] = useContext(projectContext);
    const data = ProjectData;
    const [project, setProject] = useState(data);
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeProject, setActiveProject] = useState('project')

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setActiveProject(category)
        setCategory(category)
    };

    useEffect(() => {

        const matchProducts = data.filter(pd => pd.category.toLowerCase() === category.toLowerCase())
        if (matchProducts.length > 0) {
            setProject(matchProducts)
        }
        else {
            setProject(data)
        }

    }, [category, data]);

    return (
        <div id='Portfolio' style={{ background: '#343a40' }}>
            <div className='about-me-title'>
                <h1>Portfolio</h1>
                <p>
                    My Work
                </p>
            </div>
            <div className='items-area' style={{ paddingTop: '30px' }}>
                <ul className='items-tabs'>
                    <li className={activeCategory === 'All' ? 'item active' : 'item'} onClick={() => handleCategoryClick('All')}>All</li>
                    <li className={activeCategory === 'Design' ? 'item active' : 'item'} onClick={() => handleCategoryClick('Design')}>Design</li>
                    <li className={activeCategory === 'Develop' ? 'item active' : 'item'} onClick={() => handleCategoryClick('Develop')}>Develop</li>
                </ul>
                <div className={activeProject=== 'Design' ? 'Protfolio-gallery active2' : 'Protfolio-gallery'}>
                    <div className={activeProject ===  'Develop' ? 'row g-4 project active' :'row g-4 project'}>
                        {
                            project.map((pd, index) => <div className={
                                "col-sm-6 col-lg-4 p-4  " +
                                pd.category
                            } key={index}>
                                <img src={pd.thumbImage} alt=""/>
                            </div>)
                        }

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Portfolio;

