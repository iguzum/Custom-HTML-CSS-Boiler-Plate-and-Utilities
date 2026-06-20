//  ?   This code allows user to type w-[value], h-[value], max-w-[value], or max-h-[value]
//  ?   Directly into the class attribute. It parses these classes on load 
//  ?   And applies them as inline styles, fulfilling the need for custom css


// :: SIZING width and height

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('*');
    
    elements.forEach(el => {
        el.classList.forEach(cls => {
            if (cls.startsWith('w-[')) {
                const val = cls.match(/w-\[(.*?)\]/)[1];
                el.style.width = val;
            }
            if (cls.startsWith('h-[')) {
                const val = cls.match(/h-\[(.*?)\]/)[1];
                el.style.height = val;
            }
            if (cls.startsWith('max-w-[')) {
                const val = cls.match(/max-w-\[(.*?)\]/)[1];
                el.style.maxWidth = val;
            }
            if (cls.startsWith('max-h-[')) {
                const val = cls.match(/max-h-\[(.*?)\]/)[1];
                el.style.maxheight = val;
            }
        });
    });
});