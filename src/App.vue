<template>
  <div class="max-w-[1500px] mx-auto scroll-smooth">
    <RouterView />
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(34, 34, 34, 0.24);
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}
</style>
