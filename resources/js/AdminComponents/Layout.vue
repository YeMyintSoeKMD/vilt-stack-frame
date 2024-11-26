<template>
    <div>
        <!-- sidebar  -->
        <Sidebar :isSidebarOpen="isSidebarOpen" @closeSidebar="isSidebarOpen = false" />

        <div class="lg:pl-72">
            <!-- navbar  -->
            <Navbar @openSidebar="isSidebarOpen = true" />

            <main class="py-10">
                <div class="px-4 sm:px-6 lg:px-8">
                    <!-- Your content -->
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/AdminComponents/Sidebar.vue'
import Navbar from '@/AdminComponents/Navbar.vue'
import { ref } from '@/Composables/modules.js';

const isSidebarOpen = ref(false)
</script>