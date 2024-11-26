// import { toast } from "vue3-toastify";
// import "vue3-toastify/dist/index.css";
import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'


// const successAlert = (message, name = null) => {
//     toast.success(
//         `<span style="color: green; font-weight: bold;">${name}</span> ${message}`,
//         {
//             autoClose: 2000,
//             position: toast.POSITION.BOTTOM_RIGHT,
//             dangerouslyHTMLString: true,
//         }
//     );
// }

// const errorAlert = (message, name = 'Ohh!!') => {
//     toast.error(
//         `<span style="color: red; font-weight: bold;">${name}</span> ${message}`,
//         {
//             autoClose: 2000,
//             position: toast.POSITION.BOTTOM_RIGHT,
//             dangerouslyHTMLString: true,
//         }
//     );
// }

const sweetAlert = (title, text, icon = 'success') => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: 'Done',
        customClass: {
            confirmButton: '!bg-red-700 text-white font-bold py-2 px-4 rounded !hover:bg-red-800',
            cancelButton: 'bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300'

        }
    }).then((result) => {
        //

    });
}

const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});
const toastSwal = (title, icon = 'success') => {
    console.log('first')
    Toast.fire({
        icon: icon,
        title: title
    });
}

export {
    // successAlert,
    // errorAlert,
    sweetAlert,
    toastSwal
}