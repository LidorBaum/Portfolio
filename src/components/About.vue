<template>
    <div class="about-container">
        <div id="about" class="about">
            <h1>Who am I?</h1>
            <p>
                I am Lidor, a Full-Stack developer with experince building
                applications using React and Vue frameworks, along with NodeJS
                and MongoDB. <br />
                Currently I am studying also React-Native and developing an app for iOS and Android (MeBagina repo in github).
            </p>
            <p>
                I'm self taught, studied and practiced all alone, using what the
                internet could offer. <br />
                OK, OK, I also got some help from friends and family.
            </p>
            <p>
                I am a quick-learner, loving to solve problems and find
                solutions. I have a wide knowledge and always happy to learn
                more. Next stop - Web3.0!
            </p>
            <p>
                Among my hobbies, I am operating in the last 2 years a 3D
                Printing mini-factory.
            </p>
            <p>
                For now, I am looking for a junior position as a full-stack
                developer. You think you can help me? Let's chat!
            </p>
            <a class="cv" href="Lidor Baum - CV.pdf" target="_blank"
                ><Button class="p-button-raised"
                    >My Resume &nbsp;&nbsp;
                    <i class="pi pi-book book" /></Button
            ></a>
            <div class="contact-icons-container flex justify-center">
                <a href="https://www.linkedin.com/in/lidorbaum/"
                    ><i class="pi pi-linkedin"
                /></a>
                <a href="https://github.com/LidorBaum/"
                    ><i class="pi pi-github github"
                /></a>
            </div>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';

export default {
    components: { Button },
};
</script>
