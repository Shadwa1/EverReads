const header = document.createElement("header");
header.classList.add("main-header");
document.body.insertBefore(header, document.body.firstChild);

function createNavbar() {
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");

    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");
    logoDiv.textContent = "EverReads";
    navbar.appendChild(logoDiv);

    const searchWrapper = document.createElement("div");
    searchWrapper.classList.add("search-wrapper");

    const searchIcon = document.createElement("img");
    searchIcon.src = "img/icon/search icon.svg";
    searchIcon.alt = "Search Icon";
    searchIcon.classList.add("search-icon");
    searchWrapper.appendChild(searchIcon);

    const searchBar = document.createElement("input");
    searchBar.type = "text";
    searchBar.classList.add("search-bar");
    searchBar.placeholder = "Search by Title, Author or Keyword";
    searchWrapper.appendChild(searchBar);

    navbar.appendChild(searchWrapper);

    const navLinks = document.createElement("ul");
    navLinks.classList.add("nav-links");
    ["Home", "Feedback", "Blog"].forEach((link) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = link;
        li.appendChild(a);
        navLinks.appendChild(li);
    });
    navbar.appendChild(navLinks);

    const authButtons = document.createElement("div");
    authButtons.classList.add("auth-buttons");

    const signInButton = document.createElement("button");
    signInButton.textContent = "Sign In";
    signInButton.classList.add("sign-in");
    authButtons.appendChild(signInButton);

    const registerButton = document.createElement("button");
    registerButton.textContent = "Register";
    registerButton.classList.add("register");
    authButtons.appendChild(registerButton);

    navbar.appendChild(authButtons);
    document.querySelector("header").appendChild(navbar);
}


function createLandingPage() {
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");

    const landingHeading = document.createElement("h1");
    landingHeading.innerHTML = `Your Digital Haven for <span>Books <span1>&</span1> Beyond</span>`;
    contentDiv.appendChild(landingHeading);

    const landingText = document.createElement("p");
    landingText.textContent =
    "More than just books, EverReads is a sanctuary for curious minds and passionate readers. Whether you seek adventure, knowledge, or a moment of peace, you'll find it here.";
    contentDiv.appendChild(landingText);

    const startNowButton = document.createElement("button");
    startNowButton.classList.add("start-now");
    startNowButton.textContent = "Start Now!";
    contentDiv.appendChild(startNowButton);

    startNowButton.addEventListener("click", function () {
        alert("Welcome! Let's start exploring.");
    });

    const candleGlow = document.createElement("div");
    candleGlow.classList.add("candle-glow");

    const landingSection = document.querySelector(".landing");
    landingSection.appendChild(contentDiv);
    landingSection.appendChild(candleGlow);
}
document.addEventListener("DOMContentLoaded", function () {
    createNavbar();
    createLandingPage(); 
});

 const pageSection = document.getElementById("page2");
 pageSection.innerHTML = `
     <div class="container">
         <div class="book-gallery">
             <img src="img/books.png" alt="books">
         </div>
         <div class="text-content">
             <h1> Find your Next <span> Favorite </span> Book Instantly </h1>
             <p>Dive into a curated collection of eBooks and audiobooks spanning various genres. From timeless classics to modern favorites, there's always something special waiting for every book lover. <span> Click </span> below to explore our vast library!</p>
             <button>Discover More!</button>
            </div>
        </div>
    `;
      const categoriesSection = document.getElementById("3");
