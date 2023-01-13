
const getData = async () => {
    const response = await fetch (url)
    const data = await response.json()
    // console.log(data)
    return data.result
}

export { getData }