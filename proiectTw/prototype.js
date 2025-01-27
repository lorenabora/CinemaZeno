window.onload = function() {
    const canvas = document.getElementById('starCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const maxStars = 1000;
    const layers = 4;

    function Star(layer) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2;
        this.alpha = Math.random();//transparenta
        this.layer = layer;
        this.speed = (layers - layer) * 0.1; //cu cat este stratul mai in fata fata de restul, cu atat viteza va fi mai mare
        this.colors = [
            `rgba(255, 0, 0, ${this.alpha})`, // Red
            `rgba(255, 255, 255, ${this.alpha})`, // White
            `rgba(192, 192, 192, ${this.alpha})`, // Silver
            `rgba(255, 99, 71, ${this.alpha})`, // Tomato Red
            `rgba(220, 20, 60, ${this.alpha})`, // Crimson
            `rgba(255, 69, 0, ${this.alpha})`, // Orange Red
            `rgba(255, 160, 122, ${this.alpha})` // Light Salmon
        ];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    Star.prototype.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'white';
        ctx.fill();
    };

    Star.prototype.update = function() { // pentru a da continuitate, atunci cand o 'stea' ajunge la capatul latimii, o ia de la capat
        this.x -= this.speed;
        if (this.x < 0) {
            this.x = canvas.width;
            this.y = Math.random() * canvas.height;
        }
    };

    function createStars() {
        for (let i = 0; i < maxStars; i++) {
            const layer = Math.floor(Math.random() * layers);
            stars.push(new Star(layer));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            star.update();
            star.draw();
        });
        requestAnimationFrame(animate); //creez loop infinit pt update-ul stelelor
    }

    createStars();
    animate();
};



// window.onload = function() {
//     const canvas = document.getElementById('starCanvas');
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const stars = [];
//     const maxStars = 100;
//     let mouseX = canvas.width / 2;
//     let mouseY = canvas.height / 2;

//     function Star(x, y) {
//         this.x = x;
//         this.y = y;
//         this.radius = Math.random() * 2;
//         this.alpha = 1;
//         this.fade = Math.random() * 0.05 + 0.01;
//     }

//     Star.prototype.draw = function() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
//         ctx.shadowBlur = 10;
//         ctx.shadowColor = 'white';
//         ctx.fill();
//     };

//     Star.prototype.update = function() {
//         this.alpha -= this.fade;
//     };

//     function animate() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         stars.forEach((star, index) => {
//             star.update();
//             star.draw();
//             if (star.alpha <= 0) {
//                 stars.splice(index, 1);
//             }
//         });
//         requestAnimationFrame(animate);
//     }

//     canvas.addEventListener('mousemove', function(event) {
//         mouseX = event.clientX;
//         mouseY = event.clientY;
//         if (stars.length < maxStars) {
//             stars.push(new Star(mouseX, mouseY));
//         }
//     });

//     animate();
// };
