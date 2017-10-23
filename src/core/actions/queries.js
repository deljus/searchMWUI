import { mutateAsync } from 'redux-query';
import { validateTasks, revalidateTask } from '../queries';

export const validateTaskOuery = tasks => mutateAsync(validateTasks(tasks));
export const revalidatingTaskQuery = tasks => mutateAsync(revalidateTask(tasks));