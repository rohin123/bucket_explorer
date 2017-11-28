import Actions from './actions.js'

class LoaderActions{
	showLoader(){
		return {
			type:Actions.SHOW_LOADER
		}
	}

	hideLoader(){
		return {
			type:Actions.HIDE_LOADER
		}
	}
}

export default new LoaderActions()