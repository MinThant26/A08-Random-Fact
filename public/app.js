window.onload = get_fact;

function get_fact(){
    fetch('/random-fact')
    .then(response => response.json())
    .then(res => {
        const display_fact = document.querySelector('.display-fact');
        const display_fact_id = document.querySelector('.display-fact-id');
    
        display_fact.textContent = res.fact;
        display_fact_id.textContent = 'ID: ' + res.id;
    })
}