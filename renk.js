const generate_random_color = document.getElementById('generate_random_color');

// colors = ['yellow' , 'red' , 'black' , 'purple','orange','blue'];

const generaterandomnumber = (maxnumber) => {
    return Math.floor(
        Math.random() * (maxnumber + 1)
    );
};


generate_random_color.addEventListener('click' ,  () => {
    // console.log('Color');
    // document.body.style.backgroundColor = color[2];
    
    //1.
    // const randomnumber = Math.floor(
    //     Math.random() * colors.length
    // )
    // document.body.style.backgroundColor = colors[randomnumber];

    //2.
    const randomnumber1 = generaterandomnumber(255)
    const randomnumber2 = generaterandomnumber(255)
    const randomnumber3 = generaterandomnumber(255)

    document.body.style.backgroundColor = `rgba(${randomnumber1},${randomnumber2},${randomnumber3})`;

});