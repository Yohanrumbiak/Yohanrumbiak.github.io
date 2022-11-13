//***MNIPULATION ISI HTML***
$(document).ready(function(){
    let h1 = $('h1.welcome-text')
        console.log(h1.text('Halo selamat datang di website saya'))

        h1 = $('h1.title-portofolio')
        console.log(h1.text('My Portofolio'))
    
        div = $("div.section-introduction p")
        console.log(div.html('Perkenalkan saya [<b>Yohan Rumbiak</b>], seorang Web Developer <br> yang berfokus dalam membuat tampilan website <br> yang modern dan responsive'))

        div = $("div.section-education p")
        console.log(div.html('Saya telah mengikuti beberapa kelas khusus untuk <br> membuat tampilan web responsive dan telah <br> mempunyai beberapa sertifikat'))

        div = $("div.section-working p")
        console.log(div.html('Saya telah menguwasai cara membuat tampilan <br> website dengan mengunakan <b>HTML.CSS </b> dan <br> <b>JavaScript </b> "Saya juga dapat mungunakan <br> framework modern seperti" <b>Bootstrap</b> dan <br> Library seperti <b>jQuery</b>'))

        span =$('span.contact-desktop-01')
        console.log(span.html('081230911816'))

        span =$('span.contact-desktop-02')
        console.log(span.html('yrumbiakwanma@gmail.com'))

        span =$('span.contact-desktop-03')
        console.log(span.html('Yohan Rumbiak'))

 
})