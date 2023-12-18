CREATE SCHEMA sql_literary_threads;
SET search_path TO sql_literary_threads;


CREATE TABLE Usuario(
	ID_Usuario SERIAL PRIMARY KEY,
	Nombre VARCHAR(30),
	Usuario VARCHAR(30),
	Contrasena VARCHAR(25),
	Correo VARCHAR(30)
);

CREATE TABLE Libros(
	ID_Libro SERIAL PRIMARY KEY,
	Titulo VARCHAR(120) UNIQUE,
	Autor VARCHAR(30),
	Ano_Salida DATE,
	Sinopsis VARCHAR(255),
	Calif_General INTEGER,
	Editorial VARCHAR(30),
	Idioma VARCHAR(30),
	Categoria VARCHAR(30)
);

CREATE TABLE Resena(
	ID_Resena SERIAL PRIMARY KEY,
	Calif_Personal INTEGER,
	Comentario VARCHAR(500),
	Fecha DATE,
	ID_Libro_fk SERIAL REFERENCES Libros(ID_Libro),
	ID_Usuario_fk SERIAL REFERENCES Usuario(ID_Usuario)
);

-- Insertar datos
INSERT INTO sql_literary_threads.Usuario (Nombre, Usuario, Contrasena, Correo)
VALUES
    ('Juan Londoño', 'juan123', 'clave123', 'juanlond@gmail.com'),
	('Brayan Horta', 'brayitan23', 'brayan123', 'brayanhorta@gmail.com'),
    ('María Rodríguez', 'maria456', 'password456', 'mariarodriguez@gmail.com');	

INSERT INTO sql_literary_threads.Libros (Titulo, Autor, Ano_Salida, Sinopsis, Calif_General, Editorial, Idioma, Categoria)
VALUES
    ('El señor de los anillos', 'J.R.R. Tolkien', '1954-07-29', 'Fantasía épica', 4, 'Editorial A', 'Español', 'Fantasía'),
    ('1984', 'George Orwell', '1949-06-08', 'Distopía', 4, 'Editorial B', 'Inglés', 'Ciencia Ficción'),
    ('Cien años de soledad', 'Gabriel García Márquez', '1967-05-30', 'Realismo mágico', 4, 'Editorial C', 'Español', 'Realismo Mágico'),
    ('El Gran Gatsby', 'F. Scott Fitzgerald', '1925-04-10', 'Ficción contemporánea', 4, 'Editorial D', 'Inglés', 'Ficción'),
    ('Crónicas marcianas', 'Ray Bradbury', '1950-05-01', 'Ciencia ficción', 4, 'Editorial E', 'Inglés', 'Ciencia Ficción'),
    ('Don Quijote de la Mancha', 'Miguel de Cervantes', '1605-01-16', 'Novela de caballería', 5, 'Editorial F', 'Español', 'Clásico'),
    ('Matar a un ruiseñor', 'Harper Lee', '1960-07-11', 'Drama legal', 4, 'Editorial G', 'Inglés', 'Drama'),
    ('Orgullo y prejuicio', 'Jane Austen', '1813-01-28', 'Romance', 5, 'Editorial H', 'Inglés', 'Romance'),
    ('El Hobbit', 'J.R.R. Tolkien', '1937-09-21', 'Fantasía', 4, 'Editorial A', 'Español', 'Fantasía'),
    ('Crimen y castigo', 'Fyodor Dostoevsky', '1866-11-11', 'Novela psicológica', 5, 'Editorial I', 'Español', 'Drama'),
    ('Siddhartha', 'Hermann Hesse', '1922-09-06', 'Novela filosófica', 4, 'Editorial J', 'Español', 'Filosofía'),
    ('To Kill a Mockingbird', 'Harper Lee', '1960-07-11', 'Southern Gothic', 5, 'Editorial G', 'Inglés', 'Drama');


INSERT INTO sql_literary_threads.Resena (Calif_Personal, Comentario, Fecha, ID_Libro_fk, ID_Usuario_fk)
VALUES
    (4, 'Gran libro, lo recomiendo', '2023-01-15', 5, 1),
    (3, 'Interesante pero complicado', '2023-02-20', 7, 2),	
    (5, 'Muy buen libro, lo recomendaría', '2023-02-21', 9, 1),
    (2, 'Considero que es complejo de leer, pero me gusta', '2023-03-20', 6, 3),
    (4, 'Me lo recomendó una amiga, estoy muy feliz', '2023-03-25', 2, 2),
    (3, 'El autor está loco, que gran imaginación', '2023-12-12', 3, 3),
    (4, 'Parece que todo está en su lugar, lo amé', '2023-08-20', 11, 1),
    (3, 'Comprendo el tema, sin embargo, me gustaría que fuera más fácil de entender', '2023-05-15', 10, 2),
    (5, 'Muchas gracias al universo por este libro!', '2022-09-14', 7, 3)

