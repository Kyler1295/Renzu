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
                picture: '../assets/Staff/King.jpg',
                biography: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis repellat expedita ducimus a asperiores quos dolorum, eligendi consectetur modi.',
                position: 'Owner/Editor'
            },
            {
                name: 'RimFrost',
                twitter: '@RealRimFrost',
                twitterURL: 'https://twitter.com/RealRimFrost',
                picture: '../assets/Staff/Rim.jpg',
                biography: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis repellat expedita ducimus a asperiores quos dolorum, eligendi consectetur modi.',
                position: 'Editor'
            },
            {
                name: 'Snowbird',
                twitter: '@Snowbirdtbh',
                twitterURL: 'https://twitter.com/snowbirdtbh',
                picture: '../assets/Staff/Snowbird.jpg',
                biography: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis repellat expedita ducimus a asperiores quos dolorum, eligendi consectetur modi.',
                position: 'Editor'
            },
            {
                name: 'ZeroInfinity',
                twitter: '@ZeroInfinityLoL',
                twitterURL: 'https://twitter.com/zeroinfinitylol',
                picture: '../assets/Staff/Zero.jpg',
                biography: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis repellat expedita ducimus a asperiores quos dolorum, eligendi consectetur modi.',
                position: 'Editor'
            },
            {
                name: 'Ashe',
                twitter: '@inesfilipabessa',
                twitterURL: 'https://twitter.com/inesfilipabessa',
                picture: '../assets/Staff/Ashe.png',
                biography: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis repellat expedita ducimus a asperiores quos dolorum, eligendi consectetur modi.',
                position: 'Designer'
            },
            {
                name: 'Hopoffplease',
                twitter: '@kyler1295',
                twitterURL: 'https://twitter.com/kyler1295',
                picture: '../assets/Staff/Hop.jpg',
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
