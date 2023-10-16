export type ResponseKind = 'success' | 'failure';

export type NetworkResponse<T> = {
  kind: ResponseKind;
  body?: T;
};
