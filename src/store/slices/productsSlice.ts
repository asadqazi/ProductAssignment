import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ProductDto} from '../dto/ProductDto';
import {fetchProductsApi} from '../../api/products/ProductsApi';

export type ProductState = {
  productData: ProductDto[];
  loading: boolean;
  error: boolean;
  nextPage: number;
};

const initialState: ProductState = {
  productData: [],
  loading: true,
  error: false,
  nextPage: 1,
};

export const fetchProducts = createAsyncThunk<{productData: ProductDto[]}>(
  'api/products',
  async () => {
    const result = await fetchProductsApi();
    if (result.kind === 'success') {
      console.log('Products result is' + result.body);
      return {productData: result.body ?? []};
    } else {
      throw 'Error fetching products data';
    }
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.nextPage += 1;
        state.productData = action.payload.productData;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, state => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;
