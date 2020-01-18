
(async function(){

    let delay = 0.1;
    let url = 'https://randomuser.me/api/?results=50';
    let data = await fetch(url);
        data = await data.json('');
        data = data.results;
    let html = data.map(person => `
                                    <div class="col-12 col-lg-4">
                                                <div class="card-container mx-auto my-3" style="transition-delay:${delay+=0.2}s">
                                                    <span class="pro">PRO</span>
                                                    <img
                                                        class="round"
                                                        src="${person.picture.large}"
                                                        alt="user"
                                                    />
                                                    <h3>${person.name.title} ${person.name.first} ${person.name.last}</h3>
                                                    <h6>${person.location.city}, ${person.location.country}</h6>
                                                    
                                                    <p>
                                                        leonel.ostlie@example.com
                                                    </p>
                                                    <h6>23/05/1983 | 36 y.o.</h6>
                                                    <div class="buttons my-3">
                                                        <button class="primary ghost">
                                                            <i class="far fa-envelope"></i>
                                                            Message
                                                        </button>
                                                    </div>	
                                                </div>
                                            </div>
    `);
    html = html.join('');
    let cardsBox = document.querySelector('.user-cards');
    cardsBox.insertAdjacentHTML('afterbegin', html);

    setTimeout(()=>{
                    cardsBox.classList.remove('hidden');
    }, 500)

})();