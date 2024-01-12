<template>
    <section class="detail-page pt-5 px-32 ">
        <VText variant="display-md" font-weight="semibold">Shingeki No Kyojin 2nd Season</VText>
        <VContainer class="mt-5 flex gap-5">
            <VContainer class="w-[220px]">
                <VContainer class="w-full">
                    <img src="../../../public/images/aot2.jpg" class="min-w-[220px] max-w-[320px] h-[360px] rounded-lg  " />
                </VContainer>
                <VContainer class="mt-3 flex items-center flex-wrap gap-1 gap-y-2">
                    <div v-for="(point, key) in AnimeDataPoints" :key="key"
                        class="flex items-center justify-center text-white bg-primary w-fit rounded-xl pl-2 pr-3 py-1 gap-1">
                        <VIcon :name="point.icon" size="sm" />
                        <VText variant="sm">{{ point.value }}</VText>
                    </div>
                </VContainer>
                <VDivider class="mt-3 !border-black-120 !border-[1.2px]" />
                <VContainer class=" mt-3">
                    <VBtn no-ring :outlined="isFavorite"
                        :prefix-icon="isFavorite ? 'mdi:cards-heart' : 'mdi:cards-heart-outline'"
                        class=" hover:!bg-accent/90 hover:!text-white !rounded-md !px-2 !h-9 !border-accent !border-[1.5px]"
                        :class="isFavorite ? '!bg-accent !text-white' : '!text-accent'" @click="favorite">
                        I LOVE THIS ANIME!
                    </VBtn>
                    <VBtn no-ring prefix-icon="mdi:pencil" href="#review"
                        class="mt-4 !text-accent !border-accent hover:!bg-accent/5 !border-[1.5px] !px-2 !h-9">WRITE
                        REVIEW
                    </VBtn>
                </VContainer>
                <VDivider class="mt-3 !border-black-120 !border-[1.2px]" />
                <VContainer class=" mt-3">
                    <VBtn no-ring :outlined="isFavorite" class="!text-primary !border-primary !border-[1.5px] !h-9">
                        CHARACTERS
                    </VBtn>
                    <div class="mt-3">
                        <VBtn no-ring :outlined="isFavorite" class="!text-primary !border-primary !border-[1.5px] !h-9">
                            TRAILER
                        </VBtn>
                    </div>
                </VContainer>
            </VContainer>

            <VContainer class="w-full">
                <VText variant="xl" font-weight="medium">Synopsis</VText>
                <VText class="!text-black/80 pl-2 pt-1">Gabi Braun and Falco Grice have been training their entire lives to
                    inherit one of the seven Titans under Marley's control and aid their nation in eradicating the Eldianson
                    Paradis. However, just as all
                    seems well for the two cadets, their peace is suddenly shaken by the arrival of Eren Yeager and the
                    remaining members of the Survey Corps. Having finally reached the Yeager family basement and learned
                    about the dark history surrounding the Titans, the Survey Corps has at long last found the answer they
                    so desperately fought to uncover. With the truth now in their hands, the group set out for the world
                    beyond the walls. In Shingeki no Kyojin: The Final Season, two utterly different worlds collide as each
                    party pursues its own agenda in the long-awaited conclusion to Paradis' fight for freedom. Written by
                    MAL Rewrite</VText>
                <VText variant="xl" font-weight="medium" class="mt-5">Background</VText>
                <VText class="!text-black/80 pl-2 pt-1">Shingeki no Kyojin: The Final Season adapts content from volumes
                    23-28 of Hajime Isayama's award-winning manga.</VText>

                <VText variant="xl" font-weight="medium" class="mt-5">Information</VText>
                <VContainer class="flex  gap-3 ">
                    <VContainer class="w-1/2 max-w-1/2 ">
                        <VDataTable flat dense :items="cols_1" :headers="rows" class="text-ellipsis">
                            <template #item.title="{ item }">
                                <VText class="!vertical-top" font-weight="semibold" variant="md">{{ item.title }}</VText>
                            </template>
                            <template #item.value="{ item }">
                                <VText class="pt-[2px]">{{ item.value }}</VText>
                            </template>
                        </VDataTable>
                    </VContainer>

                    <VContainer class="w-1/2">
                        <VDataTable flat dense :items="cols_2" :headers="rows">
                            <template #item.title="{ item }">
                                <VText font-weight="semibold" variant="md"> {{ item.title }}</VText>
                            </template>
                            <template #item.value="{ item }">
                                <VText class="pt-[2px]">{{ item.value }}</VText>
                            </template>
                        </VDataTable>
                    </VContainer>
                </VContainer>
            </VContainer>
        </VContainer>

        <VContainer class="my-10" id="review">
            <VText font-weight="medium" variant="xl">
                Share Your Review
            </VText>
            <VContainer class="mt-3">
                <VTextarea color="secondary" placeholder="Your review here" class="!h-32" ref="reviewInput" />
                <VBtn dense no-ring class="!bg-primary hover:!opacity-95  !text-white mt-2 !px-5 !h-9">POST</VBtn>
            </VContainer>
            <VContainer class="mt-8">
                <div class="flex items-center justify-between">
                    <VText variant="xl" font-weight="medium" class="!text-primary">Reviews (420)</VText>
                    <div class="relative">
                        <VTabs v-model="selectedTab" :items="tab" default-class="!text-sm !font-medium"
                            inactive-class="!text-black/60" class="!border-b-[1.2px] ! !p-0 !rounded-none"
                            active-class="!text-primary" :style="{
                                '--v-tabs-slider-height': '2px',
                                '--v-tabs-slider-bg-color': '#4A4E69',
                                '--v-tabs-slider-border-color': '#4A4E69',
                            }" />

                        <div class="absolute bottom-[0.8px] w-full h-[1.2px] bg-black-120"></div>
                    </div>
                </div>
            </VContainer>
            <VContainer class="mt-10">
                <VContainer v-if="loading" v-for="(review, k) in reviews" :key="k">
                    <VContainer class="flex justify-between ">
                        <VContainer class="flex gap-3 mb-20">
                            <VShimmer rounded class="!w-10 !h-10" />
                            <VContainer>
                                <VShimmer rounded />
                                <VShimmer rounded class="!w-72 !mt-2" />
                                <VContainer class="flex items-center gap-2 mt-5">
                                    <VContainer class="flex items-center gap-2">
                                        <VShimmer rounded class="!w-3 !h-3" />
                                        <VShimmer rounded class="!h-2 !w-14" />
                                    </VContainer>
                                    <VContainer class="flex items-center gap-2">
                                        <VShimmer rounded class="!w-3 !h-3" />
                                        <VShimmer rounded class="!h-2 !w-14" />
                                    </VContainer>
                                </VContainer>
                            </VContainer>
                        </VContainer>
                        <VContainer class="flex gap-2">
                            <VShimmer rounded class="!w-1 !h-5" />
                        </VContainer>
                    </VContainer>
                </VContainer>
                <VContainer v-else v-for="(review, key) in reviews" :key="key"
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
                <VBtn no-ring :outlined="isFavorite" class="!text-secondary !border-secondary !border-[1.5px] !h-9">
                    LOAD MORE
                </VBtn>
            </VContainer>
        </VContainer>
    </section>
