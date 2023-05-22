function formatDateString(date) {
    const day = date.getDate().toString(); // Get day as string
    const month = (date.getMonth() + 1).toString(); // Get month as string (add 1 since month is zero-based)
    const year = date.getFullYear().toString(); // Get year as string
  
    // Concatenate day, month, and year with '/' separator
    const formattedDate = [month, day, year].join('/');
  
    return formattedDate;
}

document.querySelectorAll('.last-modified').forEach((element) => {
    element.innerHTML = formatDateString(new Date(document.lastModified));
});
document.querySelectorAll('.current-year').forEach((element) => {
    element.innerHTML = new Date().getFullYear();
});