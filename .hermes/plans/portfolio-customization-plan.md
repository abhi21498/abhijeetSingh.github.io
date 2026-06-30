# Portfolio Customization Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Clone the Ayan Arshad GitHub Pages portfolio repository and customize it with Abhijeet Singh's personal information, resume, and portfolio items to create a personal portfolio site.

**Approach:** Fork/clone the existing al-folio based repository, update configuration files, replace personal bio, resume PDF and JSON, update social links, and verify the site builds locally.

**Tech Stack:** Jekyll (Ruby), GitHub Pages, HTML/CSS/Markdown, JSONResume schema.

---

## Requirements Traceability Matrix

| Requirement ID | Description                                   | Component(s) Affected               | Verification Method                |
|----------------|-----------------------------------------------|-------------------------------------|------------------------------------|
| R1             | Display Abhijeet Singh's name and bio         | _config.yml, _pages/about.md        | Visual inspection of rendered site |
| R2             | Show Abhijeet's resume (PDF & JSON)           | assets/pdf/*, assets/json/resume.json, _pages/cv.md | Link click opens correct PDF/JSON |
| R3             | Link to Abhijeet's social profiles (GitHub, LinkedIn, etc.) | assets/json/resume.json, _config.yml (social) | Icons link to correct profiles |
| R4             | Show Abhijeet's projects and experience       | _pages/projects.md, _pages/repositories.md, resume.json projects section | Content matches provided details |
| R5             | Site builds and serves without errors         | Jekyll build process                | `bundle exec jekyll serve` succeeds |
| R6             | Deployable to GitHub Pages (username.github.io) | _config.yml url/baseurl, GitHub repo | Push to `<username>.github.io` builds successfully |

---

## Implementation Plan

### Task 1: Clone Repository to New Location
**Objective:** Obtain a clean copy of the source portfolio repository under a new name for customization.

**Files:**  
- Create: `D:\OneDrive - EasyRewardz Software Services Private Limited\Desktop\Myprojects\portfolio\AbhijeetSingh_portfolio\` (clone target)

**Steps:**
1. Open terminal in desired parent directory.
2. Run `git clone https://github.com/ayanarshad02/ayanarshad02.github.io.git AbhijeetSingh_portfolio`
3. `cd AbhijeetSingh_portfolio`
4. Verify remote origin: `git remote -v`

**Verification:**  
- Directory contains `_config.yml`, `_pages/`, `assets/`, etc.  
- Run `git status` shows clean working tree.

---

### Task 2: Update Site Configuration (_config.yml)
**Objective:** Replace site-wide metadata with Abhijeet Singh's details.

**Files:**  
- Modify: `_config.yml`

**Changes:**
- `title:` (leave blank to use full name) or set to Abhijeet Singh
- `first_name:` Abhijeet
- `middle_name:` (leave empty if none)
- `last_name:` Singh
- `contact_note:` Update with preferred contact method (e.g., "Best way to reach me is via LinkedIn or email.")
- `description:` Update with Abhijeet's professional summary (to be provided by user)
- `url:` Change to `https://<githubusername>.github.io` (user to replace placeholder)
- `keywords:` Adjust to reflect Abhijeet's skills (e.g., "Software Engineer, Full Stack, Cloud, AI")
- Optional: update `footer_text` if desired.

**Verification:**  
- Run `grep -n "Abhijeet" _config.yml` to confirm changes.
- Ensure no syntax errors: `bundle exec jekyll doctor` or just attempt build later.

---

### Task 3: Update About Page (_pages/about.md)
**Objective:** Replace biography and profile image with Abhijeet's information.

**Files:**  
- Modify: `_pages/about.md`

**Changes:**
- Update `profile.image:` to new photo filename (e.g., `abhijeet.jpg`) – user must place image in `assets/img/` or update path.
- Set `profile.image_circular:` as desired (true/false).
- Replace paragraphs after front matter with Abhijeet's professional bio (multiple paragraphs as needed).
- Update the call‑to‑action link (LinkedIn) and text if desired.

**Verification:**  
- Preview later; ensure image loads and bio reads correctly.

---

### Task 4: Update CV Page (_pages/cv.md)
**Objective:** Point to Abhijeet's resume PDF and optionally adjust format.

**Files:**  
- Modify: `_pages/cv.md`

**Changes:**
- Update `cv_pdf:` to point to the new PDF (e.g., `/assets/pdf/Abhijeet_Singh_Resume.pdf`)
- Keep `cv_format: jsonresume` (unless user prefers otherwise).
- Optionally adjust description.

**Verification:**  
- Check that the file path exists after PDF is added.

---

