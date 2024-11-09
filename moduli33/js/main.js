$(".hidden").show(3000)
$(".testing").animate({
    'left': '+=50px',
    'opacity': 0.25,
    'fontSize': '12px'
},
    3000,
    function() {
        console.log('test')
    }
);