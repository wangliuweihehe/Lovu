import StartUp from '../containers/startup';
import Home from '../containers/home';
import Time from '../containers/time';
import Photo from '../containers/photo';
import Message from '../containers/message';
import Anniversary from '../containers/anniversary';

const Routes = [
	{
		path:'/',
		component:StartUp,
		exact:true
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/photo',
		component:Photo
	},
	{
		path:'/message',
		component:Message
	},
	{
		path:'/anniversary',
		component:Anniversary
	},
	{
		path:'/time',
		component:Time
	}
];
export default Routes;