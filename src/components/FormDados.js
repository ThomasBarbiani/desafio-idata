import React, { useState } from "react";
import "./formDados.css";
import InputDados from "./InputDados";
import { Link} from "react-router-dom";

import SubmitRegistro from "../hooks/postData";

const FormDados = () => {
    const [values, setValues] = useState({
        processo: "",
        processoAno: "",
        modalidade: "",
        tipo: "",
        localDesembaraco: "",
        canal: "",
        due: "",
        dataRegistroDue: "",
        exportador: "",
        fatura: "",
        dataDeAbertura: "",
        dataDeEmbarque: "",
        descricao: "",
    });

    const inputs = [
        {
            id: "processo",
            name: "processo",
            type: "number",
            placeholder: "Processo",
            label: "Processo",
            required: true,
        },
        {
            id: "processoAno",
            name: "processoAno",
            type: "number",
            placeholder: "Ano do Processo",
            label: "Ano do Processo",
            required: true,
        },
        {
            id: "modalidade",
            name: "modalidade",
            type: "text",
            placeholder: "Modalidade",
            label: "Modalidade",
            required: true,
        },
        {
            id: "tipo",
            name: "tipo",
            type: "text",
            placeholder: "Tipo",
            label: "Tipo",
            required: true,
        },
        {
            id: "localDesembaraco",
            name: "localDesembaraco",
            type: "text",
            placeholder: "Local de Desembarque",
            label: "Local de Desembarque",
            required: true,
        },
        {
            id: "canal",
            name: "canal",
            type: "text",
            placeholder: "Canal",
            label: "Canal",
            required: true,
        },
        {
            id: "due",
            name: "due",
            type: "text",
            placeholder: "DU-E",
            label: "DU-E",
            required: true,
        },
        {
            id: "dataRegistroDue",
            name: "dataRegistroDue",
            type: "date",
            placeholder: "Data de Registro do DU-E",
            label: "Data de Registro do DU-E",
            required: true,
        },
        {
            id: "exportador",
            name: "exportador",
            type: "text",
            placeholder: "Exportador",
            label: "Exportador",
            required: true,
        },
        {
            id: "fatura",
            name: "fatura",
            type: "text",
            placeholder: "Fatura",
            label: "Fatura",
            required: true,
        },
        {
            id: "dataDeAbertura",
            name: "dataDeAbertura",
            type: "date",
            placeholder: "Data de Abertura",
            label: "Data de Abertura",
            required: true,
        },
        {
            id: "dataDeEmbarque",
            name: "dataDeEmbarque",
            type: "date",
            placeholder: "Data de Embarque",
            label: "Data de Embarque",
            required: true,
        },
        {
            id: "descricao",
            name: "descricao",
            type: "text",
            placeholder: "Descrição",
            label: "Descrição",
            required: true,
        },
    ];

    const { handleSubmit, isSubmitted } = SubmitRegistro(values);

    const onSubmit = (e) => {
        e.preventDefault(); 
        handleSubmit(); 
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="cadastro">
            <form onSubmit={onSubmit}>
                <div className="title">
                    <h1>Adicionar Dados</h1>
                </div>
                {inputs.map((input) => (
                <InputDados
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                />
                ))}
                <div className="button-group">
                    <Link to="/" className="cancel-link">
                        <button className="cancel-button">Cancelar</button>
                    </Link>
                    {!isSubmitted && (
                        <button type="submit" className="submit-button">Enviar</button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default FormDados;