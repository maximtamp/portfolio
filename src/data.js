export const skills = [
        {
            title: "development",
            tools: [
                { name: "VS Code", icon: "vs-code-icon.png" },
                { name: "HTML", icon: "html-icon.png" },
                { name: "CSS", icon: "css-icon.png" },
                { name: "JavaScript", icon: "js-icon.png" },
                { name: "Astro", icon: "astro-icon.png" },
                { name: "php", icon: "php-icon.png" },
                { name: "Vite", icon: "vite-icon.png" },
                { name: "React", icon: "react-icon.png" },
                { name: "React Router", icon: "react-router-icon.png" },
                { name: "React Native", icon: "react-native-icon.png" },
                { name: "Strapi", icon: "strapi-icon.png" },
                { name: "Arduino", icon: "arduino-icon.png" },
                { name: "ml5", icon: "ml5-icon.png" },
                { name: "GSAP", icon: "gsap-icon.png" },
                { name: "Github", icon: "github-icon.png" },
                { name: "WebGL", icon: "webgl-icon.png" },
                { name: "ThreeJS", icon: "threejs-icon.png" },
            ],
        skills: ["Responsive", ".json", "Database", "Terminal", "API", "Git", "Deployment", "json Server", "Arduino", "Arduino Ethernet", "App Development"]
        },
        {
            title: "ux",
            tools: [
                { name: "Miro", icon: "miro-icon.png" },
                { name: "Figjam", icon: "figjam-icon.png" },
                { name: "Google Form", icon: "google-form-icon.png" },
            ],
            skills: ["User Testing", "Interview", "Data Visualization", "Information Architecture", "Design Principles", "Prototype", "HMW",
                "Buy the Feature", "Customer Journey", "Wireframe", "Cultural Probe", "Umwelt", "Desk Research", "Persona",
                "User Group Definition", "Archetype", "Crazy8's", "Mindmap", "Scamper", "Random Word Associations", "COCD-Box",
                "6 Thinking Hats", "Decision Matrix", "Assumption Matrix", "User Flow", "Flowchart", "Task Flow", "Wire Flow",
                "User Goals", "Levels Of Expertise", "Dubble Diamond", "Storyboard", "MoSCoW", "Annotation", "User Tasks",
                "Iteratie", "Survey", "Observation", "10 Heuristics", "Sketchnotes"]
        },
        {
            title: "design",
            tools: [
                { name: "Figma", icon: "figma-icon.png" },
                { name: "Illustrator", icon: "illustrator-icon.png" },
                { name: "Photoshop", icon: "photoshop-icon.png" },
            ],
            skills: ["Responsive", "Logo Design", "Branding", "Icon Design", "Styleboard", "Moodboard", "App Design", "Storytelling", "Digital Campaign", "Typography", "History Of Art/Design"]
        },
        {
            title: "motion",
            tools: [
                { name: "Adobe After Effects", icon: "after-effects-icon.png" },
                { name: "Adobe Media Encoder", icon: "media-encoder-icon.png" },
                { name: "Adobe Audition", icon: "audition-icon.png" },
            ],
            skills: ["Animation", "Animation Principles", "Product Animation", "Pitch Deck", "Animatic", "Rough Edit", "Sound Design"]
        },
];