categoriesSection.innerHTML = `
       <section>
        <h2 class="categories-title">Explore our categories</h2>
        <div class="categories">
            ${['Academic', 'Children', 'Mystery', 'Fiction', 'Poetry', 'Design', 'Philosophy']
                .map(category => `<button class="category">${category}</button>`)
                .join('')}
        </div>
        <a href="#" class="see-all">See All > </a>
    </section>
`;

   const trendingSection = document.querySelector(".trending-section");
   trendingSection.innerHTML = `
       <h2>Trending This Month</h2>
       <div class="main-container">
           <aside class="sidebar">
               <input type="text" placeholder="Search" class="search-bar2" />
               <ul>
                   ${['REVIEWS', 'WISHLIST', 'AUTHOURS', 'POPULAR', 'FAVORITES', 'MOST READ', 'ALL GENRES', 'RANDOM BOOK', 'NEW RELAESES', 'RECOMMENDATIONS']
                       .map(item => `<li>${item}</li>`)
                       .join('')}
               </ul>
           </aside>
           <div class="book-grid">
               ${[
                   { title: 'قصة الفن', author: 'إرنيست غومبريتش', img: 'img/trend 1.png', pdf: ''},
                   { title: 'اللاهوت والسياسة', author: 'سبينوزا', img: 'img/trend 2.png' , pdf: 'pdf/nahj_al_balaghah.pdf..pdf'},
                   { title: 'لغة الجسد', author: 'كمال إبراهيم', img: 'img/trend 3.png' , pdf: 'pdf/nahj_al_balaghah.pdf..pdf'},
                   { title: 'تاريخ العرب القديم', author: 'فراس سليم', img: 'img/trend 4.png' , pdf: 'pdf/nahj_al_balaghah.pdf..pdf'},
                   { title: 'تاريخ الفلسفة', author: 'فريدريك كوبلستون', img: 'img/trend 5.png', pdf: 'pdf/nahj_al_balaghah.pdf..pdf' },
                   { title: 'ابن رشد', author: 'عباس العقاد', img: 'img/trend 6.png' , pdf: 'pdf/nahj_al_balaghah.pdf..pdf'},
                   { title: 'نهج البلاغة' , author: 'علي بن أبي طالب', img: 'img/trend 8.png', pdf: 'pdf/nahj_al_balaghah.pdf..pdf' },
    { title: 'الأخلاق و السير', author: 'محمد الكعبي', img: 'img/trend 7.png' , pdf: ''},]
    .map(
      (book, index) => `
          <div class="book-card" data-title="${book.title}" data-author="${book.author}" data-index="${index}" data-pdf="${book.pdf}">
              <img src="${book.img}" alt="${book.title}" class="book-image">
              <div class="book-info">
                               ${[...Array(4)].map(() => 
                                   `<img src="img/icon/star icon.svg" alt="Star" />`
                               ).join('')}
                  <h3>${book.title}</h3>
                  <p>${book.author}</p>
                  <div class="icons">
                      <img src="img/icon/fav icon.svg" alt="Favorite Icon" />
                      <img src="img/icon/share icon.svg" alt="Share Icon" />
                      <img src="img/icon/saveicon2.svg" alt="Save Icon" data-pdf="${book.pdf}"/>
                  </div>
                  
                  <button class="read-now">Read Now</button>
              </div>
          </div>
      `
   )
  .join("")}
</div></div>
   `;

const bookCards = document.querySelectorAll(".book-grid .book-card");
const books = Array.from(bookCards).map((card) => ({
    title: card.dataset.title,
    author: card.dataset.author,
    pdf: card.dataset.pdf,
}));

