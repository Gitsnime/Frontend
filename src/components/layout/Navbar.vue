<template>
    <VAppBar class="navbar">
        <VContainer class="flex items-center justify-between border-b-[1.3px] border-black-120 w-full px-4 py-2">
            <div class="flex lg:block items-center gap-2">
                <VBtn icon no-ring fab class="!p-1 !w-fit !h-fit !border-0 hover:!bg-black-120 mt-1 !block md:!hidden"
                    @click="collapse = !collapse">
                    <VIcon name="ic:outline-menu" class="text-black" />
                </VBtn>
                <h1 class="font-medium text-black text-lg">GITSNIME</h1>
            </div>
            <div
                class="hidden md:flex items-center  justify-center gap-20 text-sm text-primary font-medium relative w-[500px]">
                <VBtn no-ring flat class="!p-0 !h-fit !border-0 !text-sm !font-medium !text-primary hover:!bg-transparent"
                    to="/">
                    <h1>EXPLORE</h1>
                </VBtn>
                <VBtn no-ring flat class="!p-0 !h-fit !border-0 !text-sm !font-medium !text-primary hover:!bg-transparent"
                    to="/favorites">
                    <h1>FAVORITES</h1>
                </VBtn>
                <VBtn no-ring flat class="!p-0 !h-fit !border-0 !text-sm !font-medium !text-primary hover:!bg-transparent"
                    to="/myreviews">
                    <h1>MY REVIEWS</h1>
                </VBtn>
                <div v-if="$route.path == '/' || $route.path == '/favorites' || $route.path == '/myreviews'"
                    class="w-32 h-[2px] bg-primary absolute -bottom-[17px]  duration-200" :class="{
                        '-translate-x-[120%]': $route.path == '/',
                        '-translate-x-3': $route.path == '/favorites',
                        'translate-x-[113%]': $route.path == '/myreviews'
                    }"></div>

            </div>
            <VMenus class="nav-menus" label="" btnIcon="ri:arrow-down-s-line">
                <button icon fab class="!p-0 !w-fit !h-fit !border-0 hover:!scale-105 duration-200">
                    <VAvatar src="../../../public/images/avatar_1.png" />
                </button>
                <template #items>
                    <div>
                        <div class="p-2">
                            <VMenusItem> Ohayou </VMenusItem>
                            <br>
                            <VMenusItem class="text-sm text-black/60"> Wibu sejati </VMenusItem>
                        </div>
                        <div>
                            <VBtn no-ring prefix-icon="ic:outline-logout" to="/login"
                                class="!px-2 !w-full !h-fit !border-0 !text-negative !py-2 !justify-start">Logout
                            </VBtn>
                        </div>
                    </div>
                </template>
            </VMenus>
        </VContainer>
    </VAppBar>
    <VBottomSheet v-model="collapse">
        <VContainer class="pt-3">
            <VList>
                <VListItem class="hover:!bg-transparent" @click="collapse = !collapse" to="/">
                    <h1 class="text-primary font-medium w-fit mx-auto px-4 hover:scale-105 duration-100"
                        :class="{ 'border-b-2 border-primary scale-105': $route.path === '/' }">
                        EXPLORE
                    </h1>
                </VListItem>
                <VListItem class="hover:!bg-transparent" @click="collapse = !collapse" to="/favorites">
                    <h1 class="text-primary font-medium w-fit mx-auto px-4 pb-1 hover:scale-105 duration-100"
                        :class="{ 'border-b-2 border-primary scale-105': $route.path === '/favorites' }">
                        FAVORITES
                    </h1>
                </VListItem>
                <VListItem class="hover:!bg-transparent" @click="collapse = !collapse" to="/myreviews">
                    <h1 class="text-primary font-medium w-fit mx-auto px-4 pb-1 border-b-[1.4px hover:scale-105 duration-100"
                        :class="{ 'border-b-2 border-primary scale-105': $route.path === '/myreviews' }">
                        MY REVIEWS
                    </h1>
                </VListItem>
            </VList>
        </VContainer>
    </VBottomSheet>
</template>

<script lang="ts">
import { ref } from 'vue'

const items = [
    {
        text: 'Item',
        to: '/',
    },
    {
        text: 'Item 2',
        to: '/',
    },
    {
        text: 'Item 3',
        to: '/',
    },
];

export default {
    name: 'NavBar',
    setup() {
        return {
            collapse: ref(false),
        }
    },
    data() {
        return {
            items
        }
    },
    methods: {
    },
    watch: {},
}
</script>

<style>
.navbar.app-bar:not(.app-bar--auto) {
    padding: 0px !important;
}

.v-menus-items {
    width: fit-content;
}
</style>