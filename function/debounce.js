var debounce = function (func, wait, options) {

    let timeout;

    return function () {
        const functionCall = () => func.apply(this, arguments);

        clearTimeout(timeout);
        timeoout = setTimeout(functionCall, wait);
    }
}

function sendMail(str) {
    console.log(str);
}

var debouncedFunc = debounce(sendMail, 3000);
debouncedFunc("hello world 1")
debouncedFunc("hello world 2")