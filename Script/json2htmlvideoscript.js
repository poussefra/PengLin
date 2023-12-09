/**
 * The arrow function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */


// Fetch the JSON file
const videoGridList = document.querySelector(".video-grid-list");

document.addEventListener("DOMContentLoaded", function () {
  // Fetch the JSON file
  fetch('./JSON/video.json')
    .then(response => response.json())
    .then(videos => {
      // Create HTML content using the JSON data

      for (let i = 0; i < videos.length; i++) {
        let videoGridItem = document.createElement("div");
        videoGridList.append(videoGridItem);

        let videoItem = document.createElement("div");

        videoItem.setAttribute("id", "video-"+ i);

        const htmlContent = `
            <div class="video-item-details">
              <div class="video-item-details-inner">
                <span class="video-item-prefix">${videos[i].venue}
                </span>
                <h3 class="video-item-title"> ${videos[i].performance} </h3>
              </div>
              <span class="video-item-date"> ${videos[i].date}
              </span>
              <iframe width="320" height="180" src='${videos[i].embedcode}' title='${videos[i].performance}' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        `;

        videoItem.innerHTML = htmlContent;
        videoGridItem.append(videoItem);

      }


    })
    .catch(error => console.error('Error fetching JSON:', error));
});
