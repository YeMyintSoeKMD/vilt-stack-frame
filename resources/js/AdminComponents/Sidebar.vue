<template>
    <div>
        <!-- sidebar for mobile  -->
        <TransitionRoot as="template" :show="isSidebarOpen">
            <Dialog
                as="div"
                class="relative z-50 lg:hidden"
                @close="$emit('closeSidebar')"
            >
                <TransitionChild
                    as="template"
                    enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="fixed inset-0 bg-gray-900/80" />
                </TransitionChild>

                <div class="fixed inset-0 flex">
                    <TransitionChild
                        as="template"
                        enter="transition ease-in-out duration-300 transform"
                        enter-from="-translate-x-full"
                        enter-to="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leave-from="translate-x-0"
                        leave-to="-translate-x-full"
                    >
                        <DialogPanel
                            class="relative mr-16 flex w-full max-w-xs flex-1"
                        >
                            <TransitionChild
                                as="template"
                                enter="ease-in-out duration-300"
                                enter-from="opacity-0"
                                enter-to="opacity-100"
                                leave="ease-in-out duration-300"
                                leave-from="opacity-100"
                                leave-to="opacity-0"
                            >
                                <div
                                    class="absolute left-full top-0 flex w-16 justify-center pt-5"
                                >
                                    <button
                                        type="button"
                                        class="-m-2.5 p-2.5"
                                        @click="$emit('closeSidebar')"
                                    >
                                        <span class="sr-only"
                                            >Close sidebar</span
                                        >
                                        <XMarkIcon
                                            class="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </TransitionChild>
                            <!-- Sidebar component, swap this element with another sidebar if you like -->
                            <div
                                class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4"
                            >
                                <div class="flex h-16 shrink-0 items-center">
                                    <div class=" bg-red-600 p-2 rounded-lg">
                                        <img
                                            class="h-8 w-auto "
                                            src="/storage/logo/short-logo.png"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <!-- logo -->
                                </div>
                                <nav class="flex flex-1 flex-col">
                                    <ul
                                        role="list"
                                        class="flex flex-1 flex-col gap-y-7"
                                    >
                                        <li id="dashboard-menu">
                                            <ul
                                                role="list"
                                                class="-mx-2 mt-2 space-y-1"
                                            >
                                                <li
                                                    v-for="item in navigation"
                                                    :key="item.name"
                                                >
                                                    <Link
                                                        :href="
                                                            $route(
                                                                `${item.href}`
                                                            )
                                                        "
                                                        :class="[
                                                            $page.component.startsWith(
                                                                item.component
                                                            )
                                                                ? 'bg-gray-50 text-indigo-600'
                                                                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                                        ]"
                                                    >
                                                        <component
                                                            :is="item.icon"
                                                            :class="[
                                                                $page.component.startsWith(
                                                                    item.component
                                                                )
                                                                    ? 'text-indigo-600'
                                                                    : 'text-gray-400 group-hover:text-indigo-600',
                                                                'h-6 w-6 shrink-0',
                                                            ]"
                                                            aria-hidden="true"
                                                        />
                                                        {{ item.name }}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="setup-menu">
                                            <div
                                                class="text-xs font-semibold leading-6 text-gray-400"
                                            >
                                                Setup Management
                                            </div>
                                            <ul
                                                role="list"
                                                class="-mx-2 space-y-1"
                                            >
                                                <template
                                                    v-for="item in adminNavigation"
                                                    :key="item.name"
                                                >
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            :class="[
                                                                $page.component.startsWith(
                                                                    item.component
                                                                )
                                                                    ? 'bg-gray-50 text-indigo-600'
                                                                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                                            ]"
                                                        >
                                                            <component
                                                                :is="item.icon"
                                                                :class="[
                                                                    $page.component.startsWith(
                                                                        item.component
                                                                    )
                                                                        ? 'text-indigo-600'
                                                                        : 'text-gray-400 group-hover:text-indigo-600',
                                                                    'h-6 w-6 shrink-0',
                                                                ]"
                                                                aria-hidden="true"
                                                            />
                                                            {{ item.name }}
                                                        </Link>
                                                    </li>
                                                </template>
                                            </ul>
                                        </li>
                                        <li id="setup-menu">
                                            <div
                                                class="text-xs font-semibold leading-6 text-gray-400"
                                            >
                                                Setup Management
                                            </div>
                                            <ul
                                                role="list"
                                                class="-mx-2 space-y-1"
                                            >
                                                <template
                                                    v-for="item in reports"
                                                    :key="item.name"
                                                >
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            :class="[
                                                                $page.component.startsWith(
                                                                    item.component
                                                                )
                                                                    ? 'bg-gray-50 text-indigo-600'
                                                                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                                            ]"
                                                        >
                                                            <component
                                                                :is="item.icon"
                                                                :class="[
                                                                    $page.component.startsWith(
                                                                        item.component
                                                                    )
                                                                        ? 'text-indigo-600'
                                                                        : 'text-gray-400 group-hover:text-indigo-600',
                                                                    'h-6 w-6 shrink-0',
                                                                ]"
                                                                aria-hidden="true"
                                                            />
                                                            {{ item.name }}
                                                        </Link>
                                                    </li>
                                                </template>
                                            </ul>
                                        </li>
                                        <li class="mt-auto">
                                            <Link
                                                href="#"
                                                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                                            >
                                                <Cog6ToothIcon
                                                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                                    aria-hidden="true"
                                                />
                                                Settings
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Static sidebar for desktop -->
        <div
            class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
        >
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div
                class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4"
            >
                <div class="flex h-16 shrink-0 items-center">
                    <div class=" bg-red-600 p-2 rounded-lg">
                        <img
                            class="h-8 w-auto "
                            src="/storage/logo/short-logo.png"
                            alt="Your Company"
                        />
                    </div>
                </div>
                <nav class="flex flex-1 flex-col">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                        <li id="dashboard-menu">
                            <ul role="list" class="-mx-2 mt-2 space-y-1">
                                <li v-for="item in navigation" :key="item.name">
                                    <Link
                                        :href="$route(`${item.href}`)"
                                        :class="[
                                            $page.component.startsWith(
                                                item.component
                                            )
                                                ? 'bg-gray-50 text-indigo-600'
                                                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                        ]"
                                    >
                                        <component
                                            :is="item.icon"
                                            :class="[
                                                $page.component.startsWith(
                                                    item.component
                                                )
                                                    ? 'text-indigo-600'
                                                    : 'text-gray-400 group-hover:text-indigo-600',
                                                'h-6 w-6 shrink-0',
                                            ]"
                                            aria-hidden="true"
                                        />
                                        {{ item.name }}
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li id="setup-menu">
                            <div
                                class="text-xs font-semibold leading-6 text-gray-400"
                            >
                                Setup Management
                            </div>
                            <ul>
                                <template
                                    v-for="item in adminNavigation"
                                    :key="item.name"
                                >
                                    <li>
                                        <Link
                                            :href="$route(item.href)"
                                            :class="[
                                                $page.component.startsWith(
                                                    item.component
                                                )
                                                    ? 'bg-gray-50 text-indigo-600'
                                                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                            ]"
                                        >
                                            <component
                                                :is="item.icon"
                                                :class="[
                                                    $page.component.startsWith(
                                                        item.component
                                                    )
                                                        ? 'text-indigo-600'
                                                        : 'text-gray-400 group-hover:text-indigo-600',
                                                    'h-6 w-6 shrink-0',
                                                ]"
                                                aria-hidden="true"
                                            />
                                            {{ item.name }}
                                        </Link>
                                    </li>
                                </template>
                            </ul>
                        </li>
                        <li id="setup-menu">
                            <div
                                class="text-xs font-semibold leading-6 text-gray-400"
                            >
                                Report Management
                            </div>
                            <ul>
                                <template
                                    v-for="item in reports"
                                    :key="item.name"
                                >
                                    <li>
                                        <Link
                                            href="#"
                                            :class="[
                                                $page.component.startsWith(
                                                    item.component
                                                )
                                                    ? 'bg-gray-50 text-indigo-600'
                                                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                            ]"
                                        >
                                            <component
                                                :is="item.icon"
                                                :class="[
                                                    $page.component.startsWith(
                                                        item.component
                                                    )
                                                        ? 'text-indigo-600'
                                                        : 'text-gray-400 group-hover:text-indigo-600',
                                                    'h-6 w-6 shrink-0',
                                                ]"
                                                aria-hidden="true"
                                            />
                                            {{ item.name }}
                                        </Link>
                                    </li>
                                </template>
                            </ul>
                        </li>
                        <li id="setup-menu" class="mt-auto">
                            <div
                                class="text-xs font-semibold leading-6 text-gray-400"
                            >
                                Settings
                            </div>
                            <ul role="list" class="-mx-2 space-y-1">
                                <template
                                    v-for="setting in settings"
                                    :key="setting.name"
                                >
                                    <li>
                                        <Link
                                            href="#"
                                            :class="[
                                                $page.component.startsWith(
                                                    setting.component
                                                )
                                                    ? 'bg-gray-50 text-indigo-600'
                                                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                            ]"
                                        >
                                            <component
                                                :is="setting.icon"
                                                :class="[
                                                    $page.component.startsWith(
                                                        setting.component
                                                    )
                                                        ? 'text-indigo-600'
                                                        : 'text-gray-400 group-hover:text-indigo-600',
                                                    'h-6 w-6 shrink-0',
                                                ]"
                                                aria-hidden="true"
                                            />
                                            {{ setting.name }}
                                        </Link>
                                    </li>
                                </template>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
