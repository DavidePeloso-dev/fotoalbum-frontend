<script>
import AboutMe from './AboutMe.vue';
import { state } from '../state.js';
export default {
    name: 'MainApp',
    data() {
        return {
            state,
        }
    },
    components: {
        AboutMe
    },
    methods: {

    },
    mounted() {
        state.getEvidencePhotos();
    }
}
</script>

<template>
    <main>
        <div id="home" class="wrapper">
            <div class="container">
                <h1 class="text-white text-center name mt-5">Jhon<span class="text-primary-app ms-3">Dho</span></h1>
                <h3 class="text-uppercase text-center text-accent">Capturing life's essence through lens</h3>
                <div class="row row-cols-1 row-cols-lg-2 pt-5">
                    <div class="col mb-3">
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button v-for="(photo, i) in state.evidence_photos.data" type="button"
                                    data-bs-target="#carouselExampleAutoplaying" :data-bs-slide-to="i"
                                    :class="i == 0 ? 'active' : ''" :aria-current="i == 0 ? 'true' : ''"
                                    :aria-label="'Slide' + ' ' + (i + 1)">
                                </button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item rounded-3" :class="i == 0 ? 'active' : ''"
                                    v-for="(photo, i) in state.evidence_photos.data">
                                    <img v-if="photo.image && photo.image.startsWith('https://')" :src="photo.image"
                                        class="d-block w-100 img rounded-3" :alt="photo.title">
                                    <img v-else-if="photo.image" :src="state.base_api_url + '/storage/' + photo.image"
                                        class="d-block w-100 img rounded-3" :alt="photo.title">
                                </div>
                                <button class="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card glass home-card text-white">
                            <div class="card-body position-relative">
                                <div class="d-flex align-items-center">
                                    <div class="avatars d-flex">
                                        <img class="avatar"
                                            src="https://images.unsplash.com/photo-1510932742089-bef92acabb5b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
                                            alt="">
                                        <img class="avatar avat-2"
                                            src="https://images.unsplash.com/photo-1717248320480-513d02b13ddc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
                                            alt="">
                                        <img class="avatar avat-3"
                                            src="https://images.unsplash.com/photo-1651010966858-8c2c7633f003?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                                            alt="">
                                    </div>
                                    <h6 class="card-title text-uppercase text-primary-app">
                                        <strong class="fs-1">50 +</strong>
                                        <br> Happy Clients
                                    </h6>
                                </div>
                                <p class="card-text mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Adipisci
                                    numquam quis cupiditate, nesciunt aperiam distinctio minus blanditiis maxime fuga
                                    dolore
                                    eaque omnis eos ut eligendi tenetur culpa temporibus modi voluptatibus.
                                </p>
                                <a href="#"
                                    class="btn text-uppercase btn-primary-app position-absolute end-0 me-3 bottom-0 mb-3">Let's
                                    Talk <i class="arrow bi bi-arrow-up-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AboutMe></AboutMe>
    </main>
</template>

<style scoped>
.name {
    font-size: 8rem;
    font-family: "Playfair Display", serif;
    font-weight: 900;
    font-style: italic;

}

.home-card {
    aspect-ratio: 16/9;
}

.carousel-indicators .active {
    background-color: var(--primary-app);
}

.btn-primary-app {
    background-color: var(--primary-app);
    color: var(--bg-app);
}

.glass {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 #f1501b21;
}

.avatar {
    display: block;
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid var(--ligth-app);
}

.avat-2 {
    z-index: 2;
    translate: -50%;
}

.avat-3 {
    z-index: 3;
    translate: -100%;
}

.card-title {
    translate: -25%;
}
</style>