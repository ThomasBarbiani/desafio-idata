import {React, useEffect, useState, useRef} from "react"
import {AgGridReact} from "ag-grid-react"

import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 

import { fetchData } from '../hooks/getData';
import Filter from './Filter';

export const Table = () =>{
    
    const [processData, setProcessData] = useState(null);
    const [filterText, setFilterText] = useState('');
    const [pageSize, setPageSize] = useState(19);
    const gridApiRef = useRef(null);


    // Pega os dados da API
    useEffect(() => {
        const fetchDataAPI = async () => {
          const data = await fetchData();
          setProcessData(data);
        };
    
        fetchDataAPI();
    }, []);


    // Colunas da tabela
    const columns = [ 

            {   
                headerName: "id", field: 'id', width: "150px", checkboxSelection: true, 
                headerCheckboxSelection: true, rowDrag: true
            },
            
            {
                headerName: 'Detalhes do Envio',
                children: [
                        {headerName: "Modalidade", field: 'modalidade'},
                        {headerName: "Tipo", field: 'tipo'},
                        {headerName: "Local Desembarco", field: 'localDesembaraco'},
                ],
            },
            
            {
                headerName: 'Detalhes da Transação',
                children: [
                    {headerName: "Exportador", field: 'exportador'},
                    {headerName: "Canal", field: 'canal'},
                    {headerName: "DU-E", field: 'due'},
                ],
            },
            
            {
                headerName: 'Processos',
                children: [
                    {headerName: "Processo", field: 'processo'},
                    {headerName: "Processo Ano", field: 'processoAno'},
                    {headerName: "Descrição", field: 'descricao'},
                ],
            },
            
            {   headerName: "Fatura", field: 'fatura'},

            {
                headerName: 'Datas',
                children: [
                    {headerName: "Data de Abertura", field: 'dataDeAbertura'},
                    {headerName: "Data Registro DU-E", field: 'dataRegistroDue'},
                    {headerName: "Data de Embarque", field: 'dataDeEmbarque'},
                ]
            },
    ]

    const defaultColDef = {
        sortable: true,
        editable: true,
        filter: true,
        floatingFilter: true,
        singleClickEdit: true,
        suppressSpanHeaderHeight: true,
        rowDragManaged:true
    }

    const rowSelectionType = 'multiple';
    const onSelectionChanged = (event)=> {
        console.log(event.api.getSelectedRows()) // Opção de selecionar varias linhas
    }

    const onPageSizeChange = e => {
        setPageSize(e.target.value); // Atualiza a quantidade de linhas
    };

    const onFilterTextChange = (e) => {
        setFilterText(e.target.value); // Atualiza a tabela com o filtro
    };
    
    const onGridReady = (params) => {
        gridApiRef.current = params.api; //Exportar tabela
    };

    const onExportClick = () => {
        if (gridApiRef.current) {
            gridApiRef.current.exportDataAsCsv(); //Exportar tabela
        }
    };

    // Atualiza a tabela com o filtro
    const filteredData = processData
    ? processData.filter((item) =>
        Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase()))
        )
    : [];

    // Permite arrastar linhas
    const onRowDragEnd = (event) => {
        const { overIndex, node } = event;
        const draggedRowData = node.data;
    
        setProcessData((prevData) => {
          const updatedData = [...prevData];
          updatedData.splice(node.rowIndex, 1);
          updatedData.splice(overIndex, 0, draggedRowData);
          return updatedData;
        });
    };

    return(
        <div className='ag-theme-alpine'>
            <Filter pageSize={pageSize} onPageSizeChange={onPageSizeChange} 
                    onFilterTextChange={onFilterTextChange} 
                    onExportClick={onExportClick}
            />
            <AgGridReact 
                rowData={filteredData} 
                columnDefs={columns} 
                defaultColDef={defaultColDef}
                rowSelection={rowSelectionType}
                onSelectionChanged={onSelectionChanged}
                pagination={true}
                paginationPageSize={pageSize}
                animateRows={true}
                onGridReady={onGridReady}
                onRowDragEnd={onRowDragEnd}
            >
            </AgGridReact>
        </div>
    )
}

