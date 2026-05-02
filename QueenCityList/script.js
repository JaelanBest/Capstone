const STORAGE_KEY = "marketplacePostsFigmaCleanV4";
const THEME_KEY = "marketplaceTheme";
const DATA_VERSION_KEY = "queenCityListLabeledPhotosV3";
if (localStorage.getItem(DATA_VERSION_KEY) !== "true") {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.setItem(DATA_VERSION_KEY, "true");
}

const PLACEHOLDER = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220">
  <rect width="320" height="220" fill="#efefef"/>
  <rect x="22" y="22" width="276" height="176" rx="12" fill="#ffffff" stroke="#888"/>
  <circle cx="100" cy="162" r="32" fill="none" stroke="#555" stroke-width="8"/>
  <circle cx="222" cy="162" r="32" fill="none" stroke="#555" stroke-width="8"/>
  <path d="M100 162 L137 108 L175 108 L151 162 Z" fill="none" stroke="#e25a46" stroke-width="8"/>
  <path d="M175 108 L222 162" fill="none" stroke="#e25a46" stroke-width="8"/>
  <path d="M137 108 L120 85" fill="none" stroke="#e25a46" stroke-width="8"/>
  <path d="M175 108 L199 85" fill="none" stroke="#e25a46" stroke-width="8"/>
</svg>
`)}`;

const starterPosts = [
  {
    id: 1,
    title: "Weekly Bike Ride Meetup",
    location: "Charlotte",
    desc: "Local weekly bike ride group for casual riders around the Queen City.",
    price: "Free",
    category: "Activities",
    email: "ridegroup@gmail.com",
    phone: "",
    image: "images/weekly-bike-ride.webp",
    images: ["images/weekly-bike-ride.webp"]
  },
  {
    id: 2,
    title: "Blue Sport Motorcycle",
    location: "Concord",
    desc: "Clean blue sport motorcycle with smooth handling. Best for experienced riders.",
    price: "$7,800",
    category: "Vehicles",
    email: "bikeguy@gmail.com",
    phone: "704-555-2211",
    image: "images/blue-motorcycle.jpg",
    images: ["images/blue-motorcycle.jpg"]
  },
  {
    id: 3,
    title: "Red Superbike",
    location: "Charlotte",
    desc: "High-performance red motorcycle. Garage kept and ready to ride.",
    price: "$11,500",
    category: "Vehicles",
    email: "ducatiseller@gmail.com",
    phone: "704-555-7788",
    image: "images/red-motorcycle.jpg",
    images: ["images/red-motorcycle.jpg"]
  },
  {
    id: 4,
    title: "Vintage Cruiser Bike",
    location: "Matthews",
    desc: "Classic red cruiser bike with a comfortable seat for casual riding.",
    price: "$180",
    category: "Bikes",
    email: "vintagebike@gmail.com",
    phone: "",
    image: "images/vintage-red-bike.jpg",
    images: ["images/vintage-red-bike.jpg"]
  },
  {
    id: 5,
    title: "Trek Road Bike",
    location: "Charlotte",
    desc: "Lightweight road bike, great for city rides and long-distance training.",
    price: "$450",
    category: "Bikes",
    email: "seller1@gmail.com",
    phone: "",
    image: "images/yellow-road-bike.jpg",
    images: ["images/yellow-road-bike.jpg"]
  }
];

const supplementalCategoryPosts = [
  {
    id: 6,
    title: "Board Game Night",
    location: "Charlotte",
    desc: "Casual board game meetup for people looking to hang out and meet new friends.",
    price: "Free",
    category: "Activities",
    email: "games@queencitylist.com",
    phone: "704-555-0106",
    image: "images/Board Game Night(1).avif",
    images: ["images/Board Game Night(1).avif"]
  },
  {
    id: 7,
    title: "Pool Hall Meetup",
    location: "Charlotte",
    desc: "Pool table meetup for casual players. Beginner friendly and social.",
    price: "$10",
    category: "Activities",
    email: "poolnight@queencitylist.com",
    phone: "704-555-0107",
    image: "images/Pool Hall(1).avif",
    images: ["images/Pool Hall(1).avif"]
  },
  {
    id: 8,
    title: "Bike Club Meetup",
    location: "Concord",
    desc: "Local motorcycle and bike club meetup for weekend riders.",
    price: "Free",
    category: "Groups",
    email: "bikeclub@queencitylist.com",
    phone: "704-555-0108",
    image: "images/Bike club.avif",
    images: ["images/Bike club.avif"]
  },
  {
    id: 9,
    title: "Mountain Trail Group",
    location: "Huntersville",
    desc: "Outdoor trail group for weekend hikes and scenic walking routes.",
    price: "Free",
    category: "Groups",
    email: "trailgroup@queencitylist.com",
    phone: "704-555-0109",
    image: "images/photo-1593739742226-5e5e2fdb1f1c(1).avif",
    images: ["images/photo-1593739742226-5e5e2fdb1f1c(1).avif"]
  },
  {
    id: 10,
    title: "Outdoor Trail Session",
    location: "Matthews",
    desc: "Guided outdoor trail session for people who enjoy fresh air and fitness.",
    price: "$15",
    category: "Groups",
    email: "outdoortrail@queencitylist.com",
    phone: "704-555-0110",
    image: "images/Outdoor trail .avif",
    images: ["images/Outdoor trail .avif"]
  },
  {
    id: 11,
    title: "Painting Class",
    location: "Charlotte",
    desc: "Beginner painting class with materials included.",
    price: "$35",
    category: "Classes",
    email: "paintclass@queencitylist.com",
    phone: "704-555-0111",
    image: "images/Painting class.avif",
    images: ["images/Painting class.avif"]
  },
  {
    id: 12,
    title: "Pilates Class",
    location: "South End",
    desc: "Small group pilates class focused on stretching, core strength, and balance.",
    price: "$25",
    category: "Classes",
    email: "pilates@queencitylist.com",
    phone: "704-555-0112",
    image: "images/Pilates classs.avif",
    images: ["images/Pilates classs.avif"]
  },
  {
    id: 13,
    title: "Yoga Studio Class",
    location: "NoDa",
    desc: "Relaxing yoga class for beginners and regular students.",
    price: "$18",
    category: "Classes",
    email: "yoga@queencitylist.com",
    phone: "704-555-0113",
    image: "images/Yoga(2).avif",
    images: ["images/Yoga(2).avif"]
  },
  {
    id: 14,
    title: "Audi Sedan",
    location: "Charlotte",
    desc: "Clean Audi sedan with a smooth ride and sharp exterior.",
    price: "$18,900",
    category: "Automotive",
    email: "audiseller@queencitylist.com",
    phone: "704-555-0114",
    image: "images/Audi.avif",
    images: ["images/Audi.avif"]
  },
  {
    id: 15,
    title: "Camaro Coupe",
    location: "Gastonia",
    desc: "Sporty Camaro coupe with a clean interior and strong performance.",
    price: "$23,500",
    category: "Automotive",
    email: "camaroseller@queencitylist.com",
    phone: "704-555-0115",
    image: "images/Camaro.avif",
    images: ["images/Camaro.avif"]
  },
  {
    id: 16,
    title: "Dirt Bike",
    location: "Concord",
    desc: "Dirt bike ready for trails and weekend riding.",
    price: "$3,200",
    category: "Vehicles",
    email: "dirtbike@queencitylist.com",
    phone: "704-555-0116",
    image: "images/dirt bike 2.avif",
    images: ["images/dirt bike 2.avif"]
  },
  {
    id: 17,
    title: "Desktop Computer Setup",
    location: "Charlotte",
    desc: "Desktop computer setup with monitor, keyboard, and mouse.",
    price: "$350",
    category: "Computer",
    email: "computerdesk@queencitylist.com",
    phone: "704-555-0117",
    image: "images/Desktop Computer(1).jpg",
    images: ["images/Desktop Computer(1).jpg"]
  },
  {
    id: 18,
    title: "iPhone for Sale",
    location: "Matthews",
    desc: "Used iPhone in good condition. Great backup or everyday phone.",
    price: "$300",
    category: "Electronics",
    email: "phoneseller@queencitylist.com",
    phone: "704-555-0118",
    image: "images/Iphoine.avif",
    images: ["images/Iphoine.avif"]
  },
  {
    id: 19,
    title: "Second iPhone",
    location: "Charlotte",
    desc: "Clean iPhone with charger included.",
    price: "$325",
    category: "Electronics",
    email: "iphonebuyer@queencitylist.com",
    phone: "704-555-0119",
    image: "images/Iphone(1).avif",
    images: ["images/Iphone(1).avif"]
  },
  {
    id: 20,
    title: "Apartment Near Uptown",
    location: "Charlotte",
    desc: "Modern apartment close to shopping, restaurants, and light rail access.",
    price: "$1,450/mo",
    category: "Apts",
    email: "apartment@queencitylist.com",
    phone: "704-555-0120",
    image: "images/apartment2.avif",
    images: ["images/apartment2.avif"]
  },
  {
    id: 21,
    title: "Luxury Apartment Listing",
    location: "South End",
    desc: "Bright apartment with updated finishes and city access.",
    price: "$1,750/mo",
    category: "Apts",
    email: "luxuryapt@queencitylist.com",
    phone: "704-555-0121",
    image: "images/Apartmnt 4.avif",
    images: ["images/Apartmnt 4.avif"]
  },
  {
    id: 22,
    title: "Waterfront Apartment View",
    location: "Lake Norman",
    desc: "Apartment listing with scenic water views and a quiet setting.",
    price: "$1,600/mo",
    category: "Apts",
    email: "lakeapt@queencitylist.com",
    phone: "704-555-0122",
    image: "images/Apaartment.avif",
    images: ["images/Apaartment.avif"]
  },
  {
    id: 23,
    title: "Office Space Available",
    location: "Charlotte",
    desc: "Shared office space for small teams, freelancers, or study groups.",
    price: "$550/mo",
    category: "Office",
    email: "office@queencitylist.com",
    phone: "704-555-0123",
    image: "images/office .avif",
    images: ["images/office .avif"]
  },
  {
    id: 24,
    title: "Conference Room Rental",
    location: "Uptown",
    desc: "Clean conference room available for meetings and workshops.",
    price: "$45/hr",
    category: "Office",
    email: "meetings@queencitylist.com",
    phone: "704-555-0124",
    image: "images/Office2.avif",
    images: ["images/Office2.avif"]
  },
  {
    id: 25,
    title: "Public Parking Spot",
    location: "Uptown",
    desc: "Convenient public parking spot near offices and events.",
    price: "$85/mo",
    category: "Parking",
    email: "parking@queencitylist.com",
    phone: "704-555-0125",
    image: "images/Public parking.avif",
    images: ["images/Public parking.avif"]
  },
  {
    id: 26,
    title: "Beach Weekend Trip",
    location: "Charlotte",
    desc: "Weekend beach trip group with open spots for travel partners.",
    price: "$60",
    category: "Travel",
    email: "beachtrip@queencitylist.com",
    phone: "704-555-0126",
    image: "images/Beach.avif",
    images: ["images/Beach.avif"]
  },
  {
    id: 27,
    title: "Parasailing Adventure",
    location: "Charlotte",
    desc: "Group parasailing trip planning for an upcoming weekend.",
    price: "$95",
    category: "Travel",
    email: "parasailing@queencitylist.com",
    phone: "704-555-0127",
    image: "images/Parisailing.avif",
    images: ["images/Parisailing.avif"]
  },
  {
    id: 28,
    title: "Rock Climbing Session",
    location: "Charlotte",
    desc: "Indoor rock climbing session for beginners and casual climbers.",
    price: "$22",
    category: "Event",
    email: "climb@queencitylist.com",
    phone: "704-555-0128",
    image: "images/Rock Climbing(2).avif",
    images: ["images/Rock Climbing(2).avif"]
  }
];

