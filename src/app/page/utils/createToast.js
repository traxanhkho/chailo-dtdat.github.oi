
export const CreateToast = (state, timeOut, message) => {

    const stateToasts = {
        success: {
            icon: '<i class="fa-solid fa-circle-check"></i>',
            msg: 'This is a success message !',
        },
        warning: {
            icon: '<i class="fa-solid fa-triangle-exclamation"></i>',
            msg: 'This is a error message !',
        },
        error: {
            icon: '<i class="fa-solid fa-circle-exclamation"></i>',
            msg: 'This is a warning message !',
        }
    }

    let toast = document.createElement('div');
    toast.className = `toast-box ${state}`;
    toast.innerHTML = `
    ${stateToasts[state].icon}
    <span class="toast-box__msg">${message || stateToasts[state].msg}</span>
    <span class="toast-box__countdown"></span>
    `

    document.querySelector('.toasts').appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hide');
    }, timeOut)

    setTimeout(()=> {
        toast.remove()
    }, timeOut + 1300);
}
