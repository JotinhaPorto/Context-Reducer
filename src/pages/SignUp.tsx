import { Link } from 'react-router-dom'
import React, { HTMLInputTypeAttribute, useContext, useState } from 'react'
import { Context } from '../contexts/Context'



/* 

5° aqui nós importamos nosso contexto e usamos "useContext" para usar os dados de la aqui e passar eles daqui pra la, com nosso state e o dispatch  

*/



export const SignUp = () => {

    const { state, dispatch } = useContext(Context)

    const [nameInput, setNameInput] = useState('')

    const [ageInput, setAgeInput] = useState(0)


    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value)




    }

    const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgeInput( parseInt(e.target.value)) 
    }

    const handleSave = () => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: nameInput
            }
        }),
            dispatch({
                type: 'CHANGE_AGE',
                payload: {
                    age: ageInput
                }
            })
    }

    return (
        <div>
            Página do SignUp
            <input
                type="text"
                placeholder='Digite um nome'
                value={nameInput}
                onChange={handleChangeName}
            />
            <input
                type="text"
                placeholder='Digite sua idade'
                value={ageInput}
                onChange={handleChangeAge}
            />
            <br />
            <button onClick={handleSave}> Salvar </button>
            <Link to={'/show'}>Ir para ShowData</Link>
        </div>
    )
}