</template>

<script lang="ts">
import type { VDataTableHeader } from '@morpheme/table';
import { ref } from 'vue'

const cols_1 = [{
    title: 'Source',
    value: ': Manga',
},
{
    title: 'Type',
    value: ': TV',
},
{
    title: 'Episodes',
    value: ': 16',
},
{
    title: 'Duration',
    value: ': 23 min per ep',
},
{
    title: 'Studios',
    value: ': Mappa',
},
{
    title: 'Licensors',
    value: ': Funimation',
},
{
    title: 'Premiered',
    value: ': Production I.G, Dentsu, Mainichi Broadcasting System, Pony Canyon, Kodansha, Techno Sound, Pony Canyon Enterprises',
}

]

const cols_2 = [{
    title: 'Themes',
    value: ': Gore, Military, Survival',
},
{
    title: 'Genres',
    value: ': Action, Drama, Suspense',
},
{
    title: 'Demographic',
    value: ': Shounen',
},
{
    title: 'Rating',
    value: ': R - 17+ (violence & profanity)',
},
{
    title: 'Aired',
    value: ': Dec 7, 2020 to Mar 29, 2021',
},
{
    title: 'Status',
    value: ': Finished Airing',
},
{
    title: 'Premiered',
    value: ': winter 2021',
}

]

const rows = ref<VDataTableHeader[]>([
    {
        value: 'title',
        text: '',
    },
    {
        value: 'value',
        text: '',
    },
]);


const AnimeDataPoints = [
    {
        icon: 'ic:baseline-star-border',
        value: '9.9'
    },
    {
        icon: 'ic:outline-military-tech',
        value: '#36'
    },
    {
        icon: 'ic:baseline-favorite-border',
        value: '69 loves'
    },
    {
        icon: 'lucide:message-square-plus',
        value: '420 reviews'
    }
]

const tab = ref([
    {
        text: 'LATEST',
    },
    {
        text: 'POPULAR',
    },
    {
        text: 'OLDEST',
    },
]);


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



export default {
    name: 'DetailPage',
    setup() {
        return {
            cols_1,
            cols_2,
            rows,
            isFavorite: ref(false),
            review: ref(''),
            reviewMode: ref(false),
            tab,
            selectedTab: ref(0),
            filterReview: ref('latest'),
            isLiked: ref(false),
            isHelpfull: ref(false),
            loading: ref(false)
        }
    },
    data() {
        return {
            AnimeDataPoints,
            reviews
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
    watch: {
        selectedTab() {
            this.loading = true;
            switch (this.selectedTab) {
                case 1:
                    this.filterReview = 'popular'
                    break
                case 2:
                    this.filterReview = 'oldest'
                    break
                default:
                    this.filterReview = 'latest'
                    break
            }
            setTimeout(() => {
                this.loading = false;
            }, 500);
            console.log(this.loading)
        }
    }

}
</script>

<style>
.detail-page .v-data-table-pagination {
    display: none;
}

.detail-page .v-table-td {
    white-space: unset;
    vertical-align: top;
}

.detail-page .v-table-overflow {
    overflow: hidden;
}

.detail-page .v-table-thead {
    background-color: transparent;
}

.detail-page table {
    border-collapse: separate;
}

.detail-page .v-input.v-input--textarea .v-input-control {
    resize: none !important;
}
</style>