# Abhijeet Singh's Portfolio

A personal portfolio website built with [al-folio](https://github.com/alshedivat/al-folio).

## Sections

- About
- Blog
- Case Studies
- Repositories
- CV

## Live Site

https://abhi21498.github.io/abhijeetSingh/

## Setup

This site is already configured with my information. To update:

- Edit `_config.yml` for site-wide settings.
- Update `_pages/about.md` for your bio.
- Replace `assets/img/abhijeet.jpg` with your photo.
- Replace `assets/pdf/Abhijeet Singh - Resume.pdf` with your CV.
- Edit `assets/json/resume.json` for detailed CV data.
- Update `_data/repositories.yml` to list your GitHub repos.
- Update `_data/socials.yml` for social links.
- Add or modify posts in `_posts/` for the blog.
- Add or modify projects in `_projects/` for case studies.

## Local Development

Requires Ruby and Bundler, or Docker.

```bash
bundle install
bundle exec jekyll serve
```

Or with Docker:

```bash
docker compose up
```

## Deployment

The site is configured to deploy automatically to GitHub Pages via GitHub Actions (see `.github/workflows/jekyll.yml`).

Push to the `main` branch to update the site.