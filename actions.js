
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

