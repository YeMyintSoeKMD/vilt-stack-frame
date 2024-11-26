<script setup>
import Pagination from "@/AdminComponents/Pagination.vue";
import SecondaryButton2 from "@/Components/SecondaryButton2.vue";
import { del } from "@/Composables/httpMethods";
import { Link, ref, search, useForm } from "@/Composables/modules.js";
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

const props = defineProps({
    users: Object,
});
// search users
const q = ref("");
search("q", q, route("users.index"));

const role = ref("");
search("role", role, route("users.index"));

// delete a user
const deleteUser = (id) => {
    del(useForm({}), route("users.destroy", id));
};
</script>

<template>
    <main class="xl:px-4 2xl:px-10">
        <!-- Breadcrumb  -->
        <section class="mb-5">
            <ol class="flex items-center whitespace-nowrap">
                <li class="inline-flex items-center">
                    <Link
                        class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                        href="/admin/users"
                    >
                        User
                    </Link>
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
                    <Link
                        href="/admin/users/create"
                        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <PlusIcon class="w-5" />
                        <span>Add New</span>
                    </Link>
                </div>
                <div class="basis-1/2">
                    <div class="relative">
                        <input
                            v-model="q"
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
                                            No
                                        </th>
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
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                                        >
                                            Phone
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
                                    <tr
                                        v-for="(user, index) in users.data"
                                        :key="user.id"
                                    >
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                                        >
                                            {{ index + 1 }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                                        >
                                            {{ user.name }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                                        >
                                            {{ user.email }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                                        >
                                            {{ user.phone }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
                                        >
                                            <form
                                                form
                                                @submit.prevent="
                                                    deleteUser(user.id)
                                                "
                                                class="flex gap-1 justify-end"
                                            >
                                                <Link
                                                    :href="
                                                        $route(
                                                            'users.edit',
                                                            user.id
                                                        )
                                                    "
                                                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                                                >
                                                    <PencilSquareIcon
                                                        class="shrink-0 size-4"
                                                    />
                                                </Link>
                                                <button
                                                    preserve-scroll
                                                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20"
                                                >
                                                    <TrashIcon class="size-4" />
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pagination  -->
        <section class="border-t p-3 overflow-x-auto">
            <Pagination :meta="users.meta" />
        </section>
    </main>
</template>
