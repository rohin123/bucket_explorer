import styled from 'styled-components'

const Wrapper = styled.div`
	margin:16px 0;
`
const Label = styled.label`
	background: ${props=>props.isFile?"url('/file-icon.png') no-repeat":"url('/folder-icon.png') no-repeat"};
    background-size: 30px;
    background-position: top left;
    font-size: 18px;
    padding-left: 36px;
    cursor: pointer;
    margin-left: ${props=>props.isFile?'15px':'0px'};
    color: ${props=>(props.isActiveFile)?'#4CAF50':'#333'};
    &:hover{
    	color: #3163b2;
    }
`
const Child = styled.div`
	margin-left: 30px;
`

const Arrow = styled.div`
	border-left: ${props=>props.open?'5px solid transparent':'8px solid #333'};
	border-top: ${props=>props.open?'8px solid #333':'5px solid transparent'};
	border-right: 5px solid transparent;
	border-bottom: 5px solid transparent;
	display: inline-block;
	margin-right: ${props=>props.open?'8px':'5px'};
	vertical-align: ${props=>props.open?'-3px':'2px'};
`
const InlineWrapper = styled.div`
	display: inline-block;
	cursor: pointer;
`

export {Wrapper,Label,Child,Arrow,InlineWrapper}