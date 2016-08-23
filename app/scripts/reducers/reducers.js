import {combineReducers} from 'redux';
import Storage from './storage';

const storage = new Storage();
const app = (state	=	initialState,	action) =>	{
  switch	(action.type)	{
		case	SEND:
			return	Object.assign({},	state,	{
			storage.addData(state.form)
			})
			default:
				return	state
	}
}