### Task 5: Add Resume PDF
**Objective:** Provide Abhijeet's resume in PDF format.

**Files:**  
- Add: `assets/pdf/Abhijeet_Singh_Resume.pdf` (user supplies the file)

**Steps:**  
- User places PDF at the path referenced in `_pages/cv.md`.

**Verification:**  
- File exists and is accessible via site.

---

### Task 6: Update JSON Resume (assets/json/resume.json)
**Objective:** Populate JSONResume with Abhijeet's personal, work, education, skills, etc.

**Files:**  
- Replace: `assets/json/resume.json`

**Steps:**  
- Obtain JSONResume data from user (or user fills in template).  
- Replace entire file with new JSON.

**Verification:**  
- Validate JSON syntax: `jq . assets/json/resume.json > /dev/null` (if jq available) or use an online validator.  
- Ensure fields like `basics.name`, `basics.email`, `work`, `skills` reflect Abhijeet's data.

---

### Task 7: Update Social Links & Icons (if separate)
**Objective:** Ensure social media icons in header/footer point to Abhijeet's profiles.

**Files:**  
- The theme reads social links from `resume.json` (basics.profiles). Ensure those are correct.  
- Optionally edit `_data/social.yml` if theme uses that (check). In al-folio, socials are from resume.json.

**Verification:**  
- After building, hover over icons to verify URLs.

---

### Task 8: Update Projects & Repositories Pages (optional)
**Objective:** Optionally replace placeholder project descriptions with Abhijeet's actual projects.

**Files:**  
- `_pages/projects.md`  
- `_pages/repositories.md`  
- Possibly `_pages/blog.md` (if wants to keep blog)

**Steps:**  
- If user wants to showcase his own projects, edit markdown files accordingly.  
- Otherwise, can leave as-is or remove.

**Verification:**  
- Review generated pages for correct content.

---

### Task 9: Build and Test Site Locally
**Objective:** Verify that the site builds without errors and displays correctly.

**Files:**  
- No direct file changes; run Jekyll commands.

**Steps:**  
1. Ensure Ruby and Bundler are installed (user's responsibility).  
2. Run `bundle install` (if Gemfile present).  
3. Run `bundle exec jekyll serve` (or `jekyll serve` if bundler not used).  
4. Open `http://localhost:4000` in a browser.  
5. Check home, about, cv, projects pages for correct content and styling.  
6. Ensure PDF downloads and JSON is accessible (e.g., `/assets/json/resume.json`).

**Verification:**  
- No build errors.  
- All links resolve.  
- Images load.

---

### Task 9b: Alternative – Docker Build (if preferred)
**Objective:** Use provided docker-compose to preview.

**Files:**  
- `docker-compose.yml` or `docker-compose-slim.yml`

**Steps:**  
- Run `docker compose up` (or appropriate file).  
- Access via localhost port defined.

**Verification:** Same as above.

---

### Task 10: Prepare for Deployment to GitHub Pages
**Objective:** Set repository ready for pushing to user's GitHub Pages site.

**Files:**  
- No changes needed except ensuring `url` in `_config.yml` matches `<username>.github.io`.

**Steps:**  
1. Create a new repository on GitHub named `<githubusername>.github.io`.  
2. Change remote: `git remote set-url origin https://github.com/<githubusername>/<githubusername>.github.io.git`  
3. Push: `git push -u origin main` (or master, depending on default branch).  
4. Enable GitHub Pages in repo settings (should be automatic for *.github.io).  

**Verification:**  
- Site live at `https://<githubusername>.github.io`.  
- Compare with local version.

---

## Risks, Tradeoffs, and Open Questions

- **Resume Content:** The plan assumes the user will provide an up‑to‑date PDF and JSON resume. If not provided, placeholders will remain.  
- **Image Assets:** User must supply a profile picture; otherwise the existing image (ayan.png) will show.  
- **Gem Dependencies:** The repo uses a Gemfile; the user needs Ruby/Bundler installed. If not, they can use the Docker Compose alternative.  
- **Customizations Beyond Data:** If the user wants to change theme colors, layout, or add sections, additional work beyond this plan is needed.  
- **JSONResume Schema:** Ensure the provided JSON follows the JSONResume schema; otherwise the theme may ignore some fields.  
- **Branch Names:** The source repo may use `main` or `master`; adjust push command accordingly.

---

## Next Steps / Approval Request

Plan complete and saved to `.hermes/plans/portfolio-customization-plan.md`.  
Ready to execute using the subagent‑driven development workflow.  
Shall I proceed with cloning the repository and applying the changes? (Please provide any specific personal details (bio, resume PDF, JSON) if you wish them to be inserted now, or I can place placeholders for you to fill in later.)