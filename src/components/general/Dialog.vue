<template>
    <VContainer
        :class="isOpen ? 'opacity-100 flex items-center justify-center h-screen fixed inset-0 z-10 px-5' : 'opacity-0 fixed -z-10'">
        <div class="overlay w-full h-screen fixed inset-0 -z-10 bg-black/50 duration-200"
            :class="isOpen ? 'opacity-100 ' : 'opacity-0 '" @click="isOpen = !isOpen"></div>
        <div class="bg-white p-5 rounded-lg  duration-200"
            :class="isOpen ? 'opacity-100 w-full md:w-fit h-fit max-h-[80%] overflow-auto mt-0' : 'opacity-0 mt-10'">
            <VContainer class="header flex items-center justify-between">
                <div class="text-3xl text-primary font-semibold">
                    {{ headerTitle }}
                </div>
                <VBtn fab icon flat no-ring class="!p-0" @click="isOpen = !isOpen">
                    <VIcon name="ic:baseline-close" class="text-black/60" />
                </VBtn>
            </VContainer>
            <VContainer class="body my-5 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                <div v-if="roundedImage" v-for="(data, key) in modelValue" :key="data.id" class="flex items-center gap-3">
                    <div>
                        <img :src="data.img" alt="anime_character" class="w-12 h-12 rounded-full" />
                    </div>
                    <div>
                        <h1 class="text-primary font-medium">{{ data.title }}</h1>
                        <p class="text-black/60">{{ data.subTitle }}</p>
                    </div>
                </div>
                <div v-else v-for="(data, key) in modelValue" :key="key" class="flex items-center gap-3">
                    <div>
                        <img :src="data.img" alt="anime_character" class="w-16 h-20 rounded-md" />
                    </div>
                    <div>
                        <h1 class="text-primary font-medium">{{ data.title }}</h1>
                        <p class="text-black/60">{{ data.subTitle }}</p>
                    </div>
                </div>
            </VContainer>
        </div>
    </VContainer>
</template>

<script lang="ts">
import { ref } from 'vue'

interface AnimeData {
    id: number;
    img: string;
    title: string;
    subTitle: string;
}

export default {
    name: 'Dialog',
    props: {
        show: {
            default: false,
            type: Boolean
        },
        headerTitle: {
            default: 'Header Title',
            type: String
        },
        modelValue: {
            default: [],
            type: Array as () => AnimeData[]
        },
        roundedImage: {
            default: false,
            type: Boolean
        }
    },
    setup() {
        return {
            isOpen: ref(false)
        };
    },
    methods: {
        disableScroll() {
            console.log(this.isOpen);
            if (this.isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
    },
    watch: {
        show() {
            this.isOpen = !this.isOpen
        },
        isOpen() {
            this.disableScroll();

        }
    }
}

</script>

<style>
.header .btn {
    border: 0;
}
</style>