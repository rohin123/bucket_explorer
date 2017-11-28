import React from 'react'
import BucketActions from '../../actions/bucketExplorerActions.js'
import {Wrapper,Label,Child,Arrow,InlineWrapper} from './styledComponents.js'


class BucketContent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.store = this.context.store
		this.open = this.props.openByDefault
		this.state ={
			reRender:false
		}
	}
	
	toggle(){
		if(this.isFile(this.props.content)){
			this.store.dispatch(BucketActions.setVisibleFile(this.props.content))
		}
		this.open = !this.open
		this.setState({
			reRender:true
		})
	}

	isFile(content){
		if(typeof content=="string"){
			return true
		}	
		return false
	}

	checkIfActiveFile(){
		let state = this.store.getState()
		return (state.activeFilePath === this.props.content)
	}

	render(){
		let contentHtml = [],
			isFileType = this.isFile(this.props.content)

		if(this.open && !isFileType) {
		
			(Object.keys(this.props.content)||[]).map((key)=>{
				contentHtml.push(<BucketContent content={this.props.content[key]} 
											label={key}
											key={this.props.label+key}/>)});
		}

		return 	<Wrapper>
					<InlineWrapper onClick={this.toggle.bind(this)}>
						{isFileType?null:<Arrow open={this.open}/>}
						<Label isFile={isFileType}
							   isActiveFile={isFileType?this.checkIfActiveFile():
							   					false}>
							{this.props.label}
						</Label>
					</InlineWrapper>	
					<Child>	
						{contentHtml}
					</Child>	
				</Wrapper>
	}

}

BucketContent.contextTypes = {
	store:React.PropTypes.object
}

export default BucketContent