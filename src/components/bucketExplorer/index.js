import React from 'react'
import BucketActions from '../../actions/bucketExplorerActions.js'
import store from '../../store'
import BucketContent from '../bucketContent'

class BucketExplorer extends React.Component{
	constructor(props){
		super(props)
		this.store = store
		this.open = true
		this.activeFile = ''
		this.state = {
			reRender:false
		}
	}
	componentDidMount(){
		this.store.dispatch(BucketActions.fetchBucket())
	}
	componentWillMount(){
		this.store.subscribe(()=>{
			let state = this.store.getState()
			if(state.bucketContent){
				this.bucketObj = this.initBucketObj(state.bucketContent&&
											state.bucketContent.ListBucketResult)
				this.setState({
					reRender:true
				})
			}
		})
	}
	initBucketObj(obj){
		let res = {},
			op = {},
			name = obj['Name']['#text'],
			path = null

		function parsePath(str,startIndex=0,root){
			let fwdSlashIndex = str.indexOf('/')
			if(fwdSlashIndex>=0){
				let childKey = str.slice(startIndex,fwdSlashIndex)
				if(!root[childKey]){
					root[childKey] = {}
				}
				if(str.length>fwdSlashIndex+1){
					str = str.slice(fwdSlashIndex+1,str.length)
					parsePath(str,0,root[childKey])	
				}
			}else{
				if(str.length){
					root[str] = path
				}
			}
		}

		(obj.Contents||[]).map((item)=>{
			let key = item.Key&&item.Key['#text']
			path = key
			parsePath(key,0,res)
		})

		op[name] = res
		return op
	}

	render(){
		let state = this.store.getState()
		if(this.bucketObj){
			let label = Object.keys(this.bucketObj)[0]
			return <BucketContent content={this.bucketObj[label]} 
								  label={label}
								  openByDefault={true}
								  key={'root'}/>
		}

		return null
		
	}
}

BucketExplorer.contextTypes = {
	store:React.PropTypes.object
}

export default BucketExplorer