<template>
  <div>
    <h1>App page</h1>
    <router-view v-slot="{Component}">
    <Suspense>
      <template #default>
      <!-- hiển thị các component sử dụng cơ chế lazy -->
       <div>
        <component :is="Component"/>
       </div>
      </template>
      <!-- sử dụng hiệu ứng loading -->
       <template #fallback>
       <div>Loading...</div>
       </template>
    </Suspense>
  </router-view>
  <!-- <router-components></router-components> -->
  </div>
</template>

<script  setup>

</script>

<style>

</style>