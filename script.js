// Expanded Data Store with Multiple Furniture, Jewelry, Art, and Books Items
let antiques = [
    {
        id: 1,
        name: "Victorian Mahogany Cabinet",
        category: "Furniture",
        era: "Victorian (1837-1901)",
        origin: "England",
        condition: "Excellent",
        description: "A magnificent Victorian mahogany cabinet featuring intricate hand-carved panels and original brass fittings.",
        history: "Originally owned by a prominent London family of statesmen and preserved in pristine estate conditions.",
        provenance: "Private Collection, London",
        starting_price: 5000,
        current_price: 7200,
        images: ["https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80"],
        seller_id: 1,
        restoration: "Minor polish touch-up in 2012 by master artisans."
    },
    {
        id: 2,
        name: "18th Century Oil Painting",
        category: "Art",
        era: "18th Century",
        origin: "France",
        condition: "Good",
        description: "A beautiful oil painting from the French Rococo period depicting pastoral aristocracy.",
        history: "Part of a noble family collection for generations before acquisition by our gallery.",
        provenance: "French Nobility Collection",
        starting_price: 8000,
        current_price: 9500,
        images: ["https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80"],
        seller_id: 2,
        restoration: "Canvas re-lined and varnished in 1998."
    },
    {
        id: 3,
        name: "Renaissance Gold Pocket Watch",
        category: "Jewelry",
        era: "Renaissance",
        origin: "Switzerland",
        condition: "Mint",
        description: "An ultra-rare 16th-century mechanical pocket watch encased in hand-chased 18k gold.",
        history: "Carried by European diplomats during treaty negotiations.",
        provenance: "Geneva Horological Archives",
        starting_price: 12000,
        current_price: 15400,
        images: ["https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"],
        seller_id: 1,
        restoration: "Fully serviced and authenticated by Swiss master horologists."
    },
    {
        id: 4,
        name: "Illuminated Manuscript Folio",
        category: "Manuscripts",
        era: "18th Century",
        origin: "Italy",
        condition: "Very Good",
        description: "Hand-lettered vellum manuscript leaf featuring gold leaf illumination and botanical borders.",
        history: "Sourced from a disbanded monastic library in Florence.",
        provenance: "Florentine Abbey Archives",
        starting_price: 3500,
        current_price: 4100,
        images: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"],
        seller_id: 3,
        restoration: "Archivally stabilized and framed in UV-protective glass."
    },
    {
        id: 5,
        name: "Baroque Carved Oak Armchair",
        category: "Furniture",
        era: "18th Century",
        origin: "Spain",
        condition: "Very Good",
        description: "A heavy carved oak armchair upholstered in original crimson velvet with brass nailhead trim.",
        history: "Acquired from an Andalusian estate dating back to the late 1700s.",
        provenance: "Seville Private Manor",
        starting_price: 4200,
        current_price: 4800,
        images: ["https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80"],
        seller_id: 2,
        restoration: "Upholstery cleaned and conditioned in 2015."
    },
    {
        id: 6,
        name: "Georgian Diamond Cluster Ring",
        category: "Jewelry",
        era: "Georgian Era (1714–1837)",
        origin: "United Kingdom",
        condition: "Excellent",
        description: "An exquisite rose-cut diamond cluster ring set in silver-topped 18k yellow gold.",
        history: "Passed down through British peerage lineage.",
        provenance: "Edinburgh Heritage Estate",
        starting_price: 9200,
        current_price: 11000,
        images: ["https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80"],
        seller_id: 1,
        restoration: "Original setting inspected and secured by certified gemologists."
    },
    {
        id: 7,
        name: "First Edition Leather-Bound Atlas",
        category: "Manuscripts",
        era: "Victorian (1837-1901)",
        origin: "Germany",
        condition: "Good",
        description: "A monumental cartographic masterwork with hand-colored copperplate maps and gilt spine embossing.",
        history: "Cataloged in university geographical societies during the late 19th century.",
        provenance: "Bavarian Library Collection",
        starting_price: 6500,
        current_price: 7800,
        images: ["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80"],
        seller_id: 3,
        restoration: "Spine re-backed with matching calfskin in 2004."
    },
    {
        id: 8,
        name: "Antique Art Deco Sideboard",
        category: "Furniture",
        era: "Art Deco",
        origin: "France",
        condition: "Mint",
        description: "Stunning burl walnut sideboard featuring geometric marquetry and original chrome hardware.",
        history: "Featured in the 1928 Paris Exposition showcase.",
        provenance: "Parisian Designer Archive",
        starting_price: 11000,
        current_price: 13500,
        images: ["https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80"],
        seller_id: 2,
        restoration: "Pristine original finish preserved."
    },
    {
        id: 9,
        name: "Victorian Sapphire & Pearl Pendant",
        category: "Jewelry",
        era: "Victorian (1837-1901)",
        origin: "England",
        condition: "Excellent",
        description: "A celestial-motif pendant featuring a deep blue Ceylon sapphire surrounded by natural seed pearls.",
        history: "Commissioned in London during the mid-Victorian mourning jewelry revival.",
        provenance: "Kent Family Heirlooms",
        starting_price: 4800,
        current_price: 5600,
        images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"],
        seller_id: 1,
        restoration: "Ultrasonic cleaning and pin replacement."
    }
];

