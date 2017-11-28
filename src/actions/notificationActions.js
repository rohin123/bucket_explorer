import Actions from './actions.js'

class NotificationActions{

	closeNotification(index){
		return {
			type:Actions.CLOSE_NOTIFICATION,
			data:index
		}
	}

	openNotification(payload){
		return {
			type:Actions.OPEN_NOTIFICATION,
			data:payload
		}
	}

}

export default new NotificationActions()