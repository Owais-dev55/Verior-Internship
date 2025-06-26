var userpara = document.querySelector('.user-data');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    return userpara.innerHTML = data.map(function (user) { return "<p>".concat(user.name, " (").concat(user.email, ")</p>"); }).join('');
})
    .catch(function (err) { return console.error('Fetch error:', err); });
