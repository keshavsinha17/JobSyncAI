// Store auth token in chrome.storage instead of localStorage
// let authToken = '';

// Get token when extension starts
// chrome.storage.local.get('authToken', (data) => {
//     if (data.authToken) {
//         authToken = data.authToken;
//     }
// });

let authToken = '';
// copy paste from environment variable

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "saveJob") {
        // Get the current auth token
        chrome.storage.local.get('authToken', async (data) => {
            try {
                const response = await fetch("http://localhost:3000/api/jobs/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${authToken}`
                    },
                    body: JSON.stringify(message.jobData)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const responseData = await response.json();
                sendResponse({ success: true, data: responseData });
            } catch (error) {
                console.error("Error saving job:", error);
                sendResponse({ 
                    success: false, 
                    error: error.message || "Failed to save job"
                });
            }
        });

        return true; // Keep message channel open for async response
    }

    if (message.action === "openPopup") {
        // Store the job details before opening popup
        chrome.storage.local.set({ 
            'currentJobDetails': message.jobDetails 
        }, () => {
            // After storing, trigger popup to open
            chrome.action.openPopup();
        });
        return true;
    }
});

// Listen for installation or update
chrome.runtime.onInstalled.addListener(() => {
    // Initialize storage with empty values
    chrome.storage.local.set({
        'authToken': '',
        'currentJobDetails': null
    });
});

// Handle auth token updates
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local' && changes.authToken) {
        authToken = changes.authToken.newValue;
    }
});