const MAX_LISTINGS_PER_CATEGORY = 3;
const MIN_LISTINGS_PER_CATEGORY = 1;
const MAX_IMAGES_PER_LISTING = 1;

function localImagesForPost(post, index) {
  const img = post.image || (Array.isArray(post.images) && post.images[0]) || PLACEHOLDER;
  return [img];
}

function applyLocalProjectImages(posts) {
  return posts.map((post) => {
    const img = post.image || (Array.isArray(post.images) && post.images[0]) || PLACEHOLDER;
    return { ...post, image: img, images: [img] };
  });
}

function capPostsByCategory(posts) {
  const counts = {};
  return posts.filter(post => {
    const category = post.category || "Other";
    counts[category] = counts[category] || 0;
    if (counts[category] >= MAX_LISTINGS_PER_CATEGORY) return false;
    counts[category] += 1;
    return true;
  });
}

function getPosts() {
  const basePosts = capPostsByCategory(applyLocalProjectImages([...starterPosts, ...supplementalCategoryPosts]));
  const baseIds = new Set(basePosts.map(post => String(post.id)));
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    try {
      const savedPosts = JSON.parse(saved);
      const customPosts = Array.isArray(savedPosts)
        ? savedPosts
            .filter(post => post && !baseIds.has(String(post.id)))
            .map((post, index) => ({
              ...post,
              images: Array.isArray(post.images) && post.images.length
                ? post.images.filter(Boolean).slice(0, MAX_IMAGES_PER_LISTING)
                : localImagesForPost(post, index)
            }))
        : [];
      return capPostsByCategory([...customPosts, ...basePosts]);
    } catch (error) {
      console.error(error);
    }
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(basePosts));
  return [...basePosts];
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

function setActiveNav() {
  const currentPage = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
  document.querySelectorAll(".main-nav .nav-link").forEach((link) => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    const pageMap = {
      home: "index.html",
      categories: "categories.html",
      listings: "listings.html",
      post: "post.html",
      account: "account.html"
    };
    if (pageMap[currentPage] && href.includes(pageMap[currentPage])) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function setupMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a, button").forEach((item) => {
    item.addEventListener("click", () => {
      if (item.tagName.toLowerCase() === "a") {
        mobileMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.setAttribute("data-theme", theme);
  document.querySelectorAll(".theme-toggle, .mobile-theme-toggle").forEach((button) => {
    button.innerHTML = isDark ? "☀️" : "🌙";
    button.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
    button.setAttribute("aria-pressed", String(isDark));
    button.title = isDark ? "Switch to light mode" : "Switch to dark mode";
  });
}

function setupTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(savedTheme);
  document.querySelectorAll(".theme-toggle, .mobile-theme-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
      applyTheme(nextTheme);
    });
  });
}

