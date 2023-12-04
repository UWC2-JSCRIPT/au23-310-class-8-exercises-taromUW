const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const tableEl = document.getElementById('books-container');

const API_KEY = 'K6S91cY1NyPxNfUrTsP3oVr0dHHs4bnw'
const list = 'hardcover-fiction';

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  const dateToUse = `${year}-${month}-${date}`;
  const url = `https://api.nytimes.com/svc/books/v3/lists/${dateToUse}/${list}.json?api-key=${API_KEY}`;
  
  // Fetch bestselling books for date and add top 5 to page
  const jsonResult = asyncFetch(url);
  async function asyncFetch() {
    try{
      const data = await fetch(url);
      const dataJson = await data.json();
  
      console.log("Async data", data);
      console.log("Async data", dataJson);
      
      for (let i = 0; i < 5; i++) {
        const title = dataJson.results.books[i].title;
        const author = dataJson.results.books[i].author;
        const description = dataJson.results.books[i].description;
        const img = dataJson.results.books[i].book_image;
    
        console.log(dataJson.results.books[i].title);
        console.log(dataJson.results.books[i].author);
        console.log(dataJson.results.books[i].description);
  
        const row = document.createElement("tr");
        const titleCell = document.createElement("td");
        titleCell.textContent = title;
        row.appendChild(titleCell);
  
        var authorCell = document.createElement("td");
        authorCell.textContent = author;
        row.appendChild(authorCell);
  
        var descCell = document.createElement("td");
        descCell.textContent = description;
        row.appendChild(descCell);
  
        var imgCell = document.createElement("img");
        imgCell.src = img
        row.appendChild(imgCell);

        // Append the row to the table
        tableEl.appendChild(row);  
      }
    } catch (err) {
      console.log(err)
    }
  }
});
