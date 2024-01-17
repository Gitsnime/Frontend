<template>
    <a href="/detail/8" class="grid w-full h-full gap-y-2">
        <div class="relative rounded-lg overflow-hidden">
          <img
            src="https://cdn.myanimelist.net/images/anime/1937/136906l.jpg"
        alt="anime"
            class="object-center object-cover w-full max-h-64"
          />

          <div class="absolute bottom-0 left-0 w-full h-fit p-2 bg-[#222222CC]">
            <p class="text-white line-clamp-3">
              Jibaku Shounen Hanako-kun 2nd Season
            </p>
          </div>
        </div>

        <div class="flex flex-wrap gap-2">
          <VBadge rounded="full" color="primary" class="!gap-1 !bg-primary !border-primary "><VIcon name="heroicons-outline:star" size="xs" />9.9</VBadge>
          <VBadge rounded="full" color="primary" class="!gap-1 !bg-primary !border-primary "><VIcon name="heroicons-outline:film" size="xs" /> TV (12 eps)</VBadge>
          <VBadge rounded="full" color="primary" class="!gap-1 !bg-primary !border-primary ">Smut</VBadge>
          <VBadge rounded="full" color="primary" class="!gap-1 !bg-primary !border-primary ">Drama</VBadge>
        </div>
      </a>
</template>
<script lang="ts">
export default {
  name: 'ExploreCard',

}
</script>