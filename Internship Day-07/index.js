const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
const tasks = [...storedTasks];

const inputbox = document.querySelector('.input');
const para = document.querySelector('.para');
const btn = document.querySelector('.btn');
const taskList = document.querySelector('.task-list');

function showTasks() {
    taskList.innerHTML = ""; 
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        const button = document.createElement('button');
        button.innerText = "Delete task";
        button.classList.add('dlt-btn');

        button.addEventListener('click', () => {
            tasks.splice(index, 1); 
            localStorage.setItem('tasks', JSON.stringify(tasks)); 
            showTasks(); 
        });

        li.appendChild(button); 
        taskList.appendChild(li);
    });

    
}

btn.addEventListener('click', (e) => {
    e.preventDefault(); 
    const task = inputbox.value.trim();
    if (task !== "") {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        inputbox.value = "";
        showTasks();
    }
});
showTasks();


//Code for the e-commerce 

const products = [
  { name: "Smartphone", category: "electronics" },
  { name: "Laptop", category: "electronics" },
  { name: "T-shirt", category: "clothing" },
  { name: "Jeans", category: "clothing" },
  { name: "Watch", category: "accessories" },
  { name: "Headphones", category: "electronics" },
  { name: "Necklace", category: "accessories" },
];

const productList = document.querySelector(".product-list");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayProducts(filtered) {
  productList.innerHTML = ""; 
  filtered.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
    `;
    productList.appendChild(div);
  });
}

displayProducts(products);

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");

    if (category === "all") {
      displayProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      displayProducts(filtered);
    }
  });
});

//code for the movie search  
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const moviesContainer = document.getElementById('movies');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) return;

  const apiKey = '2f91ba27'; 
  const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;

  moviesContainer.innerHTML = "<p>Loading...</p>";

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.Response === "True") {
      displayMovies(data.Search);
    } else {
      moviesContainer.innerHTML = `<p>No results found for "${query}"</p>`;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    moviesContainer.innerHTML = "<p>Something went wrong. Please try again.</p>";
  }
});

function displayMovies(movies) {
  moviesContainer.innerHTML = "";

  movies.forEach(movie => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie-card");

    movieEl.innerHTML = `
      <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}" alt="${movie.Title}" />
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
      <p>${movie.Type}</p>
    `;

    moviesContainer.appendChild(movieEl);
  });
}
