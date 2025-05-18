document.getElementById('donation-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const owner = document.getElementById('owner').value;
  const text = document.getElementById('text').value;
  const uploadDate = document.getElementById('uploadDate').value; // make sure this ID matches your HTML
  const itemsNeeded = document.getElementById('items').value.split(',').map(i => i.trim()).join(',');
  const costRange = document.getElementById('cost_range').value;
  const currentDonations = parseInt(document.getElementById('current_donations').value) || 0;
  const donationOptions = document.getElementById('options').value.split(',').map(o => o.trim()).join(',');
  const donationLimit = parseInt(document.getElementById('max_donation').value) || 0;

  // This matches the DB schema exactly:
  const data = {
    owner,
    text,
    uploadDate,
    itemsNeeded,
    costRange,
    currentDonations,
    donationOptions,
    donationLimit
  };

  console.log("Sending data:", data);

  try {
    const response = await fetch("https://donation-api.talsmd95-a82.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (result.success) {
      alert("Donation submitted successfully!");
      e.target.reset();
    } else {
      console.error(result);
      alert("Submission failed. Please try again.");
    }
  } catch (err) {
    console.error(err);
    alert("An error occurred. Please try again.");
  }
});
