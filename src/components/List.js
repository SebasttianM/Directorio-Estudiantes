import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../helpers/url";
import "../styles/List.css";

export const List = () => {
  const [registro, setRegistro] = useState([]);

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        setRegistro(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(registro);
  };
/// 
  const deleteData=(id)=>{
      axios
        .delete(url+id)
        .then(response =>{
            getData()
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
  }

  useEffect(() => {
      getData();
  }, []);

  return (
    <div>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Tipo Documento</th>
            <th>Número Documento</th>
            <th>Teléfono</th>
            <th>Celular</th>
            <th>Dirección</th>
            <th>Imagen</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>
          {registro.map((reg) => (
            <tr key={reg.id}>
              <td>{reg.nombre}</td>
              <td>{reg.tipo}</td>
              <td>{reg.numero}</td>
              <td>{reg.telefono}</td>
              <td>{reg.direccion}</td>
              <td><img src={reg.imagen} alt="" width="40px" height="30px"/></td>
              <td>
                <button onClick={()=>deleteData(reg.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
