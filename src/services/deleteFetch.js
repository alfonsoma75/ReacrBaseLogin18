export default function deleteFetch( url, headers ) {

    return fetch( url, {
        headers: headers,
        method: 'DELETE'
    })

}