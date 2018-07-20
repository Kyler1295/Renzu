Vue.config.devtools = true

// Activates Navbar
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

// Activates Floating Action Button
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
});

// Initiates AOS
AOS.init();

// Query Selector Function
var _ = (className) => {return document.querySelector(className)}

// Copyright year
const copyright = _('.copyright');
const year = new Date().getFullYear();

copyright.innerHTML = `Copyright Renzu &copy; ${year}`;

// Variables
const editorDiv = _('.editors');
const nav = _('nav');
const logo = _('.logo');
const navItems = document.querySelectorAll('.navText');

// Editors Vue Element
const app = new Vue ({
    el: '#editors',
    data: {
        // Determines if full list of editors is shown
        fullList: true,
        // Editors List

        // Editor Object
        // {
        //     name: '',
        //     twitter: '',
        //     twitterURL: '',
        //     picture: '',
        //     biography: '',
        //     position: ''
        // },
        editors: [
            {
                name: 'KiNG',
                twitter: '@DKEditing',
                twitterURL: 'https://twitter.com/DKEditing',
                picture: 'assets/Staff/King.png',
                biography: 'I\'m KiNG, I started editing around 4 years ago making Youtube videos on my own. My love for Editing grew and eventually I wanted nothing more than to become a professional editor. I\'ve Edited for large creators and organizations such as Redmercy and Immortals, now I own Renzu. I started Renzu because I, like many others noticed a track record of Editors being poorly treated and poorly compensated. Editors that wanted nothing more than to have it be their full time job, but weren\'t being paid fairly, and thus couldn\'t sustain themselves; I set out to put a stop to this by creating Renzu as a Team and Community of Media professionals that can come together and support each other. My main goal is to have everyone around me thrive, both employees, and clients. At Renzu, no one is left behind.',
                position: 'CEO/Editor'
            },
            {
                name: 'RimFrost',
                twitter: '@RealRimFrost',
                twitterURL: 'https://twitter.com/RealRimFrost',
                picture: 'assets/Staff/Rim.jpg',
                biography: 'Hi, i\'m Rim, I have over 2 years of experience in the professional world of editing and design. I work hard to make the clients vision come true, as I\'ve worked doing daily videos for multiple personalities, simultaneously. My goal is to provide the highest quality content on the most consistent basis. People I\'ve worked for in the past include Professor Akali, The Glacierr, TFBlade and Heizman.',
                position: 'Editor'
            },
            {
                name: 'Snowbird',
                twitter: '@Snowbirdtbh',
                twitterURL: 'https://twitter.com/snowbirdtbh',
                picture: 'assets/Staff/Snowbird.jpg',
                biography: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis repellat expedita ducimus a asperiores quos dolorum, eligendi consectetur modi.',
                position: 'COO/Editor'
            },
            {
                name: 'ZeroInfinity',
                twitter: '@ZeroInfinityLoL',
                twitterURL: 'https://twitter.com/zeroinfinitylol',
                picture: 'assets/Staff/Zero.png',
                biography: 'Hey! My name\'s João, also know as Zero Infinity. I have been editing for around 4 years now, combining two of my biggest passions, video editing and gaming. After years of developing my skills, I started producing content for several personalities and organizations, such as Locodoco and FoxdropLoL and even had the fortune to participate in the Youtube Creators Lab 2.0, hosted by Riot Games. I greatly enjoy the aspects of Motion Graphics and 3D Animations and hope to able to inspire others, to follow their passions with my work.',
                position: 'Editor'
            },
            {
                name: 'igb',
                twitter: '@igb_',
                twitterURL: 'https://twitter.com/igbCC',
                picture: 'assets/Staff/igb.png',
                biography: 'Hey I\'m Boris (igb_) Bakalov, I\'ve been editing for over 2 years now and my favorite style of editing is a one with clean graphics and movement, something about it is just particularly interesting and important for me. Even more important for me however is the satisfaction of my clients, providing fluid communication and high quality edits on time. It\'s my dream to be a professional editor, so every project I take on is as special to me as the last. Im excited to create amazing content alongside my family at Renzu.',
                position: 'Editor'
            },
            {
                name: 'Ryscu',
                twitter: '@Ryscu_',
                twitterURL: 'https://twitter.com/Ryscu_',
                picture: 'assets/Staff/Ryscu.jpg',
                biography: 'Hey! I\'m Ryan, also known as Ryscu. I started learning about video editing about 10 years ago as kid and I\'ve been hooked ever since. I started off editing short clips and montages and more recently started getting into stream highlights. I enjoy making videos that others can enjoy, and intend to keep doing it for as long as possible!',
                position: 'Editor'
            },
            {
                name: 'Yomuus',
                twitter: '@YoumuusYT',
                twitterURL: 'https://twitter.com/YoumuusYT',
                picture: 'assets/Staff/Youmuus.jpg',
                biography: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis repellat expedita ducimus a asperiores quos dolorum, eligendi consectetur modi.',
                position: 'Brand Advisor'
            },
            {
                name: 'Ashe',
                twitter: '@inesfilipabessa',
                twitterURL: 'https://twitter.com/inesfilipabessa',
                picture: 'assets/Staff/Ashe.png',
                biography: 'Hello hello! I\'m mostly known as Ashe, I am a summer child with big dreams of sharing my creative vision with the world. My degree in Communication and Multimedia allowed me to adventure in world of design, video and programming to become the ninja of all crafts. After interning in a film production company doing tv shows and publicity I discovered that what I really like is motion graphics because it combines my love for design and video. I hope I can bring to life all of your visions.',
                position: 'Designer'
            },
            {
                name: 'Hulu',
                twitter: '@Hulu_Rediting',
                twitterURL: 'https://twitter.com/Hulu_Rediting',
                picture: 'assets/Staff/Hulu.png',
                biography: 'tbd',
                position: 'Designer'
            },
            {
                name: 'Hopoffplease',
                twitter: '@kyler1295',
                twitterURL: 'https://twitter.com/kyler1295',
                picture: 'assets/Staff/Hop.jpg',
                biography: 'Hello! My names Kyle and I have been a Web Developer for 3 years. I have a degree in Digital Communications with a concentration in User Experience. I love creating something from nothing and using my skills and talents to inform the world of opportunities like Renzu. I specialize in Front-End Development and Javascript with a passions for Vue.js.',
                position: 'Developer'
            }
        ],
        // Inspected Editor Object
        inspectedEditor: {
            name: '',
            twitter: '',
            twitterURL: '',
            picture: '',
            biography: '',
            position: ''
        }
    },
    methods: {
        // Sets the inspected Editor to editor picked and disables full list
        editorView: function(editor) {
            this.fullList = false;
            this.inspectedEditor = {...editor};
            this.scrollToTop();
        },
        // Sets the full editor list back to true and resets the inspected editor
        fullEditorList: function() {
            this.fullList = true;
            this.inspectedEditor = {
                name: '',
                twitter: '',
                twitterURL: '',
                picture: '',
                biography: '',
                position: '',
                inspected: true
            };
        },
        // Scrolls to the top of the editor section
        scrollToTop: function() {
            console.log(editorDiv);
            window.scrollTo(0, (editorDiv.offsetTop - 35));
        }
    }
});

