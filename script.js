// script.js

$(document).ready(function() {
    // Function to get the current date in the format YYYY-MM-DD
    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Update the content of the #currentDate element with the current date
    $('#currentDate').text(getCurrentDate());
});