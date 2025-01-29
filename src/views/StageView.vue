<script setup>
import { 
	ref, 
	reactive, 
	computed, 
	watch,
	onMounted 
} from 'vue';
import { useRoute } from 'vue-router';
import stagesObj    from '@/assets/stages.js'
import Coins        from '@/components/Coins.vue';
import Name         from '@/components/Name.vue';
import HelpIcon     from '@/components/HelpIcon.vue';
import Keyboard     from '@/components/Keyboard.vue';
import Win          from '@/components/Win.vue';

const route    = useRoute();
const stage    = computed(() => stagesObj[parseInt(route.params.id) - 1]);
const keys     = reactive([
    {
        index: 0,
        used: false,
        value: "ا"
    },
    {
        index: 1,
        used: false,
        value: "ب"
    },
    {
        index: 2,
        used: false,
        value: "پ"
    },
    {
        index: 3,
        used: false,
        value: "ت"
    },
    {
        index: 4,
        used: false,
        value: "ث"
    },
    {
        index: 5,
        used: false,
        value: "ج"
    },
    {
        index: 6,
        used: false,
        value: "چ"
    },
    {
        index: 7,
        used: false,
        value: "ح"
    },
    {
        index: 8,
        used: false,
        value: "خ"
    },
    {
        index: 9,
        used: false,
        value: "د"
    },
    {
        index: 10,
        used: false,
        value: "ذ"
    },
    {
        index: 11,
        used: false,
        value: "ر"
    },
    {
        index: 12,
        used: false,
        value: "ز"
    },
    {
        index: 13,
        used: false,
        value: "ژ"
    },
    {
        index: 14,
        used: false,
        value: "س"
    },
    {
        index: 15,
        used: false,
        value: "ش"
    },
    {
        index: 16,
        used: false,
        value: "ص"
    },
    {
        index: 17,
        used: false,
        value: "ض"
    },
    {
        index: 18,
        used: false,
        value: "ط"
    },
    {
        index: 19,
        used: false,
        value: "ظ"
    },
    {
        index: 20,
        used: false,
        value: "ع"
    },
    {
        index: 21,
        used: false,
        value: "غ"
    },
    {
        index: 22,
        used: false,
        value: "ف"
    },
    {
        index: 23,
        used: false,
        value: "ق"
    },
    {
        index: 24,
        used: false,
        value: "ک"
    },
    {
        index: 25,
        used: false,
        value: "گ"
    },
    {
        index: 26,
        used: false,
        value: "ل"
    }
]);
const entered  = ref([]);
const helpShow = ref(false);
const winShow  = ref(false);

watch(
	() => route.params.id, 
	id => {
		keys.map(key => key.used = false);
		entered.value  = [];
		helpShow.value = false;
		winShow.value  = false;
	} 
);

function setKey(key) {
	if (entered.value.some(key => key.value === ' ')) 
		entered.value[entered.value.findIndex(key => key.value === ' ')] = key;
	else 
		entered.value.push(key);

	keys[key.index].used = true;

	checkAnswer();
}

function deleteKey(index) {
	if (entered.value[index].index && entered.value[index].index !== 27) 
		keys[entered.value[index].index].used = false;

	entered.value[index] = {
		index: 27,
		used:  true,
		value: ' ',
	}
}

function checkAnswer() {
	if (entered.value.map(key => key.value).join('') === stage.value.answer) 
		winShow.value = true;
}
</script>

<template>
	<header class="px-3 py-6 flex items-center justify-between" dir="ltr">
		<Coins :count="100" />
		<Name />
		<HelpIcon @click="helpShow = true" />
	</header>
	<main class="mx-3 my-8">
		<img 
			:src="stage.img" 
			alt="image" 
			class="w-full rounded-2xl border-2 border-white/50"
			loading="lazy"
		>
		<div class="flex flex-wrap gap-1 justify-center mt-8">
			<span 
				v-for="char, index in stage.answer" 
				class="w-7 h-7 rounded-lg flex items-center justify-center transition"
				:class="char === ' ' ? 'bg-transparent' : 'bg-violet-100'"
				@click="() => deleteKey(index)"
			>
				{{ entered[index]?.value }}
			</span>
		</div>
	</main>
	<footer class="mx-3 pt-4">
		<Keyboard 
			:keys="keys" 
			:disabled="entered.length === stage.answer.length && !entered.some(key => key.value === ' ')"
			@click="setKey"
		/>
	</footer>

	<!-- <Help v-if="helpShow" /> -->
	<Win 
		v-if="winShow"
		:stage="stage" 
	/>
</template>
