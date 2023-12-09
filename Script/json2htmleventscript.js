/**
 * The arrow function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

// Fetch the JSON file
const eventGridList = document.querySelector(".event-grid-list");

document.addEventListener("DOMContentLoaded", function () {
  // Fetch the JSON file
  fetch('./JSON/concerts.json')
    .then(response => response.json())
    .then(concerts => {
      // Create HTML content using the JSON data

      for (let i = 0; i < concerts.length; i++) {
        let eventGridItem = document.createElement("div");
        eventGridList.append(eventGridItem);

        let eventItem = document.createElement("div");

        const htmlContent = `
            <img src="${concerts[i].image}" width="500" height="300" alt=" concert image">
            <div class="event-item-details">
              <div class="event-item-details-inner">
                <span class="event-item-prefix">${concerts[i].venue}
                </span>
                <h3 class="event-item-title"> ${concerts[i].performance} </h3>
              </div>
              <span class="event-item-date"> ${concerts[i].date}
              </span>
        `;

        eventItem.innerHTML = htmlContent;
        eventGridItem.append(eventItem);
      }

    })
    .catch(error => console.error('Error fetching JSON:', error));
});