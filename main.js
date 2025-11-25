document.getElementById('explosion-area').addEventListener('click', function(event) {
    createHeartExplosion(event.clientX, event.clientY);
});

function createHeartExplosion(x, y){
    const explosionArea = document.getElementById('explosion-area');
    const numberOfHearts = 15;

    for (let i=0; i<numberOfHearts; i++){
        const heart = document.createElement('div');
        heart.classList.add('heart')
        heart.innerHTML = '❤️';


        heart.style.left = `${x - 15}px`;
        heart.style.top = `${y - 15}px`;

        const moveX= (Math.random()- 0.5)* 300;
        const moveY= (Math.random()- 0.5)* 300;

        const rotateY = Math.random() * 1080;

        heart.style.setProperty('--move-x', `${moveX}px`);
        heart.style.setProperty('--move-y', `${moveY}px`);
        heart.style.setProperty('--rotate-y', `${rotateY}deg`);


        heart.style.animationDelay ='${Math.radom()* 0.1}s';
        
        explosionArea.appendChild(heart);

        // Remove o elemento após a animação terminar (0.8s + 0.1s de atraso máximo)
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}
    
   