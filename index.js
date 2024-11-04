/*
 * Checks if the provided email address is valid.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email is valid, otherwise false.
 */

function validateEmail(email){
  const re =/^[^\s@+@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email)
}

module.exports = validateEmail;