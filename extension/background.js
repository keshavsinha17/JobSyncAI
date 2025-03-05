chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "saveJob") {
      fetch("http://localhost:3000/api/jobs/add", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify(message.jobData)
      })
      .then(response => response.json())
      .then(data => sendResponse({ success: true, data }))
      .catch(error => sendResponse({ success: false, error }));
      return true;
  }
});