bookCards.forEach((card, index) => {
    const saveIcon = card.querySelector("img[alt='Save Icon']");
    const favIcon = card.querySelector("img[alt='Favorite Icon']");
    const shareIcon = card.querySelector("img[alt='Share Icon']");

    saveIcon.addEventListener("click", () => {
        const pdfUrl = saveIcon.dataset.pdf;
        if (pdfUrl) {
            const a = document.createElement("a");
            a.href = pdfUrl;
            a.download = `${books[index].title}.pdf`;
            a.click();

            Swal.fire({
                title: 'Success!',
                text: 'Book Downloaded!',
                icon: 'success',
              confirmButtonText: 'OK',
              background: '#222', 
              color: '#D8B584', 
              confirmButtonColor: '#846E50', 
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Sorry, there is no file for this book.',
                icon: 'error',
              confirmButtonText: 'Close',
              confirmButtonText: 'OK',
              background: '#222',
              color: '#D8B584', 
              confirmButtonColor: '#846E50', 
            });
        }
    });

    favIcon.addEventListener("click", () => {
        Swal.fire({
            title: 'Added to Favourites!',
            text: `"${books[index].title}" has been added to your favourites.`,
            icon: 'info',
          confirmButtonText: 'OK',
          background: '#222', 
          color: '#D8B584',
          confirmButtonColor: '#846E50', 
        });
    });

    shareIcon.addEventListener("click", () => {
        const shareUrl = `https://EverReads.com/book-page/${books[index].title.replace(/\s+/g, '_')}`;
        Swal.fire({
            title: 'Share This Book!',
            html: `Check out this book: <strong>"${books[index].title}"</strong>.<br>Book URL: <a href="${shareUrl}" target="_blank">${shareUrl}</a>`,
            icon: 'info',
          confirmButtonText: 'Copy Link',
          background: '#222',
          color: '#D8B584', 
          confirmButtonColor: '#846E50', 
        }).then((result) => {
            if (result.isConfirmed) {
                navigator.clipboard.writeText(shareUrl);
                Swal.fire({
                    title: 'Copied!',
                    text: 'The book link has been copied to your clipboard.',
                    icon: 'success',
                  timer: 1500,
                  background: '#222', 
                  color: '#D8B584', 
                  confirmButtonColor: '#846E50', 
                });
            }
        });
    });
});

            const topSection = document.querySelector(".Top");
            topSection.innerHTML = `
                <h6>Top Rated By Readers</h6>
                <div class="book-grid2">
                    ${[
                        { title: 'الأجنحة المتكسرة', author: 'جبران خليل جبران', img: 'img/rate 1.png'},
                        { title: 'مقدمة بن خلدون', author: 'عبد الرحمن بن خلدون', img: 'img/rate 2.png' },
                        { title: 'رأس المال لماركس', author: 'فرانسيس وين', img: 'img/rate 3.png' },
                        { title: 'النظرات', author: 'مصطفى لطفي المنفلوطي', img: 'img/rate 4.png' },
                    ]
                .map(book => `
                            <div class="book-card2">
                            
                                <img src="${book.img}" alt="${book.title}" class="book-image2" >
                                <div class="stars">
                                ${[...Array(5)].map(() => `
                                <img src="img/icon/star icon.svg" alt="Star" class="stars2" >
                                `).join('')}
                            </div>
                                <div class="book-info2">
                                    <h5>${book.title}</h5>
                                    <p>${book.author}</p>
                                    <div class="icons2">
                                        <img src="img/icon/fav icon.svg" alt="Favorite Icon">
                                        <img src="img/icon/share icon.svg" alt="Share Icon">
                                        <img src="img/icon/saveicon2.svg" alt="Save Icon">
                                    </div>
                                    <button class="read-now2">Read Now</button>
                                </div>
                            </div>
                        `)
                        .join('')}
                </div>
            `;
        ;

 const insights = [
    {
        image: "img/a 1.png",
        category: "Reading",
        time: "5 min read",
        title: "How Books Transform Lives",
        description: "Exploring the power of books in shaping personalities.",
        link: "#"
    },
    {
         image: "img/a 2.png",
         category: "Reviews",
         time: "5 min read",
         title: "Top 10 Must-Read Books of 2025",
         description: "Explore the best books that are trending this year.",
         link: "#"
     },
     {
        image: "img/a 3.png",
        category: "Ideas",
      time: "5 min read",
      title: "Secrets of a Successful Writer",
      description: "How to find inspiration and enhance your writing skills",
      link: "#"
     }
 ];
 const section = document.createElement('section');
 section.id = 'insights-section';


 section.innerHTML = `
     <div class="section-header">
         <h2>Explore Our Latest Insights</h2>
         <a href="#" class="see-all">See all &rsaquo;</a>
     </div>
     <p class="section-subtitle">
         Discover tips and trends in reading and literature in our blog.
     </p>
     <div id="insights-grid" class="cards-container"></div>
     
 `;
 
 const grid = document.getElementById('insights-grid');
 document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('section.blog');
  
    if (!section) {
      console.error('section.blog not found');
      return;
    }
    section.innerHTML += `
    <a href="#" class="see-all2">See All > </a>
`;

    const heading = document.createElement('h1');
    heading.textContent = 'Explore Our Latest Insights';
  
    const subheading = document.createElement('h2');
    subheading.textContent = 'Discover tips and trends in reading and literature in our blog.';
  
    section.insertBefore(heading, section.firstChild);
    section.insertBefore(subheading, section.firstChild);
  
    const heading2 = section.querySelector('h1');
    const subheading2 = section.querySelector('h2');
  
    if (heading2 && subheading2) {
      section.insertBefore(subheading2, heading2.nextSibling);
    }
  
    section.style.display = 'flex';
    section.style.flexDirection = 'column';
    section.style.justifyContent = 'center';
    section.style.alignItems = 'center';
  });
 insights.forEach(insight => {
     const card = document.createElement('div');
     card.className = 'card';

     card.innerHTML = `
        <img src="${insight.image}" alt="${insight.title}">
        <div class="card-content">
            <span>${insight.category} • ${insight.time}</span>
            <h3>${insight.title}</h3>
            <p>${insight.description}</p>
            <a href="${insight.link}" class="read-more">Read more</a>
        </div>
        
    `;

     grid.appendChild(card);
 });
