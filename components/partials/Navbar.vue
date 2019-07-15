<template>
    <div class="navbar-wrapper navbar-fade navbar-light">
        <div class="hero-head">

            <!-- Nav -->
            <div class="container">
                <nav class="nav">
                    <div class="container big">
                        <div class="nav-left">
                            <a class="nav-item" href="landing-v2.html">
                                <img class="light-logo" src="~/assets/images/logos/bulkit-w.png" alt="">
                            </a>
                            <!-- Sidebar trigger -->
                            
                            <a id="navigation-trigger" :style="{opacity: opacity}" @click.prevent="toggleNav()" class="nav-item hamburger-btn">
                                <span class="menu-toggle">	
                                    <span class="icon-box-toggle" :class="{active: active}"> 	
                                        <span class="rotate">
                                            <i class="icon-line-top"></i>
                                            <i class="icon-line-center"></i>
                                            <i class="icon-line-bottom"></i> 
                                        </span>
                                    </span>
                                </span>
                            </a>
                            <a href="landing-v2-features.html" class="nav-item is-tab nav-inner is-not-mobile">
                                Features
                            </a>
                            <a href="landing-v2-pricing.html" class="nav-item is-tab nav-inner is-not-mobile">
                                Pricing
                            </a>
                            <a href="landing-v2-login.html" class="nav-item is-tab nav-inner is-not-mobile">
                                Login
                            </a>
                        </div>
                        <!-- Responsive toggle -->
                        <span class="nav-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <div class="nav-right nav-menu">

                            <a href="landing-v2-features.html" class="nav-item is-tab nav-inner is-menu-mobile">
                                Features
                            </a>
                            <a href="landing-v2-pricing.html" class="nav-item is-tab nav-inner is-menu-mobile">
                                Pricing
                            </a>
                            <a href="landing-v2-login.html" class="nav-item is-tab nav-inner is-menu-mobile">
                                Login
                            </a>
                            <span class="nav-item">
                                <a id="signup-btn" href="landing-v2-signup.html" class="button button-signup btn-outlined is-bold btn-align light-btn rounded">
                                    Free trial
                                </a>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
            <!-- /Nav -->

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active: false,
            opacity: '1'
        }
        
    },
    methods:{
        toggleNav(){
            console.log('clicked')
            this.$root.$emit('toggleNav')
            this.active = !this.active;
            this.opacity = '0';
            // $('.hamburger-btn').on("click", function(){
            // $('.menu-toggle .icon-box-toggle').toggleClass('active');
        }
    },
    mounted(){
        this.$root.$on('closeNav', () => {
            this.opacity = '1'
        })
    }
    
    
}
</script>

