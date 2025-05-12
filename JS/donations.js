class Donation {
    static idCounter = 0;

    constructor({ owner, text, uploadDate, itemsNeeded, costRange, currentDonations, donationOptions, donationLimit }) {
        this.id = ++Donation.idCounter;
        this.owner = owner;
        this.text = text;
        this.uploadDate = uploadDate;
        this.itemsNeeded = itemsNeeded;
        this.costRange = costRange;
        this.currentDonations = currentDonations;
        this.donationOptions = donationOptions;
        this.donationLimit = donationLimit;
    }

    createCard() {
        const card = document.createElement('div');
        card.className = 'donation-card';
        card.setAttribute('data-id', this.id); // Attach the unique ID to the DOM

        card.innerHTML = `
            <h2>${this.owner}</h2>
            <p><strong>Posted on:</strong> ${this.uploadDate}</p>
            <p>${this.text}</p>
            <p><strong>Items needed:</strong> ${this.itemsNeeded.join(', ')}</p>
            <p><strong>Estimated Cost:</strong> ${this.costRange}</p>
            <p><strong>Current Donations:</strong> ${this.currentDonations}</p>
            <p><strong>Donation Options:</strong> ${this.donationOptions.join(', ')}</p>
            <p><strong>Donation Limit:</strong> ${this.donationLimit}</p>
            <p><em>Donation ID: #${this.id}</em></p>
        `;

        return card;
    }
}

// Example usage:
const dummyDonations = [
    new Donation({
        owner: "John Doe",
        text: "Looking to gather food supplies for a local shelter.",
        uploadDate: "2025-05-08",
        itemsNeeded: ["Canned food", "Water bottles", "Blankets"],
        costRange: "$100 - $300",
        currentDonations: "$120",
        donationOptions: ["PayPal", "Credit Card", "Bank Transfer"],
        donationLimit: "$300"
    }),
    new Donation({
        owner: "Sarah Cohen",
        text: "Raising funds for school supplies for underprivileged children.",
        uploadDate: "2025-05-07",
        itemsNeeded: ["Notebooks", "Pens", "Backpacks"],
        costRange: "$200 - $500",
        currentDonations: "$340",
        donationOptions: ["Bit", "CashApp"],
        donationLimit: "$500"
    })
];

// Render the posts
const donationsContainer = document.getElementById('donations');
dummyDonations.forEach(donation => {
    donationsContainer.appendChild(donation.createCard());
});
