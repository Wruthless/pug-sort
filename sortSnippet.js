// Original JavaScript function
function(a,b) {
    let nameA = a.title.toUpperCase();
    let nameB = b.title.toUpperCase();
    
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    
    return 0;
}

// pug equivalent
book_list.sort((a,b) => {
    let nameA = a.title.toUpperCase();
    let nameB = b.title.toUpperCase();
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1:0; }
);
