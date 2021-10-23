const LinksSocialMedia = {
  github: 'marckdados',
  instagram: 'marck_dev',
  youtube: 'channel/UCdyM0DJS1rNNRvBQcCE0FsA',
  twitter: 'byecoffe',
  facebook: 'maykbrito'
}

function changeSocialMediaLinks() {
  for (li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${LinksSocialMedia[social]}`
  }
}

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      userLink.href = data.html_url
      fotoAvatar.src = data.avatar_url
      userId.textContent = data.login
    })
}

getGithubProfileInfos()
changeSocialMediaLinks()
