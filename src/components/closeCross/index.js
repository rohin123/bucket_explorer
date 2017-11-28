import React from 'react'
import Template from './template.jsx'
import {} from '../../../style/closeCross.scss'

const CloseCross = React.createClass({
	componentDidMount:function(){
		this.cross1.style.borderColor = this.props.color?this.props.color:'#ffdb46'
		this.cross2.style.borderColor = this.props.color?this.props.color:'#ffdb46'
	},
	render:Template
})

export default CloseCross