function escapeHtml(text = "") {
  return String(text)
.replace(/&/g, "&amp;")
.replace(/</g, "&lt;")
.replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function listingCard(post, includeContact = false) {
  const images = post.images && post.images.length ? post.images : [PLACEHOLDER];
  const visibleImages = images.slice(0, 3); // listings show 3 pictures max
  const mainImage = visibleImages[0] || PLACEHOLDER;
  const hasMultipleImages = visibleImages.length > 1;
  const safeTitle = escapeHtml(post.title);
  const fallbackImage = PLACEHOLDER.replace(/"/g, '&quot;');
  const fallbackAttr = `this.onerror=null;this.src='${fallbackImage}'`;
  const imagesJson = JSON.stringify(visibleImages).replace(/"/g, '&quot;');

  const thumbnailGallery = hasMultipleImages ? `
    <div class="image-thumbnails" aria-label="Listing photos">
      ${visibleImages.map((img, idx) => `
        <button class="thumbnail ${idx === 0 ? 'active' : ''}" 
                type="button"
                data-image-index="${idx}" 
                aria-label="View image ${idx + 1}"
                title="Image ${idx + 1} of ${visibleImages.length}">
          <img src="${img}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="${fallbackAttr}">
        </button>
      `).join('')}
    </div>
  ` : '';

  const imageCounter = `<button type="button" class="image-counter open-gallery" aria-label="Open image gallery">1/${visibleImages.length}</button>`;

  return `
    <article class="listing-card" data-post-id="${post.id}" data-images="${imagesJson}" data-title="${safeTitle}" data-email="${escapeHtml(post.email || '')}" data-phone="${escapeHtml(post.phone || '')}">
      <div class="image-gallery">
        <div class="main-image-container">
          <button type="button" class="main-image-button open-gallery" aria-label="Open image gallery for ${safeTitle}">
            <img class="listing-image main-listing-image" 
                 src="${mainImage}" 
                 alt="${safeTitle}"
                 loading="lazy"
                 decoding="async"
                 referrerpolicy="no-referrer"
                 onerror="${fallbackAttr}">
          </button>
          ${imageCounter}
          ${hasMultipleImages ? '<div class="multi-image-badge">📸</div>' : ''}
        </div>
        ${thumbnailGallery}
      </div>
      <div class="listing-content">
        <div class="listing-title-row">
          <div>
            <h3 class="listing-title">${safeTitle}</h3>
            <p class="listing-meta">📍 ${escapeHtml(post.location || "Location")} · ${escapeHtml(post.category || "Category")}</p>
          </div>
          <strong class="listing-price">${escapeHtml(post.price || "Contact")}</strong>
        </div>
        <p class="listing-desc">${escapeHtml(post.desc || "No description")}</p>
        <div class="seller-actions">
          <button type="button" class="contact-seller-btn" data-post-id="${post.id}">Contact seller</button>
          ${post.email ? `<a class="seller-quick-link" href="mailto:${escapeHtml(post.email)}?subject=${encodeURIComponent('Question about ' + post.title)}">Email</a>` : ""}
          ${post.phone ? `<a class="seller-quick-link" href="tel:${escapeHtml(post.phone)}">Call</a>` : ""}
        </div>
        <p class="listing-contact">Owner contact: ${escapeHtml(post.email || post.phone || "Use contact button")}</p>
      </div>
    </article>
  `;
}

function syncSearchFields() {
  const desktop = document.getElementById("searchDesktop");
  const mobile = document.getElementById("searchMobile");
  if (!desktop || !mobile) return;
  desktop.addEventListener("input", () => {
    mobile.value = desktop.value;
    window.dispatchEvent(new CustomEvent("search-updated"));
  });
  mobile.addEventListener("input", () => {
    desktop.value = mobile.value;
    window.dispatchEvent(new CustomEvent("search-updated"));
  });

  const desktopLocation = document.getElementById("locationDesktop");
  const mobileLocation = document.getElementById("locationMobile");
  desktopLocation?.addEventListener("input", () => {
    mobileLocation.value = desktopLocation.value;
    window.dispatchEvent(new CustomEvent("search-updated"));
  });
  mobileLocation?.addEventListener("input", () => {
    desktopLocation.value = mobileLocation.value;
    window.dispatchEvent(new CustomEvent("search-updated"));
  });
}

function setupCategoryLinks() {
  const categoryLabels = document.querySelectorAll("[data-category]");
  categoryLabels.forEach((item) => {
    item.addEventListener("click", () => {
    if (!item.dataset.category) return;
      window.location.href = `Listings.html?category=${encodeURIComponent(item.dataset.category)}`;
      });
      });
}

function toggleDropdown(btn) {
  const dropdown = btn.nextElementSibling;
  if (!dropdown) return;

  const isOpen = dropdown.classList.contains("active");

  // Close every dropdown first so only one box can be open at a time.
  document.querySelectorAll(".category-dropdown").forEach((d) => {
    d.classList.remove("active");
  });

  // If this one was closed, open it. If it was already open, leave all closed.
  if (!isOpen) {
    dropdown.classList.add("active");
  }
}


function renderAccountPage() {
  const accountPosts = document.getElementById("accountPosts");
  if (!accountPosts) return;
  const posts = getPosts();
  accountPosts.innerHTML = posts.map((post) => listingCard(post, true)).join("");
  document.getElementById("accountEmptyState").classList.toggle("hidden", posts.length !== 0);
  
  // Setup image gallery interactivity
  setupImageGalleries();
  setupGalleryModalTriggers();
  setupContactButtons();
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
}

function renderPreview(files) {
  const preview = document.getElementById("preview");
  if (!preview) return;
  preview.innerHTML = "";
  files.forEach((file) => {
    const item = document.createElement("div");
    item.className = "preview-item";
    const img = document.createElement("img");
    img.alt = file.name;
    img.src = URL.createObjectURL(file);
    item.appendChild(img);
    preview.appendChild(item);
  });
}

function setupPostForm() {
  const postForm = document.getElementById("postForm");
  if (!postForm) return;

  const upload = document.getElementById("imageUpload");
  const errorEl = document.getElementById("error");
  const successEl = document.getElementById("success");
  const submitBtn = document.getElementById("submitBtn");

  // 1. Validation Rules Configuration - Helpful messages that guide users
  const fields = {
    title: {
      input: document.getElementById("title"),
      error: document.getElementById("titleError"),
      validate: (val) => {
        const trimmed = val.trim();
        if (trimmed.length === 0) return "Add a title to describe what you're selling";
        if (trimmed.length < 5) return `${5 - trimmed.length} more character(s) needed`;
        return "";
      }
    },
    location: {
      input: document.getElementById("location"),
      error: document.getElementById("locationError"),
      validate: (val) => {
        const trimmed = val.trim();
        if (trimmed.length === 0) return "Where is this item located?";
        if (trimmed.length < 3) return `${3 - trimmed.length} more character(s) needed`;
        return "";
      }
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("emailError"),
      validate: (val) => {
        if (val.length === 0) return "How can buyers contact you?";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Please use a valid email (like name@example.com)";
        return "";
      }
    },
    desc: {
      input: document.getElementById("desc"),
      error: document.getElementById("descError"),
      validate: (val) => {
        const trimmed = val.trim();
        if (trimmed.length === 0) return "Tell buyers about your item";
        if (trimmed.length < 15) return `${15 - trimmed.length} more character(s) needed`;
        return "";
      }
    }
  };

  // 2. Real-Time Feedback Loop - Helpful and Supportive
  Object.values(fields).forEach(field => {
    const updateFieldState = () => {
      const msg = field.validate(field.input.value);
      const hasValue = field.input.value.trim().length > 0;
      
      // Update error message
      field.error.textContent = msg;
      
      // Visual feedback: Error state (red)
      if (msg) {
        field.input.classList.remove("input-success");
        field.input.classList.add("input-error");
      } 
      // Visual feedback: Success state (green) - only show after user has typed
      else if (hasValue) {
        field.input.classList.remove("input-error");
        field.input.classList.add("input-success");
      }
      // Default state (empty field)
      else {
        field.input.classList.remove("input-error", "input-success");
      }
    };

    // Show feedback when user focuses on field
    field.input.addEventListener("focus", () => {
      updateFieldState();
    });

    // Update feedback as user types (real-time validation)
    field.input.addEventListener("input", () => {
      updateFieldState();
      
      // Update submit button state in real-time
      const isAllValid = Object.values(fields).every(f => f.validate(f.input.value) === "");
      submitBtn.disabled = !isAllValid;
      
      // Show success message when form is ready
      if (isAllValid) {
        successEl.classList.remove("hidden");
        successEl.textContent = "✅ All fields are complete and valid!";
      } else {
        successEl.classList.add("hidden");
      }
    });

    // Validate on blur (when leaving field)
    field.input.addEventListener("blur", () => {
      updateFieldState();
    });
  });

  // 3. Existing Image Preview Logic
  upload?.addEventListener("change", () => {
    renderPreview(Array.from(upload.files || []));
  });

  // Make upload area clickable to trigger file selection
  const uploadArea = document.querySelector(".file-upload-area");
  uploadArea?.addEventListener("click", () => {
    upload?.click();
  });

  // 4. Submission Logic (Saves to LocalStorage)
  postForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    // Show loading spinner
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;

    try {
      // Simulate minimal delay for UX feedback (shows spinner)
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const files = Array.from(upload?.files || []);
      const images = files.length ? await Promise.all(files.map(fileToDataUrl)) : [PLACEHOLDER];
      
      const posts = getPosts();
      posts.unshift({
        id: Date.now(),
        title: fields.title.input.value,
        location: fields.location.input.value,
        desc: fields.desc.input.value,
        price: "Contact Seller",
        category: document.getElementById("category").value,
        email: fields.email.input.value,
        images: images
      });

      savePosts(posts);
      
      // Remove loading state
      submitBtn.classList.remove("loading");
      
      // Show success feedback
      successEl.classList.remove("hidden");
      successEl.textContent = "✓ Listing posted successfully!";
      
      // Redirect after showing success
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1200);
    } catch (err) {
      // Remove loading state on error
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
      
      // Show error feedback
      errorEl.textContent = "Error saving listing. Please try again.";
    }
  });
}

