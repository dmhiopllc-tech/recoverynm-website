# Recovery NM Website

Official website repository for **Recovery NM**, a New Mexico nonprofit working to reduce financial barriers to substance use treatment through treatment scholarship support.

**Live Website:** https://myrecoverynm.org

---

## About Recovery NM

Recovery NM was founded to help New Mexico residents who face financial barriers to substance use treatment.

Our mission is to raise community support and use those resources to help create treatment scholarship opportunities for New Mexicans who might otherwise struggle to access care.

Recovery NM is **not limited to one treatment center**. The organization supports access to treatment and works with community partners, donors, treatment providers, and other organizations to help New Mexico residents pursue appropriate care.

**New Mexicans Helping New Mexicans.**

---

## Website Pages

The current website consists of four primary public pages:

- `index.html` — Homepage and mission
- `donate.html` — Donation and treatment scholarship support
- `community-partners.html` — Community partners and organizational support
- `staff.html` — Our Story & Leadership

---

## Project Structure

```text
recoverynm-website/
├── index.html
├── donate.html
├── community-partners.html
├── staff.html
├── _redirects
├── robots.txt
├── sitemap.xml
├── netlify.toml
├── .gitignore
├── README.md
├── LOGO.png
├── HERO-CLIMBERS.jpg
├── HEART-HANDS.jpg
├── PAYPAL-QR.png
└── css/
    └── main.css
```

---

## Deployment

The website is hosted on **Netlify** and connected directly to this GitHub repository.

Changes committed to the `main` branch are automatically deployed to the production website.

### Deployment Workflow

1. Edit or replace the appropriate file in GitHub.
2. Commit the change to the `main` branch.
3. Netlify automatically detects the new commit.
4. Netlify builds and publishes the updated site.
5. Verify the change at https://myrecoverynm.org.

---

## Domain & DNS

**Domain:** myrecoverynm.org  
**DNS Management:** Cloudflare  
**Hosting:** Netlify  
**SSL/HTTPS:** Enabled

The website is served securely over HTTPS.

---

## Brand & Design

The current Recovery NM website uses a warm nonprofit-focused visual system built around burgundy, cream, sand, and gold.

### Primary Colors

- **Burgundy:** `#681c1f`
- **Dark Burgundy:** `#481114`
- **Sand:** `#f6f0e7`
- **Cream:** `#fffaf4`
- **Gold:** `#d7a24a`
- **Light Gold:** `#f1ca82`
- **Dark Text:** `#24211f`

### Typography

- **Headings:** Georgia / Times New Roman / serif
- **Body:** Arial / Helvetica / sans-serif

The website is designed to be responsive across desktop, tablet, and mobile devices.

---

## Website Assets

### `LOGO.png`

Official Recovery NM logo used throughout the website.

### `HERO-CLIMBERS.jpg`

Primary hero image representing support, progress, and recovery.

### `HEART-HANDS.jpg`

Supporting mission image used throughout the website.

### `PAYPAL-QR.png`

QR code used on the donation page for donation access.

---

## SEO

The repository includes:

- `sitemap.xml` — Lists the primary public pages for search engines
- `robots.txt` — Allows search-engine crawling and identifies the sitemap
- Canonical URLs on primary pages
- Page-specific titles and meta descriptions
- Open Graph metadata
- Social sharing metadata
- Structured data
- Descriptive image alternative text
- Internal linking between primary pages

Current sitemap:

https://myrecoverynm.org/sitemap.xml

Current robots file:

https://myrecoverynm.org/robots.txt

---

## Redirects

Netlify redirects are managed through the `_redirects` file.

Current alternate/legacy URL redirects include:

```text
/team       → /staff.html
/team/      → /staff.html
/about      → /staff.html
/about/     → /staff.html
/partners   → /community-partners.html
/partners/  → /community-partners.html
/donate     → /donate.html
/donate/    → /donate.html
```

Permanent redirects use HTTP status code `301`.

---

## Contact Information

**Recovery NM**  
3301 Southern Blvd. SE, Suite 105  
Rio Rancho, NM 87124

**Email:** info@myrecoverynm.org  
**Website:** https://myrecoverynm.org

Recovery NM website contact information is maintained separately from Desert Mountain Healing IOP contact information.

---

## Leadership

- **Gary Gamboa** — President
- **Sean Roberts** — Vice President
- **Fred Gamboa** — Board Member at Large
- **Tatiana Schnierow** — Office Manager

---

## Community Support

Recovery NM works with community organizations, donors, treatment providers, public partners, volunteers, and advocates to expand access to substance use treatment.

Community support recognized on the website includes:

- Desert Mountain Healing IOP
- Nusenda Credit Union
- Sandoval County
- Individual donors, volunteers, and community supporters

Nusenda Credit Union's support helped Recovery NM fund treatment for two New Mexico clients.

---

## Making Website Updates

### GitHub Web Interface

For straightforward updates:

1. Open the file in this repository.
2. Select the edit/pencil option.
3. Make the necessary change.
4. Commit the change to `main`.
5. Wait for Netlify to deploy the new commit.
6. Verify the live page after deployment.

For major page redesigns, replace the complete HTML file rather than making numerous small edits to an outdated version.

---

## Important Links

**Website:** https://myrecoverynm.org  
**GitHub Repository:** https://github.com/dmhiopllc-tech/recoverynm-website  
**Netlify:** https://app.netlify.com/

---

## Emergency & Crisis Information

Recovery NM is **not an emergency or crisis service**.

If you or someone you know is in immediate danger, call **911**.

For suicide or mental health crisis support in the United States, call or text **988**.

---

## Copyright

© 2026 Recovery NM. All rights reserved.

---

## Mission

**Helping New Mexico residents overcome financial barriers to substance use treatment through treatment scholarship support.**

**New Mexicans Helping New Mexicans.**
