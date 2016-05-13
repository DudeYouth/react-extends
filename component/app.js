import ReactDOM from "react-dom";
import React from "react";
import {Col,Button,Row,Menu, Icon }from "antd";
import * as actions from "../actions/actions.js";
import Component,{bindAction} from "../react-extend.js"; //改造后的父类组件（构造方法会默认的收集该组件的setState方法）
var newactions=bindAction(actions);
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Nav extends Component{
	init(){
		newactions.createNav()(Nav);
	}
	mapItem(){
		var keys=Math.random()*15+1;
		var loop=(data,Node,key="")=>{
			return data&&data.map((item,index)=>{
				keys++;
				if(Node&&item.children){
					return <Node key={keys} title="分组1">{loop(item.children,null,"setting:")}</Node>
				}
				else if(item.children){
					return <SubMenu key={"SubMenu"+keys} title={<span><Icon type="setting" />{item.name}</span>}>
			        	{loop(item.children,MenuItemGroup)}
			        </SubMenu>
				}else{
			        return <Menu.Item key={key+keys}>
						<Icon type="mail" />{item.name}
					</Menu.Item>
				}
			})
		}
		return loop(this.data.nav||[])
	}
	render(){
		this.data.nav&&Other.dispatch(this.data.nav[0])
		return <div>
			<Menu mode="horizontal">
				{this.mapItem()}
		     </Menu>
		     <Test listener={this.data} test="添加菜单"/>
	     </div>
	}
}
class Test extends Component{
	init(){

	}
	clickHanlder(){
		newactions.addNav()(Nav)
	}
	restHanlder(){
		newactions.createNav()(Nav);
	}
	render(){
		return <div>
					<h1 onClick={this.clickHanlder.bind(this)}>{this.props.test}</h1>
					<p onClick={this.restHanlder.bind(this)}>重置</p>
			   </div>;
	}
}
class Other extends Component{
	render(){
		return <p>{this.data.name}</p>
	}
}
ReactDOM.render(
	<div>
		<Nav />
		<Other />
	</div>,
	document.getElementById("container")
)

