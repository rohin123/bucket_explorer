import React from 'react'

const render = function(){
	let display = this.open?'':' hide'
	return (
		<div className={'loader-backgroud-div' + display}>
			<div className='loader2-wrapper'>
			  <div className='loader2 ripple1'></div>
			  <div className='loader2 ripple2'></div>
			  <div className='loader2 ripple3'></div>
			  <div className='loader2 ripple4'></div>
			</div>
		</div>	
	)
	
}

export default render