function setupImageGalleries() {
  // Setup thumbnail click handlers for image galleries
  const thumbnails = document.querySelectorAll(".thumbnail:not(.more-images)");
  
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", (e) => {
      e.preventDefault();
      const imageIndex = parseInt(thumbnail.dataset.imageIndex);
      const card = thumbnail.closest(".listing-card");
      const mainImage = card.querySelector(".main-listing-image");
      const allThumbnails = card.querySelectorAll(".thumbnail:not(.more-images)");
      
      // Get images from data attribute
      try {
        const imagesJson = card.getAttribute("data-images");
        if (!imagesJson) return;
        
        const images = JSON.parse(imagesJson.replace(/&quot;/g, '"'));
        
        if (images[imageIndex]) {
          mainImage.src = images[imageIndex];
          const counter = card.querySelector(".image-counter");
          if (counter) counter.textContent = `${imageIndex + 1}/${images.length}`;
          
          // Update active state
          allThumbnails.forEach((t, idx) => {
            t.classList.toggle("active", idx === imageIndex);
          });
        }
      } catch (error) {
        console.error("Error switching gallery image:", error);
      }
    });
  });
}


function openGalleryModal(images, startIndex = 0, title = "Listing photos") {
  if (!images || !images.length) return;
  let currentIndex = Math.max(0, Math.min(startIndex, images.length - 1));
  let modal = document.getElementById("galleryModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "galleryModal";
    modal.className = "gallery-modal";
    modal.innerHTML = `
      <div class="gallery-modal-backdrop" data-close-gallery></div>
      <div class="gallery-modal-content" role="dialog" aria-modal="true" aria-label="Listing image gallery">
        <button type="button" class="gallery-close" data-close-gallery aria-label="Close gallery">×</button>
        <button type="button" class="gallery-arrow gallery-prev" aria-label="Previous image">‹</button>
        <img class="gallery-modal-image" alt="">
        <button type="button" class="gallery-arrow gallery-next" aria-label="Next image">›</button>
        <div class="gallery-modal-footer">
          <strong class="gallery-modal-title"></strong>
          <span class="gallery-modal-count"></span>
        </div>
      </div>`;
    document.body.appendChild(modal);
  }

  const imageEl = modal.querySelector(".gallery-modal-image");
  const titleEl = modal.querySelector(".gallery-modal-title");
  const countEl = modal.querySelector(".gallery-modal-count");
  const prevBtn = modal.querySelector(".gallery-prev");
  const nextBtn = modal.querySelector(".gallery-next");

  function updateModal() {
    imageEl.onerror = () => { imageEl.onerror = null; imageEl.src = PLACEHOLDER; };
    imageEl.src = images[currentIndex] || PLACEHOLDER;
    imageEl.alt = `${title} photo ${currentIndex + 1}`;
    titleEl.textContent = title;
    countEl.textContent = `${currentIndex + 1} / ${images.length}`;
    prevBtn.disabled = images.length < 2;
    nextBtn.disabled = images.length < 2;
  }

  modal.querySelectorAll("[data-close-gallery]").forEach(btn => {
    btn.onclick = () => modal.classList.remove("open");
  });
  prevBtn.onclick = () => { currentIndex = (currentIndex - 1 + images.length) % images.length; updateModal(); };
  nextBtn.onclick = () => { currentIndex = (currentIndex + 1) % images.length; updateModal(); };

  document.onkeydown = (e) => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") modal.classList.remove("open");
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  };

  updateModal();
  modal.classList.add("open");
}

function setupGalleryModalTriggers() {
  document.querySelectorAll(".listing-card .open-gallery").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const card = button.closest(".listing-card");
      if (!card) return;
      try {
        const images = JSON.parse(card.getAttribute("data-images")?.replace(/&quot;/g, '"') || "[]");
        const title = card.querySelector(".listing-title")?.textContent || "Listing photos";
        const activeThumb = card.querySelector(".thumbnail.active");
        const startIndex = activeThumb ? parseInt(activeThumb.dataset.imageIndex || "0", 10) : 0;
        openGalleryModal(images, startIndex, title);
      } catch (error) {
        console.error("Error opening gallery modal:", error);
      }
    });
  });
}

function updateListingCount(posts, category = null) {
  const total = Array.isArray(posts) ? posts.length : 0;
  const label = total === 1 ? "listing" : "listings";
  const countText = category ? `${total} ${label} in ${category}` : `${total} ${label} found`;
  const countEl = document.getElementById("listingCount");
  if (countEl) countEl.textContent = countText;
}

