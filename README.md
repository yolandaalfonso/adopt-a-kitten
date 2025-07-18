# Adopt a Kitten Project

## 🐾 Project Description

_"Adopt a Kitten"_ is an **interactive web application** designed to allow users to explore images of adorable kittens through a dynamic slider. The **home page** directly features this slider, presenting kitten images within cards, each accompanied by an ```"Adopt Me!"``` **button**. Clicking this button redirects users to an **adoption page**, which is currently under construction.

The application prioritizes a smooth and **engaging user experience**, enabling navigation through the kitten gallery using either navigation buttons or touch-based swipe gestures on mobile devices. Built with React.js and leveraging React Router, the application ensures seamless transitions between different pages.

## ✨ Features

* **Interactive Kitten Slider:** Browse through a collection of adorable kitten images.
* **Dynamic Image Loading:** Images are fetched from [The Cat API](https://thecatapi.com/).
* **Responsive Navigation:** Navigate the slider using intuitive buttons or swipe gestures on mobile.
* **Adoption Call-to-Action:** ```"Adopt Me!"``` button on each kitten card.
* **React Router Integration:** Smooth page transitions and clear routing (```/``` for Home, ```/adopt``` for Adoption page).
* **Light/Dark Theme** with [Context API](https://react.dev/reference/react/createContext).
* A complete **adoption form** for users to apply for a kitten, using [RegEx](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
* **Confirmation modal window** on the adoption form.
* **Favorites functionality** to allow users to mark their favorite kittens. Implemented with [useReducer](https://react.dev/reference/react/useReducer) to manage the favorites state and [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) to maintain the list of favorite kittens across page reloads.
* **Support for multiple languages (ES/EN)** using the [react-i18next](https://react.i18next.com/) framework


## 🚀 Technologies and Tools

This project is built using a **modern web development stack and managed with agile methodologies.**

* **Frontend Framework:** [React.js](https://react.dev/) (with _functional components_ and _hooks_)
* **Build Tool:** [Vite](https://vite.dev/)
* **Routing:** [React Router DOM](https://reactrouter.com/)
* **Package Manager:** [npm](https://www.npmjs.com/)
* **Styling:** [normalize](https://necolas.github.io/normalize.css/) for consistency, CSS Modules (for component-specific styles) and ```App.css``` (for global styles)
* **API Integration:** [The Cat API](https://thecatapi.com/)
* **Version Control:** [Git](https://git-scm.com/) & [GitHub](https://github.com/)
* **Code maintainability & reusability:** [BEM methodology](https://en.bem.info/methodology/quick-start/)
* **Application Quality & Reliability:** [Component Test](https://www.robinwieruch.de/react-testing-library/) performed with [Vitest](https://vitest.dev/)
* **Project Management:** [Jira](https://www.atlassian.com/software/jira) and [Confluent](https://www.atlassian.com/software/confluence) (for task organization, sprint planning, and team collaboration)

## 📁 Project Structure

**The project follows a clear and modular structure to ensure maintainability and scalability.**

``` 
adopt-a-kitten/  
├── public/  
│   ├── cat.svg  
│   ├── cats.png
│   ├── MiauMatch-dark.png  
│   └── MiauMatch.png  
├── src/  
│   ├── assets/
│   │   ├── styles/   
│   │   │   └── main.css   
│   │   ├── cat-feets-icon.svg  
│   │   ├── catConstruction.png  
│   │   ├── facebook-icon.svg  
│   │   ├── instagram-icon.svg
│   │   ├── proceso.png
│   │   ├── test1.jpg
│   │   ├── test2.jpg
│   │   ├── test3.jpg
│   │   ├── test4.jpg
│   │   ├── test5.jpg
│   │   └── whatsapp-icon.svg  
│   ├── components/
│   │   ├── AdoptForm/  
│   │   │   ├── AdoptForm.css  
│   │   │   └── AdoptForm.jsx   
│   │   ├── Button/  
│   │   │   ├── Button.css  
│   │   │   ├── Button.jsx  
│   │   │   └── Button.test.jsx 
│   │   ├── CatCard/  
│   │   │   ├── CatCard.css  
│   │   │   └── CatCard.jsx  
│   │   ├── CatsSlider/  
│   │   │   ├── CatsSlider.css  
│   │   │   └── CatsSlider.jsx  
│   │   ├── Footer/  
│   │   │   └── Footer.css  
│   │   │   └── Footer.jsx  
│   │   ├── Header/  
│   │   │   └── Header.css  
│   │   │   └── Header.jsx  
│   │   ├── Hero/  
│   │   │   └── Hero.css  
│   │   │   └── Hero.jsx  
│   │   └── Layout/  
│   │   │   └── Layout.jsx
│   │   ├── Modal/  
│   │   │   └── Modal.css  
│   │   │   └── Modal.jsx
│   │   ├── Process/  
│   │   │   └── Process.css  
│   │   │   └── Process.jsx  
│   │   ├── Testimonials/  
│   │   │   └── Testimonials.css  
│   │   │   └── Testimonials.jsx
│   ├── context/
│   │   └── FavoritesContext.js
│   │   └── FavoritesContext.jsx
│   │   └── ThemeContext.jsx
│   │   └── useFavorites.js   
│   ├── locales/
│   │   └── en.json
│   │   └── es.json      
│   ├── pages/  
│   │   ├── AdoptPage/
│   │   │   └── AdoptPage.css  
│   │   │   └── AdoptPage.jsx
│   │   └── FavoritesPages/
│   │   │   └── FavoritesPages.css  
│   │   │   └── FavoritesPages.jsx
│   │   └── HomePage/
│   │   │   └── HomePage.css  
│   │   │   └── HomePage.jsx
│   ├── reducers/
│   │   └── favoritesReducer.js     
│   ├── routes/  
│   │   └── appRoutes.js  
│   ├── services/  
│   │   └── catService.js  
│   ├── App.css  
│   ├── App.jsx
│   ├── i18n.js   
│   ├── index.css
│   ├── main.jsx  
│   └── setupTest.js  
├── .gitignore  
├── eslint.config.js  
├── index.html  
├── package-lock.json  
├── package.json
├── README.md
├── vite.config.js  
└── vitest.config.js
```

### Key Directories and Files:

* **public/:** Contains static assets like favicons and images directly served by the web server.
* **src/:** The main source code directory.
* **assets/:** Stores static assets used within components (e.g., icons, construction images).
* **components/:** Houses reusable React components (e.g., ```Button```, ```CatCard```, ```CatsSlider```, ```Header```, ```Footer```, ```Hero```, ```Layout```, ```Testimonials```). Each component typically has its own folder containing its JSX and CSS files.
* **context/:** stores all React context files that are used across multiple pages.
* **locales/:** Contains the locales files, which maps locale names to languages, character sets, and collating sequences.
* **pages/:** Contains the main views or pages of the application (e.g., ```HomePage.jsx```, ```AdoptPage.jsx```).
* **reducers/:** Defines hooks that allows to manage state using a reducer function.
* **routes/:** Defines the application's routing configuration.
* **services/:** Manages API connections and data fetching logic (e.g., ```catService.js``` for The [The Cat API](https://thecatapi.com/)).
* **App.jsx:** The entry point of the React application, responsible for managing routes with React Router.
* **i18n.js:** It provides a NumberFormat object that can be used to format numbers according to different cultural conventions.
* **main.jsx:** Renders the root React component, ```App.jsx```, into the DOM.
* **setupTests.js:** Load a browser API to simulate the tests and a global configuration before running the tests, avoiding boilerplate in our test files.
* **package.json:** Lists project dependencies, scripts, and metadata.
* **.gitignore:** Specifies files and directories to be ignored by Git.
* **index.html:** The main HTML file for the application.

## ⚙️ Installation and Setup

To get this project up and running on your local machine, follow these steps:

1. **Clone the repository:**  
    ```
    git clone <repository-url> [https://github.com/yolandaalfonso/adopt-a-kitten.git]
    ```  
2. **Change to the project directory:**
    ```
    cd <project-name> [adopt-a-kitten]
    ```    
3.  **Install dependencies:**  
    ```
    npm install
    ```
4.  **Start the development server:**  
    ```
    npm run dev  
    ```       
    This will typically open the application in your browser at http://localhost:5173 (or another port if 5173 is in use).

## 🤝 Contribution Guidelines

We welcome contributions! Please follow these guidelines:

1. **Branching Strategy:**
    * ```develop```: Main development branch.
    * ```MIAU-<Nth>-<feature-name>``` (e.g. ```MIAU-19-feature-update-readme```). Create new branches for each feature or bug fix <u>from the ```develop``` branch</u> (e.g. ```MIAU-20-feature-adoption-form```, ```MIAU-21-feature-smooth-transitions```).
2. **Commit Messages:** Use clear and descriptive commit messages. Please establish good practices and follow the _"simplified conventions"_ of the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
3. **Issue Tracking:** Refer to our Jira board for assigned tasks and to report issues.

## ℹ️ About

This project is part of the [Full Stack Web Development training program](https://factoriaf5.org/aprende/desarrollo-web-full-stack-asturias/) in [Asturias](https://en.wikipedia.org/wiki/Asturias), offered by [Factoría F5](https://factoriaf5.org/).

The curriculum covers a wide range of topics, from basic programming languages ​​and UX principles to advanced project development techniques. It includes front-end and back-end technologies, agile methodologies, and tools for user experience design and database development. The program also focuses on essential soft skills such as communication, problem-solving, teamwork, adaptability, and time management.

## 📧 Contact

For any questions or inquiries, please reach out to our team.

**Happy coding and happy adopting! 🐱**