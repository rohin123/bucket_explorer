import Actions from '../actions/actions.js'
import store from '../store/index.js'
import objectAssign from 'object-assign'


const reducer = function(state={},action){
	switch(action.type){	
		case Actions.SET_BUCKET_CONTENT:{
			let newFlags = setStateFlags([])
			return objectAssign(	{},
									state,
									{
										bucketContent:action.data,
										bFlags:newFlags
									}	
								)
		}

		case Actions.SET_VISIBLE_FILE:{
			let newFlags = setStateFlags([])
			return objectAssign(	{},
									state,
									{
										file:action.data.url,
										activeFilePath:action.data.path,
										bFlags:newFlags
									}
								)
		}

		case Actions.SHOW_LOADER:{
			let count = state['loaderCount']+1,
				newFlags = setStateFlags([])
			return objectAssign({},
								state,
								{
									'loaderCount':count,
									'bFlags':newFlags
								})
		}

		case Actions.HIDE_LOADER:{
			let count = state['loaderCount']-1,
				newFlags = setStateFlags([])
			return objectAssign({},state,{'loaderCount':count,'bFlags':newFlags})
		}

		default:{
			return state
		}
	}
}

function setStateFlags(flags){
	let state = store.getState(),
		currFlags = state['bFlags']

	for(var key in currFlags ){
		currFlags[key] = false
	}

	for(var i = 0; i<flags.length; i++ ){
		currFlags[flags[i].toString()] = true
	}

	return currFlags
}

export default reducer