// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('JobSyncAI extension installed');
});

// Handle authentication
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'authenticate') {
    // Handle authentication with your backend
    authenticateUser(request.token)
      .then(response => {
        chrome.storage.local.set({ token: response.token });
        sendResponse({ success: true });
      })
      .catch(error => {
        sendResponse({ success: false, error: error.message });
      });
    return true; // Will respond asynchronously
  }
});

async function authenticateUser(token) {
  // Implement your authentication logic here
  // This should match your backend authentication
  return { token };
} 