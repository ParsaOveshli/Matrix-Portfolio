(function() {
    var _0x5a3d = ['canvas', 'getContext', 'width', 'height', 'innerWidth', 'innerHeight', '01010101ABCDEFGHIJKLMNOPQRSTUVWXYZابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی', 'length', 'floor', 'random', 'fillStyle', 'fillRect', 'font', 'fillText', 'getElementById', 'addEventListener', 'resize', 'classList', 'toggle', 'hidden', 'registerPlugin', 'ScrollTrigger', 'from', 'y', 'opacity', 'duration', 'ease', 'power4.out', 'stagger', 'delay', 'power3.out', 'scale', 'elastic.out(1,\x200.5)', 'x', 'querySelectorAll', 'getAttribute', 'data-width', 'to', 'start', 'top\x2080%', 'power2.out', 'top\x2075%', 'top\x2070%', 'back.out(1.7)', 'top\x2070%'];
    function _0x4b3d(_0x5c3d, _0x5d3d) {
        return _0x5a3d[_0x5c3d];
    }
    var canvas = document[_0x4b3d('0x0')]('matrix-canvas');
    var ctx = canvas[_0x4b3d('0x1')]('2d');
    var width = canvas[_0x4b3d('0x2')] = window[_0x4b3d('0x4')];
    var height = canvas[_0x4b3d('0x3')] = window[_0x4b3d('0x5')];
    var chars = _0x4b3d('0x6');
    var fontSize = 14;
    var columns = width / fontSize;
    var drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    function drawMatrix() {
        ctx[_0x4b3d('0xb')] = "rgba(5,\x205,\x205,\x200.05)";
        ctx[_0x4b3d('0xc')](0, 0, width, height);
        ctx[_0x4b3d('0xb')] = "#0F0";
        ctx[_0x4b3d('0xd')] = fontSize + "px\x20monospace";
        for (var i = 0; i < drops[_0x4b3d('0x7')]; i++) {
            var text = chars[Math[_0x4b3d('0x9')](Math[_0x4b3d('0xa')]() * chars[_0x4b3d('0x7')])];
            ctx[_0x4b3d('0xe')](text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > height && Math[_0x4b3d('0xa')]() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(drawMatrix, 50);
    window[_0x4b3d('0xf')]('resize', function () {
        width = canvas[_0x4b3d('0x2')] = window[_0x4b3d('0x4')];
        height = canvas[_0x4b3d('0x3')] = window[_0x4b3d('0x5')];
    });
    var btn = document[_0x4b3d('0x10')]('mobile-menu-btn');
    var menu = document[_0x4b3d('0x10')]('mobile-menu');
    btn[_0x4b3d('0xf')]('click', function () {
        menu[_0x4b3d('0x11')][_0x4b3d('0x12')]('hidden');
    });
    gsap[_0x4b3d('0x13')](ScrollTrigger);
    gsap[_0x4b3d('0x14')]("#navbar", {
        'y': -100,
        'opacity': 0,
        'duration': 1,
        'ease': _0x4b3d('0x17')
    });
    gsap[_0x4b3d('0x14')](".hero-content\x20>\x20*", {
        'y': 50,
        'opacity': 0,
        'duration': 1,
        'stagger': 0.2,
        'ease': _0x4b3d('0x19'),
        'delay': 0.5
    });
    gsap[_0x4b3d('0x14')](".hero-image", {
        'scale': 0.8,
        'opacity': 0,
        'duration': 1.5,
        'ease': _0x4b3d('0x1b'),
        'delay': 0.8
    });
    gsap[_0x4b3d('0x14')](".about-img-container", {
        'scrollTrigger': {
            'trigger': "#about",
            'start': _0x4b3d('0x1f')
        },
        'x': 100,
        'opacity': 0,
        'duration': 1,
        'ease': _0x4b3d('0x19')
    });
    gsap[_0x4b3d('0x14')](".about-text-container\x20>\x20*", {
        'scrollTrigger': {
            'trigger': "#about",
            'start': _0x4b3d('0x1f')
        },
        'x': -50,
        'opacity': 0,
        'duration': 1,
        'stagger': 0.2,
        'ease': _0x4b3d('0x19')
    });
    var progressBars = document[_0x4b3d('0x20')]('.skill-progress');
    progressBars.forEach(function (bar) {
        var width = bar[_0x4b3d('0x22')](_0x4b3d('0x21'));
        gsap[_0x4b3d('0x23')](bar, {
            'scrollTrigger': {
                'trigger': "#skills",
                'start': _0x4b3d('0x25')
            },
            'width': width,
            'duration': 1.5,
            'ease': _0x4b3d('0x26')
        });
    });
    gsap[_0x4b3d('0x14')](".skill-card", {
        'scrollTrigger': {
            'trigger': "#skills",
            'start': _0x4b3d('0x27')
        },
        'y': 50,
        'opacity': 0,
        'duration': 0.8,
        'stagger': 0.15,
        'ease': _0x4b3d('0x28')
    });
    gsap[_0x4b3d('0x14')](".project-card", {
        'scrollTrigger': {
            'trigger': "#projects",
            'start': _0x4b3d('0x1f')
        },
        'y': 100,
        'opacity': 0,
        'duration': 1,
        'stagger': 0.2,
        'ease': _0x4b3d('0x19')
    });
    gsap[_0x4b3d('0x14')]("#contact\x20form", {
        'scrollTrigger': {
            'trigger': "#contact",
            'start': _0x4b3d('0x29')
        },
        'scale': 0.95,
        'opacity': 0,
        'duration': 1,
        'ease': _0x4b3d('0x19')
    });
})();