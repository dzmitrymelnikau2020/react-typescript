import { AppDispatch, RootState } from "../../store";

import { fetchItems, patchItem } from "../../lib/api";

import { 
    itemsFetching,
    itemsFetchingError,
    itemsFetchingSuccess
} from './ItemsSlice';

export const fetchingItems  = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(itemsFetching());
            const items = await fetchItems();
            dispatch(itemsFetchingSuccess(items))
        } catch(e) {
            dispatch(itemsFetchingError(e as Error))
        }
    }
}

/* export const updatingItem = (id: string) => {
    return async (dispatch: AppDispatch) => {
        try {

        } catch (e) {
            dispatch(itemsFetchingError(e as Error))
        }
    }
} */