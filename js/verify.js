const verifystatus = document.querySelector('.verifystatus'),
  staffname = document.querySelector('.staffcard h4'),
  staffrole = document.querySelector('.staffrole'),
  staffbio = document.querySelector('.staffbio'),
  staffimg = document.querySelector('.staffcard img')
let verifystring = window.location.href.split('=')[1].toUpperCase()

async function getdata() {
  const e = await fetch('/staff.json').catch((e) => {
    console.log('Looks like there was a problem: \n', e)
  })

  const data = await e.json()

  data.forEach((e) => {
    if (e.id === verifystring) {
      document.querySelector('.staffcard').style.display = 'flex'
      verifystatus.innerHTML = 'Verified'
      verifystatus.style.color = '#0de22a'
      staffname.innerHTML = e.name
      staffrole.innerHTML = e.role
      staffbio.innerHTML = e.bio
      staffimg.setAttribute('src', e.image)
      console.log(e.id === verifystring)
    }
  })
}
getdata()
