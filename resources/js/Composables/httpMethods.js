
import { router } from "@inertiajs/vue3";
import { confirmAlert, sweetAlert, toastSwal } from "./alert";
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
 * update method for only text
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
const updateWithFile = (method = 'put', form, url, name, tasksOnSuccess = () => { }) => {
    form.processing = true;
    form._method = method;
    router.post(url, form, {
        preserveScroll: true,
        onSuccess: () => {
            toastSwal(name + ' update is successful', 'success')

            form.processing = false;
        },
        onError: () => {
            form.processing = false;
            toastSwal('Something went wrong!', 'error')
        },
    });
};
/**
 * delete method
 *
 * @param object form - the useForm helper
 * @param string url - route url
 */

const del = (form, url) => {
    confirmAlert(() => {
        form.delete(url, {
            preserveScroll: true,
            onSuccess: () => {
                toastSwal('This has been deleted successfully.', 'success')
            },
        });
    })
}

/**
 * 
 * @param {*} form 
 * @param {string} url 
 */
const logout = (form, url) => {
    confirmAlert(
        () => {
            form.submit("get", url, {
                preserveScroll: true,
            });
        },
        "Are you sure?",
        "You want to be logout!",
        "Log Out"
    )
}

export { post, get, update, updateWithFile, del, logout };
