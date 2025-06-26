
const userpara = document.querySelector('.user-data') as  HTMLParagraphElement


fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => 
   userpara.innerHTML = data.map((user: { name: string , email: string }) => `<p>${user.name} (${user.email})</p>`).join('')
)
  .catch(err => console.error('Fetch error:', err));