import React from "react"
import styles from "./Footer.module.css"

const URL_PREFIX = "http://docs.github.com/en/site-policy"

const footerItems = [
  {
    title: "Terms",
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  {
    title: "Privacy",
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  {
    title: "Security",
    link: `https://www.github.com/security`,
  },
  {
    title: "Status",
    link: `https://githubstatus.com/`,
  },
  {
    title: "Docs",
    link: `https://docs.github.com/en`,
  },
  {
    title: "Contact Github",
    link: `https://support.github.com/?tags=dotcom-footer`,
  },
  {
    title: "pricing",
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  {
    title: "API",
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  {
    title: "Training",
    link: `https://services.github.com/`,
  },
  {
    title: "Blog",
    link: `https://github.blog/`,
  },
  {
    title: "About",
    link: `https://github.com/bout`,
  },
]

const Footer = () => {
  return (
    <ul className={styles.footer}>
      {footerItems.map((item) => (
        <li className={styles.item} key={item.title}>
          <a href={item.link} className={styles.link}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Footer
