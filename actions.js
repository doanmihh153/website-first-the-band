
// Thẻ Js --

// Model - tên class cha chính của Tickets
const model = document.querySelector('.js-model');

// Bật lên hộp thoại khi click vô 
const buyBtns = document.querySelectorAll('.js-buy-tickets');

// Hàm lắng nghe
function handleShowBuyTicket () {
    // class list
    model.classList.add('open');
};

// Vòng Lặp
for (const buyBtn of buyBtns) {
    // Lắng nghe hành vi của người dùng!
    buyBtn.addEventListener('click', handleShowBuyTicket);
};

// btn-close
const modelCloses = document.querySelectorAll('.js-model-close');

function handleCloseTickets() {
    model.classList.remove('open');
};

for (const modelClose of modelCloses) {
    modelClose.addEventListener('click', handleCloseTickets);
};

// Lắng nghe khi bấm ngoài sẽ đóng cửa sổ
model.addEventListener('click', handleCloseTickets);


// Fix click cả ticket cũng bị đóng! -- ngăn chặn sự kiện nổi bọt
const modelContainer = document.querySelector('.js-model-container');
// Hàm ngăn chăn nổi bọt
function handleRemoveEventFoamy(event) {
    event.stopPropagation();
};

modelContainer.addEventListener('click', handleRemoveEventFoamy);


// Responsive - Mobile - Menu
// Đóng mở menu trên di động
const header = document.getElementById('header');
const headerMenuMobile = document.getElementById('menu-mobile');

const headerHeight = header.clientHeight;

headerMenuMobile.onclick = function () {
    // Lấy chiều cao - so sánh với chiều cao của header:
    const isClose = header.clientHeight === headerHeight;

    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
};

// Lắng nghe sự kiện đóng mở
const menuItems = document.querySelectorAll('#navbar li a[href*="#"]');

for (let i = 0; i < menuItems.length; i++) {
    const menuItem= menuItems[i];
    // lắng nghe sự kiện:
    menuItem.onclick = function (event) {
        // Nếu có anh chị em liền kề và nếu trong nó có class subnav thì là menu con
        // Kiểm tra xem menuItem có phải là menu con không
        const isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    
        if (isParent) {
            event.preventDefault(); // Ngăn chặn sự kiện mặc định nếu là menu con
        } else {
            console.log(menuItem);
            header.style.height = null; // Đóng menu khi click vào menu item
        };
        // Nếu là menu con thì không làm gì cả};
    };
};