document.getElementById('donation-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const owner = document.getElementById('owner').value;
  const text = document.getElementById('text').value;
  const date = document.getElementById('date').value;
  const items = document.getElementById('items').value.split(',').map(i => i.trim());
  const cost_range = document.getElementById('cost_range').value;
  const current_donations = parseInt(document.getElementById('current_donations').value) || 0;
  const options = document.getElementById('options').value.split(',').map(o => o.trim());
  const limits = {
    max_donation: parseInt(document.getElementById('max_donation').value) || 0
  };

  const data = {
    owner,
    text,
    date,
    items,
    cost_range,
    current_donations,
    options,
    limits
  };

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
