<script setup>
defineProps({
	keys: Array,
	disabled: Boolean,
});

const emit = defineEmits(['click']);
</script>

<template>
	<div class="flex flex-wrap gap-1 justify-center mt-8">
		<button 
			v-for="key in keys" 
			class="w-7 h-7 rounded-lg bg-violet-200 flex items-center justify-center transition"
			:class="{ 'opacity-0': key.used }"
			:disabled="disabled || key.used"
			@click="emit('click', key)"
		>{{ key.value }}</button>
	</div>
</template>
