import React, {useState} from 'react'

const ListItem = (props) => {

    const [moreInfo, setMoreInfo] = useState(false)
    console.log(props)

    const changeState = () => {
        setMoreInfo(!moreInfo)
    }

    return (
        <div>
            <span>{props.name}</span>
            <button onClick={changeState}>more info</button>
            {moreInfo && <div>
                <div>
                    <span>Owner: {props.owner.login}</span>
                    <span>Language: {props.language}</span>
                    <span>Updated at: {props.updated_at.slice(0, 10).split("-").reverse().join(".")}</span>
                </div>
                    <a href={props.html_url}> {props.html_url}</a>
                </div>}
        </div>
    )
}

export default ListItem
