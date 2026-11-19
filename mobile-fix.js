document.addEventListener('DOMContentLoaded', () => {
  const mobileContact = document.getElementById('mobile-contact');
  if (!mobileContact) return;

  const updateMobileContact = () => {
    mobileContact.classList.toggle('is-visible', window.scrollY > 520);
  };

  window.addEventListener('scroll', updateMobileContact, { passive: true });
  updateMobileContact();
});
