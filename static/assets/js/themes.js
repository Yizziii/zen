var bgUrl = localStorage.getItem('bgUrl');
var selectedTheme = localStorage.getItem('selectedOption');

if (selectedTheme === 'deepsea' && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
    var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(.themesExcluded)');

    containers.forEach(function(container) {
        container.style.backgroundColor = 'rgba(19, 34, 48, 0.8)'; // Light Blue
    });

    document.body.style.background = "linear-gradient(to bottom right, rgb(16, 52, 82), rgb(9, 34, 55), black)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.height = "100%";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
} else if (selectedTheme === 'equinox' && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
    var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(.themesExcluded)');

    var nav = document.querySelectorAll('nav');
    nav.forEach(function(navElement) {
        navElement.style.transition = '1s';
        navElement.style.backgroundColor = 'rgba(20, 20, 20, 0.871)';
        navElement.style.border = '1px solid rgba(39, 39, 39, 0.575)';
        navElement.style.boxShadow = '0 0 8px rgba(255, 255, 255, 0.267)';
        navElement.style.opacity = '100%';
    });

    var inputs = document.querySelectorAll('input');
    inputs.forEach(function(inputElement) {
        inputElement.style.transition = '.2s';
        inputElement.style.backgroundColor = 'rgba(15, 15, 15, 0.89)';
        inputElement.style.boxShadow = '0 0 1px rgba(255, 255, 255, 0.267)';
        inputElement.style.opacity = '100%';
    });

    document.body.style.backgroundImage = "url('/assets/img/equinox.webp')";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.height = "100%";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
} else if (selectedTheme === 'swamp' && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
    var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(.themesExcluded)');

    containers.forEach(function(container) {
        container.style.backgroundColor = 'rgba(14, 71, 22, 0.637)'; // Dark Green
    });

    document.body.style.background = "linear-gradient(to bottom, rgb(33, 116, 47), rgb(0, 0, 0)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.height = "100%";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
} else if (selectedTheme === 'ocean' && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
    var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(.themesExcluded)');

    containers.forEach(function(container) {
        container.style.backgroundColor = 'rgba(84, 137, 161, 0.637)'; // Dark Baby Blue
    });

    document.body.style.background = "linear-gradient(to bottom, rgb(70, 173, 214), rgb(99, 84, 36))";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.height = "100%";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
} else if (selectedTheme === 'starry' && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
    var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(.themesExcluded)');

    containers.forEach(function(container) {
        container.style.background = 'linear-gradient(to right, rgba(39, 81, 109, 0.521), rrgba(80, 51, 107, 0.541)'; // Light Purple
    });

    document.body.style.background = "linear-gradient(to right, rgb(14, 132, 211), rgb(113, 11, 209)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.height = "100%";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
} else if (selectedTheme === 'magma' && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
    document.body.style.background = "linear-gradient(to right, rgb(0, 0, 0), rgb(223, 59, 10)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.height = "100%";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
} else if (selectedTheme === 'sunset' && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
    document.body.style.background = "linear-gradient(to bottom, rgb(211, 112, 19), rgb(92, 16, 179))";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.height = "100%";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}

/* If no theme is selected */
if (selectedTheme === null && (bgUrl === null || bgUrl === 'none' || bgUrl === '')) {
    var containers = document.querySelectorAll('div:not(#particles-js):not(#settingsContainer):not(#contextItem):not(#contextMenu):not(#cloak):not(.themesExcluded)');

    containers.forEach(function(container) {
        container.style.backgroundColor = 'rgba(19, 34, 48, 0.8)'; // Light Blue
    });

    document.body.style.background = "linear-gradient(to bottom right, rgb(16, 52, 82), rgb(9, 34, 55), black)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.height = "100%";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    // Deep Sea
}

/* Ripple Effect for buttons */
[].map.call(document.querySelectorAll('[anim="ripple"]'), el => {
    el.addEventListener('mousedown', e => {
        e = e.touches ? e.touches[0] : e;
        const r = el.getBoundingClientRect(),
            d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
        el.style.cssText = `--s: 0; --o: 1;`;
        el.offsetTop;
        el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
        if (el.classList.contains('90px')) {
            el.style.width = '90px';
        }
    })
})

/* Background check */
document.addEventListener('DOMContentLoaded', function() {
    if (bgUrl === 'none' || bgUrl === null || bgUrl === '') {
        console.log('No custom background set.');
    } else {
        document.body.style.backgroundImage = `url(${bgUrl})`;
        document.getElementById('particles-js').remove();
    }
});