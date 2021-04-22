const verifystatus = document.querySelector(".verifystatus"),
    staffname = document.querySelector(".staffcard h4"),
    staffrole = document.querySelector(".staffrole"),
    staffbio = document.querySelector(".staffbio"),
    staffimg = document.querySelector(".staffcard img");
let verifystring = window.location.href.split("=")[1].toUpperCase();
async function getdata() {
    const res = await fetch("/staff.json").catch(error => {
            console.log("Looks like there was a problem: \n", error)
        }),
        data = await res.json();
    data.forEach(element => {
        element.id === verifystring && (document.querySelector(".staffcard").style.display = "flex", verifystatus.innerHTML = "Verified", verifystatus.style.color = "#0de22a", staffname.innerHTML = element.name, staffrole.innerHTML = element.role, staffbio.innerHTML = element.bio, staffimg.setAttribute("src", element.image))
    }), console.log(verifystring)
}
getdata();