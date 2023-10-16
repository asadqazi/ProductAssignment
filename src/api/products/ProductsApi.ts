import {ProductDto} from '../../store/dto/ProductDto';
import axiosInstance from '../ApiClient';
import {NetworkResponse} from '../Response';

export const fetchProductsApi = async (): Promise<
  NetworkResponse<ProductDto[]>
> => {
  let config = {
    method: 'GET',
    url: 'products',
  };
  const result = await axiosInstance(config);
  if (result.status === 200) {
    return {
      kind: 'success',
      body: result.data,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};
