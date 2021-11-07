/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Categories } from "./types/Categories";
import { categories } from "./data/categories";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { GetCurrentMonth, filterListByMonth } from "./helpers/dateFilters";
import { TableArea } from "./components/TableArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(GetCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* {Área de informações} */}
        {/* {Área de inserção de informação} */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};
export default App;
