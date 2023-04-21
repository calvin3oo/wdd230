function formatDateString(date) {
    const day = date.getDate().toString(); // Get day as string
    const month = (date.getMonth() + 1).toString(); // Get month as string (add 1 since month is zero-based)
    const year = date.getFullYear().toString(); // Get year as string
  
    // Concatenate day, month, and year with '/' separator
    const formattedDate = [day, month, year].join('/');
  
    return formattedDate;
}

document.getElementById('last-modified').innerHTML = formatDateString(new Date(document.lastModified));
document.getElementById('current-year').innerHTML = new Date().getFullYear();

  