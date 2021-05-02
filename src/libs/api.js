

const searchOrg = async(ORGNAME) => {
    const response = await fetch(`https://api.github.com/search/repositories?q=org:${ORGNAME}`)
    if(response.ok){
        const data = await response.json()
        return data.items
    } else {
        console.log('organization is not exist')
        return
    }
    
}

export {searchOrg}