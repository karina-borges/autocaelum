import { useState } from "react";

export default function useFormValidator(validations) {
    const [errors, setErrors] = useState(createInitialState());//{login: '' , senha: ''}
    const [values, setValues] = useState(createInitialState());//{login: '' , senha: ''}
    const [isFormValid, setFormValid] = useState(false);

    function createInitialState() {
        const defaultValues = {};

        for (let prop in validations) {
            defaultValues[prop] = '';
        }

        return defaultValues;
    }

    function validate(event) {
        const { name, value } = event.target;
        errors[name] = validations[name](value);// {login: 'Login é obrigatório, senha: senha ~e obrigatória'}
        values[name] = value; //{login: '' , senha: ''}
        let status = Object.entries(values).every(([prop, value]) => { //o every valida se todos os valores não retornam msg de erro
            return validations[prop](value) === ''
        });
        
        setErrors({ ...errors });
        setValues({ ...values });
        setFormValid(status);
    }

    return { errors, isFormValid, validate };
}