
document.addEventListener('DOMContentLoaded', () => {
  const jobListings = document.getElementById('job-listings');

  // Fetch jobs from RemoteOK API (example API, replace with your preferred API)
  fetch('https://remoteok.com/api')
    .then(response => response.json())
    .then(data => {
      data.slice(0, 10).forEach(job => {
        // Create a Bootstrap card for each job
        const jobCard = `
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">${job.position}</h5>
                <p class="card-text">${job.company}</p>
                <a href="${job.url}" class="btn btn-primary" target="_blank">Apply Now</a>
              </div>
            </div>
          </div>`;
        jobListings.innerHTML += jobCard;
      });
    })
    .catch(error => {
      jobListings.innerHTML = '<p>Sorry, jobs could not be loaded at the moment.</p>';
      console.error('Error fetching jobs:', error);
    });
});
