const pages = {
  "privacy-policy": {
    category: "PRIVACY & DATA",
    title: "Privacy Policy",
    intro: "Your trust matters. This policy explains what information may be handled when you use GEO Academy and how it may be used.",
    notice: "We aim to use information only to provide educational features, protect accounts, and support students.",
    sections: [
      ["1. About this policy", `<p>This Privacy Policy applies to the GEO Academy website and its educational features. The administrator should update this document to reflect the services actually enabled on the live website. By using the website, you acknowledge that you have had an opportunity to read this policy.</p>`],
      ["2. Information that may be collected", `<p>Depending on the features you use, GEO Academy may process:</p><ul><li><strong>Account details:</strong> name, email address, authentication provider, and profile information you submit.</li><li><strong>Learning activity:</strong> selected class, quiz answers and scores, XP, leaderboard entries, and learning progress, where those features are enabled.</li><li><strong>Messages and uploads:</strong> information you submit through contact, admission, or other forms and files you upload, if supported.</li><li><strong>Technical information:</strong> limited device, browser, and security information that may be processed by the hosting or service providers.</li></ul><p>Do not submit sensitive personal information unless it is specifically necessary and the website clearly requests it.</p>`],
      ["3. How information is used", `<p>Information may be used to create and manage accounts, provide class-specific learning materials, save quiz results and progress, operate rankings, respond to requests, protect the service against misuse, and maintain or improve website functionality.</p>`],
      ["4. Authentication, storage and service providers", `<p>The website may use Firebase Authentication for sign-in and Cloud Firestore for data storage. Other services, such as file storage or website hosting, may be used if configured. These providers process information under their own terms and privacy policies. The administrator must confirm which services are active before publishing this page.</p>`],
      ["5. Sharing and disclosure", `<p>GEO Academy should not sell students' personal information. Information may be processed by service providers needed to run the website, or disclosed where required by law or necessary to protect the service and its users. Public leaderboard or profile details should be limited to what is necessary for the feature and clearly explained to students.</p>`],
      ["6. Data security and retention", `<p>Reasonable technical and organisational safeguards should be used, including appropriate access controls and secure configuration. No online service can guarantee absolute security. Information should be kept only for as long as reasonably needed for the stated educational, operational, or legal purpose and then deleted or anonymised where appropriate.</p>`],
      ["7. Your choices and deletion requests", `<p>You may ask the GEO Academy administrator to review, correct, or delete personal information associated with your account, subject to applicable legal obligations and legitimate record-keeping needs. Some information may also be managed through the account or authentication provider. Add and maintain a verified contact method so users can make these requests.</p>`],
      ["8. Children and student privacy", `<p>GEO Academy may be used by school students. Where a user is a child, the administrator should follow applicable privacy and child-protection laws, provide age-appropriate explanations, and obtain parental or guardian involvement or consent where legally required. Avoid collecting more information than is needed for education.</p>`],
      ["9. Cookies and analytics", `<p>This site should describe cookies, analytics, advertising, or tracking only if those tools are actually enabled. Check the hosting platform and any connected services, and update this section if their settings change.</p>`],
      ["10. Changes to this policy", `<p>This policy may be updated when the website or its data practices change. The latest version should be published on this page with a revised review date. Material changes should be communicated where appropriate.</p>`],
      ["11. Contact", `<p>For privacy questions or data requests, contact the GEO Academy administrator through the official contact channel published on the website. Before launch, replace this instruction with a verified email address or other reliable contact method.</p>`]
    ]
  },
  "terms-and-conditions": {
    category: "WEBSITE GUIDELINES",
    title: "Terms & Conditions",
    intro: "These terms set out the basic rules for using GEO Academy's educational website and learning features.",
    notice: "Use GEO Academy respectfully, protect your account, and use learning materials for legitimate educational purposes.",
    sections: [
      ["1. Acceptance of terms", `<p>By accessing or using GEO Academy, you agree to follow these Terms & Conditions and applicable laws. If you do not agree, please stop using the website. If you are a child, review these terms with a parent or guardian where appropriate.</p>`],
      ["2. Accounts and eligibility", `<p>Provide accurate information when registering and keep your sign-in credentials secure. You are responsible for activity carried out through your account, except where applicable law provides otherwise. Do not impersonate another person or create accounts to abuse website features.</p>`],
      ["3. Educational use", `<p>GEO Academy provides educational resources such as notes, PDFs, quizzes, maps, and learning progress features. Materials are provided to support learning and may contain errors or become outdated. Check important academic information against your teacher's instructions and trusted sources.</p>`],
      ["4. Acceptable use", `<p>You must not misuse the website. In particular, do not:</p><ul><li>Attempt unauthorised access to accounts, databases, administrative tools, or systems.</li><li>Upload malicious code, disrupt the service, or interfere with other users.</li><li>Cheat, manipulate quiz results or XP, or unfairly alter leaderboard rankings.</li><li>Harass others, impersonate users, or submit unlawful or harmful content.</li><li>Copy, resell, or redistribute protected materials without permission.</li></ul>`],
      ["5. Intellectual property", `<p>Unless stated otherwise, the GEO Academy name, logo, website design, and original learning materials may be protected by intellectual-property laws. You may use materials for personal study where permitted, but you must not claim ownership, remove rights notices, or distribute materials commercially without permission from the relevant rights holder. Third-party materials remain subject to their owners' rights.</p>`],
      ["6. Quizzes, XP and leaderboards", `<p>Quiz scores, XP, levels, and rankings are learning features and are not a guarantee of academic results. GEO Academy may correct inaccurate scores, remove abusive entries, or adjust features to preserve fairness. Do not exploit bugs or use automated methods to manipulate results.</p>`],
      ["7. Availability and updates", `<p>The website or some features may occasionally be unavailable for maintenance, technical issues, or updates. Content, classes, features, and interfaces may change as the service develops. We will make reasonable efforts to maintain useful access but cannot promise uninterrupted availability.</p>`],
      ["8. Third-party services and links", `<p>Sign-in, hosting, file storage, or other features may depend on third-party services. Their services are governed by their own terms and policies. GEO Academy is not responsible for independent third-party websites; review them before sharing information or relying on their content.</p>`],
      ["9. Suspension and termination", `<p>Access may be restricted or an account may be suspended where there is a serious or repeated breach, suspected fraud, security risk, or a legal requirement. Where reasonable and appropriate, the administrator should review the issue and provide an opportunity to resolve it.</p>`],
      ["10. Disclaimers and limitation of liability", `<p>The website is provided on an “as available” basis. To the extent permitted by applicable law, GEO Academy does not guarantee that every resource will be error-free or continuously available. Nothing in these terms excludes rights or liabilities that cannot lawfully be excluded. The administrator should obtain suitable legal advice before relying on this clause.</p>`],
      ["11. Changes to these terms", `<p>These terms may be revised when the website or its features change. The current version will be published on this page. Continued use after updated terms are published may indicate acceptance where permitted by applicable law; where fresh consent is required, it should be obtained.</p>`],
      ["12. Contact", `<p>For questions about these terms, contact the GEO Academy administrator using the official contact details published on the website. Add a verified contact method before launch.</p>`]
    ]
  }
};

