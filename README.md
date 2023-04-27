# What is Project Library?

This project uses an open API database from openlibrary.org to create a personal library search engine page. My focus was to implement key features such as filtering, pagination, and CRUD operations. Additionally, I incorporated new CSS styling elements such as three.js, react-spring, and framer-motion, along with several transition effects. To enhance user convenience, I added a download link on the bookmark page for users to extract their saved books. This allows users not only to search for books but also to generate a list of books directly from the page, which was created by mireu-san.

# Link

# Prerequisite

1. npm i
2. npm run dev (Not npm start!)

# How to use

1. Type in the keyword you want to search for in the search bar.
2. Once a book matching your keyword is found, a list of results will be displayed. You can use the search bar on this page to further filter your results or navigate to another page if available.
3. Select the checkbox next to any book you want to save as a favorite and add to your bookmarks.
4. When you go to the bookmark page, you can select the checkboxes next to the books you want to extract and save as a list in a txt file. Only the selected books will be extracted.

# Miscellaneous

The 3D modeling and other pictures do not belong to me.

# Contact

Please refer to my profile for more information.

# Screenshots

![main](https://github.com/mireu-san/project-library/blob/master/public/screenshot/s1.jpg)
![result](https://github.com/mireu-san/project-library/blob/master/public/screenshot/s2.jpg)
![bookmark](https://github.com/mireu-san/project-library/blob/master/public/screenshot/s3.jpg)
![txt](https://github.com/mireu-san/project-library/blob/master/public/screenshot/s4.jpg)

```
project-library
├─ .eslintcache
├─ .eslintignore
├─ .eslintrc.json
├─ .gitignore
├─ .vscode
│  └─ settings.json
├─ package-lock.json
├─ package.json
├─ proxy.jsx
├─ public
│  ├─ bookshelf
│  │  ├─ license.txt
│  │  ├─ scene.bin
│  │  ├─ scene.gltf
│  │  └─ textures
│  │     ├─ armchair_baseColor.png
│  │     ├─ armchair_metallicRoughness.png
│  │     ├─ armchair_normal.png
│  │     ├─ book_baseColor.jpeg
│  │     ├─ book_metallicRoughness.png
│  │     ├─ book_normal.jpeg
│  │     ├─ candle_baseColor.png
│  │     ├─ candle_normal.png
│  │     ├─ carpet_baseColor.png
│  │     ├─ carpet_metallicRoughness.png
│  │     └─ carpet_normal.png
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  ├─ paladin
│  ├─ paladin.glb
│  ├─ planet
│  │  ├─ license.txt
│  │  ├─ scene.bin
│  │  ├─ scene.gltf
│  │  └─ textures
│  │     ├─ Clouds_baseColor.png
│  │     └─ Planet_baseColor.png
│  ├─ robots.txt
│  └─ screenshot
│     ├─ s1.jpg
│     ├─ s2.jpg
│     ├─ s3.jpg
│     └─ s4.jpg
├─ README.md
├─ src
│  ├─ components
│  │  ├─ BookDetails
│  │  │  ├─ BookDetails.css
│  │  │  └─ BookDetails.jsx
│  │  ├─ BookList
│  │  │  ├─ Book.jsx
│  │  │  ├─ BookList.css
│  │  │  └─ BookList.jsx
│  │  ├─ BookmarkList
│  │  │  ├─ BookmarkList.css
│  │  │  └─ BookmarkList.jsx
│  │  ├─ BookmarkModal
│  │  │  ├─ BookmarkModal.css
│  │  │  ├─ BookmarkModal.jsx
│  │  │  ├─ RemoveModal.css
│  │  │  └─ RemoveModal.jsx
│  │  ├─ canvas
│  │  │  ├─ Ball.jsx
│  │  │  ├─ Book.jsx
│  │  │  ├─ index.js
│  │  │  ├─ Paladin.jsx
│  │  │  └─ Stars.jsx
│  │  ├─ Footer
│  │  │  ├─ Footer.css
│  │  │  └─ Footer.jsx
│  │  ├─ Header
│  │  │  ├─ Header.css
│  │  │  └─ Header.jsx
│  │  ├─ Loader
│  │  │  ├─ Loader.css
│  │  │  └─ Loader.jsx
│  │  ├─ Loader.jsx
│  │  ├─ Navbar
│  │  │  ├─ Navbar.css
│  │  │  └─ Navbar.jsx
│  │  ├─ Pagination
│  │  │  ├─ Pagination.css
│  │  │  └─ Pagination.jsx
│  │  └─ SearchForm
│  │     ├─ SearchForm.css
│  │     └─ SearchForm.jsx
│  ├─ context.jsx
│  ├─ custom.d.ts
│  ├─ images
│  │  ├─ about-img.jpg
│  │  ├─ book.svg
│  │  ├─ cover_not_found.jpg
│  │  ├─ home.webp
│  │  ├─ library-bg.gif
│  │  ├─ library-bg2.gif
│  │  ├─ library3.gif
│  │  ├─ loader.svg
│  │  ├─ loader2.svg
│  │  └─ note.svg
│  ├─ index.css
│  ├─ index.tsx
│  └─ pages
│     ├─ About
│     │  ├─ About.css
│     │  └─ About.jsx
│     └─ Home
│        ├─ Home.css
│        └─ Home.jsx
├─ tailwind.config.js
└─ tsconfig.json

```
