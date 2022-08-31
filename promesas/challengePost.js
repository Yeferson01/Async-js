import fetch from "node-fetch";

const API_URL = 'https://api.escuelajs.co/api/v1';

/*
function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Sun glasses",
    "price": 10,
    "description": "A beautiful sun glasses to get enjoy in a sunny day ",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API_URL}/products`, data)
.then(response => response.json())
.then(data => console.log(data)); */

//Probando asyncs para post
async function postDataAsync(urlApi, data) {
    const response = await fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Magic Pencil",
    "price": 10,
    "description": "To write and have a magic learning",
    "categoryId": 5,
    "images": ["https://thumbs.dreamstime.com/b/magic-pencil-21524249.jpg"]
}

async function anoterFn(urlApi, data) {
    try {
        const result = await postDataAsync(urlApi, data);
        const all = await result.json();
        console.log(all);
    } catch (error) {
        console.error(error);
    }
}

anoterFn(`${API_URL}/products`, data);