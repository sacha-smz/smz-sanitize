const sanitizeHTML = require("xss");

module.exports = (req, _, next) => {
  for (const input of ["params", "query", "body"]) {
    req[input] = sanitize(req[input]);
  }
  next();
};

function sanitize(input) {
  if (!input) return input;

  if (Array.isArray(input)) return input.map(val => sanitize(val));

  if (typeof input === "object") {
    const sanitizedEntries = Object.entries(input).map(([key, val]) => [key, sanitize(val)]);
    return Object.fromEntries(sanitizedEntries);
  }

  return typeof input === "string" ? sanitizeHTML(input) : input;
}
