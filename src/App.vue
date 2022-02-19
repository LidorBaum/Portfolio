<template>
    <div>
        <Toast />
        <div id="app" class="app">
            <Hero />

            <Navbar />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
        <Particles
            id="tsparticles"
            :options="{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            mode: 'grab',
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 1,
                            size: 80,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        grab: {
                            distance: 400,
                            links: {
                                blink: true,
                                consent: false,
                                opacity: 0.5,
                            },
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#626262',
                    },
                    links: {
                        color: '#ffffff',
                        distance: 150,
                        enable: true,
                        opacity: 0.8,
                        width: 2,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outMode: 'bounce',
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        options: {
                            character: {
                                value: ['', '', '', '', '', ''],
                                font: 'Font Awesome 5 Brands',
                                style: '',
                                weight: '200',
                                fill: true,
                            },
                            char: {
                                value: ['t', 's'],
                                font: 'Verdana',
                                style: '',
                                weight: '900',
                                fill: true,
                            },
                        },
                        type: 'char',
                    },
                    size: {
                        random: true,
                        value: 25,
                    },
                },
                detectRetina: true,
            }"
        />
    </div>
</template>

<script>
import Hero from '@/components/Hero';
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

export default {
    components: {
        Hero,
        Navbar,
        About,
        Skills,
        Projects,
        Contact,
    },
    methods: {
        greet() {
            this.$toast.add({
                severity: 'success',
                summary: 'Success Message',
                detail: 'Order submitted',
                life: 3000,
            });
        },
    },
};
</script>
