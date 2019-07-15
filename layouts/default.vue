<template>
  <div>
    
    <Hero/>
    <nuxt />
    <SideNavMenu />
    <Footer/>
  </div>
</template>
<script>
//import PageLoader from '@/components/includes/PageLoader';
import Hero from '@/components/partials/Hero';
import SideNavMenu from '@/components/partials/SideNavMenu';
import Footer from '@/components/partials/Footer';
export default {
  components: {
    Hero,
    SideNavMenu,
    Footer
  }
  
}
</script>


