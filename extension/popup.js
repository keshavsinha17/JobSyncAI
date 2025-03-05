/* popup.js */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('job-form');
    
    // Load saved details
    chrome.storage.local.get('currentJobDetails', (data) => {
        if (data.currentJobDetails) {
            fillFormWithData(data.currentJobDetails);
        } else {
            // If no saved data, get from page
            getCurrentTabDetails();
        }
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const jobData = {
            title: document.getElementById("job-title").value,
            company: document.getElementById("company").value,
            description: document.getElementById("description").value,
            salary: document.getElementById("salary").value,
            link: window.location.href,
            status: "pending"
        };

        // Save to storage before sending to backend
        chrome.storage.local.set({ 'currentJobDetails': jobData });

        try {
            const response = await saveJobToBackend(jobData);
            if (response.success) {
                alert("Job saved successfully!");
                chrome.storage.local.remove('currentJobDetails');
                window.close();
            } else {
                alert("Error saving job. Please try again.");
            }
        } catch (error) {
            alert("Error connecting to server. Please try again.");
        }
    });
});

function fillFormWithData(data) {
    document.getElementById("job-title").value = data.title || '';
    document.getElementById("company").value = data.company || '';
    document.getElementById("description").value = data.description || '';
    document.getElementById("salary").value = data.salary || '';
}

function validateForm() {
    const required = ['job-title', 'company', 'description'];
    let isValid = true;

    required.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const error = field.nextElementSibling;
        if (!field.value.trim()) {
            error.style.display = 'block';
            isValid = false;
        } else {
            error.style.display = 'none';
        }
    });

    return isValid;
}

async function saveJobToBackend(jobData) {
    const response = await fetch("http://localhost:3000/api/jobs/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(jobData)
    });
    return await response.json();
}

function getCurrentTabDetails() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getJobDetails" }, (response) => {
            if (response) {
                fillFormWithData(response);
            }
        });
    });
}