function getCategoryCounts(posts = getPosts()) {
  return posts.reduce((acc, post) => {
    const category = post.category || "Other";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
}

function updateGlobalCounts() {
  const posts = getPosts();
  const categories = [...new Set(posts.map((post) => post.category).filter(Boolean))];
  const cities = [...new Set(posts.map((post) => post.location).filter(Boolean))];
  const counts = getCategoryCounts(posts);

  const totalListings = document.getElementById("homeTotalListings");
  const totalCategories = document.getElementById("homeCategoryTotal");
  const totalCities = document.getElementById("homeCityTotal");

  if (totalListings) totalListings.textContent = posts.length;
  if (totalCategories) totalCategories.textContent = categories.length;
  if (totalCities) totalCities.textContent = cities.length;

  document.querySelectorAll("[data-count-category]").forEach((el) => {
    const cat = el.dataset.countCategory;
    const count = counts[cat] || 0;
    const suffix = cat === "Jobs" ? "opportunities" : cat === "Services" ? "professionals" : "items";
    el.textContent = `${count} ${suffix}`;
  });

  document.querySelectorAll(".cat-link[data-category]").forEach((link) => {
    const cat = link.dataset.category;
    const count = counts[cat] || 0;
    let badge = link.querySelector(".cat-link-count");
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "cat-link-count";
      link.appendChild(badge);
    }
    badge.textContent = count;
    link.setAttribute("aria-label", `${cat}, ${count} listings`);
  });

  document.querySelectorAll(".category-card-wrapper").forEach((wrapper) => {
    const cardTitle = wrapper.querySelector(".category-card-image h3");
    const links = [...wrapper.querySelectorAll(".cat-link[data-category]")];
    if (!cardTitle || !links.length) return;
    const groupTotal = links.reduce((sum, link) => sum + (counts[link.dataset.category] || 0), 0);
    let pill = wrapper.querySelector(".category-total-pill");
    if (!pill) {
      pill = document.createElement("span");
      pill.className = "category-total-pill";
      cardTitle.insertAdjacentElement("afterend", pill);
    }
    pill.textContent = `${groupTotal} listings`;
  });
}


const cityCoords = {
  "Charlotte": [35.2271, -80.8431],
  "Concord": [35.4088, -80.5795],
  "Matthews": [35.1168, -80.7237],
  "Gastonia": [35.2621, -81.1873],
  "Huntersville": [35.4107, -80.8429],
  "Mint Hill": [35.1796, -80.6473]
};

let marketplaceMap = null;
let marketplaceMarkers = [];
let activeMapCity = "";

function groupListingsByCity(posts = getPosts()) {
  return posts.reduce((groups, post) => {
    const city = post.location || "Charlotte";
    if (!groups[city]) groups[city] = [];
    groups[city].push(post);
    return groups;
  }, {});
}

function setMapStatus(text) {
  const status = document.getElementById("mapStatus");
  if (status) status.textContent = text;
}

function filterListingsByCity(city) {
  activeMapCity = city;
  const filtered = getPosts().filter(post => (post.location || "").toLowerCase() === city.toLowerCase());
  renderListings(filtered);
  setMapStatus(`${filtered.length} listing${filtered.length === 1 ? "" : "s"} showing in ${city}.`);
  document.querySelector(".listings-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  updateMapMarkerState();
}

function resetMapFilter() {
  activeMapCity = "";
  renderListings(getPosts());
  setMapStatus("Showing all Charlotte-area listings. Click a marker to filter by city.");
  updateMapMarkerState();
}

function updateMapMarkerState() {
  marketplaceMarkers.forEach(({ city, marker }) => {
    const isActive = activeMapCity && city.toLowerCase() === activeMapCity.toLowerCase();
    const el = marker.getElement?.();
    if (el) el.classList.toggle("active-map-marker", Boolean(isActive));
  });
}

function initInteractiveMap() {
  const mapEl = document.getElementById("listingMap");
  if (!mapEl || typeof L === "undefined" || marketplaceMap) return;

  marketplaceMap = L.map(mapEl, { scrollWheelZoom: false }).setView([35.246, -80.84], 9);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(marketplaceMap);

  const groups = groupListingsByCity(getPosts());
  Object.entries(groups).forEach(([city, posts]) => {
    const coords = cityCoords[city];
    if (!coords) return;
    const icon = L.divIcon({
      className: "marketplace-map-marker",
      html: `<button type="button" aria-label="Show ${posts.length} listings in ${escapeHtml(city)}"><span>${posts.length}</span></button>`,
      iconSize: [46, 46],
      iconAnchor: [23, 23]
    });
    const marker = L.marker(coords, { icon }).addTo(marketplaceMap);
    marker.bindPopup(`<strong>${escapeHtml(city)}</strong><br>${posts.length} listing${posts.length === 1 ? "" : "s"}<br><button class="popup-filter-btn" type="button" data-city="${escapeHtml(city)}">View listings</button>`);
    marker.on("click", () => filterListingsByCity(city));
    marker.on("popupopen", () => {
      document.querySelectorAll(`.popup-filter-btn[data-city="${CSS.escape(city)}"]`).forEach(btn => {
        btn.addEventListener("click", () => filterListingsByCity(city));
      });
    });
    marketplaceMarkers.push({ city, marker });
  });

  document.getElementById("resetMapFilter")?.addEventListener("click", resetMapFilter);
  setMapStatus("Click a numbered marker to show listings in that area.");
}

function ensureContactModal() {
  let modal = document.getElementById("contactSellerModal");
  if (modal) return modal;
  modal = document.createElement("div");
  modal.id = "contactSellerModal";
  modal.className = "contact-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="contact-modal-backdrop" data-close-contact></div>
    <section class="contact-modal-panel" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle">
      <button type="button" class="contact-modal-close" data-close-contact aria-label="Close contact form">×</button>
      <h2 id="contactModalTitle">Contact seller</h2>
      <p class="helper-text" id="contactListingName"></p>
      <div class="seller-direct-links" id="sellerDirectLinks"></div>
      <form id="sellerContactForm" class="seller-contact-form">
        <label>Your name<input id="buyerName" type="text" required placeholder="Your name"></label>
        <label>Your email<input id="buyerEmail" type="email" required placeholder="you@example.com"></label>
        <label>Message<textarea id="buyerMessage" required rows="5"></textarea></label>
        <button type="submit" class="side-btn">Open email message</button>
        <p class="helper-text">This demo opens your email app with the message filled in. No backend is required.</p>
      </form>
    </section>`;
  document.body.appendChild(modal);
  modal.querySelectorAll("[data-close-contact]").forEach(btn => btn.addEventListener("click", closeContactModal));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeContactModal(); });
  return modal;
}

function closeContactModal() {
  const modal = document.getElementById("contactSellerModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function openContactModal(post) {
  const modal = ensureContactModal();
  modal.dataset.email = post.email || "";
  modal.dataset.title = post.title || "listing";
  document.getElementById("contactListingName").textContent = post.title || "Listing";
  document.getElementById("buyerMessage").value = `Hi, I am interested in your listing: ${post.title}. Is it still available?`;
  const links = document.getElementById("sellerDirectLinks");
  links.innerHTML = `
    ${post.email ? `<a href="mailto:${escapeHtml(post.email)}?subject=${encodeURIComponent('Question about ' + post.title)}">📧 Email seller</a>` : ""}
    ${post.phone ? `<a href="tel:${escapeHtml(post.phone)}">📞 Call seller</a>` : ""}
  `;
  document.getElementById("sellerContactForm").onsubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById("buyerName").value.trim();
    const email = document.getElementById("buyerEmail").value.trim();
    const message = document.getElementById("buyerMessage").value.trim();
    const subject = encodeURIComponent(`Question about ${post.title}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
    window.location.href = `mailto:${post.email || ""}?subject=${subject}&body=${body}`;
  };
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.getElementById("buyerName")?.focus();
}

function setupContactButtons() {
  document.querySelectorAll(".contact-seller-btn").forEach(button => {
    button.addEventListener("click", () => {
      const id = String(button.dataset.postId || "");
      const post = getPosts().find(item => String(item.id) === id);
      if (post) openContactModal(post);
    });
  });
}

function renderListings(posts) {
  const mainContent = document.querySelector(".main-content");
  if (!mainContent) return;
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const label = posts.length === 1 ? "listing" : "listings";
  const heading = category ? `${escapeHtml(category)} Listings` : "All Listings";

  if (posts.length === 0) {
    mainContent.innerHTML = `
      <div class="listings-header figma-box">
        <div>
          <h1 class="listings-category-title">${heading}</h1>
          <p id="listingCount" class="listings-count">0 listings found</p>
        </div>
      </div>
      <p class="empty-state-message">No listings found. Try adjusting your search.</p>
    `;
    updateListingCount(posts, category);
    return;
  }

  mainContent.innerHTML = `
    <div class="listings-header figma-box">
      <div>
        <h1 class="listings-category-title">${heading}</h1>
        <p id="listingCount" class="listings-count">${posts.length} ${label}${category ? ` in ${escapeHtml(category)}` : " found"}</p>
      </div>
    </div>
    <div class="listing-list">${posts.map((post) => listingCard(post)).join("")}</div>
  `;
  updateListingCount(posts, category);
  setupImageGalleries();
  setupGalleryModalTriggers();
  setupContactButtons();
}

function renderHomePage() {
  const currentPage = document.body.dataset.page;
  if (currentPage !== "home") return;
  const posts = getPosts();
  updateGlobalCounts();
  const featuredContainer = document.getElementById("featuredListingsContainer");
  if (featuredContainer) {
    const featured = posts.slice(0, 6);
    featuredContainer.innerHTML = featured.map(post => `
      <article class="featured-listing" onclick="window.location.href='Listings.html?category=${encodeURIComponent(post.category)}'">
        <div class="featured-listing-image">
          <img src="${post.image || (post.images && post.images[0]) || PLACEHOLDER}" alt="${escapeHtml(post.title)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${PLACEHOLDER.replace(/'/g, "&#039;")}'">
          <div class="featured-listing-badge">${escapeHtml(post.category)}</div>
        </div>
        <div class="featured-listing-content">
          <h3 class="featured-listing-title">${escapeHtml(post.title)}</h3>
          <div class="featured-listing-price">${escapeHtml(post.price)}</div>
          <div class="featured-listing-location">📍 ${escapeHtml(post.location)}</div>
        </div>
      </article>
    `).join("");
  }
}

function handleSearch() {
  const currentPage = document.body.dataset.page;
  
  // Desktop search
  const searchInput = document.getElementById("searchDesktop");
  const locationInput = document.getElementById("locationDesktop");
  const mobileInput = document.getElementById("searchMobile");
  const searchBtn = document.querySelector(".search-btn");
  
  // Hero search (homepage only)
  const heroSearchInput = document.getElementById("heroSearch");
  const heroLocationInput = document.getElementById("heroLocation");
  const heroSearchBtn = document.querySelector(".hero-search-btn");
  
  const performSearch = () => {
    const searchQuery = (searchInput?.value || heroSearchInput?.value || mobileInput?.value || "").trim().toLowerCase();
    const locationQuery = (locationInput?.value || heroLocationInput?.value || document.getElementById("locationMobile")?.value || "").trim().toLowerCase();
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    let posts = getPosts();

    if (category) posts = posts.filter(post => post.category === category);

    const filtered = posts.filter(post => {
      const searchableText = `${post.title} ${post.desc} ${post.category} ${post.location}`.toLowerCase();
      const matchesSearch = !searchQuery || searchableText.includes(searchQuery);
      const matchesLocation = !locationQuery || post.location.toLowerCase().includes(locationQuery);
      return matchesSearch && matchesLocation;
    });

    if (currentPage === "listings") {
      renderListings(filtered);
      const newUrl = new URL(window.location.href);
      if (searchQuery) newUrl.searchParams.set("search", searchQuery); else newUrl.searchParams.delete("search");
      if (locationQuery) newUrl.searchParams.set("location", locationQuery); else newUrl.searchParams.delete("location");
      window.history.replaceState({}, "", newUrl);
    } else if (currentPage === "home") {
      window.location.href = `Listings.html?search=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(locationQuery)}`;
    }
  };

  // Bind search buttons
  searchBtn?.addEventListener("click", performSearch);
  heroSearchBtn?.addEventListener("click", performSearch);
  
  // Also allow search on Enter key
  searchInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") performSearch();
  });
  searchInput?.addEventListener("input", () => { if (currentPage === "listings") performSearch(); });
  mobileInput?.addEventListener("input", () => { if (currentPage === "listings") performSearch(); });
  
  heroSearchInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") performSearch();
  });
  
  // Handle category filter from URL
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const search = params.get("search");
  const location = params.get("location");
  
  if (currentPage === "listings") {
    if (searchInput && search) searchInput.value = search;
    if (mobileInput && search) mobileInput.value = search;
    if (locationInput && location) locationInput.value = location;
    let posts = getPosts();
    
    if (category) {
      posts = posts.filter(post => post.category === category);
    }
    
    if (search) {
      const searchLower = search.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(searchLower) || 
        post.desc.toLowerCase().includes(searchLower)
      );
    }
    
    if (location) {
      const locationLower = location.toLowerCase();
      posts = posts.filter(post => post.location.toLowerCase().includes(locationLower));
    }
    
    renderListings(posts);
  }
}

