import React from 'react'
import styled from 'styled-components'
import store from '../../store'

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
	constructor(props){
		super(props)
		this.state = {
			reRender:false
		}
	}
	componentWillMount(){
		this.unsub = store.subscribe(()=>{
			this.setState({
				reRender:true
			})
		})
	}
	componentWillUnmount(){
		this.unsub()
	}
	render(){
		let state = store.getState()

		return 	<Wrapper>
					<iframe src={state.file}/>
				</Wrapper>
	}
}

export default FileComponent