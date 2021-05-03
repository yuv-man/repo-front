const GIT_API_REPO = 'https://api.github.com/'

// search repositories by organization
const searchOrg = async(ORGNAME) => {
    const response = await fetch(`${GIT_API_REPO}search/repositories?q=org:${ORGNAME}`)
    if(response.ok){
        const data = await response.json()
        return data.items
    } else {
        console.log('organization is not exist')
        return
    }  
}

// get repository by Id
const getRepoById = async(repoId) => {
    const response = await fetch(`${GIT_API_REPO}repositories/${repoId}`)
    if(response.ok){
        const data = await response.json()
        return data
    } else {
        return
    }
}

const BASE_URL = 'http://localhost:5000';

const addRepo = async(repoContent) => {
    console.log(repoContent)
    const response = await fetch(`${BASE_URL}/repos`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(repoContent)
    })
    if (!response.ok){
        const data = await response.json()
        return data;
    } else {
        return
    }
}

const getSavedRepos = async() =>{
    const response = await fetch(`${BASE_URL}/repos`)
    if(response.ok){
        const data = await response.json()
        return data
    } else {
        return
    }
}

const updateComment = async(id, comment) => {
    const response = await fetch(`${BASE_URL}/repos/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({comment})
    }) 
}

const removeRepo = async(id) => {
    const response = await fetch(`${BASE_URL}/repos/${id}`,{
        method: 'DELETE'
    })
    const data = await response.text()
    return data
}

export { searchOrg, addRepo, getRepoById, getSavedRepos, updateComment, removeRepo }