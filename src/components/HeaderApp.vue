<script>
export default {
    name: 'HeaderApp',
    data() {
        return {

        }
    },
    components: {
    },
    methods: {

    },
}
</script>

<template>
    <header>
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <ul class="d-flex gap-3 align-items-center m-0 py-4 text-uppercase">
                    <li><a class="link active" href="#home">Home</a></li>
                    <li><a class="link" href="#about">About Me</a></li>
                    <li><a class="link" href="#">Photos</a></li>
                    <li><a class="link" href="#">Categories</a></li>
                </ul>
                <div>
                    <a class="secondary-link text-uppercase" href="#">Let's Talk <i
                            class="arrow bi bi-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: #101010c8;
    position: fixed;
    width: 100%;
    z-index: 100;
}

.container {
    border-bottom: 1px solid var(--ligth-app);
}
</style>