// Estado do carrinho
let cart = [];
let isModalOpen = false;

// Elementos DOM
const materialsContainer = document.getElementById('materials-container');
const cartModal = document.getElementById('cart-modal');
const mobileCartBtn = document.getElementById('mobile-cart-button');
const closeModalBtn = document.getElementById('close-modal');
const alert = document.getElementById('alert');

// Funções auxiliares
function showAlert() {
    alert.classList.remove('hidden');
    alert.classList.add('animate-slide-in');
    setTimeout(() => {
        alert.classList.remove('animate-slide-in');
        alert.classList.add('animate-slide-out');
        setTimeout(() => {
            alert.classList.add('hidden');
            alert.classList.remove('animate-slide-out');
        }, 500);
    }, 2000);
}

function updateCart() {
    const desktopCart = document.getElementById('desktop-cart');
    const mobileCart = document.getElementById('mobile-cart');
    const desktopCartButton = document.getElementById('desktop-cart-button');
    const mobileCartButton = document.getElementById('mobile-cart-button');

    const cartContent = cart.length === 0 
        ? '<p class="text-gray-500">Seu carrinho está vazio.</p>'
        : `<ul class="space-y-4">
            ${cart.map(item => `
                <li class="bg-white p-3 rounded shadow flex justify-between items-center">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800">${item.title}</h3>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-600 hover:text-red-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </li>
            `).join('')}
           </ul>`;

    const whatsappButton = cart.length > 0
        ? `<button onclick="sendToWhatsApp()" 
             class="w-full bg-green-500 hover:bg-green-600 text-white text-lg font-medium py-3 rounded-md flex items-center justify-center transition-colors">
             Enviar para WhatsApp
           </button>`
        : '';

    desktopCart.innerHTML = cartContent;
    mobileCart.innerHTML = cartContent;
    desktopCartButton.innerHTML = whatsappButton;
    mobileCartButton.innerHTML = whatsappButton;
}

function addToCart(material) {
    if (!cart.find(item => item.id === material.id)) {
        cart.push(material);
        updateCart();
        showAlert();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function sendToWhatsApp() {
    if (cart.length === 0) return;
    
    const message = cart
        .map(item => `*${item.title}*\nDescrição: ${item.description}`)
        .join('\n\n');
        
    const whatsappUrl = `https://wa.me/48998442768?text=${encodeURIComponent(
        `Olá, gostaria de um orçamento para as seguintes pedras:\n\n${message}`
    )}`;
    
    window.open(whatsappUrl, '_blank');
}

function toggleModal() {
    isModalOpen = !isModalOpen;
    cartModal.classList.toggle('hidden');
    document.body.classList.toggle('modal-open');
}

// Event Listeners
mobileCartBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const offset = 150;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Renderizar materiais
function renderMaterials() {
    const categories = ['Granito', 'Quartzo', 'Quartzito', 'Mármore'];
    
    const materialsHtml = categories.map(category => `
        <section id="${category}" class="mb-12">
            <h2 class="text-3xl font-bold text-center border-b-[4px] w-[50%] lg:w-[30%] pb-4 border-gray-800 mx-auto text-gray-800 mt-20 mb-20">
                ${category}s
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                ${materials
                    .filter(material => material.category === category)
                    .map(material => `
                        <div class="rounded-lg hover:shadow-xl transition-transform transform hover:scale-105">
                            <div class="w-full h-56 relative">
                                <img src="${material.imageUrl}" alt="${material.title}" class="w-full h-full object-cover" />
                            </div>
                            <div class="p-4">
                                <h3 class="text-xl font-semibold text-gray-800">${material.title}</h3>
                                <p class="text-gray-500 text-sm mt-2">${material.description}</p>
                                <button
                                    onclick="addToCart(${JSON.stringify(material).replace(/"/g, '&quot;')})"
                                    class="w-full bg-gray-800 hover:bg-gray-900 text-white text-lg font-medium mt-4 py-2 rounded-md flex items-center justify-center transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                    `).join('')}
            </div>
        </section>
    `).join('');

    materialsContainer.innerHTML = materialsHtml;
}

// Inicializar a página
renderMaterials();
updateCart();