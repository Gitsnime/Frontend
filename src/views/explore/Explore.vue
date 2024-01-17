<template>
  <div class="p-6 lg:mx-20">
    <form
      class="grid mb-6 gap-4 grid-cols-1 md:justify-items-center items-center content-center h-full"
    >
      <div class="flex gap-x-2 items-center content-center">
        <VInput placeholder="Keyword" />

        <v-form-select
          class="hidden md:block"
          name="genre"
          :items="status"
        />
        <v-form-select
          class="hidden md:block"
          name="genre"
          :items="status"
        />

        <VBtn
          color="primary"
          class="!bg-primary hover:!bg-primary/90 !text-white"
          >Search</VBtn
        >
      </div>

      <div class="flex gap-x-2 md:hidden">
        <v-form-select
          :items="status"
        />
        <v-form-select
          :items="status"
        />
      </div>
    </form>

    <h2 class="font-bold text-2xl mb-6">Now Showing</h2>

    <div class="grid gap-x-4 gap-y-6 grid-cols-2 md:grid-cols-5">
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import ExploreCard from "@/components/general/ExploreCard.vue";

const status = ref([
  {
    text: "Status",
    value: "",
    disabled: true,
  },
  {
    text: "ongoing",
    value: 1,
  },
  {
    text: "airing",
    value: 2,
  },
  {
    text: "end",
    value: 3,
  },
]);

export default {
  name: "ExplorePage",
  components: { ExploreCard },
  data() {
    return {
      status,
    };
  },
};
</script>
