const header = () => {

    const HEADER = document.querySelector('.header')

    // Появление хэдера при скролле ======================================================================================================

    let lastPageYOffset = window.pageYOffset
    
    toggleHeader()
    window.addEventListener('scroll', toggleHeader)

    function toggleHeader() {

        const newPageYOffset = window.pageYOffset
        
        if (newPageYOffset < HEADER.offsetHeight) {
            HEADER.classList.add('header--show')
            HEADER.classList.remove('header--following')
            return false
        }
        
        HEADER.classList.add('header--following')

        if (newPageYOffset < lastPageYOffset) {
            HEADER.classList.add('header--show')
        } else {
            HEADER.classList.remove('header--show')
        }

        lastPageYOffset = newPageYOffset

    }
}

export default header