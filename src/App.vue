<template>
  <div id="app">
    <router-view/>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import BottomBar from '@/components/bottomBar';

  export default {
    name: 'App',
    components: {
      BottomBar
    }
  };
</script>
