Vue.config.devtools = true

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

const editorDiv = document.getElementById('editors');

const app = new Vue ({
    el: '#editors',
    data: {
        // Determines if full list of editors is shown
        fullList: true,
        // Editors List
        editors: [
            {
                name: 'KiNG',
                twitter: '@DKEditing',
                twitterURL: 'https://twitter.com/DKEditing',
                picture: 'assets/Staff/King.png',
                biography: 'I\'m KiNG, I started editing around 4 years ago making Youtube videos on my own. My love for Editing grew and eventually I wanted nothing more than to become a professional editor. I\'ve Edited for large creators and organizations such as Redmercy and Immortals, now I own Renzu. I started Renzu because I, like many others noticed a track record of Editors being poorly treated and poorly compensated. Editors that wanted nothing more than to have it be their full time job, but weren\'t being paid fairly, and thus could\'t sustain themselves; I set out to put a stop to this by creating Renzu as a Team and Community of Media professionals that can come together and support each other. My main goal is to have everyone around me thrive, both employees, and clients. At Renzu, no one is left behind.',
                position: 'Owner/Editor'
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
                position: 'Editor'
            },
            {
                name: 'ZeroInfinity',
                twitter: '@ZeroInfinityLoL',
                twitterURL: 'https://twitter.com/zeroinfinitylol',
                picture: 'assets/Staff/Zero.png',
                biography: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis repellat expedita ducimus a asperiores quos dolorum, eligendi consectetur modi.',
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
                name: 'Hopoffplease',
                twitter: '@kyler1295',
                twitterURL: 'https://twitter.com/kyler1295',
                picture: 'assets/Staff/Hop.jpg',
                biography: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis repellat expedita ducimus a asperiores quos dolorum, eligendi consectetur modi.',
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
            window.scrollTo(0, this.$el.offsetTop);
        }
    }
});

const clients = new Vue({
    el: '#clients',
    data: {
        clients: [
            {
                name: 'TFBlade',
                youtube: 'https://www.youtube.com/channel/UCNEmy4a6O2q0ZCz7Qi2MThA',
                picture: 'assets/clients/person.png'
            },
            {
                name: 'RedMercy',
                youtube: 'https://www.youtube.com/channel/UCUf53DHwoQw4SvETXZQ2Tmg',
                picture: 'assets/clients/person.png'
            },
            {
                name: 'Professor Akali',
                youtube: 'https://www.youtube.com/channel/UCDIJhfKjVYlbo5-oQvM5EqQ',
                picture: 'assets/clients/person.png'
            },
            {
                name: 'Glacierr',
                youtube: 'https://www.youtube.com/channel/UCN7x-gVHN_AO0DMtBWMxN3Q',
                picture: 'assets/clients/person.png'
            }
        ]
    }
});
