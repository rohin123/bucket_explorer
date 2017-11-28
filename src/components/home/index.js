import React from 'react'
import BucketExplorer from '../bucketExplorer'
import styled from 'styled-components'
import FileViewer from '../fileComponent'

const Wrapper = styled.div`
	width:100%;
	height:99vh;
	min-width:800px;
`
const Column1 = styled.div`
	width:25%;
	height:100%;
	white-space:nowrap;
	overflow:scroll;
	border-right:1px solid #c0c0c0;
	display:inline-block;
	box-sizing:border-box;
	padding:5px 0px 0px 8px;
	background-color:whitesmoke;
`
const Column2 = styled.div`
	width:75%;
	height:100%;
	overflow:scroll;
	display:inline-block;
	padding:10px;
	padding-right:0;
	box-sizing:border-box;
`

class Home extends React.Component{
	render(){
		return <Wrapper>
					<Column1>
						<BucketExplorer/>
					</Column1>
					<Column2>	
						<FileViewer/>
					</Column2>	
				</Wrapper>	
	}
}

export default Home