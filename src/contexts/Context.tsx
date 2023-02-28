/* 
2° : Criamos o context, com os dados do nosso reducer, state e o dispatch
3° : Depois um mainReducer, que é para acionar o "userReducer" e mandar os dados que vão ser alterados e a ação para o switch do "userReducer"
4° : Depois o provider, com o useReducer (aqui nós usamos o reducer). No useReducer( 1° parametro -> vai ser a função q vai executar o reducer com o state e o action ,  2° parametro -> os dados do state ) . Após a criacão disso tudo, nós vamos para nossos componentes/paginas e lá vamos para o 5° passo...

5° : 
*/

import { createContext, useReducer } from 'react'
import { UserType, UserInitialState, userReducer, } from '../reducer/userReducer'
import { ActionType } from '../types/ActionType'

type initialStateType = {
    user: UserType
}
type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}
type ProviderType = {
    children: React.ReactNode
}

const initialState = {
    user: UserInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: ActionType) => ({
    user: userReducer(state.user, action)
})


export const ContextProvider = ({ children }: ProviderType) => {

    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