let bids = [];
let watchlist = [];
let currentUser = { id: 1, name: "Lord Harrington", email: "harrington@heritage.com", role: "collector" };

document.addEventListener("DOMContentLoaded", () => {
    renderCatalog(antiques);
    renderCuratorPicks();
    renderUserDashboard();
    setupMobileMenu();
    setupThemeToggle();
});

function setupMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

function setupThemeToggle() {
    const toggleBtn = document.getElementById("themeToggleBtn");
    toggleBtn.addEventListener("click", () => {
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            document.documentElement.removeAttribute("data-theme");
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
}

function renderCatalog(items) {
    const grid = document.getElementById("catalogGrid");
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; text-align:center;'>No antiques found matching your criteria.</p>";
        return;
    }

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "antique-card";
        card.innerHTML = `
            <div class="antique-img-container">
                <img src="${item.images[0]}" alt="${item.name}">
                <span class="badge">${item.era}</span>
            </div>
            <div class="antique-info">
                <h3>${item.name}</h3>
                <p><i class="fas fa-globe-europe"></i> ${item.origin} &bull; Condition: ${item.condition}</p>
                <div class="price-row">
                    <span>Current Bid: $${item.current_price}</span>
                    <button class="btn-primary" onclick="openDetailModal(${item.id})">View & Bid</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function applyFilters() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const era = document.getElementById("eraFilter").value;

    const filtered = antiques.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(search) || item.origin.toLowerCase().includes(search);
        const matchesCat = category === "" || item.category === category;
        const matchesEra = era === "" || item.era === era;
        return matchesSearch && matchesCat && matchesEra;
    });

    renderCatalog(filtered);
}

function filterByCategory(catName) {
    document.getElementById("categoryFilter").value = catName;
    applyFilters();
    document.getElementById("antiques").scrollIntoView({ behavior: 'smooth' });
}

function resetFilters() {
    document.getElementById("searchInput").value = "";
    document.getElementById("categoryFilter").value = "";
    document.getElementById("eraFilter").value = "";
    renderCatalog(antiques);
}

let isVirtualView = false;
function toggleVirtualGallery() {
    isVirtualView = !isVirtualView;
    const grid = document.getElementById("catalogGrid");
    if (isVirtualView) {
        grid.style.gridTemplateColumns = "1fr";
        alert("Virtual Gallery View Activated: Showcasing immersive gallery cards with extended provenance.");
    } else {
        grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(280px, 1fr))";
    }
}

function openDetailModal(id) {
    const item = antiques.find(a => a.id === id);
    const modalBody = document.getElementById("modalBody");

    modalBody.innerHTML = `
        <div style="text-align:center; margin-bottom:15px;">
            <img src="${item.images[0]}" style="max-height:250px; width:100%; object-fit:cover; border-radius:6px;" alt="${item.name}">
        </div>
        <h2>${item.name}</h2>
        <p><strong>Category:</strong> ${item.category} | <strong>Era:</strong> ${item.era}</p>
        <p><strong>Origin:</strong> ${item.origin} | <strong>Condition:</strong> ${item.condition}</p>
        <p style="margin: 10px 0;">${item.description}</p>
        <hr style="margin:10px 0; border-color:var(--border-color);">
        <p><strong>History & Provenance:</strong> ${item.history} (${item.provenance})</p>
        <p><strong>Restoration History:</strong> ${item.restoration || 'None recorded'}</p>
        <h3 style="margin-top:15px; color:var(--warm-brown);">Current Price: $<span id="modalPrice${item.id}">${item.current_price}</span></h3>
        
        <div style="margin-top:20px; display:flex; gap:10px; align-items:center;">
            <input type="number" id="bidAmountInput${item.id}" placeholder="Enter bid amount ($)" style="padding:10px; flex:1; border:1px solid var(--border-color); border-radius:4px;">
            <button class="btn-primary" onclick="placeBid(${item.id})">Place Bid</button>
            <button class="btn-secondary" onclick="toggleWatchlist(${item.id})"><i class="fas fa-heart"></i></button>
        </div>
        <div style="margin-top:15px; text-align:center;">
            <button class="btn-secondary" onclick="generateCertificate(${item.id})"><i class="fas fa-certificate"></i> View Certificate of Authenticity</button>
        </div>
    `;

    document.getElementById("detailModal").style.display = "flex";
}

function placeBid(id) {
    const input = document.getElementById(`bidAmountInput${id}`);
    const amount = parseFloat(input.value);
    const item = antiques.find(a => a.id === id);

    if (isNaN(amount) || amount <= item.current_price) {
        alert("Please enter a bid higher than the current price!");
        return;
    }

    item.current_price = amount;
    document.getElementById(`modalPrice${id}`).innerText = amount;
    
    bids.push({
        id: bids.length + 1,
        antique_id: item.id,
        antique_name: item.name,
        amount: amount,
        timestamp: new Date().toLocaleString(),
        status: "Active"
    });

    alert(`Success! Your bid of $${amount} for "${item.name}" has been placed.`);
    renderCatalog(antiques);
    renderUserDashboard();
}

function toggleWatchlist(id) {
    const item = antiques.find(a => a.id === id);
    if (!watchlist.includes(item)) {
        watchlist.push(item);
        alert(`"${item.name}" added to your watchlist!`);
    } else {
        watchlist = watchlist.filter(w => w.id !== id);
        alert(`"${item.name}" removed from your watchlist.`);
    }
    renderUserDashboard();
}

function generateCertificate(id) {
    const item = antiques.find(a => a.id === id);
    const certBody = document.getElementById("certBody");

    certBody.innerHTML = `
        <i class="fas fa-award" style="font-size:3rem; color:var(--warm-brown); margin-bottom:10px;"></i>
        <h1 style="font-family:'Playfair Display', serif; font-size:1.8rem; color:var(--warm-brown);">Certificate of Authenticity</h1>
        <p style="font-style:italic; margin-bottom:20px;">AntiqueAuction Heritage Verification Board</p>
        <p>This is to formally certify that the artifact described below has undergone rigorous provenance verification, physical inspection, and expert appraisal.</p>
        <div style="text-align:left; margin:20px 0; background:var(--white); padding:15px; border-radius:4px;">
            <p><strong>Artifact Name:</strong> ${item.name}</p>
            <p><strong>Era / Origin:</strong> ${item.era}, ${item.origin}</p>
            <p><strong>Provenance:</strong> ${item.provenance}</p>
            <p><strong>Certificate ID:</strong> AA-VERIFY-2026-${item.id * 847}</p>
            <p><strong>Status:</strong> Verified Authentic & Insured</p>
        </div>
        <button class="btn-primary" onclick="window.print()">Print / Save Certificate</button>
    `;

    document.getElementById("detailModal").style.display = "none";
    document.getElementById("certModal").style.display = "flex";
}

function submitValuation(e) {
    e.preventDefault();
    const name = document.getElementById("valName").value;
    const category = document.getElementById("valCategory").value;
    const origin = document.getElementById("valOrigin").value;
    const notes = document.getElementById("valNotes").value;

    const estimatedValue = Math.floor(Math.random() * 15000) + 2000;
    const resultDiv = document.getElementById("valuationResult");

    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = `
        <h3>Appraisal Complete for "${name}"</h3>
        <p>Estimated Market Value: <strong>$${estimatedValue.toLocaleString()}</strong></p>
        <p>Authenticity Confidence: <strong>96.4% (Verified Era Markers)</strong></p>
        <p>Our senior curators recommend scheduling an insured physical inspection.</p>
    `;
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    if (tabName === 'collector') {
        event.target.classList.add('active');
        document.getElementById('collectorTab').classList.add('active');
    } else {
        event.target.classList.add('active');
        document.getElementById('sellerTab').classList.add('active');
    }
}

function renderUserDashboard() {
    const bidsList = document.getElementById("myBidsList");
    if (bids.length === 0) {
        bidsList.innerHTML = "<p>No active bids placed yet.</p>";
    } else {
        bidsList.innerHTML = bids.map(b => `
            <div style="padding:8px 0; border-bottom:1px solid var(--border-color);">
                <strong>${b.antique_name}</strong> - Bid: $${b.amount} <br><small>${b.timestamp}</small>
            </div>
        `).join('');
    }

    const watchlistList = document.getElementById("watchlistList");
    if (watchlist.length === 0) {
        watchlistList.innerHTML = "<p>Your watchlist is currently empty.</p>";
    } else {
        watchlistList.innerHTML = watchlist.map(w => `
            <div style="padding:8px 0; border-bottom:1px solid var(--border-color); display:flex; justify-content:between; align-items:center;">
                <span>${w.name} ($${w.current_price})</span>
                <button class="btn-secondary" style="padding:2px 8px; font-size:0.8rem;" onclick="openDetailModal(${w.id})">View</button>
            </div>
        `).join('');
    }

    const sellerList = document.getElementById("sellerInventoryList");
    const myItems = antiques.filter(a => a.seller_id === currentUser.id);
    if (myItems.length === 0) {
        sellerList.innerHTML = "<p>No items listed by you yet.</p>";
    } else {
        sellerList.innerHTML = myItems.map(i => `
            <div style="padding:8px 0; border-bottom:1px solid var(--border-color);">
                <strong>${i.name}</strong> (${i.category}) - Current Price: $${i.current_price}
            </div>
        `).join('');
    }
}

function addNewAntique(e) {
    e.preventDefault();
    const title = document.getElementById("newTitle").value;
    const category = document.getElementById("newCategory").value;
    const era = document.getElementById("newEra").value;
    const origin = document.getElementById("newOrigin").value;
    const price = parseFloat(document.getElementById("newPrice").value);
    const imgUrl = document.getElementById("newImage").value || "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80";

    const newItem = {
        id: antiques.length + 1,
        name: title,
        category: category,
        era: era,
        origin: origin,
        condition: "Excellent",
        description: "Newly listed artifact submitted by verified seller.",
        history: "Private consignment verified by platform intake specialists.",
        provenance: "Verified Seller Collection",
        starting_price: price,
        current_price: price,
        images: [imgUrl],
        seller_id: currentUser.id,
        restoration: "None reported."
    };

    antiques.push(newItem);
    alert("New antique successfully listed for auction!");
    document.getElementById("addAntiqueForm").reset();
    renderCatalog(antiques);
    renderUserDashboard();
}

function exportReport(format) {
    alert(`Exporting Collector Report as ${format}... File download initiated successfully.`);
}

function renderCuratorPicks() {
    const list = document.getElementById("curatorList");
    const picks = antiques.slice(0, 3);
    list.innerHTML = picks.map(p => `
        <li>
            <span>${p.name}</span>
            <strong style="color:var(--warm-brown);">$${p.current_price}</strong>
        </li>
    `).join('');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function openAuthModal() {
    document.getElementById("authModal").style.display = "flex";
}

function handleAuth(e) {
    e.preventDefault();
    alert("Authentication successful! Welcome back.");
    closeModal('authModal');
    document.getElementById("authBtn").innerText = "Lord Harrington";
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}