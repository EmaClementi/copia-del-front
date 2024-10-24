import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './LibroDetalles.css';

function LibroDetalles() {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);

  // useEffect para obtener los detalles del libro según el ID de la URL
  useEffect(() => {
    const fetchLibro = async () => {
      try {
        const response = await fetch(`http://localhost:3000/libro/${id}`);
        const data = await response.json();
        setLibro(data); // Guardar los detalles del libro
      } catch (error) {
        console.error("Error al obtener los detalles del libro:", error);
      }
    };

    fetchLibro();
  }, [id]);

  // Si no se encuentra el libro o aún no se han cargado los datos, mostrar un mensaje
  if (!libro) {
    return <div>Libro no encontrado</div>;
  }

  return (
    <div className="detalle-container">
      <img src={libro.imagen} alt={libro.title} className="detalle-img" />
      <div className="detalle-info">
        <p className="detalle-title">Título: {libro.title}</p>
        <p className="detalle-author">Autor: {libro.autor}</p>
        <p className="detalle-isbn">ISBN: {libro.isbn}</p>
        <p className="detalle-year">Año de Publicación: {libro.publication_year}</p>
        <p className="detalle-origin">Origen: {libro.origin}</p>
        <p className="detalle-copy-number">Número de Copia: {libro.copy_number}</p>
        <p className="detalle-description">{libro.descripcion}</p>
      </div>
      <Link to="/listadelibros">
        <button>Volver a la lista</button>
      </Link>
    </div>
  );
}

export default LibroDetalles;
