import React from "react";

export default function Liste_tableau(props){
    const dataInitial = props.data;

    return (
        <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {dataInitial.map((liste) => (
                <tr key={liste.id}>
                    <td>{liste.id}</td>
                    <td>{liste.name}</td>
                    <td>{liste.email}</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}