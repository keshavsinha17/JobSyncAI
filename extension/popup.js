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

        const saveButton = document.getElementById("save-job");
        saveButton.disabled = true;
        saveButton.textContent = "Saving...";

        try {
            const jobData = {
                title: document.getElementById("job-title").value,
                company: document.getElementById("company").value,
                description: document.getElementById("description").value,
                salary: document.getElementById("salary").value,
                link: window.location.href,
                status: "pending",
                timestamp: new Date().toISOString()
            };

            // Save to storage before sending to backend
            await chrome.storage.local.set({ 'currentJobDetails': jobData });

            const response = await saveJobToBackend(jobData);
            if (response) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.textContent = "Job saved successfully!";
                successMessage.style.color = "green";
                form.appendChild(successMessage);

                // Clear the stored job details
                await chrome.storage.local.remove('currentJobDetails');

                // Close popup after delay
                setTimeout(() => window.close(), 1500);
            }
        } catch (error) {
            console.error('Error saving job:', error);
            const errorMessage = document.createElement('div');
            errorMessage.textContent = `Error: ${error.message || 'Failed to save job'}`;
            errorMessage.style.color = "red";
            form.appendChild(errorMessage);
        } finally {
            saveButton.disabled = false;
            saveButton.textContent = "Save Job";
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
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage(
            {
                action: "saveJob",
                jobData: jobData
            },
            response => {
                if (response && response.success) {
                    resolve(response.data);
                } else {
                    reject(response?.error || 'Failed to save job');
                }
            }
        );
    });
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
