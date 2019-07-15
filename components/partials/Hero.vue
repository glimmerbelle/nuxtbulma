<template>
    <div class="hero hero-wavy is-relative is-theme-primary huge-pb">
            <canvas id="canvas"></canvas>
            <Navbar/>

            <!-- Hero image -->
            <div id="main-hero" class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns is-vcentered">
                        <!-- Caption -->
                        <div class="column is-5 hero-caption">
                            <h1 class="title big-landing-title text-bold is-2">
                                Heard of Chat Support ?
                            </h1>
                            <h2 class="subtitle is-5 light-text pt-10 pb-10">
                                Discover a full featured chat support platform that will make your clients happy.
                            </h2>
                            <p class="pt-10 pb-10">
                                <a href="#services" class="button button-cta light-btn btn-outlined is-bold rounded z-index-2">
                                    Get Started
                                </a>
                            </p>
                        </div>
                        <!-- Hero image -->
                        <div class="column is-9">
                            <figure class="image">
                                <img class="levitate" src="~/assets/images/illustrations/mockups/landing2/macbook-chat.png" alt="">
                            </figure>
                        </div>
                        <!-- /Hero image -->
                    </div>
                </div>
                <!-- Floating little avatars -->
                <div class="floating-avatars is-hidden-mobile">
                    <img class="avatar avatar-1st levitate delay-1" src="https://place-hold.it/250x250" alt="">
                    <img class="avatar avatar-2nd levitate delay-3" src="https://place-hold.it/250x250" alt="">
                    <img class="avatar avatar-3rd levitate delay-8" src="https://place-hold.it/250x250" alt="">
                    <img class="avatar avatar-4th levitate delay-6" src="https://place-hold.it/250x250" alt="">
                    <img class="avatar avatar-5th levitate delay-4" src="https://place-hold.it/250x250" alt="">
                    <img class="avatar avatar-6th levitate delay-2" src="https://place-hold.it/250x250" alt="">
                    <img class="avatar avatar-7th levitate delay-1" src="https://place-hold.it/250x250" alt="">
                    <img class="avatar avatar-8th levitate delay-8" src="https://place-hold.it/250x250" alt="">
                </div>
                <!-- /Floating little avatars -->
            </div>
            <!-- /Hero image -->
        </div>
</template>
<script>
import Navbar from '~/components/partials/Navbar'
export default {
    components: {
        Navbar
    }
}
</script>
