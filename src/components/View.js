import React from 'react'

const View = (props) => {
    return(
        <h2>Im View {props.match.params.id}</h2>
    )
}

export default View