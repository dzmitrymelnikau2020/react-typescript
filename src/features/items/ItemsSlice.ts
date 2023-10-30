import { v4 as id } from 'uuid';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Item = {
  id: string,
  name: string,
  packed: boolean
}

interface ItemsState {
  items: Item[],
  loading: boolean,
  error: string
}

const initialState: ItemsState = {
    items: [],
    loading: false,
    error: ''
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    itemsFetching(state) {
      state.loading = true
    },
    itemsFetchingSuccess(state, action: PayloadAction<Item[]>) {
     state.loading =  false;
     state.items = action.payload;
     state.error = '';
    },
    itemsFetchingError(state, action: PayloadAction<Error>) {
     state.loading =  false;
     state.error = action.payload.message;
    },
    add(state, action: PayloadAction<string>) {
      const item = {
        id: id(),
        name: action.payload,
        packed: false,
      };
      state.items.push(item);
    },
    update(state, action: PayloadAction<{id: string, updates: Partial<Item>}>) {
      const { id, updates} = action.payload;
      state.items.map((item) => {
        if(item.id === id) {
          return {...item, ...updates}
        }
        return item;
      })
    },
    remove(state, action: PayloadAction<string>) {
      console.log(action.payload)
      state.items = state.items.filter((item: Item) => item.id !== action.payload)
      console.log(state.items)
    }
  }
});

export const {
  itemsFetching,
  itemsFetchingError,
  itemsFetchingSuccess,
  add,
  update,
  remove,
} = itemsSlice.actions

export default itemsSlice.reducer