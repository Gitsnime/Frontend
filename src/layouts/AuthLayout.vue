<template>
    <main class="login-register h-screen ">
        <section class=" h-full  flex gap-5 items-center justify-between p-7">
            <VContainer class="relative h-full w-[450px]  max-w-[700px]">
                <img src="../../public/images/anime_login.png" alt="anime"
                    class="az w-full h-full max-h-[600px] rounded-xl">
                <VContainer class="absolute z-10 text-white  bottom-10 left-5">
                    <VText variant="display-md" class="!font-bold">Gitsnime</VText>
                    <VText variant="display-xs">Ekspresikan kewibuan anda</VText>
                </VContainer>
                <div class="overlay absolute inset-0 h-full max-h-[600px] w-full rounded-[20px]"></div>
            </VContainer>
            <VContainer class=" w-1/2 flex-1 flex justify-center items-center h-full ">
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