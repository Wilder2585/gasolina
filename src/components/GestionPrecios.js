import { Link } from "react-router-dom";
import Form from "./Form";


function GestionPrecios(){
    return(
        <div>
            <div className="container w-75 my-5">
            <button type="button" class="btn btn-outline-primary btn-lg">Nuevo</button>
            </div>
            <div className="container w-75 mb-5 border-1 rounded shadow">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Tipo de gasolina</th>
                            <th scope="col">Fecha Inicial</th>
                            <th scope="col">Fecha Final</th>                            
                            <th scope="col">Precio</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Bogota</td>
                            <td>Corriente</td>
                            <td>2021-02-26</td>
                            <td>2022-02-26</td>
                            <td>$9.000</td>
                            <td><i class="bi bi-pencil" ></i></td>
                            <td><i class="bi bi-trash"></i></td>
                            
                        </tr>
                        
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Bogota</td>
                            <td>Extra</td>
                            <td>2021-02-26</td>
                            <td>2022-02-26</td>
                            <td>$10.000</td>
                            <td><i class="bi bi-pencil" ></i></td>
                            <td><i class="bi bi-trash"></i></td>
                            
                        </tr>
                    </tbody>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Bogota</td>
                            <td>Diesel</td>
                            <td>2021-02-26</td>
                            <td>2022-02-26</td>
                            <td>$7.000</td>
                            <td><i class="bi bi-pencil" ></i></td>
                            <td><i class="bi bi-trash"></i></td>
                            
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Bogota</td>
                            <td>Gas</td>
                            <td>2021-02-26</td>
                            <td>2022-02-26</td>
                            <td>$5.000</td>
                            <td><i class="bi bi-pencil" ></i></td>
                            <td><i class="bi bi-trash"></i></td>
                            
                        </tr>
                        
                    </tbody>
                </table>
                
                
            </div>
            <Form />
        </div>
        
    );
}
export default GestionPrecios;