import * as C from "./styles";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilters";
import { categoriesList } from "../../data/categories";

type Props = {
    item: Item;
};
export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categoriesList[item.category].color}>
                    {categoriesList[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value
                    color={
                        categoriesList[item.category].expense ? `red` : `green`
                    }
                >
                    R${item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
};

// {categories[item.category].title}
