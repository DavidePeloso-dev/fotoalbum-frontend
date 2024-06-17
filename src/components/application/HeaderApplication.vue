<script>
export default {
    name: 'HeaderApplication',
    data() {
        return {

        }
    },
    components: {
    },
    methods: {
        activateLink(pos) {
            let linkList = document.querySelectorAll('ul .link');
            linkList.forEach(link => {
                if (link.classList.contains('active')) {
                    link.classList.remove('active');
                }
            });
            linkList[pos].classList.add('active');
        },
    },
}
</script>

<template>
    <header>
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <ul class="d-flex gap-3 align-items-center m-0 py-4 text-uppercase">
                    <li><a @click="activateLink(0)" class="link" href="../../index.html">Home</a></li>
                    <li><a @click="activateLink(1)" class="link active" href="../../aplication.html">Photos</a>
                    </li>
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