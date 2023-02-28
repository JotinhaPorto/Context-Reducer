/* 
1° : Criamos o reducer, com dados iniciais e as ações no swtich, segue um padrão de criação, o famoso "pattern" (não confundir com o "useReducer" que é quando usamos o  reducer)



*/

import { ActionType } from "../types/ActionType";

export type UserType = {
    name: string;
    age: number;
}

export const UserInitialState: UserType = {
    name: '',
    age: 0
}


export const userReducer = (state: UserType, action: ActionType) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { ...state, name: action.payload.name }
        break;
        case 'CHANGE_AGE':
            return { ...state, age: action.payload.age }
        break;
    }

    return state
}