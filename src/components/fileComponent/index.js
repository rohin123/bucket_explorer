import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	width:100%;
	height:100%;
	> iframe{
		width:100%;
		height:100%;
		border:none;
	}
`

class FileComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.store = this.context.store
		this.state = {
			reRender:false
		}
	}
	componentWillMount(){
		this.unsub = this.store.subscribe(()=>{
			this.setState({
				reRender:true
			})
		})
	}
	componentWillUnmount(){
		this.unsub()
	}
	render(){
		let state = this.store.getState()

		return 	<Wrapper>
					<iframe src={state.file}/>
				</Wrapper>
	}
}

FileComponent.contextTypes = {
	store:React.PropTypes.object
}

export default FileComponent