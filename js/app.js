function show(){
    if(document.getElementById('mobileHeaderOpen').style.display === 'block'){
        document.getElementById('mobileHeaderOpen').style.display = 'none';
        document.getElementById('mobileHeader').style.borderBottom = '2px solid black';
    }else{
        document.getElementById('mobileHeaderOpen').style.display = 'block';
        document.getElementById('mobileHeader').style.borderBottom = 'none';
    }
}

var unloadedPhoto = 'data:image/png;base64,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';

document.getElementById('menu').addEventListener('click', show);

var allModels = [{modelName: 'AirPoint \'21', modelURL: 'https://pitchk.github.io/h/point.jpg', difficulty: 4.5, tags: ['Future vehicle', 'Recreational vehicle', 'Air'], description: 'This model\'s distinguishable characteristic is that sharp point. Fold with black origami for the best contrast!', webLink: '/air-point-21'}, {modelName: 'Future Vehicle 9', modelURL: unloadedPhoto, difficulty: 5, tags: ['Future vehicle', 'Recreational vehicle', 'Hover'], description: 'A twist on the LandHover\'21. Now featuring two large back jets! Looks even faster!', webLink: '/air-point-21'}, {modelName: 'LandHover \'21', modelURL: 'https://pitchk.github.io/h/speedr.jpg', difficulty: 7.5, tags: ['Future vehicle', 'Recreational vehicle', 'Hover'], description: 'This model was sort of inspired by the landspeeder in Star Wars, as you can see. Doesn\'t it look fast?', webLink: '/land-hover-21'}, {modelName: 'Lily (Version 1)', modelURL: unloadedPhoto, difficulty: 3, tags: ['Flower', 'Living'], description: 'null', webLink: '/air-point-21'}, {modelName: 'Lily (Version 2)', modelURL: unloadedPhoto, difficulty: 6, tags: ['Flower', 'Living'], description: 'null', webLink: '/air-point-21'}, {modelName: 'Tall plant', modelURL: unloadedPhoto, difficulty: 7, tags: ['Flower', 'Living'], description: 'null', webLink: '/air-point-21'}, {modelName: 'Sea shrimp', modelURL: 'https://pitchk.github.io/h/shrimp.jpg', difficulty: 5.5, tags: ['Living', 'Attacker'], description: 'A small shrimp, complete with two front claws and its distinguishable flexible tail.', webLink: '/shrimp'}, {modelName: 'Attacker fish', modelURL: unloadedPhoto, difficulty: 6.5, tags: ['Living', 'Attacker'], description: 'null', webLink: '/attacker-fish'}, {modelName: 'Tank w/ triangular cannon', modelURL: unloadedPhoto, difficulty: 8.5, tags: ['Land', 'Attacker', 'Future vehicle'], description: 'With its cannon extending more than half the length of its body, this can wreck havoc in real life!', webLink: '/tank-with-triangular-cannon'}, {modelName: 'Tank w/ long cannon', modelURL: 'https://pitchk.github.io/h/Long_tank.jpg', difficulty: 5, tags: ['Land', 'Attacker', 'Future vehicle'], description: 'Folding this on a 6in x 6in square paper would allow a Lego minifigure to fit perfectly behind the cannon!', webLink: '/tank-with-long-cannon'}, {modelName: 'The Hexawing', modelURL: unloadedPhoto, difficulty: 5.5, tags: ['Air', 'Future vehicle'], description: 'With its hexagon-shaped wings, this could glide through the air and land smoothly as well.', webLink: '/hexawing'}, {modelName: 'Fighter jet', modelURL: unloadedPhoto, difficulty: 7, tags: ['Air', 'Future vehicle', 'Attacker'], description: 'A normal-looking jet, but it could drop bombs from the center and the side of its wings.', webLink: '/fighter-jet'}, {modelName: 'Future Vehicle 1', modelURL: unloadedPhoto, difficulty: 6.5, tags: ['Air', 'Future vehicle', 'Recreational vehicle'], description: 'The very first model I came up with. Features a single upright tail jet and two engines that propel the vehicle forward.', webLink: '/hexawing'}, {modelName: 'Future Vehicle 2', modelURL: unloadedPhoto, difficulty: 5.5, tags: ['Air', 'Future vehicle'], description: 'A twist on Future Vehicle 1. The engines are now 3-dimensional, with a third engine taking the place of the tail jet.', webLink: '/hexawing'}, {modelName: 'Tank w/ tracks', modelURL: unloadedPhoto, difficulty: 4.5, tags: ['Land', 'Future vehicle', 'Attacker'], description: 'A big tank, complete with tracks.', webLink: '/hexawing'}, {modelName: 'A simple robot', modelURL: 'https://pitchk.github.io/h/robot.jpg', difficulty: 7.5, tags: ['Attacker'], description: 'A robot that is ready to fight anything that comes in its way. Looks great on your desk!', webLink: '/simple-robot'}];



for (var i = 0; i < allModels.length; i++){
    var d = document.createElement('div');
    d.className = 'outer';
    document.getElementById('allModels').appendChild(d);

    var image = document.createElement('img');
    image.setAttribute('src', allModels[i].modelURL);
    image.className = 'image';
    document.getElementsByClassName('outer')[i].appendChild(image);
    
    var innerDiv = document.createElement('div');
    innerDiv.className = 'innerDiv';
    document.getElementsByClassName('outer')[i].appendChild(innerDiv);

    var title = document.createElement('p');
    title.className = 'modelTitle';
    title.innerHTML = allModels[i].modelName;
    document.getElementsByClassName('innerDiv')[i].appendChild(title);

    var subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = allModels[i].description;
    document.getElementsByClassName('innerDiv')[i].appendChild(subtitle);

    //difficulty display
    var difficulty = document.createElement('div');
    difficulty.className = 'difficultyDiv';
    document.getElementsByClassName('innerDiv')[i].appendChild(difficulty);

    var word = document.createElement('p');
    word.className = 'difficultyWord';
    word.innerHTML = 'Difficulty: ';
    document.getElementsByClassName('difficultyDiv')[i].appendChild(word);

    var num = document.createElement('p');
    num.className = 'difficultyDisplay';
    num.innerHTML = allModels[i].difficulty + '/10';
    document.getElementsByClassName('difficultyDiv')[i].appendChild(num);

    var time = document.createElement('p');
    time.className = 'time';
    time.innerHTML = ' | ⌛ Estimated time: 10-12 min';
    document.getElementsByClassName('difficultyDiv')[i].appendChild(time);

    //bottom two buttons

    var link = document.createElement('a');
    var innerLink = document.createTextNode('Instructions');
    link.appendChild(innerLink);
    link.setAttribute('href', allModels[i].webLink);
    link.setAttribute('target', '_blank');
    link.className = 'bottomlinks';
    document.getElementsByClassName('innerDiv')[i].appendChild(link);

    var link = document.createElement('a');
    var innerLink = document.createTextNode('Watch tutorial');
    link.appendChild(innerLink);
    link.setAttribute('href', allModels[i].webLink);
    link.setAttribute('target', '_blank');
    link.className = 'bottomlinks';
    document.getElementsByClassName('innerDiv')[i].appendChild(link);

    
}

for (var i = 0; i < document.getElementsByClassName('difficultyDisplay').length; i++){
    document.getElementsByClassName('difficultyDisplay')[i].style.background = 'linear-gradient(to right, #42aaf5 0%, #42aaf5 ' + allModels[i].difficulty*10 + '%, lightgrey ' + allModels[i].difficulty*10 +'%, lightgrey 100%)';
}