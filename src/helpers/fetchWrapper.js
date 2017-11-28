import store from '../store/index.js'
import LoaderActions from '../actions/loaderActions.js'
require('es6-promise').polyfill();
require('isomorphic-fetch');


class FetchWrapper{
	get({url:url,callback:callback,errCallback:errCallback,headers:headers,options:options}){
		
		let showLoader = (options.showLoader)? true : false;
		store.dispatch(LoaderActions.showLoader())

		fetch(url,{
			method:'GET',
			headers:headers
		}).then((res)=>{
			store.dispatch(LoaderActions.hideLoader())
			return res.text()
		}).then((text)=>{
			callback(text)
		}).catch((err)=>{
			store.dispatch(LoaderActions.hideLoader())
			callback(err.message)
		})
	}
}

export default new FetchWrapper()
