/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Categories } from "./types/Categories";
import { categoriesList } from "./data/categories";
import { Item } from "./types/Item";
import { itemsList } from "./data/items";
import { GetCurrentMonth, filterListByMonth } from "./helpers/dateFilters";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";

const App = () => {
    const [list, setList] = useState(itemsList);
    const [filteredList, setFilteredList] = useState<Item[]>([]);
    const [currentMonth, setCurrentMonth] = useState(GetCurrentMonth());
    const [incomeCount, setIncome] = useState(0);
    const [expenseCount, setExpense] = useState(0);

    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth));
    }, [list, currentMonth]);

    useEffect(() => {
        let incomeCount = 0;
        let expenseCount = 0;
        for (let i in filteredList) {
            if (categoriesList[filteredList[i].category].expense) {
                expenseCount += filteredList[i].value;
            } else {
                incomeCount += filteredList[0].value;
            }
        }

        setIncome(incomeCount);
        setExpense(expenseCount);
    }, [filteredList]);

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth);
    };

    const handleAddItem = (item: Item) => {
        let newList = [...list]; //copia da lista
        newList.push(item); //adiciona o item na copia
        setList(newList);
    };
    return (
        <C.Container>
            <C.Header>
                <C.HeaderText>Sistema financeiro</C.HeaderText>
            </C.Header>
            <C.Body>
                <InfoArea
                    currentMonth={currentMonth}
                    onMonthChange={handleMonthChange}
                    income={incomeCount}
                    expense={expenseCount}
                />
                <InputArea onAdd={handleAddItem} />

                <TableArea list={filteredList} />
            </C.Body>
        </C.Container>
    );
};
export default App;
