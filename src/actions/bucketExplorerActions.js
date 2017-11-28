import Actions from './actions.js'
import FetchWrapper from '../helpers/fetchWrapper.js'
import Constants from '../utils/constants.js'
import NotificationAction from './notificationActions.js'
import Store from '../store'
import xmlToJson from '../helpers/parseXml'

class BucketExplorerAction{

	fetchBucket(){
		let state = Store.getState()
		return (dispatch)=>{
			FetchWrapper.get({
				url:Constants.getBucketContent,
				callback:(xml)=>{
					let parser = new DOMParser(),
						xmlDoc = parser.parseFromString(xml, "text/xml"),
						json = xmlToJson(xmlDoc)

					dispatch(this.setBucket(json))
				},
				errCallback:(err)=>{
					dispatch(NotificationAction.openNotification('Error fetching bucket'))
				},
				options:{
					showLoader:true
				}
			})
		}
	}

	setVisibleFile(filename){
		let url = Constants.getFileContent.replace(/:path/,filename)
		return {
			type:Actions.SET_VISIBLE_FILE,
			data:{
				url:url,
				path:filename
			}
		}
	}
	
	setBucket(paylaod){
		return {
			type:Actions.SET_BUCKET_CONTENT,
			data:paylaod
		}
	}

}

export default new BucketExplorerAction()