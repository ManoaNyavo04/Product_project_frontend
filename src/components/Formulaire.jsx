import React, { useState } from "react"

export default function Formulaire(props){
    const [form, setForm] = useState({ name: '', email: '' });
    //const [initialData, setData] = useState(props.data);

    // fonction maka valeur ny input
    const handleChange = (e) => {
        const { name, value } = e.target; //maka valeur actuel ny input
        setForm({ ...form, [name]: value }); //Mise à jour de l'état du formulaire (form) en utilisant setForm. Par exemple, si le champ d'entrée est email, l'état form sera mis à jour pour que form.email soit égal à la nouvelle valeur entrée.
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = await fetch("http://127.0.0.1:8000/api/insertData", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            if (url.ok) {
                const result = await url.json();
                console.log('Données envoyées avec succès:', result);
            } else {
                console.error('Erreur lors de l\'envoi des données:', url.statusText);
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données:', error);
        }
    };

    /*const handleSubmit = (e) => {
        e.preventDefault();
        const newId = initialData.length ? initialData[initialData.length - 1].id + 1 : 1; // condition mitovy am if else, ex: if(initialData.length) else return 1
        setData([...initialData, { id: newId, ...form }]);
        setForm({ name: '', email: '' });
    }; */

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                Nom:
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                </label>
                <br />
                <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                </label>
                <br />
                <button type="submit">Soumettre</button>
            </form>
        </div>
    );
}