<template>
    <main class="login-register h-screen ">
        <section class="relative h-full block lg:flex items-center justify-evenly pr-0 md:pr-10 gap-20">
            <VContainer class="hidden lg:block w-full lg:w-[35%] relative h-full lg:h-fit">
                <img src="../../public/images/anime_login.png" alt="anime"
                    class=" w-full h-full rounded-none md:rounded-xl">
                <VContainer class="absolute w-fit h-fit left-0 bottom-7 z-10 text-white pl-5">
                    <VText variant="display-md" class="!font-bold">Gitsnime</VText>
                    <VText variant="display-xs">Ekspresikan kewibuan anda</VText>
                </VContainer>
                <div class="overlay absolute inset-0 rounded-[20px]"></div>
            </VContainer>
            <VContainer class="w-full lg:w-1/2 flex lg:block items-center justify-center p-5 md:p-0 h-screen lg:h-fit">
                <router-view></router-view>
            </VContainer>
        </section>
    </main>
</template>

<script lang="ts">

export default {
    name: 'BlankLayout',
}
</script>


<style>
.login-register .overlay {
    background: linear-gradient(180deg, rgba(74, 78, 105, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%);

}
</style>