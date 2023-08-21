function toggleMode() {
   const html = document.documentElement
   html.classList.toggle('light')

   // pegar a tag img
   const img = document.querySelector("#profile img")
   
   // substituir a imagaem
   if(html.classList.contains('light')) {
     // se tuver light mode, adicionar a imagem light
    img.setAttribute('src','VScode/assets/avatar-light.png')
        // se tiver sem light mode, manter a imagem normal
   } else {
      img.setAttribute('src', 'VScode/assets/Avatar.png')
   }
}