setActiveNav();
setupMenu();
setupTheme();
setupCategoryLinks();
updateGlobalCounts();
renderHomePage();
handleSearch();
initInteractiveMap();
renderAccountPage();
  setupPostForm();



function setupSearchSuggestions() {
  const searchInput = document.getElementById("searchDesktop");
  const mobileInput = document.getElementById("searchMobile");
  if (!searchInput || !mobileInput) return;

  let suggestionBox = document.createElement("div");
  suggestionBox.className = "suggestion-box";
  suggestionBox.setAttribute("role", "listbox");
  suggestionBox.setAttribute("aria-label", "Search suggestions");
  searchInput.parentNode.appendChild(suggestionBox);

  function updateSuggestions(value) {
    const posts = getPosts();
    suggestionBox.innerHTML = "";

    // If input is empty, hide suggestions and reset
    if (!value || value.trim() === "") {
      suggestionBox.style.display = "none";
      suggestionBox.innerHTML = "";
      return;
    }

    // Filter posts based on search value (title + description)
    const filtered = posts.filter(p =>
      (p.title + " " + p.desc).toLowerCase().includes(value.toLowerCase())
    );

    // No results state
    if (filtered.length === 0) {
      suggestionBox.innerHTML = "<p class='no-suggest'>🔍 No listings found</p>";
      suggestionBox.style.display = "block";
      return;
    }

    // Show up to 5 suggestions
    filtered.slice(0, 5).forEach((p, index) => {
      const item = document.createElement("div");
      item.className = "suggest-item";
      item.setAttribute("role", "option");
      item.setAttribute("tabindex", "0");
      item.textContent = p.title;
      item.title = p.title;
      
      // Click or Enter key to select
      const selectItem = () => {
        searchInput.value = p.title;
        mobileInput.value = p.title;
        suggestionBox.style.display = "none";
        suggestionBox.innerHTML = "";
        window.dispatchEvent(new CustomEvent("search-updated"));
      };
      
      item.addEventListener("click", selectItem);
      item.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectItem();
        }
      });
      
      suggestionBox.appendChild(item);
    });

    suggestionBox.style.display = "block";
  }

  // Real-time search as user types
  searchInput.addEventListener("input", e => updateSuggestions(e.target.value));
  mobileInput.addEventListener("input", e => updateSuggestions(e.target.value));
  
  // Hide suggestions when clicking elsewhere
  document.addEventListener("click", (e) => {
    if (e.target !== searchInput && e.target !== mobileInput && e.target !== suggestionBox) {
      suggestionBox.style.display = "none";
    }
  });
  
  // Hide suggestions on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      suggestionBox.style.display = "none";
    }
  });
}

