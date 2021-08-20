<template>
  <div id="app">
    <p>Clicked: {{ $store.state.count }} times.</p>
    <button @click="increment" class="increment">+1</button>
    <button @click="decrement" class="decrement">-1</button>
  </div>
</template>
 
<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions([
    'increment',
    'decrement',
  ]),
}
</script>
