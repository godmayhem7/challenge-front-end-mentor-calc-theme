// theme 1
document.querySelector("#theme1").addEventListener("click",()=>{
    document.querySelector("#theme1").classList.add("st-dv1-hdr");
    document.querySelector("#theme1").classList.remove("st-dv-hdr-neutral");

    document.querySelector("#theme2").classList.remove("st-dv2-hdr");
    document.querySelector("#theme2").classList.add("st-dv-hdr-neutral");

    document.querySelector("#theme3").classList.remove("st-dv3-hdr");
    document.querySelector("#theme3").classList.add("st-dv-hdr-neutral");

    document.querySelector("body").classList.remove("body2");
    document.querySelector("body").classList.add("body1");
    document.querySelector("body").classList.remove("body3");

    document.querySelector("section").classList.remove("theme3")
    document.querySelector("section").classList.add("theme1");
    document.querySelector("section").classList.remove("theme2");

    document.querySelector("#pp").classList.remove("p3");
    document.querySelector("#pp").classList.add("p1");
    document.querySelector("#pp").classList.remove("p2");

    document.querySelector("h3").classList.add("first-h3");
    document.querySelector("h3").classList.remove("second-h3");
    document.querySelector("h3").classList.remove("third-h3");
 
    let btnNumber=document.querySelectorAll("#btn").length
    for (let i=0;i<btnNumber;i++){
    
            document.querySelectorAll("#btn")[i].classList.add("btn1")
            document.querySelectorAll("#btn")[i].classList.remove("btn2")
            document.querySelectorAll("#btn")[i].classList.remove("btn3")
    }

    document.querySelector("h1").classList.add("first-h1");
    document.querySelector("h1").classList.remove("second-h1");
    document.querySelector("h1").classList.remove("third-h1");

    document.querySelector("header").classList.add("header1");
    document.querySelector("header").classList.remove("header2");
    document.querySelector("header").classList.remove("header3");

    document.querySelector("main").classList.add("main1");
    document.querySelector("main").classList.remove("main2");
    document.querySelector("main").classList.remove("main3");

    document.querySelector("#del").classList.add("del1");
    document.querySelector("#del").classList.remove("del2");
    document.querySelector("#del").classList.remove("del3");

    document.querySelector("#reset").classList.add("reset1");
    document.querySelector("#reset").classList.remove("reset2");
    document.querySelector("#reset").classList.remove("reset3");

    document.querySelector("#equal-to").classList.add("equal-to1");
    document.querySelector("#equal-to").classList.remove("equal-to2");
    document.querySelector("#equal-to").classList.remove("equal-to3");

    document.querySelector("#num").classList.add("the1")
    document.querySelector("#num").classList.remove("the2")
    document.querySelector("#num").classList.remove("the3")


})
// theme 2
document.querySelector("#theme2").addEventListener("click",()=>{
    document.querySelector("#theme1").classList.remove("st-dv1-hdr");
    document.querySelector("#theme1").classList.add("st-dv-hdr-neutral");

    document.querySelector("#theme2").classList.add("st-dv2-hdr");
    document.querySelector("#theme2").classList.remove("st-dv-hdr-neutral");

    document.querySelector("#theme3").classList.remove("st-dv3-hdr");
    document.querySelector("#theme3").classList.add("st-dv-hdr-neutral");

    document.querySelector("body").classList.add("body2");
    document.querySelector("body").classList.remove("body1");
    document.querySelector("body").classList.remove("body3");

    document.querySelector("section").classList.remove("theme1");
    document.querySelector("section").classList.add("theme2");
    document.querySelector("section").classList.remove("theme3");

    document.querySelector("#pp").classList.remove("p1");
    document.querySelector("#pp").classList.add("p2");
    document.querySelector("#pp").classList.remove("p3");

    document.querySelector("h3").classList.remove("first-h3");
    document.querySelector("h3").classList.add("second-h3");
    document.querySelector("h3").classList.remove("third-h3");
 
    let btnNumber=document.querySelectorAll("#btn").length
    for (let i=0;i<btnNumber;i++){
    
            document.querySelectorAll("#btn")[i].classList.remove("btn1")
            document.querySelectorAll("#btn")[i].classList.add("btn2")
            document.querySelectorAll("#btn")[i].classList.remove("btn3")
    }

    document.querySelector("h1").classList.remove("first-h1");
    document.querySelector("h1").classList.add("second-h1");
    document.querySelector("h1").classList.remove("third-h1");

    document.querySelector("header").classList.remove("header1");
    document.querySelector("header").classList.add("header2");
    document.querySelector("header").classList.remove("header3");

    document.querySelector("main").classList.remove("main1");
    document.querySelector("main").classList.add("main2");
    document.querySelector("main").classList.remove("main3");

    document.querySelector("#del").classList.remove("del1");
    document.querySelector("#del").classList.remove("del3")
    document.querySelector("#del").classList.add("del2");

    document.querySelector("#reset").classList.remove("reset1");
    document.querySelector("#reset").classList.remove("reset3");
    document.querySelector("#reset").classList.add("reset2");

    document.querySelector("#equal-to").classList.remove("equal-to1");
    document.querySelector("#equal-to").classList.add("equal-to2");
    document.querySelector("#equal-to").classList.remove("equal-to3");

    document.querySelector("#num").classList.add("the2")
    document.querySelector("#num").classList.remove("the3")
    document.querySelector("#num").classList.remove("the1")


})

