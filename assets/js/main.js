import LoaderComponent from './LoaderComponent.js';

document.addEventListener('DOMContentLoaded', () => {
    // Create an instance of the LoaderComponent
    const loader = new LoaderComponent();

    // Render the loader in the designated container
    loader.render();

    // Simulate a delay to hide the loader
    loader.hide(2000); // Adjust the delay time as needed
});
