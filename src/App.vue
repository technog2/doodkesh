<script setup>
import { ref, onMounted } from 'vue';
import stagesObj    from './assets/stages.js'
import Coins        from './components/Coins.vue';
import Name         from './components/Name.vue';
import SettingsIcon from './components/SettingsIcon.vue';
import Stage        from './components/Stage.vue';
import Button       from './components/Button.vue';

const settingsShow = ref(false);
const page         = ref(1);
const stages       = ref([]);

function sortStages() {
	stagesObj.map((o, i) => {
		const p = Math.floor(i * (1 / 16));
		if (!Array.isArray(stages.value[p])) stages.value[p] = [];
		stages.value[p].push(o);
	});
}

onMounted(sortStages);
</script>

<template>
	<div class="fixed inset-0 bg-violet-900/50 -z-10"></div>

	<header class="px-3 py-6 flex items-center justify-between" dir="ltr">
		<Coins :count="100" />
		<Name />
		<SettingsIcon @click="settingsShow = true" />
	</header>
	<main class="mx-2 my-8" dir="ltr">
		<div class="bg-violet-100/50 p-2 gap-2 rounded-2xl grid grid-cols-4 grid-rows-4">
			<Stage 
				v-for="stage in stages[page - 1]" 
				:stage="stage" 
			/>
		</div>
		<div class="mt-4 flex flex-wrap items-center justify-center gap-1.5">
			<Button @click="page--" :current="false" class="mr-1">-</Button>
			<Button 
				v-for="stage, index in stages" 
				@click="page = index + 1"
				:current="page === index + 1"
			>{{ index + 1 }}</Button>
			<Button @click="page++" :current="false" class="ml-1">+</Button>
		</div>
	</main>
	<footer class="text-white text-center p-2">still now nothing</footer>

	<!-- <Settings v-if="settingsShow" /> -->
</template>
