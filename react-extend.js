import React,{Component} from "react";
var setStateList={};
export default class newComponent extends Component{
	constructor(props){
		super(props);
		this.props.listener&&event.listener(this.constructor.name,this.props.listener);
		setStateList[this.constructor.name]=setState.bind(this);   //收集每个组件的setState方法
		this.constructor.listener=event.listener;   //提供监听接口，可以监听额外数据
		this.constructor.dispatch=event.dispatch;  //发布接口
		this.constructor.getData=event.getData;
		this.init&&this.init();  //组件初始化提供接口
		setData.call(this); //更新属性
	}
	shouldComponentUpdate(nextProps, nextState){
		setData.call(this,nextProps,nextState);
		return true;
	}
}
function setData(props=this.props,state=this.state){
	if(props.listener){
		//this.props.initProps
		var data=Object.assign(props.listener,(this.data||{}),state);
		delete data.listener;
	}
	//提供给组件使用的数据，因为react的this.props很难维护，所以添加了新的属性this.toProp来代替this.props
	this.data=data?data:Object.assign({},state);
}
function setState(data){
	var component=this.constructor.name,
		props=event.getData(component);
		if(isObject(data)){
			//更新状态
			this.setState(props?Object.assign(props,data):data);
		}
}
var event=(()=>{
	var listenerData={},  //组件数据列表
		updateComponents={};  //依赖列表，以数据决定依赖
	function listener(type,data){   //监听数据
		if(typeof type!=="string"&&isObject(type)){
			data=type;
			type=this.name;
		}
		if(isObject(data)){
			listenerData[type]=data;
			updateComponents[data]?updateComponents[data].push(type):updateComponents[data]=[type];
		}
	}
	function getData(type,status){
		type=type||this.name;
		if(status){
			return Object.assign({},listenerData[type]);  //获取的组件数据
		}else{
			return listenerData[type];
		}
	}
	function dispatch(data,status){   //更新状态并处理依赖,param监听一个方方法的参数,status=true开启更新依赖模式
		var type=this.name;  //组件名
		var components=updateComponents[listenerData[type]];   //获取使用该数据该的组件
			if(!isObject(data)&&data!=="function"){
				throw new Error("dispatch参数错误！");
			}
			if(typeof data==="function"){
				data(this);
				return false;
			}
			if(!components){
				listener(type,data);
				components=[type];
			}
		if(!status){
			setStateList[type](data);
			return false;
		}
		//更新所有使用了该数据的组件
		components.forEach((item)=>{
			setStateList[item](data);
		})
	}
	return {
		listener:listener,
		getData:getData,
		dispatch:dispatch,
	}
})();
var isObject=(data)=>{
	return (Object.prototype.toString.call(data).indexOf("object")!=-1);
}
//包装actions
let bindActionCreators=(action)=>(...param)=>(component)=>{
	component.dispatch(action(event.getData(component.name),...param));
}
export let bindAction=(action)=>{
	if(typeof action=="function"){
		return bindActionCreators(action);
	}
	if(isObject(action)){
		var newAction={};
		var keys=Object.keys(action);
		for(var i=0;i<keys.length;i++){
			newAction[keys[i]]=bindActionCreators(action[keys[i]]);
		}
	}
	return newAction; 
}
