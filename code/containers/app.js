import App from '../components/app';
import {connect} from 'react-redux';
import { createStore } from 'redux'

export default class Index extends Component{
	render(){
		return(
				<Provider>
					<App />
				</Provider>
			)
	}
}