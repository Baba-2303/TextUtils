import React from 'react'

export default function Alert(props) {
    const Capitalize = (word) =>{
        let loward = word.toLowerCase()
        return loward.charAt(0).toUpperCase() + loward.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
        {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{Capitalize(props.alert.type)}</strong>:{props.alert.msg}
            
        </div>}
        </div>
    )
}
