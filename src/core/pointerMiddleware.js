import { addTask } from './actions';
import { addBase64Obj } from './marvinAPI';

export const pointer = store => next => (action) => {
  if (action.meta) {
    if (action.entities && action.meta.pointer === 'task') {
      addBase64Obj(action.entities.task.structures[0],
        (data) => {
          const task = {
            base64: data.base64,
            cml: data.data,
            type: data.type,
          };

          store.dispatch(addTask(task));
        },
      );
    }
  }
  return next(action);
};
