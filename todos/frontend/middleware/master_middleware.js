import { applyMiddleware } from 'redux';
import { TodoMiddleware } from './todo_middleware';

export const MasterMiddleware = applyMiddleware(TodoMiddleware);
