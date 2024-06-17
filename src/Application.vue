<script>
import { state } from './state.js'
import axios from 'axios'
import HeaderApplication from './components/application/HeaderApplication.vue'
export default {
    name: 'Application',
    data() {
        return {
            state,
            search_bar: '',
        }
    },
    components: {
        HeaderApplication,
    },
    methods: {
        search() {
            const url = state.base_api_url + state.photos_endpoint + `?search=${this.search_bar}`
            axios
                .get(url)
                .then(resp => {
                    state.photos = resp.data.results
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    mounted() {
        state.getPhotos()
        state.getCategories()
    },
}
</script>

<template>
    <HeaderApplication></HeaderApplication>
    <main>
        <div class="container py-5">
            <form class="pt-5 text-white d-flex gap-3 align-items-end" @submit.prevent="search()">
                <div class="mb-3 w-100">
                    <label for="categories" class="form-label">Category</label>
                    <select class="form-select" name="categories" id="categories" v-model="search_bar">
                        <option value="">All Categories</option>
                        <option v-for="category in state.categories" :value="category.id">{{ category.name }}</option>
                        <option :value="'evidence'">Photos in Evidence</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-primary-app btn-sm mb-3">Search</button>
            </form>
            <div v-if="state.photos.data != ''" class="row mt-3 row-cols-1 row-cols-md-3 flex-wrap">
                {{ console.log(state.photos.data) }}
                <div class="col" v-for="photo in state.photos.data">
                    <div class="card glass text-white mb-3 rounded-3">
                        <img v-if="photo.image && photo.image.startsWith('https://')" :src="photo.image"
                            class="d-block w-100 img rounded-top-3 card-img-top" :alt="photo.title">
                        <img v-else-if="photo.image" :src="state.base_api_url + '/storage/' + photo.image"
                            class="d-block w-100 img rounded-top-3 card-img-top" :alt="photo.title">
                        <div class="card-body">
                            <div class="card-title d-flex align-items-center justify-content-between">
                                <h5>{{ photo.title }}</h5>
                                <span class="badge text-bg-accent">{{ photo.category.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <h3>No photos found!</h3>
            </div>

        </div>
    </main>

</template>

<style scoped>
.text-bg-accent {
    background-color: var(--accent-app);
}
</style>