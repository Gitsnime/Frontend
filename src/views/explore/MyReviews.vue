<template>
    <main class="p-6 md:mx-20 ">

        <form class="mb-6">
            <v-form-select
            class="w-fit"
          name="Order by"
          :items="order"
        />
        </form>

        <VContainer v-for="(review, key) in reviews" :key="key"
                    class="flex justify-between mb-5 pb-5 border-b-[1.3px] border-black/60">
                    <VContainer class="flex  gap-3">
                        <img src="../../../public/images/avatar_1.png" class="rounded-full w-10 h-10" />
                        <VContainer>
                            <VText variant="xs" class="!text-black/60">{{ review.name }}</VText>
                            <VText variant="md" class="w-72 max-w-72">{{ review.review }}
                            </VText>
                            <VContainer class="mt-5 flex items-center gap-4">
                                <VContainer class="flex items-center gap-2">
                                    <VBtn no-ring icon fab @click="like"
                                        class="!p-0 !w-fit !h-fit !border-none !text-secondary hover:!text-secondary/80 hover:!bg-transparent">
                                        <VIcon size="sm" :name="isLiked ? 'mdi:thumb-up' : 'mdi:thumb-up-outline'" />
                                    </VBtn>
                                    <VText @click="like" variant="sm" font-weight="medium"
                                        class="cursor-pointer !text-secondary">LIKE THIS ({{ review.like }})</VText>
                                </VContainer>

                                <VContainer class="flex items-center gap-2">
                                    <VBtn no-ring icon fab @click="helpfull"
                                        class="!p-0 !w-fit !h-fit !border-none !text-accent hover:!text-accent/80 hover:!bg-transparent">
                                        <VIcon size="sm" :name="isHelpfull ? 'mdi:lightbulb' : 'mdi:lightbulb-outline'" />
                                    </VBtn>
                                    <VText @click="helpfull" variant="sm" font-weight="medium"
                                        class="cursor-pointer !text-accent">VERY HELPFUL! ({{ review.helpfull }})
                                    </VText>
                                </VContainer>
                            </VContainer>
                        </VContainer>
                    </VContainer>
                    <VContainer>
                        <VBtn icon fab no-ring class="!border-0 !w-fit !h-fit">
                            <VIcon name="mdi:dots-vertical" class="!text-black/60" />
                        </VBtn>
                    </VContainer>
                </VContainer>
    </main>
</template>
<script lang="ts">
import type { VDataTableHeader } from '@morpheme/table';
import { ref } from 'vue'

const reviews = [{
    name: 'Wibu Sejati',
    review: 'Great anime for those who want to fell in romance & cuteneess',
    like: '69',
    helpfull: '17703'
},
{
    name: 'Wibu Bawang',
    review: 'Mantap min aku nangis loh, sengaja ya buat aku nangis ToT',
    like: '20',
    helpfull: '100'
},
{
    name: 'Wibu Sejati',
    review: 'Lorem ipsum Mikasa dolor sit jean amet levi constectur eren',
    like: '100',
    helpfull: '2000'
}

]

const order = ref([
    {
        text: "Order by",
        value: "",
        disabled: true,
    },
    {
        text: "Latest",
        value: 1,
    },
    {
        text: "Oldest",
        value: 2,
    },
    {
        text: "Name A → Z",
        value: 3,
    },
    {
        text: "Name Z → A",
        value: 4,
    },
    {
        text: "Single-line item",
        value: 5,
    },
]);

export default {
    name: 'ReviewsPage',
    setup() {
        return {
            isFavorite: ref(false),
            review: ref(''),
            reviewMode: ref(false),
            selectedTab: ref(0),
            filterReview: ref('latest'),
            isLiked: ref(false),
            isHelpfull: ref(false),
            loading: ref(false),
            showDialog: ref(false)
        }
    },
    data() {
        return {
            reviews,
            order
        }
    },
    methods: {
        favorite() {
            this.isFavorite = !this.isFavorite
        },
        doReview() {
            console.log('review')
        },
        like() {
            this.isLiked = !this.isLiked
        },
        helpfull() {
            this.isHelpfull = !this.isHelpfull
        }
    },
}
</script>
