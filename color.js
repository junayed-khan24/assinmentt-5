const colors = ['Aquamarine', 'LightPink', 'DarkKhaki', 'LightGreen', 'MediumSpringGreen', 'HotPink', 'skyblue', 
    'DarkSlateGray', 'yellowgreen', 'MediumAquamarine', 'Goldenrod'];
    
  
    let currentIndex = 0;

    
    const button = document.getElementById('colorToggle');

    button.addEventListener('click', () => {
      
      document.body.style.backgroundColor = colors[currentIndex];

    
      currentIndex = (currentIndex + 1) % colors.length;
    });