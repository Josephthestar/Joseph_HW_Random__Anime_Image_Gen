const imgArray = [
    'https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg', // One Piece
    'https://img1.ak.crunchyroll.com/i/spire3/d23bea1cbe84833135f94695d900f0651651339079_main.png', // Spy x Family
    'https://hips.hearstapps.com/hmg-prod/images/mh-1-31-anime-1675192331.png?crop=0.460xw:0.919xh;0,0&resize=1200:*', // Attack on Titan
    'https://www.liveabout.com/thmb/EuzMFCouNw8IFMXsJj9rttEvCcg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-148520785-5ad9029f43a1030037b76966-5b92e966c9e77c008294ae38.jpg', // Bleach
    'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/9b22fdc9b3c0a5e0c6373adba8b7ac61.jpe', // Demon Slayer
    'https://www.gematsu.com/wp-content/uploads/2022/12/NieR-Automata-PV_12-25-22.jpg', // Nier Automata Anime
    'https://i.insider.com/5e820b04671de06758588fb8?width=700' // Naruto
  ];
  
  function addImage() {
    const newImage = imgArray[Math.floor(Math.random() * imgArray.length)];
    const $newImg = $('<img>').attr('src', newImage).css({
      width: '150px',
      height: '150px'
    }).on('click', function() {
      $(this).remove();
    });
    $('body').append($newImg);
  }
  
  $(function() {
    $('body').css('display', '');
  
    const $div = $('<div>').addClass('square').css({
      position: 'fixed',
      top: '50px',
      right: '100px',
      width: '150px',
      height: '150px',
      backgroundColor: 'gray',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    });
    
    
    const $icon = $('<i>').addClass('').css({
      color: 'white',
      fontSize: '40px',
      marginRight: '5px'
    });
    
    const $text = $('<span>').text('Add Random Image').css({
      color: 'white'
    });
  
    const $button = $('<button>').addClass('add-button').text('Click to select a Random Image').on('click', addImage);
    
    $div.append($icon, $text, $button);
    $div.appendTo('body');
  });
  
  