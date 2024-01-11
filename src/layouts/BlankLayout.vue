<template>
    <main class=" h-screen ">
        <section class=" h-full  flex gap-5 items-center justify-between p-7">
            <div class="relative h-full w-[450px]  max-w-[700px]">
                <img src="../../public/images/anime_login.png" alt="anime"
                    class="az w-full h-full max-h-[600px] rounded-xl">
                <div class="absolute z-10 text-white  bottom-10 left-5">
                    <h1 class="font-bold text-4xl">Gitsnime</h1>
                    <p class="text-2xl">Ekspresikan kewibuan anda</p>
                </div>
                <div class="overlay absolute inset-0 h-full max-h-[600px] w-full rounded-[20px]"></div>
            </div>
            <div class=" w-1/2 flex-1 flex justify-center items-center h-full ">
                <router-view></router-view>
            </div>


        </section>


    </main>
</template>

<script lang="ts">
import { ref } from 'vue';

const tab = ref([
    {
        text: 'Login',
    },
    {
        text: 'Register',
    },
]);

export default {
    name: 'BlankLayout',
    data() {
        return {
            tab
        }
    }
}
</script>


<style>
.overlay {
    background: linear-gradient(180deg, rgba(74, 78, 105, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%);

}
</style>