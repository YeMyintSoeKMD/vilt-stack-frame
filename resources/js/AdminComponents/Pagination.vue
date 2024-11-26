<template>
    <div class="flex items-center gap-x-1">
        <template v-for="link in meta.links" :key="link.label">
            <Link
                :href="link.url ?? ''"
                v-html="link.label"
                preserve-scroll
                type="button"
                :class="{
                    'bg-gray-200 text-indigo-600': link.active,
                    '!text-gray-700': !link.url,
                }"
                class="min-h-[38px] min-w-[38px] flex justify-center items-center hover:bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500"
                aria-current="page"
            >
            </Link>
        </template>
    </div>
</template>

<script setup>
import { Link } from "@/Composables/modules.js";
defineProps({
    meta: Object,
});
</script>

<style scoped></style>

<!-- border-indigo-500 text-indigo-600 -->
