import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Categories } from "./types/Categories";
import { categories } from "./data/categories";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { GetCurrentMonth } from "./helpers/dateFilters";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(GetCurrentMonth());

  useEffect(() => {}, [list, currentMonth]);
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* {Área de informações} */}
        {/* {Área de inserção de informação} */}
        {/* {tabela de items} */}
      </C.Body>
    </C.Container>
  );
};
export default App;