// Clients Vue Element
const clients = new Vue({
    el: '#clients',
    data: {
        clients: [
            // Client Template
            // {
            //     name: '',
            //     youtube: '',
            //     picture: ''
            // },
            {
                name: 'TFBlade',
                youtube: 'https://www.youtube.com/channel/UCNEmy4a6O2q0ZCz7Qi2MThA',
                picture: 'assets/clients/TFBlade.png'
            },
            {
                name: 'Redmercy',
                youtube: 'https://www.youtube.com/channel/UCUf53DHwoQw4SvETXZQ2Tmg',
                picture: 'assets/clients/Redmercy.jpg'
            },
            {
                name: 'Professor Akali',
                youtube: 'https://www.youtube.com/channel/UCDIJhfKjVYlbo5-oQvM5EqQ',
                picture: 'assets/clients/Professor Akali.jpg'
            },
            {
                name: 'Glacierr',
                youtube: 'https://www.youtube.com/channel/UCN7x-gVHN_AO0DMtBWMxN3Q',
                picture: 'assets/clients/Glacierr.jpg'
            },
            {
                name: 'Flyerbek',
                youtube: 'https://www.youtube.com/FLYERBEKLOL',
                picture: 'assets/clients/person.png'
            }
        ]
    }
});

// Handles the navbar change.
window.addEventListener('scroll', function() {
    if(window.pageYOffset > 100){
        nav.style.backgroundColor = '#64bfa4';
        logo.src = 'assets/GreenLogoWithText150.png';
        for(let i = 0; i < navItems.length; i++){
            navItems[i].style.color = '#ffffff';
        }
    } else {
        nav.style.backgroundColor = 'transparent';
        logo.src = 'assets/Logo150.png';
        for(let i = 0; i < navItems.length; i++){
            navItems[i].style.color = '#000000';
        }
    }
});


