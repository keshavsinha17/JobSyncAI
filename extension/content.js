// Function to extract job details from LinkedIn
function extractLinkedInJobDetails() {
  const jobDetails = {
    title: '',
    company: '',
    description: '',
    salary: 'Not specified',
    link: window.location.href,
    platform: 'LinkedIn'
  };

  try {
    // Get job title - matches the "Software Engineer Intern" text
    jobDetails.title = document.querySelector('h1.t-24')?.textContent?.trim() ||
                      document.querySelector('.job-details-jobs-unified-top-card__job-title')?.textContent?.trim() ||
                      '';

    // Get company name - matches "GoQuant"
    jobDetails.company = document.querySelector('.topcard__org-name-link')?.textContent?.trim() ||
                        document.querySelector('.jobs-unified-top-card__company-name')?.textContent?.trim() ||
                        document.querySelector('.company-name-text')?.textContent?.trim() ||
                        '';

    // Get job description
    jobDetails.description = document.querySelector('.description__text')?.textContent?.trim() ||
                            document.querySelector('.jobs-description__content')?.textContent?.trim() ||
                            '';

    // Get location
    const location = document.querySelector('.topcard__flavor--bullet')?.textContent?.trim() ||
                    document.querySelector('.jobs-unified-top-card__bullet')?.textContent?.trim() ||
                    '';
    
    // Add location to description if found
    if (location) {
      jobDetails.description = `Location: ${location}\n\n${jobDetails.description}`;
    }

    console.log('Found LinkedIn job details:', jobDetails);
  } catch (error) {
    console.error('Error extracting LinkedIn job details:', error);
  }

  return jobDetails;
}

// Function to extract job details from Indeed
function extractIndeedJobDetails() {
  const jobDetails = {
    title: '',
    company: '',
    description: '',
    link: window.location.href,
    platform: 'Indeed'
  };

  try {
    // Indeed specific selectors
    jobDetails.title = document.querySelector('.jobsearch-JobInfoHeader-title')?.textContent?.trim() || '';
    jobDetails.company = document.querySelector('.jobsearch-CompanyInfoContainer .companyName')?.textContent?.trim() || '';
    jobDetails.description = document.querySelector('#jobDescriptionText')?.textContent?.trim() || '';

    console.log('Found Indeed job details:', jobDetails);
  } catch (error) {
    console.error('Error extracting Indeed job details:', error);
  }

  return jobDetails;
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getJobDetails') {
    console.log('Received getJobDetails message');
    let jobDetails = {};
    
    // Determine which platform we're on and extract details accordingly
    if (window.location.hostname.includes('linkedin.com')) {
      console.log('Extracting LinkedIn job details');
      jobDetails = extractLinkedInJobDetails();
    } else if (window.location.hostname.includes('indeed.com')) {
      console.log('Extracting Indeed job details');
      jobDetails = extractIndeedJobDetails();
    }

    console.log('Sending job details:', jobDetails);
    sendResponse(jobDetails);
  }
  return true; // Keep the message channel open for async response
});
