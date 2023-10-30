import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchingItems } from '../features/items/ActionCreators';

import {
  //createItem,
  filterItems,
  //removeItem,
  //updateItem,
} from '../features/items/items';

import {
  add as createItem,
  update as updateItem,
  remove as removeItem,
  //markAllAsUnpacked,
} from '../features/items/ItemsSlice';

import Header from './header';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';

const Application = () => {
  //const [items, setItems] = useState(getInitialItems());
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(state => state.items);

  useEffect(() => {
    dispatch(fetchingItems())
  }, [])

   const add = useCallback(
    (name) => {
      dispatch(createItem(name));
    },
    [dispatch],
  );

  const update = (id, updates) => {
    dispatch(updateItem(id, updates));
  };

  const remove = (id) => {
    dispatch(removeItem(id));
  };

  const unpackedItems = filterItems(items, { packed: false });
  const packedItems = filterItems(items, { packed: true });

  /* const markAllAsUnpacked = () => {
    return setItems(items.map((item) => ({ ...item, packed: false })));
  }; */

  return (
    <main className="flex flex-col gap-8 p-8 mx-auto lg:max-w-4xl">
      <Header count={items?.length} />
      <NewItem 
        addItem={add}
      />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList
          title="Unpacked Items"
          items={unpackedItems}
          update={update}
          remove={remove}
        />
        <ItemList
          title="Packed Items"
          items={packedItems}
          update={update}
          remove={remove}
        />
      </section>
      {/* <MarkAllAsUnpacked onClick={markAllAsUnpacked} /> */}
    </main>
  );
};

export default Application;
