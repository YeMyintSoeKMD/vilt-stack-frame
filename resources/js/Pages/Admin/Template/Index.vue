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
                    List
                </li>
            </ol>
        </section>

        <!-- Buttons & Filters  -->
        <section class="mb-5">
            <div
                class="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
                <div class="basis-1/2 flex gap-2">
                    <a
                        href="/admin/create-edit-template"
                        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <PlusIcon class="w-5" />
                        <span>Add New</span>
                    </a>
                    <button
                        type="button"
                        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <AdjustmentsHorizontalIcon class="w-5" />
                        <span>Filters</span>
                    </button>
                    <button
                        type="button"
                        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <AdjustmentsHorizontalIcon class="w-5" />
                        <span>Advanced Filters</span>
                    </button>
                </div>
                <div class="basis-1/2">
                    <div class="relative">
                        <input
                            type="text"
                            id="hs-leading-icon"
                            name="hs-leading-icon"
                            class="py-3 px-4 ps-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Search"
                        />
                        <div
                            class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4"
                        >
                            <MagnifyingGlassIcon class="w-5" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Table  -->
        <section class="mb-5">
            <div class="flex flex-col">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div
                            class="rounded-lg overflow-hidden dark:border-neutral-700"
                        >
                            <table
                                class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700"
                            >
                                <thead class="bg-gray-50 dark:bg-neutral-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                                        >
                                            Age
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                                        >
                                            Address
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    class="divide-y divide-gray-200 dark:divide-neutral-700"
                                >
                                    <tr>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                                        >
                                            Simple
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                                        >
                                            45
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                                        >
                                            New York No. 1 Lake Park
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
                                        >
                                            <div class="flex gap-1 justify-end">
                                                <button
                                                    type="button"
                                                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                                                >
                                                    <PencilSquareIcon
                                                        class="shrink-0 size-4"
                                                    />
                                                </button>
                                                <button
                                                    type="button"
                                                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20"
                                                >
                                                    <TrashIcon class="size-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                                        >
                                            Simple
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                                        >
                                            45
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                                        >
                                            New York No. 1 Lake Park
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
                                        >
                                            <div class="flex gap-1 justify-end">
                                                <button
                                                    type="button"
                                                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                                                >
                                                    <PencilSquareIcon
                                                        class="shrink-0 size-4"
                                                    />
                                                </button>
                                                <button
                                                    type="button"
                                                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20"
                                                >
                                                    <TrashIcon class="size-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                                        >
                                            Simple
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                                        >
                                            45
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                                        >
                                            New York No. 1 Lake Park
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
                                        >
                                            <div class="flex gap-1 justify-end">
                                                <button
                                                    type="button"
                                                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                                                >
                                                    <PencilSquareIcon
                                                        class="shrink-0 size-4"
                                                    />
                                                </button>
                                                <button
                                                    type="button"
                                                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20"
                                                >
                                                    <TrashIcon class="size-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                                        >
                                            Simple
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                                        >
                                            45
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                                        >
                                            New York No. 1 Lake Park
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
                                        >
                                            <div class="flex gap-1 justify-end">
                                                <button
                                                    type="button"
                                                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                                                >
                                                    <PencilSquareIcon
                                                        class="shrink-0 size-4"
                                                    />
                                                </button>
                                                <button
                                                    type="button"
                                                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20"
                                                >
                                                    <TrashIcon class="size-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                                        >
                                            Simple
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                                        >
                                            45
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                                        >
                                            New York No. 1 Lake Park
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
                                        >
                                            <div class="flex gap-1 justify-end">
                                                <button
                                                    type="button"
                                                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                                                >
                                                    <PencilSquareIcon
                                                        class="shrink-0 size-4"
                                                    />
                                                </button>
                                                <button
                                                    type="button"
                                                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20"
                                                >
                                                    <TrashIcon class="size-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                                        >
                                            Jim Green f
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                                        >
                                            27
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                                        >
                                            <div class="flex flex-col gap-y-2">
                                                <div
                                                    class="inline-flex flex-wrap gap-2"
                                                >
                                                    <div>
                                                        <span
                                                            class="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-md dark:bg-teal-500/10 dark:text-teal-500"
                                                        >
                                                            <CheckCircleIcon
                                                                class="shrink-0 size-3"
                                                            />
                                                            Connected
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <span
                                                            class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-md dark:bg-red-500/10 dark:text-red-500"
                                                        >
                                                            <ExclamationTriangleIcon
                                                                class="shrink-0 size-3"
                                                            />
                                                            Attention
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <span
                                                            class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-md dark:bg-blue-500/10 dark:text-blue-500"
                                                        >
                                                            <ArrowPathIcon
                                                                class="shrink-0 size-3"
                                                            />
                                                            Loading
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <span
                                                            class="py-1 px-2 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-md dark:bg-neutral-500/20 dark:text-neutral-400"
                                                        >
                                                            <SparklesIcon
                                                                class="shrink-0 size-3"
                                                            />
                                                            Normal
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
                                        >
                                            <div
                                                class="hs-dropdown relative inline-flex"
                                            >
                                                <button
                                                    id="hs-dropdown-with-icons"
                                                    type="button"
                                                    class="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                                    aria-haspopup="menu"
                                                    aria-expanded="false"
                                                    aria-label="Dropdown"
                                                >
                                                    <EllipsisVerticalIcon
                                                        class="shrink-0 size-5"
                                                    />
                                                </button>

                                                <div
                                                    class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
                                                    role="menu"
                                                    aria-orientation="vertical"
                                                    aria-labelledby="hs-dropdown-with-icons"
                                                >
                                                    <div
                                                        class="p-1 space-y-0.5"
                                                    >
                                                        <a
                                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                                                            href="#"
                                                        >
                                                            <TrashIcon
                                                                class="shrink-0 size-4"
                                                            />
                                                            <span>Delete</span>
                                                        </a>
                                                        <a
                                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                                                            href="#"
                                                        >
                                                            <PencilSquareIcon
                                                                class="shrink-0 size-4"
                                                            />
                                                            Purchases
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pagination -->
        <section class="border-t py-3">
            <nav class="flex items-center gap-x-1" aria-label="Pagination">
                <button
                    type="button"
                    class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                    aria-label="Previous"
                    disabled=""
                >
                    <ChevronLeftIcon class="shrink-0 size-3.5" />
                    <span>Previous</span>
                </button>
                <div class="flex items-center gap-x-1">
                    <button
                        type="button"
                        class="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500"
                        aria-current="page"
                    >
                        1
                    </button>
                    <button
                        type="button"
                        class="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                    >
                        2
                    </button>
                    <button
                        type="button"
                        class="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                    >
                        3
                    </button>
                </div>
                <button
                    type="button"
                    class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                    aria-label="Next"
                >
                    <span>Next</span>
                    <ChevronRightIcon class="shrink-0 size-3.5" />
                </button>
            </nav>
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
} from "@heroicons/vue/24/outline";
</script>
