import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpClient from "../commons/httpClient";
import {Status} from "../commons/constants";
import Product from "../types/Product";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [] as Product[],
        status: Status.Idle
    },
    reducers: {},
    /**
     * Handles additional reducers for product slice, particularly for asynchronous actions.
     * @param builder - The builder object to add extra reducers to.
     */
    extraReducers: (builder) => {
        builder
            // Handles the pending state of the fetchProducts async action
            .addCase(fetchProducts.pending, (state) => {
                state.status = Status.Loading;
            })
            // Handles the fulfilled state of the fetchProducts async action
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = Status.Succeeded;
                // Updates the state with the fetched products data
                state.products = action.payload;
            })
            // Handles the rejected state of the fetchProducts async action
            .addCase(fetchProducts.rejected, (state) => {
                state.status = Status.Failed;
            });
    },
});

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await httpClient.get("/products");
        return response.data;
    }
);

export const productsSelector = (state: { products: { products: Product[] } }) => state.products;

export default productsSlice;