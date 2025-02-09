import { Icons } from '$lib/assets/icons';
import pictureUrl from '$lib/assets/photo.jpg?url';
import statchUrl from '$lib/assets/preview.png?url';
import tiUrl from '$lib/assets/_thumb.png?url';
import type { Variant } from '$lib/components/ui/badge';

const user_name = "0K0";

const title = "Hello, I'm 0K0";

const about_me = "I am both a designer and a developer, specialized in Design system, Web Design and Front end development. This allows me to understand and analyze more easily the desires of a client and thus to respond to requests with my knowledge.";

const contacts = [
    {
        label: 'Github',
        href: 'https://github.com/0K00',
        icon: Icons.LogoGithub
    },
    {
        label: 'Book a Call',
        href: 'mailto:quentin.douvillez@gmail.com',
        icon: Icons.Calendar
    }
];

const techs = [
    { 
        content: [
            { 
                title: 'HTML5/CSS3', 
                icon: Icons.LogoHTML,
                color: 'amber-subtle' as Variant
            },
            { 
                title: 'JavaScript (ES6+)', 
                icon: Icons.LogoJS,
                color: 'amber-subtle' as Variant
            },
            { 
                title: 'Typescript', 
                icon: Icons.LogoTS,
                color: 'blue-subtle' as Variant
            },
            { 
                title: 'Angular', 
                icon: Icons.LogoAngular,
                color: 'red-subtle' as Variant
            },
            { 
                title: 'Vue', 
                icon: Icons.LogoVue,
                color: 'green-subtle' as Variant
            },
            { 
                title: 'Svelte', 
                icon: Icons.LogoSvelte,
                color: 'amber-subtle' as Variant
            },
            { 
                title: 'Tailwind', 
                icon: Icons.LogoTailwind,
                color: 'blue-subtle' as Variant
            }
        ], 
        value: 'frontend', title: 'Frontend', 
        icon: Icons.Accessibility
    },
    { 
        content: [
            {
                title: 'Node.js',
                icon: Icons.LogoNode,
                color: 'green-subtle' as Variant
            },
            {
                title: 'Express.js',
                icon: Icons.LogoExpress,
                color: 'gray-subtle' as Variant
            },
            {
                title: 'NestJs',
                icon: Icons.LogoNestJs,
                color: 'red-subtle' as Variant
            },
            {
                title: 'Prisma',
                icon: Icons.LogoPrisma,
                color: 'teal-subtle' as Variant
            },
            { 
                title: 'Python/Django', 
                icon: Icons.LogoPython,
                color: 'blue-subtle' as Variant
            },
        ],
        value: 'backend',
        title: 'Backend',
        icon: Icons.CodeBracket 
    },
    { 
        content: [
            {
                title: 'MongoDB',
                icon: Icons.LogoMongoDB,
                color: 'green-subtle' as Variant
            },
            {
                title: 'SQL',
                icon: Icons.LogoSQL,
                color: 'red-subtle' as Variant
            }
        ],
        value: 'database',
        title: 'Database',
        icon: Icons.Database 
    },
    { 
        content: [
            { 
                title: 'Git/Github', 
                icon: Icons.LogoGithub,
                color: 'gray-subtle' as Variant
            },
            { 
                title: 'Storybook', 
                icon: Icons.LogoStorybook,
                color: 'pink-subtle' as Variant
            },
            { 
                title: 'Figma', 
                icon: Icons.LogoFigma,
                color: 'teal-subtle' as Variant
            },
            { 
                title: 'Adobe Suite', 
                icon: Icons.LogoAdobe,
                color: 'red-subtle' as Variant
            }
        ],
        value: 'toolas',
        title: 'Tools & Others',
        icon: Icons.Box 
    },
];

const skills = [
    { 
        content: [
            { 
                title: 'Web Developer OpenClassrooms', 
                description: 'Full Stack training',
                tooltip: 'November 2020 to April 2021'
            },
            { 
                title: 'BDES Bachelor L’Ecole de Design Nantes Atlantiques', 
                description: 'Design study',
                tooltip: 'September 2018 to June 2019'
            },
            { 
                title: 'MANAA GRETA Bordeaux (Lycée Michel Montaigne)', 
                description: 'Upgrade in applied arts',
                tooltip: 'September 2017 to May 2018'
            },
        ], 
        value: 'education', title: 'Education', 
        icon: Icons.Information 
    },
    { 
        content: [
            {
                title: 'French', 
                description: '★★★★★',
                tooltip: 'Native'
            },
            {
                title: 'English', 
                description: '★★★★☆',
                tooltip: 'Professional'
            }
        ],
        value: 'language',
        title: 'Language',
        icon: Icons.Globe 
    }
];

const projects = [
    {
        title: 'Teenage Interface',
        description: 'A lightweight, customizable library of reusable Angular components designed for rapid development. It features responsive design, theming support, and seamless integration with modern tools to deliver consistent and scalable UI/UX.',
        href: 'https://0k00.github.io/teenageinterface/',
        techs: [
            { title: 'Angular', icon: Icons.LogoAngular, color: 'red-subtle' as Variant },
            { title: 'Typescript', icon: Icons.LogoTS, color: 'blue-subtle' as Variant },
            { title: 'NodeJs', icon: Icons.LogoNode, color: 'green-subtle' as Variant },
            { title: 'Tailwind', icon: Icons.LogoTailwind, color: 'blue-subtle' as Variant },
            { title: 'Storybook', icon: Icons.LogoStorybook, color: 'pink-subtle' as Variant }
        ],
        preview: tiUrl
    },
    {
        title: 'Statch',
        description: 'The Statch Project Manager is designed to help teams effectively manage their projects and tasks. It provides a range of features including the ability to create and manage projects, assign tasks to team members, track progress, collaborate in real-time.',
        href: 'https://statch.app/',
        techs: [
            { title: 'Angular', icon: Icons.LogoAngular, color: 'red-subtle' as Variant },
            { title: 'Typescript', icon: Icons.LogoTS, color: 'blue-subtle' as Variant },
            { title: 'NodeJs', icon: Icons.LogoNode, color: 'green-subtle' as Variant },
            { title: 'NestJs', icon: Icons.LogoNestJs, color: 'red-subtle' as Variant },
            { title: 'SQLite', icon: Icons.LogoSQL, color: 'red-subtle' as Variant },
            { title: 'Prisma', icon: Icons.LogoPrisma, color: 'teal-subtle' as Variant }
        ],
        preview: statchUrl
    }
];

const works = [
    {
        title: 'Half Square · Designer & Web Developer', 
        description: 'jan. 2023 - apr. 2024 · 1 year 4 month',
        tooltip: 'Founder'
    },
    {
        title: 'Designer & Web Developer', 
        description: 'may 2022 - jan. 2023 · 9 month',
        tooltip: 'Freelance'
    },
    {
        title: 'GCE ELECTRONICS · Web Developer', 
        description: 'jan. 2022 - apr. 2022 · 4 month',
        tooltip: 'CDI'
    }
];

export { user_name, title, about_me, contacts, techs, skills, projects, works };