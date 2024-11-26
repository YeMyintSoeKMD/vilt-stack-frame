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
                    Create
                </li>
            </ol>
        </section>

        <!-- Form  -->
        <section class="mb-5">
            <form @submit.prevent="formAction">
                <div class="mb-3">
                    <label
                        for="input-label"
                        class="block text-sm font-medium mb-2 dark:text-white"
                        >Name</label
                    >
                    <input
                        v-model="form.name"
                        type="text"
                        id="input-label"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Enter your name"
                    />
                    <p v-if="form.errors.name" class="text-sm text-red-400 mt-2">
                        {{form.errors.name}}
                    </p>
                </div>
                <div class="mb-3">
                    <label
                        for="input-label"
                        class="block text-sm font-medium mb-2 dark:text-white"
                        >Email</label
                    >
                    <input
                        v-model="form.email"
                        type="email"
                        id="input-label"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Enter your email"
                    />
                    <div v-if="form.errors.email" class="text-sm text-red-400 mt-2">
                        {{form.errors.email}}
                    </div>
                </div>
                <div class="mb-3">
                    <label
                        for="input-label"
                        class="block text-sm font-medium mb-2 dark:text-white"
                        >Phone</label
                    >
                    <input
                        v-model="form.phone"
                        type="text"
                        id="input-label"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Enter your phone"
                    />
                    <p v-if="form.errors.phone" class="text-sm text-red-400 mt-2">
                        {{form.errors.phone}}
                    </p>
                </div>
                <div class="mb-4">
                        <div class="flex items-center mb-2">
                            <label for="password" class="input-label me-2">Password</label>
                              <input v-if="editUser" type="checkbox" v-model="isPasswordInputShow" class="shrink-0 mt-0.5 border-gray-200 rounded disabled:pointer-events-none" id="hs-default-checkbox">                          
                        </div>
                        <template v-if="isPasswordInputShow">
                           <div class="min-w-full space-y-3">
                                <input 
                                v-model="form.password"
                                type="text"
                                id="input-label"
                                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                placeholder="Enter your phone">
                            </div>
                            <p v-if="form.errors.password" class="text-sm text-red-400 mt-2">{{ form.errors.password
                                }}</p>
                        </template>
                    </div>
                <div class="mb-3 flex gap-2">
                    <button
                        :disabled="form.processing"
                        type="submit"
                        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <CheckIcon class="shrink-0 size-5" />
                        <span>Save</span>
                    </button>
                    <button
                        v-if="!editUser" @click="reset"
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

</script>


<script setup>
import { post, update } from '@/Composables/httpMethods.js'
import { Link,formReset, ref, useForm } from '@/Composables/modules';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import SecondaryButton2 from '@/Components/SecondaryButton2.vue';

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

const isPasswordInputShow = ref(true)
const props = defineProps({
    editUser: Object,
})

console.log(props.editUser)
if (props.editUser) {
    isPasswordInputShow.value = false
}

// form data
const form = useForm({
    name: props.editUser ? props.editUser.name : null,
    email: props.editUser ? props.editUser.email : null,
    password: '',
    phone: props.editUser ? props.editUser.phone : '',
})
// store or update
const formAction = () => {
    if (!props.editUser) {
        post(
            form,
            route('users.store'),
            'User'
        )
    } else {
        update(
            form,
            route('users.update', props.editUser.id),
           'User'
        )
    }
}
const reset = () => {
    formReset(form)
}
</script>

<style lang="scss" scoped></style>