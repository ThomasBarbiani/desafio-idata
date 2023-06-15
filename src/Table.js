import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react"
import {AgGridReact} from "ag-grid-react"

import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 

export const Table = () =>{
    
    const [processData, setProcessData] = useState(null);
    const rowSelectionType = 'single';

    useEffect(function () {
        axios.get('https://portal.comex360.idata.com.br:8789/process')
        .then(response => {
            const data = response.data;
            setProcessData(data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);


    const columns = [
        {headerName: "id", field: 'id', checkboxSelection: true},
        {headerName: "Processo", field: 'processo'},
        {headerName: "Processo Ano", field: 'processoAno'},
        {headerName: "Modalidade", field: 'modalidade'},
        {headerName: "Tipo", field: 'tipo'},
        {headerName: "Local Desembarco", field: 'localDesembaraco'},
        {headerName: "Canal", field: 'canal'},
        {headerName: "Due", field: 'due'},
        {headerName: "Data Registro Due", field: 'dataRegistroDue'},
        {headerName: "Exportador", field: 'exportador'},
        {headerName: "Fatura", field: 'fatura'},
        {headerName: "Data de Abertura", field: 'dataDeAbertura'},
        {headerName: "Data de Embarque", field: 'dataDeEmbarque'},
        {headerName: "Descrição", field: 'descricao'}
    ]

    const defaultColDef = {
        sortable: true,
        editable: true,
        filter: true,
        floatingFilter: true,
    }

    return(
        <div className='ag-theme-alpine'>
            <AgGridReact 
                rowData={processData} 
                columnDefs={columns} 
                defaultColDef={defaultColDef}
                rowSelection={rowSelectionType}
                pagination={true}
                paginationPageSize={18}> 
            </AgGridReact>
        </div>
    )
}

