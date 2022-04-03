export default async function putFetch( url, bodyData, headers ) {

    const response = await fetch( url, {
        // TODO HEADERS CON AUTH
        headers: headers,
        method: 'PUT',
        body: JSON.stringify(bodyData)
    })
    return await response.json()
}