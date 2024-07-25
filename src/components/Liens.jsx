import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, Switch } from 'react-router-dom';
import Liste_tableau from './Liste_tableau';
import Formulaire from './Formulaire';


// const dataTest = await $fetch("https://localhost:3000/wsuser.php")


export default function Liens() {
    // const data = [
    //     { id: 1, name: "John Doe", email: "john@example.com" },
    //     { id: 2, name: "Jane Smith", email: "jane@example.com" },
    //     { id: 3, name: "Bob Johnson", email: "bob@example.com" }
    //   ];

    const [dataService, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/listeData");
                if (!response.ok) {
                    throw new Error('Erreur réseau');
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

  return (
    <div className="link">
      <nav>
        <ul>
          <li>
            <Link to="/liste_user">Liste</Link>
          </li>
          <li>
            <Link to="/inserer_data">Insertion</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

        <Routes>
            <Route path="/liste_user" element={<Liste_tableau data={dataService}/>} />
            <Route path="/inserer_data" element={<Formulaire data = {dataService} />} />
        </Routes>
        

      {/* Uncomment the Switch and Route components if you have corresponding components to render */}
      {/* <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch> */}
    </div>
  );
}
