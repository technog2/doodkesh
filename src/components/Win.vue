<script setup>
defineProps({
	stage: Object,
});
</script>

<template>
	<div class="fixed inset-0 flex flex-col items-center justify-center gap-8 p-4 bg-violet-700/95 backdrop-blur text-white">
		<span class="text-4xl mb-16">ایول!</span> 
		<!-- <span class="text-violet-100">{{ stage.answer }}</span> -->
		
		<div class="flex items-center justify-center gap-8">
			<RouterLink :to="(parseInt(stage.id) + 1).toString()" class="">
				<svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2.70911 17.0202L4.44911 13.5402C4.92911 12.5702 4.92911 11.4402 4.44911 10.4702L2.70911 6.98022C1.21911 4.00022 4.42911 0.850218 7.37911 2.41022L8.91911 3.23022C9.13911 3.34022 9.30911 3.52022 9.39911 3.74022L15.0891 16.3902C15.3191 16.9102 15.1091 17.5202 14.6091 17.7802L7.36911 21.5902C4.42911 23.1502 1.21911 20.0002 2.70911 17.0202Z" fill="#ffffff"/>
					<path opacity="0.4" d="M16.3093 15.6L12.5793 7.31996C12.1593 6.38996 13.1593 5.44996 14.0593 5.92996L19.8293 8.96996C22.2793 10.26 22.2793 13.76 19.8293 15.05L17.7893 16.12C17.2393 16.4 16.5693 16.17 16.3093 15.6Z" fill="#ffffff"/>
				</svg>
			</RouterLink>
			<RouterLink to="/" class="">
				<svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path opacity="0.4" d="M10.0693 2.8201L3.13929 8.37009C2.35929 8.99009 1.85929 10.3001 2.02929 11.2801L3.35929 19.2401C3.59929 20.6601 4.95928 21.8101 6.39928 21.8101H17.5993C19.0293 21.8101 20.3993 20.6501 20.6393 19.2401L21.9693 11.2801C22.1293 10.3001 21.6293 8.99009 20.8593 8.37009L13.9293 2.83008C12.8593 1.97008 11.1293 1.9701 10.0693 2.8201Z" fill="#ffffff"/>
					<path d="M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z" fill="#ffffff"/>
				</svg>
			</RouterLink>
		</div>
	</div>
</template>
