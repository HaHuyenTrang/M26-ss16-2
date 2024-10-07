<template>
  <div>
    <h1>Admin index page</h1>
    <nav>
        <router-link active-class="active" to="/admin">Dashoard</router-link>
        <router-link active-class="active" to="/admin/manager-user">Manager User</router-link>
        <router-link active-class="active" to="/admin/manager-Product">Manager Product</router-link>
    </nav>
  </div>
</template>

<script  setup>

</script>

<style>
.active{
    background-color: red;
    color: white;
}
</style>