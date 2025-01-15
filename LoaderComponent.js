class LoaderComponent {
    constructor(containerId = 'loader-container') {
        this.containerId = containerId;
    }

    // Method to render the loader
    render() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container with id "${this.containerId}" not found.`);
            return;
        }

        const loaderHTML = `
            <div id="loader">
                <video src="./assets/anim/loading.webm" autoplay loop muted></video>
            </div>
            <style>
                #loader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #000000;
                    z-index: 9999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                #loader video {
                    width: 80%; /* Responsive video width */
                    max-width: 600px; /* Maximum width for larger screens */
                    height: auto;
                    max-height: 80%; /* Ensure it fits smaller screens */
                    object-fit: contain; /* Maintain aspect ratio */
                }

                @media (max-width: 768px) {
                    #loader video {
                        width: 90%; /* Increase width for smaller devices */
                        max-width: 500px; /* Adjust for medium screens */
                    }
                }

                @media (max-width: 480px) {
                    #loader video {
                        width: 100%; /* Full width on very small devices */
                        max-width: 300px; /* Adjust max-width for small screens */
                    }
                }

                #loader.hidden {
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s ease-in-out; /* Smooth hide transition */
                }
            </style>
        `;

        container.innerHTML = loaderHTML;
    }

    // Method to hide the loader after a specified delay
    hide(delay = 1000) {
        const loader = document.getElementById('loader');
        if (!loader) {
            console.error('Loader element not found.');
            return;
        }

        setTimeout(() => {
            loader.classList.add('hidden');
        }, delay);
    }
}

export default LoaderComponent;
