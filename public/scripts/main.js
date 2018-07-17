Vue.config.devtools = true

const editorDiv = document.getElementById('editors');

const app = new Vue ({
    el: '#editors',
    data: {
        fullList: true,
        editors: [
            {
                name: 'KiNG',
                twitter: '@DKEditing',
                twitterURL: 'https://twitter.com/DKEditing',
                picture: 'assets/Staff/King.jpg',
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
                picture: 'assets/Staff/Zero.jpg',
                biography: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis repellat expedita ducimus a asperiores quos dolorum, eligendi consectetur modi.',
                position: 'Editor'
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
        editorView: function(editor) {
            this.fullList = false;
            this.inspectedEditor = {...editor};
            this.scrollToTop();
        },
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
        scrollToTop: function() {
            window.scrollTo(0, this.$el.offsetTop);
        }
    }
});
