<template>
    <div id="projects" class="projects-container">
        <display-image-dialog
            v-if="showImageDialog.isShow"
            @hide="onCloseDialog"
            :imageURL="showImageDialog.imageURL"
            :projName="showImageDialog.name"
        />
        <div class="projects">
            <h1>Projects</h1>
            <div class="project-set">
                <project-card
                    v-for="project in projects"
                    :key="project.name"
                    :project="project"
                    @showImg="showImg"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
import DisplayImageDialog from './DisplayImageDialog.vue';

export default {
    components: {
        ProjectCard,
        DisplayImageDialog,
    },
    methods: {
        onCloseDialog() {
            console.log('dialog closed');
            this.showImageDialog.imageURL = '';
            this.showImageDialog.name = '';
            this.showImageDialog.isShow = false;
        },
        showImg(projObj) {
            this.showImageDialog.imageURL = projObj.image;
            this.showImageDialog.name = projObj.name;
            this.showImageDialog.isShow = true;
        },
    },
    data() {
        return {
            showImageDialog: {
                isShow: false,
                imageURL: '',
                name: '',
            },
            projects: [
                {
                    name: 'Cubee 3D',
                    desc: 'Order Manager',
                    image: 'https://res.cloudinary.com/echoshare/image/upload/v1645202718/portfolio/Screenshot_25_xywknn.png',
                    github: 'https://github.com/LidorBaum/Cubee3D-OrderManager',
                    liveDemo: 'https://cubee3dordermanagement.herokuapp.com/',
                },
                {
                    name: 'Presence Board',
                    desc: 'Watch live status of the office',
                    image: 'https://res.cloudinary.com/echoshare/image/upload/v1645264135/portfolio/Screenshot_26_hkx01n.png',
                    github: 'https://github.com/LidorBaum/PresenceBoard',
                    liveDemo: 'https://presence-board-echo.herokuapp.com/#/',
                },
                {
                    name: '3D Printer WLED',
                    desc: 'Smart Status Bar for 3D Printers',
                    image: 'https://res.cloudinary.com/echoshare/image/upload/q_100/v1645264812/portfolio/IMG_2719_1_wweswr.jpg',
                    github: 'https://github.com/LidorBaum/3DPrinterWLED',
                    liveDemo: 'https://www.youtube.com/watch?v=hYJJ91rFYmg',
                },
                {
                    name: 'Portfolio',
                    desc: 'Made with Vue, deployed to Firebase',
                    image: 'https://res.cloudinary.com/echoshare/image/upload/v1645265292/portfolio/Screenshot_29_altyrp.png',
                    github: 'https://github.com/LidorBaum/Portfolio',
                    liveDemo: 'https://lidor-baum.web.app/',
                },
                {
                    name: 'Canvas Master',
                    desc: 'Vanilla-JS Painter',
                    image: 'https://res.cloudinary.com/echoshare/image/upload/v1645264308/portfolio/Screenshot_27_u6ixdn.png',
                    github: 'https://github.com/LidorBaum/Canvas-Master',
                    liveDemo: 'https://lidorbaum.github.io/Canvas-Master/',
                },
                {
                    name: 'Mine Sweeper',
                    desc: 'Vanilla-JS Game',
                    image: 'https://res.cloudinary.com/echoshare/image/upload/v1645265174/portfolio/Screenshot_28_mwfpi9.png',
                    github: 'https://github.com/LidorBaum/MineSweeper1',
                    liveDemo: 'https://lidorbaum.github.io/MineSweeper1/',
                },
            ],
        };
    },
};
</script>
