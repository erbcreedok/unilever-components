export const TYPE_PROMO           = 'promoactivities';
export const TYPE_SHELF_SHARE     = 'shelf-share';
export const TYPE_PRICE_TRACKING  = 'price-tracking';
export const TYPE_COMPLEMENTARY   = 'complementary';

export const STATUS_IN_PROCESS  = 'in-process';
export const STATUS_RECHECK     = 'recheck';
export const STATUS_DONE        = 'done';
export const STATUS_DONE_LATE   = 'done-late';
export const STATUS_NOT_DONE    = 'not-done';
export const STATUS_ENTRUSTED   = 'entrusted';
export const STATUS_WAITING     = 'waiting';
export const STATUS_ACCEPTED    = 'accepted';
export const STATUS_REJECTED    = 'rejected';


export const TASK_TYPE_LABELS = {
  [TYPE_PROMO]: 'Проверка промоактивностей',
  [TYPE_SHELF_SHARE]: 'Проверка долей',
  [TYPE_PRICE_TRACKING]: 'Сбор цен',
  [TYPE_COMPLEMENTARY]: 'Свободный тип',
};
export const STATUSES = [
  {label: 'В процессе',       path: STATUS_IN_PROCESS},
  {label: 'Перепроверить',    path: STATUS_RECHECK},
  {label: 'Выполнено',        path: STATUS_DONE},
  {label: 'Не выполнено',     path: STATUS_NOT_DONE},
  {label: 'Поручено',         path: STATUS_ENTRUSTED},
  {label: 'Ожидают контроля', path: STATUS_WAITING},
  {label: 'Принял',           path: STATUS_ACCEPTED},
  {label: 'Отклонил',         path: STATUS_REJECTED},
];

export const TYPES = [
  {name: 'Промоактивности', label: TASK_TYPE_LABELS[TYPE_PROMO],           path: TYPE_PROMO},
  {name: 'Проверка долей',  label: TASK_TYPE_LABELS[TYPE_SHELF_SHARE],     path: TYPE_SHELF_SHARE},
  {name: 'Сбор цен',        label: TASK_TYPE_LABELS[TYPE_PRICE_TRACKING],  path: TYPE_PRICE_TRACKING},
  {name: 'Свободный тип',   label: TASK_TYPE_LABELS[TYPE_COMPLEMENTARY],   path: TYPE_COMPLEMENTARY},
];
