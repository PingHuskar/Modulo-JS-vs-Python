const main = () => {
    // const v1 = parseInt(document.getElementById("v1").value)
    // const v2 = parseInt(document.getElementById("v2").value)
    const v1 = document.getElementById("v1").value
    const v2 = document.getElementById("v2").value
    document.getElementById("js").innerText = `${v1} % ${v2} = ${(v1<0)&&(v1%v2==0) ? "-"+v1%v2 : v1%v2}`
    document.getElementById("py").innerText = `${v1} % ${v2} = ${parseInt(v1)%parseInt(v2) < 0 ? parseInt(v1)%parseInt(v2)+parseInt(v2) : parseInt(v1)%parseInt(v2) }`
}