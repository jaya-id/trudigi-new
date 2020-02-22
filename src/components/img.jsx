import React from "react"

export default (props) => {
	props.alt = props.alt || '';
	props.loading = 'lazy';
	return <img {...props}/>
}