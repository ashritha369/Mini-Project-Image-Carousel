# DOUBT

1.  object-fit: cover;

2.  .btn:focus {
    outline: none;
    }
3.  NodeList always returned '0', because <script> tag was placed in head and later placed in bottom of the body.
    [https://stackoverflow.com/questions/26894000/nodelist-length-is-always-returning-0](https://stackoverflow.com/questions/26894000/nodelist-length-is-always-returning-0)

- Problem caused because :Your code is running at the top of the page, which means that the elements don't exist when it runs. You solve this by moving your script to the bottom of the page, or by putting your code in a callback function that runs after the document is loaded.

- Work on mobile responsiveness
