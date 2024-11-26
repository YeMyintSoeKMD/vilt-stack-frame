<template>
    <main class="xl:px-4 2xl:px-10">
        <!-- Breadcrumb  -->
        <section class="mb-5">
            <ol class="flex items-center whitespace-nowrap">
                <li class="inline-flex items-center">
                    <a
                        class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                        href="/admin/index-template"
                    >
                        User
                    </a>
                    <ChevronRightIcon
                        class="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
                    />
                </li>
                <li
                    class="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
                    aria-current="page"
                >
                    Create
                </li>
            </ol>
        </section>

        <!-- Form  -->
        <section class="mb-5">
            <form action="">
                <div class="mb-3">
                    <label
                        for="input-label"
                        class="block text-sm font-medium mb-2 dark:text-white"
                        >Name</label
                    >
                    <input
                        type="text"
                        id="input-label"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Enter your name"
                    />
                    <p class="text-sm text-red-400 mt-2 sr-only">
                        Please enter a valid name.
                    </p>
                </div>
                <div class="mb-3">
                    <label
                        for="input-label"
                        class="block text-sm font-medium mb-2 dark:text-white"
                        >Email</label
                    >
                    <input
                        type="text"
                        id="input-label"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Enter your email"
                    />
                    <p class="text-sm text-red-400 mt-2 sr-only">
                        Please enter a valid email address.
                    </p>
                </div>
                <div class="mb-3">
                    <label
                        for="input-label"
                        class="block text-sm font-medium mb-2 dark:text-white"
                        >City</label
                    >
                    <select
                        class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    >
                        <option selected="">Select a city</option>
                        <option>Yangon</option>
                        <option>Mandalay</option>
                        <option>Pyi Oo Lwin</option>
                    </select>
                    <p class="text-sm text-red-400 mt-2 sr-only">
                        Please enter a valid email address.
                    </p>
                </div>
                <div class="mb-3">
                    <label
                        for="textarea-label"
                        class="block text-sm font-medium mb-2 dark:text-white"
                        >Address</label
                    >
                    <textarea
                        id="textarea-label"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        rows="3"
                        placeholder="Please enter your address"
                    ></textarea>
                    <p class="text-sm text-red-400 mt-2 sr-only">
                        Please enter a valid address.
                    </p>
                </div>
                <div class="mb-3 flex gap-2">
                    <button
                        type="button"
                        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <CheckIcon class="shrink-0 size-5" />
                        <span>Save</span>
                    </button>
                    <button
                        type="button"
                        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:focus:bg-white/20 dark:focus:text-white"
                    >
                        <XMarkIcon class="shrink-0 size-5" />
                        <span>Reset</span>
                    </button>
                </div>
            </form>
        </section>
    </main>
</template>

<script setup>
import {
    PlusIcon,
    AdjustmentsHorizontalIcon,
    MagnifyingGlassIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
    PencilSquareIcon,
    TrashIcon,
    EllipsisVerticalIcon,
    CheckCircleIcon,
    ExclamationTriangleIcon,
    ArrowPathIcon,
    SparklesIcon,
    CheckIcon,
    XMarkIcon,
} from "@heroicons/vue/24/outline";
</script>
