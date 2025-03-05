// // Function to extract job details from LinkedIn
// function extractLinkedInJobDetails() {
//   const jobDetails = {
//     title: '',
//     company: '',
//     description: '',
//     salary: 'Not specified',
//     link: window.location.href,
//     platform: 'LinkedIn'
//   };

//   try {
//     // Get job title - matches the "Software Engineer Intern" text
//     jobDetails.title = document.querySelector('h1.t-24')?.textContent?.trim() ||
//                       document.querySelector('.job-details-jobs-unified-top-card__job-title')?.textContent?.trim() ||
//                       '';

//     // Get company name - matches "GoQuant"
//     jobDetails.company = document.querySelector('.topcard__org-name-link')?.textContent?.trim() ||
//                         document.querySelector('.jobs-unified-top-card__company-name')?.textContent?.trim() ||
//                         document.querySelector('.company-name-text')?.textContent?.trim() ||
//                         '';

//     // Get job description
//     jobDetails.description = document.querySelector('.description__text')?.textContent?.trim() ||
//                             document.querySelector('.jobs-description__content')?.textContent?.trim() ||
//                             '';

//     // Get location
//     const location = document.querySelector('.topcard__flavor--bullet')?.textContent?.trim() ||
//                     document.querySelector('.jobs-unified-top-card__bullet')?.textContent?.trim() ||
//                     '';
    
//     // Add location to description if found
//     if (location) {
//       jobDetails.description = `Location: ${location}\n\n${jobDetails.description}`;
//     }

//     console.log('Found LinkedIn job details:', jobDetails);
//   } catch (error) {
//     console.error('Error extracting LinkedIn job details:', error);
//   }

//   return jobDetails;
// }

// // Function to extract job details from Indeed
// function extractIndeedJobDetails() {
//   const jobDetails = {
//     title: '',
//     company: '',
//     description: '',
//     link: window.location.href,
//     platform: 'Indeed'
//   };

//   try {
//     // Indeed specific selectors
//     jobDetails.title = document.querySelector('.jobsearch-JobInfoHeader-title')?.textContent?.trim() || '';
//     jobDetails.company = document.querySelector('.jobsearch-CompanyInfoContainer .companyName')?.textContent?.trim() || '';
//     jobDetails.description = document.querySelector('#jobDescriptionText')?.textContent?.trim() || '';

//     console.log('Found Indeed job details:', jobDetails);
//   } catch (error) {
//     console.error('Error extracting Indeed job details:', error);
//   }

//   return jobDetails;
// }

