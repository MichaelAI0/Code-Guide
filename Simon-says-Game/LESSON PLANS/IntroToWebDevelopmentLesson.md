
# 40-Minute Lesson on Introduction to HTML, CSS, and JavaScript

## Introduction to Web Development (5 minutes)
- **Objective:** Understand what web development is and the role of HTML, CSS, and JavaScript.
- **Activity:** Use an analogy, comparing a website to a human body: HTML as the skeleton, CSS as the clothing, and JavaScript as the muscles that allow movement.

## Introduction to HTML (Expanded) - 10 minutes
- **Objective:** Learn HTML's role as the backbone of web pages.
- **Concepts Covered:**
  - **Elements and Tags:** Elements are the building blocks of web pages, and tags are the labels for elements (e.g., `<p>`, `<h1>`, `<img>`).
  - **Attributes:** Provide additional information about elements. For instance, `src` in `<img src="image.png">`.
- **Activity:** Create a simple HTML page.
  - **Example Code:**
    ```
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Web Page</title>
      </head>
      <body>
        <h1>My Favorite Animal</h1>
        <p>The cat is a domestic species of small carnivorous mammal.</p>
        <img src="cat.jpg" alt="A cute cat.">
      </body>
    </html>
    ```
  - **Discussion:** Purpose of each tag and the webpage structure.

## Introduction to CSS (Expanded) - 10 minutes
- **Objective:** Show how CSS enhances the web page's visual presentation.
- **Concepts Covered:**
  - **Selectors, Properties, and Values:** Selectors target elements, properties define what to style, and values specify the settings.
  - **Classes and IDs:** For more specific targeting. Classes for multiple elements, IDs for unique elements.
- **Activity:** Style the HTML page.
  - **Example Code:**
    ```
    body {
      background-color: lightblue;
    }
    h1 {
      color: navy;
      font-family: 'Arial', sans-serif;
    }
    p {
      color: darkgreen;
    }
    img {
      display: block;
      margin: auto;
      width: 50%;
    }
    ```
  - **Discussion:** Impact of CSS on appearance and user experience.

## Introduction to JavaScript (Expanded) - 10 minutes
- **Objective:** Introduce JavaScript for web page interactivity.
- **Concepts Covered:**
  - **Variables and Strings:** Variables store data, strings represent text.
  - **Functions and Events:** Functions are blocks of code for actions, events trigger JavaScript code.
- **Activity:** Add an interactive button.
  - **Example Code:**
    ```
    <button onclick="showMessage()">Click Me!</button>
    <script>
      function showMessage() {
        alert("Hello, world!");
      }
    </script>
    ```
  - **Discussion:** JavaScript's role in dynamic and interactive user experiences.

## Engaging Questions for Each Section:
- **HTML:** What types of content can we add with HTML?
- **CSS:** How does CSS affect a website's mood or tone?
- **JavaScript:** What simple interactive feature would you add?

