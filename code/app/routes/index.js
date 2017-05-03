import Home from './home';
import createHistory from 'history/createMemoryHistory';
import Photo from './photo';
import Message from './message';
import Time from './time';
import Anniversary from './anniversary';

const Routers = [
	{
		path:'/',
		component:StartUp,
		propName:startUp,
		prop:this.props.startUp
	},
	{
		path:'/home',
		component:Home,
		propName:homeMenus,
		prop:this.props.homeMenus
	},
	{
		path:'/time',
		component:Time,
		propName:time,
		prop:this.props.time
	},
	{
		path:'/photo',
		component:Photo,
		propName:startUp,
		prop:this.props.photo
	},
	{
		path:'/message',
		component:Message,
		propName:message,
		prop:this.props.message
	},
	{
		path:'/anniversary',
		component:Anniversary,
		propName:anniversary,
		prop:this.props.anniversary
	}
];
export default Routers;