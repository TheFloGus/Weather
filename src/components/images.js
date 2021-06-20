const sources = [];

for (let i = 1; i<=24; i++){
	let str = ''
	if(i<10){
		 str = `./img/0${i}.00.webp`
	}else{
		 str = `./img/${i}.00.webp`
	}
	sources.push(str);
}

function preloadImages(srcs) {
    if (!preloadImages.cache) {
        preloadImages.cache = [];
    }
    let img;
    for (let i = 0; i < srcs.length; i++) {
        // eslint-disable-next-line no-undef
        img = new Image();
        img.src = srcs[i];
        preloadImages.cache.push(img);
    }
}

preloadImages(sources);

module.exports = preloadImages;
