<p align="center">
  <a href="https://ilyassnasr.netlify.com">
    <img alt="Ilyass Nasr" src="https://ilyassnasr.netlify.com/apple-icon-60x60.png" width="60" />
  </a>
</p>
<h1 align="center">
  My personal Blog/Portfolio
</h1>

This is the source code for my own blog and portfolio website. It uses Gatsby to generate pages and elements from Markdown and CSV.

## 🚀 Quick start

1.  **Run development server**

    Use the Gatsby CLI to run the development server. In the site's directory, the `gatbsy develop` command.

    ```sh
    cd gatsby-blog-portfolio/
    gatsby develop
    ```

1.  **Build**

    Navigate into your new site’s directory and run the build script.

    ```sh
    cd gatsby-blog-portfolio/
    gatsby build
    ```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

  
    ...
    ├── src
      ├── projects
        └── projects.csv
      ├── posts
        └── featured
      └── conf.js
    ├── static
      └── projects
    └── README.md

### Under `src`

1.  **`projects/projects.csv`**: This csv contains information about all the projects shown in the portfolio section.

| title        | subtitle            | demo                   | code                     | skills                                    | image                              |
|--------------|---------------------|------------------------|--------------------------|-------------------------------------------|------------------------------------|
| Project Name | Project Description | https://\<link-to-demo> | https://\<link-to-source> | List of competencies used for the project | image name for the project preview |

2.  **`posts/`**: This directory contains all the blog posts as markdown files. Pages are generated automatically. So you only need to put your posts' markdown here. You can also add some metadata (title and date) by adding a heading of the following format:

    ```
    ---
    title: "Post 1"
    date: "2019-09-24"
    ---
    ```

3.  **`posts/featured`**: Works the same as the posts directory except that the posts you put here are the ones that appear on the home page.

4. **`conf.js`**: General site data, organised in the following format:


    ```json
    {
        brand: "<Website Brand>",
        mainTitle : "<Home Page Title>",
        mainSub : "<Home Page Subtitle>",
        aboutTitle : "<About Page Title>",
        aboutSub : "<About Page Subtitle>",
        portfolioTitle : "<Portfolio Page Title>",
        portfolioSub : "<Portfolio Page Subtitle>",
        contactTitle : "<Contact Page Title>",
        contactSub : "<Contact Page Subtitle>",
        linkedin: "<link to linkedin profile>",
        github: "<link to github profile>",
    }
    ```

### Under `static`

4. **`projects/`**: In this directory put the images as specified in the `projects.csv` file mentioned above.

## ✅ TODO :

- [ ] Generate Site Map
- [ ] Externalize About page content