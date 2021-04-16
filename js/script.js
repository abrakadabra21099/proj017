'use strict';

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // request.
    request.open('GET', 'js/current1.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // request.status;
    // request.statusText;
    // request.response;
    // request.readyState;

    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState == 4 && request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = `Ошибка: ${request.statusText}`;
    //     }
    // });
    request.addEventListener('load', () => {
        if (request.status === 200) {
            // console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = `Ошибка: ${request.statusText}`;
        }
    });
});