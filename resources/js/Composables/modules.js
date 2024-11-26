import { ref, reactive, computed, watch, onMounted, onUnmounted, watchEffect } from "vue";
import { Link, useForm, usePage, Head } from "@inertiajs/vue3";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import debounce from "lodash.debounce";
import Layout from '@/AdminComponents/Layout.vue'
import {
    ArrowLeftIcon,
    CheckIcon,
    XMarkIcon,
    TrashIcon,
    PencilSquareIcon,
    BookOpenIcon,
} from "@heroicons/vue/24/outline";

// custom methods
import { get } from "./httpMethods";
const search = (key, value, url) => {
    let searchValue = value;
    watch(
        searchValue,
        debounce(() => {
            get(useForm({}), `${url}?${key}=${value.value}`);
        }, 800)
    );
};

const searchTwoKey = (key1, value1, key2, value2, url) => {
    const searchValue1 = ref(value1);
    const searchValue2 = ref(value2);

    // Watch both values
    watch([searchValue1, searchValue2], debounce(() => {
        const queryUrl = `${url}?${key1}=${searchValue1.value}&${key2}=${searchValue2.value}`;

        // Call the get function with the constructed URL
        get(useForm({}), queryUrl);
    }, 800));
};
// clear form
const formReset = (form, fields = []) => {
    form.reset();
    fields.forEach((field) => {
        field.value = "";
    });
};
// for upload image
const uploadImage = () => {
    const fileInput = ref(null);
    const imageUrl = ref(null);

    const triggerFileInput = () => {
        if (fileInput.value) {
            fileInput.value.value = null;
            fileInput.value.click();
        }
    };

    const handleFileSelect = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imageUrl.value = e.target.result;
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const deleteImage = (form = null, image = null) => {
        imageUrl.value = null;
        if (form) {
            form.image = "";
        }
        if (form && image) {
            form.image = image;
        }
    };

    return {
        fileInput,
        imageUrl,
        triggerFileInput,
        handleFileSelect,
        deleteImage,
    };
};
function currentDateFormat(date) {
    return date.toISOString().slice(0, 19).replace("T", " ");
}

function generateShortUniqueKey() {
    // Generate a short unique key using timestamp and random number
    return (Date.now() % 1000000).toString(36) + Math.random().toString(36).substring(2, 6);
}

export {
    ref,
    reactive,
    computed,
    watch,
    onMounted,
    onUnmounted,
    Link,
    useForm,
    usePage,
    Head,
    MagnifyingGlassIcon,
    debounce,
    search,
    ArrowLeftIcon,
    CheckIcon,
    XMarkIcon,
    TrashIcon,
    PencilSquareIcon,
    BookOpenIcon,
    formReset,
    uploadImage,
    currentDateFormat,
    watchEffect,
    Layout,
    searchTwoKey,
    generateShortUniqueKey,
};
