// script.js
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    var query = document.getElementById('search-input').value.toLowerCase(); // Get search input and convert to lowercase

    // Redirect based on the query
    switch (query) {
        case 'electronics':
            window.location.href = 'electronic.html'; // Redirect to the Electronics page
            break;
        case 'fashion':
            window.location.href = 'fashion.html'; // Redirect to the Fashion page
            break;
        case 'tv':
            window.location.href = 'tv-&-appliances.html'; // Redirect to the Home page
            break;
            case 'home appliances':
            window.location.href = 'tv-&-appliances.html'; // Redirect to the Home page
            break;
            case 'kitchen':
            window.location.href = 'home&kitchen.html'; // Redirect to the Home page
            break;
            case 'home':
            window.location.href = 'home&kitchen.html'; // Redirect to the Home page
            break;
            case 'beauty':
            window.location.href = 'beauty.html'; // Redirect to the Home page
            break;
            case 'makeup':
            window.location.href = 'beauty.html'; // Redirect to the Home page
            break;
            case 'mobile':
                window.location.href = 'oneplus.html'; // Redirect to the Home page
                break;
        default:
            alert('No results found for "' + query + '"'); // Alert if no match is found
            break;
    }
});
