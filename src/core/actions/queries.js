import { mutateAsync } from 'redux-query';
import { validateTasks } from '../queries';

export const validateTaskOuery = tasks => mutateAsync(validateTasks(tasks));