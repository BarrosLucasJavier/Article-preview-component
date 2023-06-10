window.addEventListener('load', () =>{
    btnShare = document.getElementById('btn-share');
    btnDark = document.getElementById('dark');
    articleShare = document.getElementById('article-share');
    articleShareIcons = document.getElementById('article-share-icons')
    
    let media = window.matchMedia("(max-width: 700px)")

    const mediaQuerie = () =>{
        if (media.matches) {
            articleShare.classList.add('flip-horizontal-bottom');
            articleShareIcons.classList.add('flip-horizontal-bottom');
            btnShare.addEventListener('click', ()=>{
                
                    articleShare.style.display = 'none';
                    articleShareIcons.style.display = 'flex'
            })
            
            btnDark.addEventListener('click', ()=>{
        
                    articleShare.style.display = 'flex';
                    articleShareIcons.style.display = 'none'
            })
        }else{
            articleShare.classList.remove('flip-horizontal-bottom');
            articleShareIcons.classList.remove('flip-horizontal-bottom');
            btnShare.addEventListener('click', ()=>{
        
                articleShareIcons.classList.toggle("toggle")
            })
        }
    }
    mediaQuerie(media)
    media.addEventListener('change', mediaQuerie)


})