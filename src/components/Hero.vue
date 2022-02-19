<template>
    <div id="landing" class="landing">
        <div class="hero">
            <h1>Hello World 👋 !</h1>
            <h1>I'm Lidor.</h1>
            <div>
                <div class="typer">
                    <vue-typer
                        :text="typos"
                        :repeat="Infinity"
                        :shuffle="false"
                        initial-action="erasing"
                        :pre-type-delay="70"
                        :type-delay="70"
                        :pre-erase-delay="1000"
                        :erase-delay="100"
                        erase-style="backspace"
                        :erase-on-complete="true"
                        caret-animation="smooth"
                    />
                </div>
            </div>
            <a href="#navbar"><i class="pi pi-arrow-circle-down" /></a>
        </div>
    </div>
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
    components: {
        VueTyper,
    },
    name: 'Hero',
    data() {
        return {
            typos: [
                'Full-Stack Web Developer',
                'Self Taught',
                'React and Vue Frameworks',
                'NodeJs and Express',
                'MongoDB Database with Mongoose',
                'And 3D Printing Specialist :)',
            ],
        };
    },
    props: {
        msg: String,
    },
};
</script>
