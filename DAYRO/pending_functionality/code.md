  <!-- Arts and Crafts Section -->
  <!-- about page -->
    <!-- <section class="py-5">
        <div class="container">
            <h2 class="section-title">Traditional Arts & Crafts</h2>
            <div class="row">
                <div class="col-lg-6">
                    <div class="card mb-4 folk-card">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="../IMG/bandhani.jpg" class="img-fluid rounded-start" alt="Bandhani Textile">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Bandhani</h5>
                                    <p class="card-text">A tie-dye textile art from Jamnagar, featuring intricate
                                        patterns created by tying small portions of fabric before dyeing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card mb-4 folk-card">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="../IMG/patola.jpg" class="img-fluid rounded-start" alt="Patola Silk">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Patola</h5>
                                    <p class="card-text">Double ikat woven silk textiles from Patan, known for their
                                        geometric patterns and vibrant colors, taking months to create.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card mb-4 folk-card">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="../IMG/embroidery.jpg" class="img-fluid rounded-start"
                                    alt="Gujarati Embroidery">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Embroidery</h5>
                                    <p class="card-text">Intricate needlework featuring mirrors, beads, and colorful
                                        threads, with distinct styles like Kutchi, Suf, Khaarek, and Paako.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card mb-4 folk-card">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="../IMG/ajrakh.jpg" class="img-fluid rounded-start"
                                    alt="Ajrakh Block Printing">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Ajrakh Block Printing</h5>
                                    <p class="card-text">Traditional block printing technique from Kachchh district,
                                        using natural dyes and intricate wooden blocks for printing patterns.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->

<!-- this represensts festivals -->
<!-- about page -->
     <!-- Festivals Section  -->
    <!-- <section class="py-5 bg-light">
        <div class="container">
            <h2 class="section-title">Festivals & Celebrations</h2>
            <div class="row">
                <div class="col-md-6">
                    <h4>Navratri</h4>
                    <p>The nine-night festival dedicated to Goddess Durga features non-stop Garba and Dandiya
                        performances across Gujarat, with colorful attire and energetic music.</p>

                    <h4>Uttarayan</h4>
                    <p>The kite flying festival celebrated in January marks the transition of the sun into Capricorn.
                        The skies of Gujarat fill with colorful kites as people engage in friendly competitions.</p>
                </div>
                <div class="col-md-6">
                    <h4>Rann Utsav</h4>
                    <p>A three-month festival held in the white desert of Kutch, showcasing the region's arts, crafts,
                        music, and dance against the backdrop of the stunning white salt desert.</p>

                    <h4>Tarnetar Fair</h4>
                    <p>A vibrant matrimonial fair featuring the Rasada folk dance, where eligible bachelors wear
                        colorful embroidered umbrellas to attract potential brides.</p>
                </div>
            </div>
        </div>
    </section> -->


<!-- this section is for folk dances -->
<!-- about page -->

    <section class="py-5 bg-light">
        <div class="container">
            <h2 class="section-title">Vibrant Folk Dances</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="card folk-card">
                        <img src="../IMG/garba.jpg" class="card-img-top" alt="Garba Dance">
                        <div class="card-body">
                            <h5 class="card-title">Garba</h5>
                            <p class="card-text">Performed primarily by women in circular formations during Navratri,
                                Garba honors Goddess Durga through rhythmic movements, clapping, and singing.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card folk-card">
                        <img src="../IMG/dandiya.jpg" class="card-img-top" alt="Dandiya Raas">
                        <div class="card-body">
                            <h5 class="card-title">Dandiya Raas</h5>
                            <p class="card-text">An energetic dance performed by both men and women using colorful
                                sticks (dandiyas), originally a devotional dance to Lord Krishna.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card folk-card">
                        <img src="../IMG/tippani.jpg" class="card-img-top" alt="Tippani Dance">
                        <div class="card-body">
                            <h5 class="card-title">Tippani</h5>
                            <p class="card-text">A unique dance form performed by women construction workers, using long
                                sticks (tippani) that are used to pound and level the ground.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

 <!-- script for opening page in new tab -->
 <!-- this is for main index.html script -->
document.addEventListener("DOMContentLoaded", () => {
    const aTag = document.querySelector("header nav .about-web a");

    if (aTag) {
        aTag.addEventListener("click", (e) => {

            e.preventDefault();

            // getting link using href attribute
            const URL = aTag.getAttribute("href");

            if (URL) {
                window.open(URL, "_blank");
            } else {
                console.error("No href attribute found on the link.");
            }
        });
    } else {
        console.error("Anchor tag not found.");
    }
});   

<!-- about music -->

Gujarat's folk music, known as <strong>Sugam Sangeet</strong>, has been passed down through
generations, creating a rich musical heritage. The bardic tradition is central to Gujarati folk
music, with communities like Barot, Gadhvi, and Charan serving as traditional professional folk
singers.


-> The music often tells stories of valor, love, devotion, and everyday life, preserving history
and cultural values through melodious expressions.

-> <h5>Traditional Instruments:</h5>
<!-- all instrument name and details -->
<li>Manjira: Small hand cymbals</li>
<li>Dhol: Double-headed drum</li>

// how much time has spend in website

<!-- export function userTime() {
    const oldStart = localStorage.getItem("startTime");

    if (oldStart) {
        const previousTime = Number(oldStart);
        const now = Date.now();
        const timeSpent = now - previousTime;
        const timeSec = Math.floor(timeSpent / 1000);
        const timeMin = Math.floor(timeSec / 60);

        console.log(`You spent ${timeMin} minutes`);

        localStorage.removeItem("startTime");
    }
    localStorage.setItem("startTime", Date.now());
} -->


# for sharing apps

<script>
    //  user-selected color

   document.addEventListener('DOMContentLoaded', () => {
     const form = document.querySelector('form');
     const inputColor = form.querySelector('input[type="color"]');

     form.addEventListener('submit', (e) => {
         e.preventDefault();
         document.body.style.backgroundColor = inputColor.value;
     });
 });

// loader function
 window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  loader.style.display = "none";
  content.style.display = "block";
});

// default suggestions in kalakr




</script>