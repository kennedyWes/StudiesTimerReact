import React from 'react';
import { ITarefa } from '../../types/tarefas';
import Item from './Item';
import style from "./List.module.scss";

interface IListProps {
    tarefas: ITarefa[],
    selecionaTarefa: ( tarefaSelecionada: ITarefa) => void
}

function List({ tarefas, selecionaTarefa }: IListProps) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map(item => (
                <Item
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                    {...item}
                />
              ))}
            </ul>
        </aside>
    )
}

export default List;