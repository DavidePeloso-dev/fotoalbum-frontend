<script>
import { state } from '../state.js'
export default {
    name: 'AboutMe',
    data() {
        return {
            state
        }
    },
    components: {
    },
    mounted() {
        state.getAboutPhotos();
    },
}
</script>

<template>
    <section id="about">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2">
                <div class="col">
                    <h2 class="title text-uppercase">About Me</h2>
                </div>
                <div class="col">
                    <p>Hello! I'm Jhon Dho, a passionate photographer with a love for capturing life's most beautiful
                        moments. With over 20 years of experience, my journey through the lens has taken me from
                        intimate portraits to breathtaking landscapes. My style blends creativity and authenticity,
                        aiming to tell unique stories through every photograph. I am dedicated
                        to providing a personalized and professional experience for all my clients. Let's create
                        something unforgettable together!</p>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 my-5">
                <div class="col" v-for="photo in state.about_photos">
                    <img v-if="photo.image && photo.image.startsWith('https://')" :src="photo.image"
                        class="d-block w-100 img rounded-3 mb-3" :alt="photo.title">
                    <img v-else-if="photo.image" :src="state.base_api_url + '/storage/' + photo.image"
                        class="d-block w-100 img rounded-3 mb-3" :alt="photo.title">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.title {
    font-family: "Playfair Display", serif;
    font-weight: 700;
    font-size: 3rem;
}
</style>