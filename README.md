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
* **Under Construction Adoption Page:** A placeholder page for future adoption form functionality.

## 🚀 Technologies and Tools

This project is built using a **modern web development stack and managed with agile methodologies.**

* **Frontend Framework:** [React.js](https://react.dev/) (with _functional components_ and _hooks_)
* **Build Tool:** [Vite](https://vite.dev/)
* **Routing:** [React Router DOM](https://reactrouter.com/)
* **Package Manager:** [npm](https://www.npmjs.com/)
* **Styling:** CSS Modules (for component-specific styles) and ```App.css``` (for global styles)
* **API Integration:** [The Cat API](https://thecatapi.com/)
* **Version Control:** [Git](https://git-scm.com/) & [GitHub](https://github.com/)
* **Project Management:** [Jira](https://www.atlassian.com/software/jira) and [Confluent](https://www.atlassian.com/software/confluence) (for task organization, sprint planning, and team collaboration)

## 📁 Project Structure

**The project follows a clear and modular structure to ensure maintainability and scalability.**

``` 
adopt-a-kitten/  
├── public/  
│   ├── cat.svg  
│   ├── cats.png  
│   └── MiauMatch.png  
├── src/  
│   ├── assets/  
│   │   ├── cat-feets-icon.svg  
│   │   ├── catConstruction.png  
│   │   ├── facebook-icon.svg  
│   │   ├── instagram-icon.svg  
│   │   └── whatsapp-icon.svg  
│   ├── components/  
│   │   ├── Button/  
│   │   │   ├── Button.css  
│   │   │   └── Button.jsx  
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
│   │   │   └── Footer.css  
│   │   │   └── Footer.jsx  
│   │   ├── Hero/  
│   │   │   └── Hero.css  
│   │   │   └── Hero.jsx  
│   │   └── Layout/  
│   │   │   └── Layout.jsx  
│   │   ├── Testimonials/  
│   │   │   └── Testimonials.css  
│   │   │   └── Testimonials.jsx  
│   ├── pages/  
│   │   ├── AdoptPage.jsx  
│   │   └── HomePage.jsx  
│   ├── routes/  
│   │   └── appRoutes.js  
│   ├── services/  
│   │   └── catService.js  
│   ├── App.css  
│   ├── App.jsx  
│   ├── index.css  
│   └── main.jsx  
├── .gitignore  
├── eslint.config.js  
├── index.html  
├── package-lock.json  
├── package.json  
└── vite.config.js
```

### Key Directories and Files:

* **public/:** Contains static assets like favicons and images directly served by the web server.
* **src/:** The main source code directory.
* **assets/:** Stores static assets used within components (e.g., icons, construction images).
* **components/:** Houses reusable React components (e.g., ```Button```, ```CatCard```, ```CatsSlider```, ```Header```, ```Footer```, ```Hero```, ```Layout```, ```Testimonials```). Each component typically has its own folder containing its JSX and CSS files.
* **pages/:** Contains the main views or pages of the application (e.g., ```HomePage.jsx```, ```AdoptPage.jsx```).
* **routes/:** Defines the application's routing configuration.
* **services/:** Manages API connections and data fetching logic (e.g., ```catService.js``` for The [The Cat API](https://thecatapi.com/)).
* **App.jsx:** The entry point of the React application, responsible for managing routes with React Router.
* **main.jsx:** Renders the root React component, ```App.jsx```, into the DOM.
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

## 🛣️ Future Enhancements (Part II)

This project is just the beginning! In _"Part II"_, we plan to explore and implement exciting new functionalities, including:

* A complete **adoption form** for users to apply for a kitten.
* **Favorites functionality** to allow users to bookmark their preferred kittens.
* More **personalization options** for the user experience.
* Further **UI/UX improvements**, including exploring new design templates.
* Implementing a **persistent storage solution** (e.g., Firestore) for user data and adoption requests.

## ℹ️ About

This project is part of the [Full Stack Web Development training program](https://factoriaf5.org/aprende/desarrollo-web-full-stack-asturias/) in [Asturias](https://en.wikipedia.org/wiki/Asturias), offered by [Factoría F5](https://factoriaf5.org/).

The curriculum covers a wide range of topics, from basic programming languages ​​and UX principles to advanced project development techniques. It includes front-end and back-end technologies, agile methodologies, and tools for user experience design and database development. The program also focuses on essential soft skills such as communication, problem-solving, teamwork, adaptability, and time management.

## 📧 Contact

For any questions or inquiries, please reach out to our team.

**Happy coding and happy adopting! 🐱**