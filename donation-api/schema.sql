CREATE TABLE donations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  owner TEXT NOT NULL,
  text TEXT NOT NULL,
  uploadDate TEXT NOT NULL,
  itemsNeeded TEXT NOT NULL,
  costRange TEXT NOT NULL,
  currentDonations INTEGER NOT NULL,
  donationOptions TEXT NOT NULL,
  donationLimit INTEGER NOT NULL
);
