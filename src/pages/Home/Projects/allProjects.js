import m1 from '../../../assests/Images/mario/mario1.png'
import m2 from '../../../assests/Images/mario/mario2.png'
import m3 from '../../../assests/Images/mario/mario3.png'
import m4 from '../../../assests/Images/mario/mario4.png'
import m5 from '../../../assests/Images/mario/mario5.png'
import m6 from '../../../assests/Images/mario/mario6.png'

/*
 myProjects[x] = {
    imgs, title, description, tech[], site, github
 }
*/

// imgs = [front, back,  right, left, top, bottom]
const project_images = [
    <img src={m1} alt='could not load img'></img>,
    <img src={m2} alt='could not load img'></img>,
    <img src={m3} alt='could not load img'></img>,
    <img src={m4} alt='could not load img'></img>,
    <img src={m5} alt='could not load img'></img>,
    <img src={m6} alt='could not load img'></img>
]

export const all_projects = [
    {
        imgs: project_images, title: 'Super Mario',
        description: 'A game made using c++ and SFML lib. A game made using c++ and SFML lib.  A game made using c++ and SFML lib.',
        tech: ['C++', 'SFML', 'OPENGL', 'GLSL'],
        github: 'https://github.com/Am4nn/Super-Mario-SFML',
        site: '/',
        key: 0
    },
    {
        imgs: project_images, title: 'Super Mario',
        description: 'A game made using c++ and SFML lib A game made using c++ and SFML lib A game made using c++ and SFML lib A game made using c++ and SFML lib A game made using c++ and SFML lib ',
        tech: ['C++', 'SFML', 'JS', 'HTML', 'CSS', 'EXPRESS.JS', 'REACT.JS', 'THREE.JS'],
        github: 'https://github.com/Am4nn/Super-Mario-SFML',
        key: 1
    },
    {
        imgs: project_images, title: 'Super Mario',
        description: 'A game made using c++ and SFML lib A game made using c++ and SFML lib A game made using c++ and SFML lib A game made using c++ and SFML lib A game made using c++ and SFML lib A game made using c++ and SFML lib ',
        tech: ['C++', 'SFML', 'MONGODB'],
        site: '/', key: 2
    },
    {
        imgs: project_images, title: 'Super Mario',
        description: 'A game made using c++ and SFML lib',
        tech: ['C++', 'SFML'],
        site: '/', key: 3
    },
    {
        imgs: project_images, title: 'Super Mario',
        description: 'A game made using c++ and SFML lib',
        tech: ['C++', 'SFML'],
        github: 'https://github.com/Am4nn/Super-Mario-SFML',
        site: '/',
        key: 4
    },
    {
        imgs: project_images, title: 'Super Mario',
        description: 'A game made using c++ and SFML lib',
        tech: ['C++', 'SFML'],
        github: 'https://github.com/Am4nn/Super-Mario-SFML',
        site: '/',
        key: 5
    },
    {
        imgs: project_images, title: 'Super Mario',
        description: 'A game made using c++ and SFML lib',
        tech: ['C++', 'SFML'],
        github: 'https://github.com/Am4nn/Super-Mario-SFML',
        site: '/',
        key: 6
    },
    {
        imgs: project_images, title: 'Super Mario',
        description: 'A game made using c++ and SFML lib',
        tech: ['C++', 'SFML'],
        github: 'https://github.com/Am4nn/Super-Mario-SFML',
        site: '/',
        key: 7
    },
    {
        imgs: project_images, title: 'Super Mario',
        description: 'A game made using c++ and SFML lib',
        tech: ['C++', 'SFML'],
        github: 'https://github.com/Am4nn/Super-Mario-SFML',
        site: '/',
        key: 8
    },
    {
        imgs: project_images, title: 'Super Mario',
        description: 'A game made using c++ and SFML lib',
        tech: ['C++', 'SFML'],
        github: 'https://github.com/Am4nn/Super-Mario-SFML',
        site: '/',
        key: 9
    },
];