// import { Link } from '@inertiajs/vue3';
import { Link, computed } from "@/Composables/modules";
import { usePage } from "@inertiajs/vue3";
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import {
    ChevronDoubleUpIcon,
    ClipboardDocumentIcon,
    ClockIcon,
    Cog6ToothIcon,
    CurrencyDollarIcon,
    DocumentCurrencyPoundIcon,
    ExclamationTriangleIcon,
    HomeIcon,
    ListBulletIcon,
    QueueListIcon,
    TableCellsIcon,
    TagIcon,
    UserGroupIcon,
    UsersIcon,
    XMarkIcon,
} from "@heroicons/vue/24/outline";

const page = usePage();

const navigation = [
    {
        name: "Dashboard",
        href: "admin.dashboard",
        icon: HomeIcon,
        component: "Admin/Index",
    },
];

const adminNavigation = [
    {
        name: "Users",
        href: "users.index",
        icon: UserGroupIcon,
        component: "Admin/User/Index",
        // permission:'dashboard'
    },
    {
        name: "Roles",
        href: "users.index",
        icon: ChevronDoubleUpIcon,
        component: "Admin/User/Index",
        // permission:'dashboard'
    },
    {
        name: "Permissions",
        href: "users.index",
        icon: Cog6ToothIcon,
        component: "Admin/User/Index",
        // permission:'dashboard'
    },
];
const reports = [
    {
        name: "Sales",
        href: "#",
        icon: DocumentCurrencyPoundIcon,
        component: "Admin/Report/Sale",
        permission: "report_sales",
    },
    {
        name: "Purchases",
        href: "#",
        icon: TagIcon,
        component: "Admin/Report/Sale",
        permission: "report_sales",
    },
];

const settings = [
    {
        name: "Settings",
        href: "#",
        icon: Cog6ToothIcon,
        component: "Admin/Setting",
        permission: "settings",
    },
];

defineProps(["isSidebarOpen"]);
</script>

<style lang="scss" scoped></style>
