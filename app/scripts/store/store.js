import {createStore} from 'redux';
// REVIEW: для того, чтобы было как можно меньше относительных путей
// используй алиасы в вебпаке
import {reducers} from './../reducers/reducers';

export const store = createStore(reducers);

store.subscribe(() => {
  console.log("changed", store.getState());
  // console.log(store.getState().user.vacansy);
});