const titleEl = document.getElementById('docTitle');
const introEl = document.getElementById('docIntro');
const categoryEl = document.getElementById('docCategory');
const noticeEl = document.getElementById('noticeText');
const bodyEl = document.getElementById('docBody');
const toast = document.getElementById('toast');
const nav = document.getElementById('mainNav');
const menuToggle = document.getElementById('menuToggle');

function currentRoute() {
  const route = location.hash.replace(/^#\/?/, '').trim();
  return pages[route] ? route : 'privacy-policy';
}
function renderPage() {
  const route = currentRoute();
  const page = pages[route];
  document.title = `${page.title} | GEO Academy`;
  titleEl.textContent = page.title;
  introEl.textContent = page.intro;
  categoryEl.textContent = page.category;
  noticeEl.textContent = page.notice;
  bodyEl.innerHTML = page.sections.map(([heading, content]) =>
    `<section class="section"><h3>${heading}</h3>${content}</section>`
  ).join('');
  document.querySelectorAll('[data-route]').forEach(link => {
    const active = link.dataset.route === route;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2200);
}
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
document.getElementById('copyLink').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(location.href);
    showToast('Page link copied');
  } catch {
    showToast('Copy is unavailable in this browser. Copy the address bar link instead.');
  }
});
window.addEventListener('hashchange', renderPage);
document.getElementById('year').textContent = new Date().getFullYear();
if (!location.hash || !pages[currentRoute()]) location.hash = '#privacy-policy';
renderPage();
