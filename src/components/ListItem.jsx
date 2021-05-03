import React, {useState} from 'react'
import {addRepo, removeRepo, updateComment} from '../libs/api'

const ListItem = (props) => {

    const {id, owner, language, created_at, html_url, comment} = props
    const [moreInfo, setMoreInfo] = useState(false)
    const [repoContent, setRepoContent] = useState({repoId: id, comment: ''})
    const [commentBox, setCommentBox] = useState(false)

    const changeState = () => {
        setMoreInfo(!moreInfo)
    }

    const addToProfile = () => {
        addRepo(repoContent)
    }

    const removeFromProfile = () => {
        removeRepo(id)
    }

    const handleChange = (e) => {
        setRepoContent({repoId: id, comment:e.target.value})
    }

    const addComment = () => {
        updateComment(id, repoContent.comment)
    }

    return (
        <div>
            <span>{props.name}</span>
            <button onClick={changeState}>{moreInfo?'less info':'more info'}</button>
            {props.favorite ? <button onClick={removeFromProfile}>remove from profile</button>:<button onClick={addToProfile}>Add to my profile</button>}
            <button onClick={()=>setCommentBox(!commentBox)}>open comment box</button>
            {moreInfo && <div>
                <div>
                    <span>Owner: {owner.login}</span>
                    <span>Language: {language}</span>
                    <span>Created at: {created_at.slice(0, 10).split("-").reverse().join(".")}</span>
                </div>
                    <a href={html_url}> {html_url}</a>
                </div>}

                {commentBox && 
                    <div>
                        <input value={repoContent.comment}
                        onChange={handleChange}
                        type='text'
                        name='comment' 
                        />
                        <button onClick={addComment}>add comment</button>
                    </div>}
                {comment?<p>{comment}</p>:null}

        </div>
    )
}

export default ListItem
