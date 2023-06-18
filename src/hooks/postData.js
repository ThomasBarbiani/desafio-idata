import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitRegistro = (values) => {
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async () => {
        try {
        const response = await fetch("https://portal.comex360.idata.com.br:8789/process", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            setIsSubmitted(true);
            navigate("/");
        } else {
            console.log("Erro ao enviar os dados.");
        }
        } catch (error) {
            console.log("Erro:", error);
        }
    };

    return { handleSubmit, isSubmitted };
};

export default SubmitRegistro;