import axios from 'axios';

//Puxa os dados da API
export const fetchData = async () => {
    try {
        const response = await axios.get('https://portal.comex360.idata.com.br:8789/process');
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};