import StartUp from '../containers/startup';
import Home from '../containers/home';

const Routes = [
	{
		path:'/',
		component:StartUp,
		exact:true
	},
	{
		path:'/home',
		component:Home
	}
];
export default Routes;