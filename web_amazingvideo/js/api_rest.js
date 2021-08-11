var	dataMovies = [];
const div = document.getElementById("divMovies");
const table = document.getElementById("dtMovies");

window.addEventListener('load',()=>{
	fetch('http://localhost:3000')
		.then(data => data.json())
		.then(movies =>{
			listMovies(movies);
	});


 function listMovies(dataMovies){
 		dataMovies.map((movie,i)=>{
		let titulo = document.createElement('li');
		titulo.innerHTML = movie.title;
		div.appendChild(titulo);

		const row = table.insertRow();
		 row.innerHTML = `
		 	<td><img src='${movie.image}' width="200" height="300"'/>
		 	</td>
			<td   WIDTH="360">
			<h2>${movie.title}</h2>
				Sinopsis:
				<p> 
				${movie.description}
				</p>
			</td>
			<td   WIDTH="60"></td>
				<td   WIDTH="300">
				<p>
				Año:${movie.year}<br>
				Genero: ${movie.gerne}<br>
				Dirección:${movie.director}<br>
				Guión:${movie.writer}<br>
				Calificación: ${movie.iDrate}
			</td>

			<td>
	            <input type="checkbox">
	        </td>
	        <td>
	         <button>
	            <i>Ver</i>
	            </button>
			</td>
			`;

	});
 }

});
