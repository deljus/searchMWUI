import { TRIGGER } from '../constants';

export const marvinModal = (bool, typeAction) => ({
  type: TRIGGER, bool, typeAction,
});