document.addEventListener("DOMContentLoaded", function () {
 const authorSection = document.getElementById("author-section");
 console.log(authorSection);
const authorDetails = `
  <div class="author-details">
  <div class="author-info">
    <img src="img/Author.png" alt="Naguib Mahfouz" class="aphoto" />
    <h2>Naguib Mahfouz</h2>
    <div class="info-numbers">
    <span>35</span>
    <span>13,500</span>
    <span>4.8</span>
  </div>
  <div class="info-labels">
    <p>Books</p>
    <p>Readers</p>
    <p>Rating</p>
    </div>
    </div>
      <div class="biography-section">
           <h3>Biography</h3>
           <p>
            Naguib Mahfouz <span> (1911–2006)</span> was an <span>Egyptian</span> novelist and one of the most celebrated writers of the 20th century. Known as the 
            "father of Arabic literature," he was awarded the Nobel Prize in Literature in 1988, becoming the first Arab writer to receive this prestigious honor. His works explore themes of identity, politics, and the struggles of modern life, deeply rooted in the streets of <span>Cairo. </span>
</p>
     </div>
            </div>
`;
const writerGenres = `
<div class="writer">
<h5>Writer Of The Month</h5>
<h3>Writer's Genres</h3>
<ul class="author-genres">
  <li class="genre-item">Social Novels</li>
  <li class="genre-item">Short Stories</li>
  <li class="genre-item">Symbolic Fiction</li>
  <li class="genre-item">Historical Novels</li>
  <li class="genre-item">Political Narratives</li>
  <li class="genre-item">Trilogy Series</li>
  <li class="genre-item">Screenplays</li>
  <li class="genre-item">Experimental Literature</li>
  <li class="genre-item">Religious Themes</li>
  <li class="genre-item">Philosophical Literature</li>
</ul>
</div>
`;
const books =
    [
    {
            img: "img/reco 1.png",
        rating: "★★★★★",
      title: "ليالي ألف ليلة",
      genre: "Fantasy & Folk Tales",
      published: "1939",
      synopsis: "A reimagining of the classic tales, Mahfouz breathes new life into the stories of Scheherazade.",
    },
    {
        img: "img/reco 2.png",
        rating: "★★★★★",
      title: "حديث الصباح والمساء",
      genre: "Historical Drama",
        published: "1987",
        synopsis: "A compelling narrative exploring the intertwining lives of Egyptian families across generations.",
      
    },
  ];
  
const booksSection = `
<div class="recommendations-section">
  <h3>Recommendations</h3>
    <div class="books">
  ${books
    .map(
       (book) => `
           <div class="book-card3">
             <div class="book-top">
               <img src="${book.img}" alt="${book.title}" />
               <div class="book-info3">
                 <p class="label">• Genre: <span>${book.genre}</span></p>
                 <p class="label">• Published: <span>${book.published}</span></p>
                 <p class="label">• Synopsis: <span>${book.synopsis}</span></p>
               </div>
             </div>
              <p class="rating">${book.rating}</p>
             <h4>${book.title}</h4>
           </div>
    `
    )
    .join('')}
</div>
</div>
`;
authorSection.innerHTML = `
  <div class="left-column">
    ${authorDetails}
  </div>
  <div class="right-column">
    ${writerGenres}
    ${booksSection}
  </div>
`;
});

