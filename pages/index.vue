<script setup lang="ts">
import { navigateTo } from '#app'
import { onMounted } from 'vue'

onMounted(() => navigateTo('/editor', { replace: true }))
</script>
