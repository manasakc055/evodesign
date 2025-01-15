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
                <video src="./anim/loading.webm" autoplay loop muted></video>
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
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
                #loader.hidden {
                    opacity: 0;
                    visibility: hidden;
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

// Export the component
export default LoaderComponent;
