import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
    base_api_url: 'http://127.0.0.1:8000',
    evidence_endpoint: '/api/photos/evidence',
    about_endpoint: '/api/photos/about',
    photos_endpoint: 'api/photos',
    evidence_photos: '',
    about_photos: '',
    photos: '',

    getEvidencePhotos() {
        let api_url = this.base_api_url + this.evidence_endpoint;
        axios
            .get(api_url)
            .then(resp => {
                this.evidence_photos = resp.data.results
            })
            .catch(err => {
                console.error(err);
            })
    },

    getPhotos() {
        let api_url = this.base_api_url + this.photos_endpoint;
        axios
            .get(api_url)
            .then(resp => {
                this.photos = resp.data.results
            })
            .catch(err => {
                console.error(err);
            })
    },

    getAboutPhotos() {
        let api_url = this.base_api_url + this.about_endpoint;
        axios
            .get(api_url)
            .then(resp => {
                this.about_photos = resp.data.results
            })
            .catch(err => {
                console.error(err);
            })
    }
})