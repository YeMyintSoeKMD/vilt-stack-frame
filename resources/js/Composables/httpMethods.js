// import { toast } from "vue3-toastify";
// import "vue3-toastify/dist/index.css";
import { router } from "@inertiajs/vue3";
import { sweetAlert, toastSwal } from "./alert";
import Swal from 'sweetalert2/dist/sweetalert2.js'

/**
 * post method
 *
 * @param object form - the useForm helper
 * @param string url - route url
 * @param function tasksOnSuccess - a function that will called after onSuccess
 */
const post = (form, url, name, preserveScroll = true, tasksOnSuccess = () => { }) => {
    form.submit("post", url, {
        preserveScroll: preserveScroll,
        onSuccess: () => {
            toastSwal(name + ' create is successful', 'success')
            // sweetAlert('Success', name + ' create is successful', 'success')
            tasksOnSuccess();
        },
    });
};

/**
 * get method
 *
 * @param object form - the useForm helper
 * @param string url - route url
 * @param function tasksOnSuccess - a function that will called after onSuccess
 */
const get = (form, url, preserveScroll = true, tasksOnSuccess = () => { }) => {
    form.submit("get", url, {
        preserveScroll: preserveScroll,
        preserveState: true,
        onSuccess: () => {
            tasksOnSuccess();
            // toast.success("Congrats, it's successful!", { autoClose: 300 });
        },
    });
};

/**
 * update method
 *
 * @param object form - the useForm helper
 * @param string url - route url
 * @param function tasksOnSuccess - a function that will called after onSuccess
 */
const update = (form, url, name, tasksOnSuccess = () => { }) => {
    let options = {
        preserveScroll: true,
        onSuccess: () => {
            tasksOnSuccess();

            toastSwal(name + ' update is successful', 'success')

            // sweetAlert('Success', name + ' update is successful', 'success')
        },
    };
    form.submit("put", url, options);
};
/**
 * update with file method
 *
 * @param string method - route method
 * @param object form - the useForm helper
 * @param string url - route url
 * @param function tasksOnSuccess - a function that will called after onSuccess
 */
const updateWithFile = (method, form, url, name, tasksOnSuccess = () => { }) => {
    form.processing = true;
    form._method = method;
    router.post(url, form, {
        preserveScroll: true,
        onSuccess: () => {
            toastSwal(name + ' update is successful', 'success')

            // sweetAlert('Success', name + ' update is successful', 'success')
            form.processing = false;
        },
        onError: () => {
            form.processing = false;
            toast.error("Something went wrong!", {
                autoClose: 300,
            });
        },
    });
};
/**
 * delete method
 *
 * @param object form - the useForm helper
 * @param string url - route url
 */
// const del = (form, url) => {
//     const func = () => {
//         form.delete(url, {
//             preserveScroll: true,
//             onSuccess: () => {
//                 Swal.fire('Confirmed!', 'Your action was successful.', 'success');
//             },
//         });
//     }
//     sweetAlert('Sure!', 'Do you want to delete this item', 'question', true, func(form, url))

// };

const del = (form, url) => {
    Swal.fire({
        title: 'Sure !',
        text: "Do you want to delete this item",
        icon: 'question',
        confirmButtonText: 'Yes',
        showCancelButton: true,
        customClass: {
            confirmButton: '!bg-red-700 text-white font-bold py-2 px-4 rounded !hover:bg-red-800',
            cancelButton: 'bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300'

        }
    }).then((result) => {
        if (result.isConfirmed) {
            form.delete(url, {
                preserveScroll: true,
                onSuccess: () => {
                    toastSwal('Your action was successful.', 'success')

                    // Swal.fire('Confirmed!', 'Your action was successful.', 'success');
                },
            });
        }
    });
}

export { post, get, update, updateWithFile, del };
