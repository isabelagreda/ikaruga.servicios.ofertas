document.addEventListener('DOMContentLoaded', () => {
  const courseDetail = document.getElementById('course-detail');
  if (!courseDetail) return;

  const highlightCommunity = () => {
    const mainBenefit = courseDetail.querySelector('.main-benefit');
    if (mainBenefit && mainBenefit.dataset.enhanced !== 'true') {
      mainBenefit.dataset.enhanced = 'true';
      mainBenefit.innerHTML = '<span class="community-kicker">COMUNIDAD IKARUGA</span><strong>No estudiás sola.</strong><p>Aprendés con un docente, un grupo de tu nivel y práctica guiada para sostener el ritmo.</p>';
    }

    const extraBenefits = courseDetail.querySelector('.community');
    if (extraBenefits && extraBenefits.dataset.enhanced !== 'true') {
      extraBenefits.dataset.enhanced = 'true';
      const label = extraBenefits.querySelector('span');
      const title = extraBenefits.querySelector('strong');
      if (label) label.textContent = 'BENEFICIOS QUE SUMA TU NIVEL';
      if (title) title.textContent = 'Más apoyo para que avances';
    }
  };

  new MutationObserver(highlightCommunity).observe(courseDetail, { childList: true, subtree: true });
  highlightCommunity();
});
