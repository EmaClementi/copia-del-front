import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Libro from './Libro';
import './ListaDeLibros.css';

function ListaDeLibros() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/libro")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error al cargar los libros:", error));
  }, []);

  return (
    <div className="card-container">
      <div className="card-list">
        {books.map((libro) => (
          <div key={libro.book_id}>
            {/* El enlace a la página de detalles del libro */}
            <Link to={`/libro/${libro.book_id}`}>
              <Libro libro={libro} />
            </Link>
          </div>
        ))}
      </div>
      <Link to="/cargarlibros">
        <button>Regresar a la carga</button>
      </Link>
    </div>
  );
}

export default ListaDeLibros;
