import React from 'react'

const render = function(){
	let signCss1 = this.props.showPlus?'plus1':'cross1',
		signCss2 = this.props.showPlus?'plus2':'cross2'
	return (	
				<div className='closeCrossCompDiv' onClick={this.props.close}>
					<div ref={(elem)=>{this.cross1 = elem}} className={'cross '+signCss1}></div>
					<div ref={(elem)=>{this.cross2 = elem}} className={'cross '+signCss2}></div>
				</div>
		)
} 

export default render