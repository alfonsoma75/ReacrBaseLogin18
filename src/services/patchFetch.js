export default async function patchFetch( url, bodyData, headers ) {

    const response = await fetch( url, {
        // TODO HEADERS CON AUTH
        headers: headers,
        method: 'PATCH',
        body: JSON.stringify(bodyData)
    })
    return await response.json()
}