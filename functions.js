let x = document.getElementById("logo")
function myFunction() {
    console.log(x)
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}
// let last_known_scroll_positionY = 0;
// let ticking = false;
// let lastScrollTop = 0;

    let y=document.getElementById('navbar')

    let f=Array.from(y.childNodes)
    let comf=document.getElementById('comfort')
    let lim_tdi=document.getElementById('limited_tdi')
    let lim_tsi=document.getElementById('limited_tsi')
    for (let i = 0; i < f.length; i++) {
        f[i].addEventListener('click',function () {
            let current = document.getElementsByClassName("active");
            if(current.length===1)current[0].className = current[0].className.replace("active", "");
            f[i].className += " active";
            console.log(f[i].innerText)
            if(f[i].innerText==="Comfort Edition"){
                comf.style.visibility="visible"
                lim_tdi.style.visibility="hidden"
                lim_tsi.style.visibility="hidden"
                comf.scrollIntoView()
            }
            else if(f[i].innerText==="Limited Edition TDI"){
                comf.style.visibility="hidden"
                lim_tdi.style.visibility="visible"
                lim_tsi.style.visibility="hidden"
                lim_tdi.scrollIntoView()
            }
            else if(f[i].innerText==="Limited Edition TSI"){
                comf.style.visibility="hidden"
                lim_tdi.style.visibility="hidden"
                lim_tsi.style.visibility="visible"
                lim_tsi.scrollIntoView()
            }

        })
    }


var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop){
        x.className="hiding"
    } else {
        x.className="showing"
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