// theme three
document.querySelector("#theme3").addEventListener("click",()=>{
    document.querySelector("#theme1").classList.remove("st-dv1-hdr");
    document.querySelector("#theme1").classList.add("st-dv-hdr-neutral");

    document.querySelector("#theme2").classList.remove("st-dv2-hdr");
    document.querySelector("#theme2").classList.add("st-dv-hdr-neutral");

    document.querySelector("#theme3").classList.add("st-dv3-hdr");
    document.querySelector("#theme3").classList.remove("st-dv-hdr-neutral");

    document.querySelector("body").classList.remove("body2");
    document.querySelector("body").classList.add("body3");
    document.querySelector("body").classList.remove("body1");

    document.querySelector("section").classList.remove("theme1");
    document.querySelector("section").classList.remove("theme2");
    document.querySelector("section").classList.add("theme3");

    document.querySelector("#pp").classList.remove("p1");
    document.querySelector("#pp").classList.remove("p2");
    document.querySelector("#pp").classList.add("p3");

    document.querySelector("h3").classList.remove("first-h3");
    document.querySelector("h3").classList.remove("second-h3");
    document.querySelector("h3").classList.add("third-h3");
 
    let btnNumber=document.querySelectorAll("#btn").length
    for (let i=0;i<btnNumber;i++){
    
            document.querySelectorAll("#btn")[i].classList.remove("btn1")
            document.querySelectorAll("#btn")[i].classList.remove("btn2")
            document.querySelectorAll("#btn")[i].classList.add("btn3")
    }

    document.querySelector("h1").classList.remove("first-h1");
    document.querySelector("h1").classList.remove("second-h1");
    document.querySelector("h1").classList.add("third-h1");

    document.querySelector("header").classList.remove("header1");
    document.querySelector("header").classList.remove("header2");
    document.querySelector("header").classList.add("header3");

    document.querySelector("main").classList.remove("main1");
    document.querySelector("main").classList.remove("main2");
    document.querySelector("main").classList.add("main3");

    document.querySelector("#del").classList.remove("del1");
    document.querySelector("#del").classList.remove("del2");
    document.querySelector("#del").classList.add("del3");

    document.querySelector("#reset").classList.remove("reset1");
    document.querySelector("#reset").classList.remove("reset2");
    document.querySelector("#reset").classList.add("reset3");

    document.querySelector("#equal-to").classList.remove("equal-to1");
    document.querySelector("#equal-to").classList.remove("equal-to2");
    document.querySelector("#equal-to").classList.add("equal-to3");

    document.querySelector("#num").classList.add("the3")
    document.querySelector("#num").classList.remove("the2")
    document.querySelector("#num").classList.remove("the1")


})