setupSearchSuggestions();
/* A+ marketplace enhancements */
const FAVORITES_KEY = "queenCityListFavorites";
function getFavoriteIds(){try{return new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY))||[])}catch(e){return new Set()}}
function saveFavoriteIds(ids){localStorage.setItem(FAVORITES_KEY,JSON.stringify([...ids]))}
function updateFavoriteCount(){const c=getFavoriteIds().size;document.querySelectorAll('[data-favorite-count]').forEach(el=>el.textContent=`${c} saved`)}
function enhanceListingCards(){const favs=getFavoriteIds();document.querySelectorAll('.listing-card').forEach(card=>{const id=String(card.dataset.postId||'');if(!id||card.dataset.enhanced==='true')return;const post=getPosts().find(item=>String(item.id)===id);if(!post)return;card.dataset.enhanced='true';const content=card.querySelector('.listing-content');if(!content)return;const toolbar=document.createElement('div');toolbar.className='listing-a-plus-actions';toolbar.innerHTML=`<button type="button" class="view-details-btn" data-post-id="${escapeHtml(id)}">View details</button><button type="button" class="favorite-btn ${favs.has(id)?'is-saved':''}" data-post-id="${escapeHtml(id)}" aria-pressed="${favs.has(id)}">${favs.has(id)?'★ Saved':'☆ Save'}</button>`;content.appendChild(toolbar)});setupAPlusListingButtons();updateFavoriteCount()}
function setupAPlusListingButtons(){document.querySelectorAll('.favorite-btn').forEach(btn=>{if(btn.dataset.bound==='true')return;btn.dataset.bound='true';btn.addEventListener('click',()=>{const ids=getFavoriteIds();const id=String(btn.dataset.postId||'');if(ids.has(id))ids.delete(id);else ids.add(id);saveFavoriteIds(ids);document.querySelectorAll(`.favorite-btn[data-post-id="${CSS.escape(id)}"]`).forEach(same=>{const saved=ids.has(id);same.classList.toggle('is-saved',saved);same.setAttribute('aria-pressed',String(saved));same.textContent=saved?'★ Saved':'☆ Save'});updateFavoriteCount()})});document.querySelectorAll('.view-details-btn').forEach(btn=>{if(btn.dataset.bound==='true')return;btn.dataset.bound='true';btn.addEventListener('click',()=>{const post=getPosts().find(item=>String(item.id)===String(btn.dataset.postId||''));if(post)openListingDetailsModal(post)})})}
function ensureListingDetailsModal(){let modal=document.getElementById('listingDetailsModal');if(modal)return modal;modal=document.createElement('div');modal.id='listingDetailsModal';modal.className='listing-details-modal';modal.setAttribute('aria-hidden','true');modal.innerHTML=`<div class="listing-details-backdrop" data-close-details></div><section class="listing-details-panel" role="dialog" aria-modal="true" aria-labelledby="detailsTitle"><button type="button" class="details-close" data-close-details aria-label="Close listing details">×</button><div id="detailsContent"></div></section>`;document.body.appendChild(modal);modal.querySelectorAll('[data-close-details]').forEach(btn=>btn.addEventListener('click',closeListingDetailsModal));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeListingDetailsModal()});return modal}
function closeListingDetailsModal(){const modal=document.getElementById('listingDetailsModal');if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
function openListingDetailsModal(post){const modal=ensureListingDetailsModal();const images=[post.image || (post.images && post.images[0]) || PLACEHOLDER];const saved=getFavoriteIds().has(String(post.id));const details=document.getElementById('detailsContent');details.innerHTML=`<div class="details-grid"><div class="details-gallery">${images.map((img,index)=>`<img src="${img}" alt="${escapeHtml(post.title)} photo ${index+1}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${PLACEHOLDER.replace(/'/g,'&#039;')}'">`).join('')}</div><div class="details-info"><p class="eyebrow">${escapeHtml(post.category||'Listing')}</p><h2 id="detailsTitle">${escapeHtml(post.title)}</h2><p class="details-price">${escapeHtml(post.price||'Contact')}</p><p class="details-location">📍 ${escapeHtml(post.location||'Charlotte area')}</p><p class="details-desc">${escapeHtml(post.desc||'No description provided.')}</p><div class="details-actions"><button type="button" class="contact-seller-btn" data-post-id="${escapeHtml(String(post.id))}">Contact seller</button><button type="button" class="favorite-btn ${saved?'is-saved':''}" data-post-id="${escapeHtml(String(post.id))}" aria-pressed="${saved}">${saved?'★ Saved':'☆ Save'}</button></div><div class="seller-card"><strong>Seller contact</strong><span>${escapeHtml(post.email||'Email not listed')}</span>${post.phone?`<span>${escapeHtml(post.phone)}</span>`:''}</div></div></div>`;modal.classList.add('open');modal.setAttribute('aria-hidden','false');setupContactButtons();setupAPlusListingButtons();modal.querySelector('.details-close')?.focus()}
function enhanceHeaderBranding(){document.querySelectorAll('.logo-mark').forEach(logo=>{logo.textContent='♛';logo.setAttribute('aria-hidden','true')});const header=document.querySelector('.header-right');if(header&&!document.querySelector('.saved-pill')){const pill=document.createElement('span');pill.className='saved-pill';pill.setAttribute('data-favorite-count','');header.prepend(pill)}updateFavoriteCount()}
function enhanceMapControls(){const mapSection=document.querySelector('.market-map');if(!mapSection||mapSection.dataset.enhanced==='true')return;mapSection.dataset.enhanced='true';const helper=document.createElement('div');helper.className='map-helper-row';helper.innerHTML='<span>📍 Click a city marker to filter listings</span><span>⭐ Save listings you want to revisit</span><span>✉️ Contact sellers directly</span>';mapSection.appendChild(helper)}
function enhanceCategoryPage(){document.querySelectorAll('.category-total-pill').forEach(pill=>pill.setAttribute('aria-label',pill.textContent.trim()))}
if(typeof renderListings==='function'&&!window.__aPlusRenderWrapped){const originalRenderListings=renderListings;renderListings=function(posts){originalRenderListings(posts);enhanceListingCards()};window.__aPlusRenderWrapped=true}
enhanceHeaderBranding();enhanceMapControls();enhanceCategoryPage();enhanceListingCards();

/* FINAL FINAL A+ POLISH SCRIPT: elite search, recents, keyboard nav, feedback */
(function(){
const RECENT_KEY='queenCityListRecentSearches';let activeIndex=-1,activeResults=[],lastQuery='',debounceTimer=null;
const q=(s,r=document)=>r.querySelector(s),qa=(s,r=document)=>Array.from(r.querySelectorAll(s));
const norm=v=>String(v||'').toLowerCase().trim().replace(/\s+/g,' ');const safeRe=v=>v.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
function hi(text,query){let clean=escapeHtml(String(text||''));let tokens=norm(query).split(' ').filter(Boolean).slice(0,4);if(!tokens.length)return clean;return clean.replace(new RegExp(`(${tokens.map(safeRe).join('|')})`,'gi'),'<span class="elite-highlight">$1</span>')}
function recent(){try{return JSON.parse(localStorage.getItem(RECENT_KEY))||[]}catch{return[]}}
function saveRecent(v){v=String(v||'').trim();if(v.length<2)return;localStorage.setItem(RECENT_KEY,JSON.stringify([v,...recent().filter(x=>norm(x)!==norm(v))].slice(0,6)))}
function fields(){return{desktop:q('#searchDesktop'),mobile:q('#searchMobile'),loc:q('#locationDesktop'),mloc:q('#locationMobile'),hero:q('#heroSearch'),hloc:q('#heroLocation')}}
function ctx(){let f=fields(),p=new URLSearchParams(location.search);return{query:norm(f.desktop?.value||f.mobile?.value||f.hero?.value||''),loc:norm(f.loc?.value||f.mloc?.value||f.hloc?.value||''),cat:p.get('category')}}
function score(p,query,loc){let tokens=norm(query).split(' ').filter(Boolean),title=norm(p.title),desc=norm(p.desc),cat=norm(p.category),city=norm(p.location),s=0;if(loc&&city.includes(loc))s+=6;if(!tokens.length&&!loc)s+=1;tokens.forEach(t=>{if(title===t)s+=18;if(title.startsWith(t))s+=12;if(title.includes(t))s+=8;if(cat.includes(t))s+=7;if(city.includes(t))s+=6;if(desc.includes(t))s+=3;let price=parseFloat(String(p.price||'').replace(/[^0-9.]/g,''));if(t==='cheap'&&price&&price<150)s+=5;if(t==='deal'&&price&&price<300)s+=3});return s}
function smart(){let {query,loc,cat}=ctx();let posts=getPosts();if(cat)posts=posts.filter(p=>p.category===cat);if(!query&&!loc)return posts;return posts.map(p=>({p,s:score(p,query,loc)})).filter(x=>x.s>0).sort((a,b)=>b.s-a.s).map(x=>x.p)}
function chips(results){let arr=[];[...results.slice(0,20).flatMap(p=>[p.category,p.location]),'bike','phone','sofa','car','Charlotte','Concord','Matthews','electronics'].forEach(x=>{x=String(x||'').trim();if(x&&!arr.some(y=>norm(y)===norm(x)))arr.push(x)});return arr.slice(0,8)}
function correction(query,posts){let n=norm(query);if(n.length<3)return'';let words=new Set();posts.forEach(p=>`${p.title} ${p.category} ${p.location}`.split(/\s+/).forEach(w=>{w=w.toLowerCase().replace(/[^a-z0-9]/g,'');if(w.length>=4)words.add(w)}));return[...words].find(w=>w[0]===n[0]&&w.includes(n.slice(1,3))&&w!==n)||''}
function dropdown(){let d=q('#eliteSearchDropdown');if(d)return d;let anchor=q('.header-center')||q('.search-bar')||document.body;d=document.createElement('div');d.id='eliteSearchDropdown';d.className='elite-search-dropdown hidden';d.setAttribute('role','listbox');d.setAttribute('aria-label','Live search results');anchor.appendChild(d);return d}
function bind(){let d=dropdown();d.querySelectorAll('[data-result-index]').forEach(b=>b.onclick=()=>select(activeResults[+b.dataset.resultIndex]));d.querySelectorAll('[data-fill-search]').forEach(b=>b.onclick=()=>setSearch(b.dataset.fillSearch||b.textContent.trim()));let clr=d.querySelector('.clear-recent-searches');if(clr)clr.onclick=()=>{localStorage.removeItem(RECENT_KEY);render([], '', true)}}
function render(results,query,forceRecent=false){let d=dropdown(),rec=recent(),all=getPosts();activeResults=results.slice(0,8);activeIndex=-1;if((!query&&!forceRecent)||forceRecent&&!rec.length){d.innerHTML=`<div class="elite-search-help">Start typing to search by item, category, price clue, or city. Try <strong>Charlotte bike</strong> or <strong>cheap furniture</strong>.</div><div class="elite-search-chip-row">${chips(all).slice(0,6).map(c=>`<button type="button" class="elite-search-chip" data-fill-search="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('')}</div>`;d.classList.remove('hidden');bind();return}if(!query&&rec.length){d.innerHTML=`<div class="elite-search-section"><div class="elite-search-label"><span>Recent searches</span><button type="button" class="clear-recent-searches">Clear</button></div>${rec.map(x=>`<button type="button" class="elite-search-item" data-fill-search="${escapeHtml(x)}"><span>🕘</span><span><span class="elite-search-title">${escapeHtml(x)}</span><span class="elite-search-meta">Search again</span></span></button>`).join('')}</div>`;d.classList.remove('hidden');bind();return}if(!results.length){let corr=correction(query,all);d.innerHTML=`<div class="elite-search-empty">No results found for <strong>${escapeHtml(query)}</strong>.</div>${corr?`<div class="elite-search-correction">Did you mean <button type="button" data-fill-search="${escapeHtml(corr)}">${escapeHtml(corr)}</button>?</div>`:''}<div class="elite-search-chip-row">${chips(all).slice(0,6).map(c=>`<button type="button" class="elite-search-chip" data-fill-search="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('')}</div>`;d.classList.remove('hidden');bind();return}d.innerHTML=`<div class="elite-search-section"><div class="elite-search-label"><span>Top matches</span><span>${results.length} result${results.length===1?'':'s'}</span></div>${results.slice(0,8).map((p,i)=>{let img=p.images&&p.images[0]||PLACEHOLDER;return`<button type="button" class="elite-search-item" role="option" data-result-index="${i}"><img class="elite-search-thumb" src="${img}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${PLACEHOLDER.replace(/'/g,'&#039;')}'"><span><span class="elite-search-title">${hi(p.title,query)}</span><span class="elite-search-meta">${escapeHtml(p.category)} · ${escapeHtml(p.location)}</span></span><span class="elite-search-price">${escapeHtml(p.price||'Contact')}</span></button>`}).join('')}</div><div class="elite-search-section"><div class="elite-search-label"><span>Smart suggestions</span></div><div class="elite-search-chip-row">${chips(results).map(c=>`<button type="button" class="elite-search-chip" data-fill-search="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('')}</div></div>`;d.classList.remove('hidden');bind()}
function hide(){q('#eliteSearchDropdown')?.classList.add('hidden')}
function setSearch(v){let f=fields();['desktop','mobile','hero'].forEach(k=>{if(f[k])f[k].value=v});run(true)}
function select(p){if(!p)return;saveRecent(lastQuery||p.title);hide();if(document.body.dataset.page!=='listings'){location.href=`Listings.html?search=${encodeURIComponent(p.title)}`;return}renderListings([p]);updateListingCount([p]);setTimeout(()=>q('.listings-results')?.scrollIntoView({behavior:'smooth',block:'start'}),80);if(typeof openListingDetailsModal==='function')setTimeout(()=>openListingDetailsModal(p),180)}
function active(){let items=qa('#eliteSearchDropdown .elite-search-item[data-result-index]');items.forEach(i=>i.classList.remove('active'));if(activeIndex>=0&&items[activeIndex]){items[activeIndex].classList.add('active');items[activeIndex].scrollIntoView({block:'nearest'})}}
function run(now=false){let ex=()=>{let c=ctx();lastQuery=c.query;let results=smart();if(document.body.dataset.page==='listings'){renderListings(results);updateListingCount(results);let u=new URL(location.href);if(c.query)u.searchParams.set('search',c.query);else u.searchParams.delete('search');history.replaceState({},'',u)}render(results,c.query)};clearTimeout(debounceTimer);now?ex():debounceTimer=setTimeout(ex,180)}
function toast(msg){let t=q('.final-polish-toast');if(!t){t=document.createElement('div');t.className='final-polish-toast';t.setAttribute('role','status');document.body.appendChild(t)}t.textContent=msg;clearTimeout(t._timer);t._timer=setTimeout(()=>t.remove(),2200)}
function init(){try{dropdown();let f=fields();[f.desktop,f.mobile,f.hero].filter(Boolean).forEach(input=>{input.setAttribute('autocomplete','off');input.addEventListener('focus',()=>render(smart(),norm(input.value),!input.value.trim()));input.addEventListener('input',()=>run(false));input.addEventListener('keydown',e=>{let items=qa('#eliteSearchDropdown .elite-search-item[data-result-index]');if(e.key==='ArrowDown'&&items.length){e.preventDefault();activeIndex=(activeIndex+1)%items.length;active()}if(e.key==='ArrowUp'&&items.length){e.preventDefault();activeIndex=(activeIndex-1+items.length)%items.length;active()}if(e.key==='Enter'){if(activeIndex>=0&&activeResults[activeIndex]){e.preventDefault();select(activeResults[activeIndex])}else if(norm(input.value))saveRecent(input.value)}if(e.key==='Escape')hide()})});[f.loc,f.mloc,f.hloc].filter(Boolean).forEach(input=>input.addEventListener('input',()=>run(false)));qa('.search-btn,.hero-search-btn,.mobile-search-btn').forEach(b=>b.addEventListener('click',()=>{let c=ctx(),r=smart();if(c.query)saveRecent(c.query);if(document.body.dataset.page!=='listings')location.href=`Listings.html?search=${encodeURIComponent(c.query)}`;else{renderListings(r);render(r,c.query)}}));document.addEventListener('click',e=>{if(!e.target.closest('.header-center')&&!e.target.closest('#eliteSearchDropdown'))hide()});document.body.addEventListener('click',e=>{let fav=e.target.closest('.favorite-btn');if(fav)setTimeout(()=>toast(fav.classList.contains('is-saved')?'Saved to favorites':'Removed from favorites'),30);if(e.target.closest('.seller-quick-link'))toast('Opening seller contact')});if(document.body.dataset.page==='listings')run(true)}catch(e){console.error('Final polish failed:',e)}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();


/* MERGE FIX ONLY: make existing listing cards open details, and keep contact/save working. */
(function () {
  function onlyOneImage(post) {
    if (post && Array.isArray(post.images) && post.images.length) return post.images[0];
    if (post && post.image) return post.image;
    return PLACEHOLDER;
  }

  function openDetails(post) {
    if (!post) return;
    const modal = ensureListingDetailsModal();
    const img = onlyOneImage(post);
    const saved = getFavoriteIds().has(String(post.id));
    const details = document.getElementById('detailsContent');
    if (!details) return;

    details.innerHTML = `
      <div class="details-grid">
        <div class="details-gallery">
          <img src="${img}" alt="${escapeHtml(post.title)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${PLACEHOLDER.replace(/'/g,'&#039;')}'">
        </div>
        <div class="details-info">
          <p class="eyebrow">${escapeHtml(post.category || 'Listing')}</p>
          <h2 id="detailsTitle">${escapeHtml(post.title)}</h2>
          <p class="details-price">${escapeHtml(post.price || 'Contact')}</p>
          <p class="details-location">📍 ${escapeHtml(post.location || 'Charlotte area')}</p>
          <p class="details-desc">${escapeHtml(post.desc || 'No description provided.')}</p>
          <div class="details-actions">
            <button type="button" class="contact-seller-btn" data-post-id="${escapeHtml(String(post.id))}">Contact seller</button>
            <button type="button" class="favorite-btn ${saved ? 'is-saved' : ''}" data-post-id="${escapeHtml(String(post.id))}" aria-pressed="${saved}">${saved ? '★ Saved' : '☆ Save'}</button>
          </div>
          <div class="seller-card">
            <strong>Seller contact</strong>
            <span>${escapeHtml(post.email || 'Email not listed')}</span>
            ${post.phone ? `<span>${escapeHtml(post.phone)}</span>` : ''}
          </div>
        </div>
      </div>`;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    setupContactButtons();
    setupAPlusListingButtons();
  }

  window.openListingDetailsModal = openDetails;

  function bindCards() {
    document.querySelectorAll('.listing-card').forEach(card => {
      if (card.dataset.mergeClickFixed === 'true') return;
      card.dataset.mergeClickFixed = 'true';
      card.style.cursor = 'pointer';
      card.addEventListener('click', event => {
        if (event.target.closest('button, a, input, textarea, select, .thumbnail, .open-gallery')) return;
        const id = String(card.dataset.postId || '');
        const post = getPosts().find(item => String(item.id) === id);
        openDetails(post);
      });
    });
  }

  const oldRender = renderListings;
  renderListings = function (posts) {
    oldRender(posts);
    enhanceListingCards();
    bindCards();
  };

  const oldEnhance = enhanceListingCards;
  enhanceListingCards = function () {
    oldEnhance();
    bindCards();
  };

  document.addEventListener('DOMContentLoaded', bindCards);
  setTimeout(bindCards, 150);
})();
