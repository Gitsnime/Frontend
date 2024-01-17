<template>
    <main class="p-6 lg:mx-20">
        <form class="mb-6">
            <v-form-select
            class="w-fit"
          name="Order by"
          :items="order"
        />
        </form>

        <div class="grid gap-4 grid-cols-1 md:grid-cols-2">

            <!-- CARD -->
          <FavoritesCard/>
          <FavoritesCard/>
          <FavoritesCard/>
            <!-- END OF CARD -->

        </div>
    </main>
</template>
<script lang="ts">
import { ref } from 'vue';
import FavoritesCard from "@/components/general/FavoritesCard.vue";


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
    name: "FavoritesPage",
    components: { FavoritesCard },
    data() {
        return {
            order,
        };
    },
}
</script>
<style lang="">
    
</style>