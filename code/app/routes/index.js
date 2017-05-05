import StartUp from '../containers/startup';
import Home from '../components/home';
import Photo from '../components/photo';
import Message from '../components/message';
import Time from '../components/time';
import Anniversary from '../components/anniversary';

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
		path:'/time',
		component:Time
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
	}
];
export default Routes;