
import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

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


const confirmAlert = (
    callBack,
    title = "Are you sure?",
    text = "You won't be able to revert this!",
    confirmButtonText = "Yes, delete it!"
) => {
    Swal.fire({
        title,
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText,
    }).then((result) => {
        if (result.isConfirmed) {
            callBack();
        }
    });
};
export {
    confirmAlert,
    sweetAlert,
    toastSwal
}