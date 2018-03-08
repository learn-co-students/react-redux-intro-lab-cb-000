import { createStore } from 'redux';
import rooducer from '../reducers'

export default function configureStore() {
  return createStore(rooducer)
};