// // Listen for messages from the popup
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'getJobDetails') {
//     console.log('Received getJobDetails message');
//     let jobDetails = {};
    
//     // Determine which platform we're on and extract details accordingly
//     if (window.location.hostname.includes('linkedin.com')) {
//       console.log('Extracting LinkedIn job details');
//       jobDetails = extractLinkedInJobDetails();
//     } else if (window.location.hostname.includes('indeed.com')) {
//       console.log('Extracting Indeed job details');
//       jobDetails = extractIndeedJobDetails();
//     }

//     console.log('Sending job details:', jobDetails);
//     sendResponse(jobDetails);
//   }
//   return true; // Keep the message channel open for async response
// });



(function() {
    // Create and inject floating icon
    const floatingIcon = document.createElement('div');
    floatingIcon.innerHTML = `
        <div id="job-saver-icon" style="
            position: fixed;
            right: 20px;
            top: 50%;
            background: #0073b1;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 9999;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        ">
            <img src="${chrome.runtime.getURL('icons/globe.png')}" width="24" height="24">
        </div>
    `;
    document.body.appendChild(floatingIcon);

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
            // Updated LinkedIn selectors
            jobDetails.title = 
                document.querySelector('h1.t-24')?.textContent?.trim() ||
                document.querySelector('.job-details-jobs-unified-top-card__job-title')?.textContent?.trim() ||
                document.querySelector('.jobs-unified-top-card__job-title')?.textContent?.trim() ||
                '';

            jobDetails.company = 
                document.querySelector('.topcard__org-name-link')?.textContent?.trim() ||
                document.querySelector('.jobs-unified-top-card__company-name')?.textContent?.trim() ||
                document.querySelector('.company-name-text')?.textContent?.trim() ||
                document.querySelector('.jobs-company__name')?.textContent?.trim() ||
                '';

            jobDetails.description = 
                document.querySelector('.description__text')?.textContent?.trim() ||
                document.querySelector('.jobs-description__content')?.textContent?.trim() ||
                document.querySelector('.jobs-description')?.textContent?.trim() ||
                '';

            // Get salary if available
            const salaryElement = 
                document.querySelector('.compensation__salary') ||
                document.querySelector('.salary-range') ||
                document.querySelector('[class*="salary"]');
            if (salaryElement) {
                jobDetails.salary = salaryElement.textContent.trim();
            }

            // Get location
            const location = 
                document.querySelector('.topcard__flavor--bullet')?.textContent?.trim() ||
                document.querySelector('.jobs-unified-top-card__bullet')?.textContent?.trim() ||
                '';

            if (location) {
                jobDetails.description = `Location: ${location}\n\n${jobDetails.description}`;
            }

        } catch (error) {
            console.error('Error extracting LinkedIn job details:', error);
        }

        return jobDetails;
    }

    function extractIndeedJobDetails() {
        const jobDetails = {
            title: '',
            company: '',
            description: '',
            salary: 'Not specified',
            link: window.location.href,
            platform: 'Indeed'
        };

        try {
            // Updated Indeed selectors
            jobDetails.title = 
                document.querySelector('.jobsearch-JobInfoHeader-title')?.textContent?.trim() ||
                document.querySelector('h1.icl-u-xs-mb--xs')?.textContent?.trim() ||
                document.querySelector('[data-testid="jobsTitle"]')?.textContent?.trim() ||
                '';

            jobDetails.company = 
                document.querySelector('.jobsearch-CompanyInfoContainer .companyName')?.textContent?.trim() ||
                document.querySelector('.jobsearch-InlineCompanyRating div')?.textContent?.trim() ||
                document.querySelector('[data-testid="company-name"]')?.textContent?.trim() ||
                '';

            jobDetails.description = 
                document.querySelector('#jobDescriptionText')?.textContent?.trim() ||
                document.querySelector('.jobsearch-jobDescriptionText')?.textContent?.trim() ||
                '';

            // Get salary if available
            const salaryElement = 
                document.querySelector('.jobsearch-JobMetadataHeader-item') ||
                document.querySelector('[class*="salary-snippet"]') ||
                document.querySelector('[class*="SalaryEstimate"]');
            if (salaryElement) {
                jobDetails.salary = salaryElement.textContent.trim();
            }

        } catch (error) {
            console.error('Error extracting Indeed job details:', error);
        }

        return jobDetails;
    }

    function storeJobDetails(details) {
        chrome.storage.local.set({ 'currentJobDetails': details });
    }

  function extractJobDetails() {
        let jobDetails;
        
        // Determine which platform we're on and extract details accordingly
        if (window.location.hostname.includes('linkedin.com')) {
            console.log('Extracting LinkedIn job details');
            jobDetails = extractLinkedInJobDetails();
        } else if (window.location.hostname.includes('indeed.com')) {
            console.log('Extracting Indeed job details');
            jobDetails = extractIndeedJobDetails();
        } else {
            // Generic extraction for other sites
            jobDetails = {
                title: document.querySelector('h1')?.textContent?.trim() || '',
            company: '',
            description: '',
                salary: 'Not specified',
            link: window.location.href,
                platform: 'Other'
            };
        }

        console.log('Extracted job details:', jobDetails);
        storeJobDetails(jobDetails);
        return jobDetails;
    }

    // Listen for icon click
    document.getElementById('job-saver-icon').addEventListener('click', () => {
        const details = extractJobDetails();
        chrome.runtime.sendMessage({
            action: 'openPopup',
            jobDetails: details
        });
    });

    // Listen for messages from popup
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === "getJobDetails") {
            const details = extractJobDetails();
            console.log('Sending job details to popup:', details);
            sendResponse(details);
        }
        return true;
    });

    // Extract details when page loads
    window.addEventListener('load', () => {
        extractJobDetails();
  });
})();
