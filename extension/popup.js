document.addEventListener('DOMContentLoaded', function() {
  console.log('Popup loaded');
  
  // Add submit handler for the form
  document.getElementById('jobForm').addEventListener('submit', handleSubmit);

  // Prevent popup from closing when clicking outside
  chrome.action.setPopup({ popup: '' });
});

async function handleSubmit(event) {
  event.preventDefault();
  
  const jobDetails = {
    title: document.getElementById('title').value,
    company: document.getElementById('company').value,
    description: document.getElementById('description').value,
    salary: document.getElementById('salary').value || '',
    link: document.getElementById('link').value || '',
    status: 'pending'
  };

  try {
    const token = await chrome.storage.local.get('token');
    const response = await fetch('http://localhost:3000/api/jobs/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
      },
      body: JSON.stringify(jobDetails)
    });

    if (response.ok) {
      alert('Job saved successfully!');
      // Clear the form
      document.getElementById('jobForm').reset();
    } else {
      throw new Error('Failed to save job');
    }
  } catch (error) {
    console.error('Error saving job:', error);
    alert('Failed to save job. Please try again.');
  }
} 