document.addEventListener("DOMContentLoaded", function () {
    const searchInputSidebar = document.querySelector(".search-bar2");
    function searchInPage() {
        const query = searchInputSidebar.value.toLowerCase(); 
        const allBooks = document.querySelectorAll(".book-card, .book-card2"); 
        allBooks.forEach((book) => {
            book.style.display = "block"; 
        });
        allBooks.forEach((book) => {
        const title = book.querySelector("h3, h5")?.textContent.toLowerCase();
         const author = book.querySelector("p")?.textContent.toLowerCase(); 
         if (
            !title.includes(query) && 
            !author.includes(query)   
            ) {
            book.style.display = "none"; 
            }
        });
    }
    searchInputSidebar.addEventListener("input", searchInPage);
});
document.querySelectorAll("book-card image").forEach(img => {
img.style.width = "50%";
img.style.height = "50%";
img.style.objectFit = "cover";
});
document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("why-everreads");

  if (!section) {
    console.error("Section 'why-everreads' not found!");
    return;
  }

  const title = document.createElement("h2");
  title.className = "section-title";

  const span = document.createElement("span");
  span.textContent = "EverReads";

  title.append("Why ", span, " ?");
  section.appendChild(title);


    const subtitle = document.createElement("p");
    subtitle.textContent = "Discover Why EverReads is Your Perfect Reading Companion!";
    subtitle.className = "section-subtitle";
  
    section.appendChild(title);
    section.appendChild(subtitle);
  
     const cardsData = [
      {
        img: "img/r 1.png",
        title: "Vast Collection",
        description:
          "With a diverse collection of titles of all genres, EverReads offers endless possibilities for exploration and discovery all at your fingertips.",
      },
      {
        img: "img/r 2.png",
        title: "Community of Readers",
        description:
          "Become part of a community of book lovers. Share your passion, exchange reviews, and connect with like-minded readers worldwide.",
      },
      {
        img: "img/r 3.png",
        title: "Personalized Experience",
        description:
          "Receive recommendations based on your unique preferences and reading habits. Never run out of exciting and great titles to enjoy.",
      },
      {
        img: "img/r 4.png", 
        title: "User-Friendly Interface",
        description:
          "Our platform is designed for a seamless reading experience, that makes it easy to navigate and find the books you love.",
      },
    ];

    const cardsContainer = document.createElement("div");
    cardsContainer.className = "cards4-container";
  
    cardsData.forEach((card4) => {
      const cardElement = document.createElement("div");
      cardElement.className = "card4";
  
      const img = document.createElement("img");
      img.src = card4.img;
      img.alt = card4.title;
  
      const cardTitle = document.createElement("h3");
      cardTitle.textContent = card4.title;
  
      const cardDescription = document.createElement("p");
      cardDescription.textContent = card4.description;
  
      const learnMore = document.createElement("a");
      learnMore.textContent = "Learn more ›";
      learnMore.href = "#";
  
      cardElement.appendChild(img);
      cardElement.appendChild(cardTitle);
      cardElement.appendChild(cardDescription);
      cardElement.appendChild(learnMore);
  
      cardsContainer.appendChild(cardElement);
    });
  
    section.appendChild(cardsContainer);

    const footer = document.createElement("div");
    footer.className = "newsletter-footer";
  
    const footerText = document.createElement("p");
    footerText.textContent = "Don't miss out on our latest updates!";
    footerText.className = "p1"
  
    const footerSubtext = document.createElement("p");
    footerSubtext.textContent = "Stay informed about new books and special offers.";
    footerSubtext.className = "p2"
  
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Your Email Here";
  
    const joinButton = document.createElement("button");
    joinButton.textContent = "Join";
  
    footer.appendChild(footerText);
    footer.appendChild(footerSubtext);
    footer.appendChild(emailInput);
    footer.appendChild(joinButton);
  
    section.appendChild(footer);
  });
const footerContent = `
<div class="footer-container">
  <div class="footer-logo">
    <h2>EverReads</h2>
  </div>
  <div class="footer-links">
    <div>
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Support</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Blog Posts</a></li>
        <li><a href="#">Latest News</a></li>
      </ul>
    </div>
    <div>
      <h3>Follow Us</h3>
      <ul>
        <li><a href="#">Facebook Page</a></li>
        <li><a href="#">Twitter Feed</a></li>
        <li><a href="#">Instagram Gallery</a></li>
        <li><a href="#">LinkedIn Profile</a></li>
        <li><a href="#">YouTube Channel</a></li>
      </ul>
    </div>
    <div>
      <h3>Resources</h3>
      <ul>
        <li><a href="#">Reading Lists</a></li>
        <li><a href="#">Author Interviews</a></li>
        <li><a href="#">Book Reviews</a></li>
        <li><a href="#">Literary Events</a></li>
        <li><a href="#">User Guides</a></li>
      </ul>
    </div>
    <div>
      <h3>Support</h3>
      <ul>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Feedback Form</a></li>
        <li><a href="#">Technical Support</a></li>
        <li><a href="#">Community Forum</a></li>
        <li><a href="#">Legal</a></li>
      </ul>
    </div>
    <div>
      <h3>Policies</h3>
      <ul>
        <li><a href="#">Accessibility Statement</a></li>
        <li><a href="#">User Agreement</a></li>
        <li><a href="#">Privacy Notice</a></li>
        <li><a href="#">Cookie Policy</a></li>
        <li><a href="#">Data Protection</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 EverReads. All rights reserved. <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Cookie Settings</a></p>
    <div class="social-icons">
      <a href="#"><i class="facebook"></i> </a>
      <a href="#"><i class="instagram"></i></a>
      <a href="#"><i class="twitter"></i></a>
      <a href="#"><i class="linkedin"></i></a>
       <div class="social-icons">
     <img src="img/icon/facebook.svg" alt="facebook">
     <img src="img/icon/insta.svg" alt="instagram">
     <img src="img/icon/x.svg" alt="twitter">
     <img src="img/icon/linked.svg" alt="linkedin">
 </div>
    </div>
  </div>
   </div>
`;

document.getElementById('footer-section').innerHTML = footerContent;
