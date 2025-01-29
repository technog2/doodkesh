<script setup>
defineProps({
	current: Boolean
});

const emit = defineEmits(['click']);
</script>

<template>
	<button 
		@click="emit('click')" 
		class="w-8 h-8 px-2.5 py-1 rounded-2xl shadow shadow-white/25 disabled:opacity-50" 
		:class="current ? 'bg-violet-500/75 text-white' : 'bg-violet-300/75'"
	>
		<slot />
	</button>
</template>
