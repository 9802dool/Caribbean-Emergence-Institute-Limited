const fs = require("fs");
const path = require("path");

const dir = path.join("public", "images");
const items = [
  ["course-leadership", "#0B1F3B", "#1F7A6B", "Leadership"],
  ["course-impact", "#1F7A6B", "#C89B3C", "Impact"],
  ["course-business", "#0B1F3B", "#C89B3C", "Business"],
  ["course-compliance", "#1F3A5F", "#1F7A6B", "Compliance"],
  ["course-network", "#0B1F3B", "#2E8B7A", "Network"],
  ["course-conscious-capital", "#1F7A6B", "#0B1F3B", "Capital"],
  ["service-diagnostics", "#0B1F3B", "#1F7A6B", "Diagnostics"],
  ["service-coaching", "#1F7A6B", "#C89B3C", "Coaching"],
  ["service-governance", "#0B1F3B", "#C89B3C", "Governance"],
  ["service-systems", "#1F3A5F", "#1F7A6B", "Systems"],
  ["service-strategy", "#0B1F3B", "#2E8B7A", "Strategy"],
  ["service-insights", "#1F7A6B", "#0B1F3B", "Insights"],
];

for (const [name, c1, c2, label] of items) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs><rect width="640" height="360" fill="url(#g)"/><text x="32" y="320" fill="#F7F5F0" font-family="Georgia, serif" font-size="24">${label}</text></svg>`;
  fs.writeFileSync(path.join(dir, `${name}.svg`), svg);
}

console.log(`Created ${items.length} placeholder images.`);