export const projects = [
    {
        name: "The Raid on Plantin",
        date: "Jan 2025",
        description: "The Plantin-Moretus Museum in Antwerp is a fun museum where you can relive the life of Plantin. For this client, we needed to create a digital site to attract people to go to the museum, and we needed to tell his story in a fun and interactive way. Want to relive his story? live it…",
        thumbnail: "the-raid-on-plantin-thumbnail.png",
        tools: [
            { name: "Figma", icon: "figma-icon.png" },
            { name: "GSAP", icon: "gsap-icon.png" },
            { name: "Photoshop", icon: "photoshop-icon.png" },
        ],
        hashtags: ["Responsive", "Storytelling", "Interact", "Client"],
        colaborators: "none",
        category: ["UX", "Design", "Motion", "Development"],
        primary: { label: "Live Demo", link: "https://maximtampstu.github.io/the-raid-on-plantin/", desktopOnly: false, alert: "none"},
        secondary: "none"
    },
    {
        name: "Fubble",
        date: "Jun 2024",
        description: "For this project, we had the assignment to create a new food experience and needed to create a site for that idea that included a Quiz and a database. I came up with edible gum so you can skip a meal and just eat that instead. There are some special flavors available, and you can even create your own gum. Go create one or leave a nice review.",
        thumbnail: "fubble-thumbnail.png",
        tools: [
            { name: "Figma", icon: "figma-icon.png" },
            { name: "Illustrator", icon: "illustrator-icon.png" },
            { name: "Miro", icon: "miro-icon.png" },
            { name: "php", icon: "php-icon.png" },
        ],
        hashtags: ["Database", "Experience", "Interact", "Heuristics"],
        colaborators: "none",
        category: ["UX", "Design", "Development"],
        primary: {
            label: "Live Demo", link: "https://tamperemaxim.be/fubble/", desktopOnly: true, alert: "This Project is not responsive, you will have the best experience on a 1470x720 Mac screen." },
        secondary: "none"
    },
    {
        name: "KLM Watch",
        date: "May 2024",
        description: "Imagine you are placed on a generation ship that will travel for 250 years, which could get boring, right? And then you get frustrated pretty easily…. Luckily, we created the KLM Watch to keep your mental health stable during the whole trip through your sight and hearing. Are you curious? Take a look at our microsite (Dutch Only).",
        thumbnail: "klm-watch-thumbnail.png",
        tools: [
            { name: "Google Form", icon: "google-form-icon.png" },
            { name: "Figjam", icon: "figjam-icon.png" },
            { name: "Figma", icon: "figma-icon.png" },
            { name: "Miro", icon: "miro-icon.png" },
        ],
        hashtags: ["User Testing", "Prototyping", "Product"],
        colaborators: [
            { name: "Lenie Debruyne", link: "https://www.linkedin.com/in/lenie-debruyne-700594305/" },
            { name: "Kiara Lambert", link: "https://www.linkedin.com/in/kiara-lambert-6ba84a390/" }
        ],
        category: ["UX"],
        primary: { label: "Behance", link: "https://www.behance.net/gallery/225607289/KLM-Watch", desktopOnly: true, alert: "none" },
        secondary: "none"
    },
    {
        name: "Immigrant Research",
        date: "Dec 2024",
        description: "How can we help newcomers settle in? That was a research question we got from “Monkeyshot”. So we started researching. We did not only do Desk Research, but we also gave the newcomers a voice, so we created an Enquete, Cultural Probe, and did some interviews. We analyzed those results and made some interesting data visualizations. Go, take a look (Dutch Only).",
        thumbnail: "immigrant-research-thumbnail.png",
        tools: [
            { name: "Figma", icon: "figma-icon.png" },
            { name: "Google Form", icon: "google-form-icon.png" },
            { name: "Miro", icon: "miro-icon.png" },
        ],
        hashtags: ["DataVisualization", "Interview", "Client"],
        colaborators: [
            { name: "Lenie Debruyne", link: "https://www.linkedin.com/in/lenie-debruyne-700594305/" },
            { name: "Kiara Lambert", link: "https://www.linkedin.com/in/kiara-lambert-6ba84a390/" }
        ],
        category: ["UX"],
        primary: { label: "Behance", link: "https://www.behance.net/gallery/214794167/Immigranten-onderzoeksopdracht", desktopOnly: true, alert: "none" },
        secondary: { label: "Cultural Probe", link: "https://drive.google.com/file/d/1RN0_feQTV65sUsqfhtBeS0AkC48n9km3/view?usp=sharing", desktopOnly: false, alert: "none" }
    },
    {
        name: "Google Doodle",
        date: "Dec 2024",
        description: "Everyone knows that random illustration or animation from the Google home page on a special day. We were challenged to create one, which they call a “Google Doodle”. I have always been interested in space, so I decided to take space travel as a subject. After some weeks of work, I ended up with a fun space-themed Google doodle.",
        thumbnail: "google-doodle-thumbnail.png",
        tools: [
            { name: "Adobe After Effects", icon: "after-effects-icon.png" },
            { name: "Adobe Media Encoder", icon: "media-encoder-icon.png" },
        ],
        hashtags: ["Animation", "Expressions", "NoAudio"],
        colaborators: "none",
        category: ["Motion"],
        primary: { label: "Watch", link: "https://youtu.be/7S_OF7zd77c", desktopOnly: false, alert: "none" },
        secondary: "none"
    },
    {
        name: "SNAKE Watch",
        date: "May 2025",
        description: "Maybe you know “Kickstarter” (a platform to fund others’ projects). Some projects have a lot of potential, but not a good “advertisement,” so you probably already guessed it, we needed to create an “ad” for a Kickstarter that could really use one. Before we could start animating, we needed to make a pitch deck to show what project we wanted to use, what style, … After we got the green flag, we needed to make an animatic, then it was animation time.",
        thumbnail: "snake-watch-thumbnail.png",
        tools: [
            { name: "Adobe After Effects", icon: "after-effects-icon.png" },
            { name: "Adobe Audition", icon: "audition-icon.png" },
            { name: "Figma", icon: "figma-icon.png" },
            { name: "Illustrator", icon: "illustrator-icon.png" },
            { name: "Adobe Media Encoder", icon: "media-encoder-icon.png" },

        ],
        hashtags: ["ProductAnimation", "AI", "SoundEffects"],
        colaborators: "none",
        category: ["Motion"],
        primary: { label: "Watch", link: "https://youtu.be/EU8MaxXv-74", desktopOnly: false, alert: "none" },
        secondary: { label: "Pitch Deck", link: "pitch-deck.pdf", desktopOnly: false, alert: "none" },
    },
    {
        name: "Move Your Blood",
        date: "Nov 2024",
        description: "Donating blood and plasma is important, right? It is, but the problem is that we are not getting enough plasma donations here in Belgium. That's why the Red Cross Flanders asked us to make a (digital) campaign to make people aware of this. i desited to go with a sport themed campain that mensen die sportief zijn aanspreekt maak ook mensen die niet sportief zijn aanspreekt. Are you interested in knowing how I created it? Take a look (Dutch Only)",
        thumbnail: "move-your-blood-thumbnail.png",
        tools: [
            { name: "Figma", icon: "figma-icon.png" },
            { name: "Photoshop", icon: "photoshop-icon.png" },
        ],
        hashtags: ["Marketing", "DigitaleCampaign"],
        colaborators: "none",
        category: ["Design"],
        primary: { label: "Prototype", link: "https://www.figma.com/proto/RTSCzaMEL4cH13iLrcmBFG/move-your-blood?page-id=1%3A2&node-id=127-182&p=f&viewport=178%2C245%2C0.07&t=BCKQRDOvCaa4Dw7w-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=127%3A182", desktopOnly: true, alert: "none" },
        secondary: "none",
    },
    {
        name: "Responsive Telenet",
        date: "Dec 2024",
        description: "Telenet hosted an event about digital society for ALL. For this event, we needed to create a responsible site that can be viewed on all sorts of devices. So we needed to think about what design strategies were best to use on the platform. It was an event from Telenet, so it was important that it looked like a site from Telenet, so the style and communication needed to fit Telenet. Got to take a look at how I did it.",
        thumbnail: "responsive-telenet-thumbnail.png",
        tools: [
            { name: "Figma", icon: "figma-icon.png" },
            { name: "Photoshop", icon: "photoshop-icon.png" },
        ],
        hashtags: ["ResponsiveDesign", "UI/UX", "TargetAudience"],
        colaborators: "none",
        category: ["Design"],
        primary: { label: "Prototype", link: "https://www.figma.com/proto/XKEopjrFfirumgb4oL4yUZ/2DEV-N_TampereMaxim_Telenet--1-?page-id=99%3A12&node-id=99-3599&viewport=420%2C360%2C0.06&t=LBLP5fnd5IBKf0s9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=99%3A3599&show-proto-sidebar=1", desktopOnly: false, alert: "none" },
        secondary: "none",
    },
    {
        name: "MixBox",
        date: "May 2024",
        description: "Cocktails delivered right to your door sounds amazing, right? For this company, we needed to create an app to order those cocktail boxes, follow recipes, keep track of your orders, and explore the different kinds of amazing cocktails. But without a logo or style, you can not design an app, right? Nope, so we also made those after many iterations on the style and logo. I came up with a fun brandboard that I could use to make the app. Go, explore the app.",
        thumbnail: "mix-box-thumbnail.png",
        tools: [
            { name: "Figma", icon: "figma-icon.png" },
            { name: "Illustrator", icon: "illustrator-icon.png" },
        ],
        hashtags: ["Branding", "AppDesign", "LogoDesign"],
        colaborators: "none",
        category: ["Design"],
        primary: { label: "Prototype", link: "https://www.figma.com/proto/WR3Ppryiecqc8fUNcIstgr/MaximTampere_VD4_MixBox?page-id=3377%3A11686&node-id=3448-8539&p=f&viewport=26%2C900%2C0.34&t=1cv5xr4AzLDLUp5j-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3448%3A8539&show-proto-sidebar=1", desktopOnly: false, alert: "none" },
        secondary: { label: "Brand Board", link: "brand-board.pdf", desktopOnly: false, alert: "none" }
    }
];

export const fonts = [
    "Helvetica, Arial, sans-serif",
    "Verdana, Geneva, sans-serif",
    "Tahoma, Geneva, sans-serif",
    "Trebuchet MS, sans-serif",
    "Impact, Charcoal, sans-serif",
    "Gill Sans, Geneva, sans-serif",
    "Arial Black, Gadget, sans-serif",
    "Times New Roman, Times, serif",
    "Georgia, serif",
    "Garamond, serif",
    "Palatino, Palatino Linotype, serif",
    "Bookman, serif",
    "Baskerville, serif",
    "Didot, serif",
    "Courier New, Courier, monospace",
    "Lucida Console, Monaco, monospace",
    "Consolas, monospace",
    "Monaco, monospace",
    "Source Code Pro, monospace",
    "Comic Sans MS, cursive, sans-serif",
    "Brush Script MT, cursive, sans-serif",
    "Dancing Script, cursive, sans-serif",
    "Papyrus, fantasy",
    "Copperplate, fantasy",
    "Impact, fantasy",
    "Jokerman, fantasy"
];
