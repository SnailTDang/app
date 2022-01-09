var comments = [
  {
    id: 1,
    name: "Zoltan Nemeth",
    avatar: "./assets/image/client/ceo.png",
    position: "CEO",
    summary: "User friendly & Customizable",
    rate: 4,
    comment:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
  },
  {
    id: 2,
    name: "Lucasta 	Amory",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    position: "CTO",
    summary: "User friendly & Customizable",
    rate: 5,
    comment:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
  },
  {
    id: 3,
    name: "Milcah Rowena",
    avatar:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    position: "CFO",
    summary: "User friendly & Customizable",
    rate: 5,
    comment:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
  },
  {
    id: 4,
    name: "Orla Pandora",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    position: "Manager",
    summary: "User friendly & Customizable",
    rate: 5,
    comment:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
  },
  {
    id: 5,
    name: "Selina Bernard",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    position: "CEO",
    summary: "User friendly & Customizable",
    rate: 4,
    comment:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
  },
];

function renderComment() {
  var newComment = comments.map((comment) => {
    return `
        <div class="client-rating">
            <div class="rating-stars">
                <ul class="rate-star">
                  <li class="yellow-stars">
                    <span class="stars"><i class="fas fa-star"></i></span>
                  </li>
                  <li class="yellow-stars">
                    <span class="stars"><i class="fas fa-star"></i></span>
                  </li>
                  <li class="yellow-stars">
                    <span class="stars"><i class="fas fa-star"></i></span>
                  </li>
                  <li class="yellow-stars">
                    <span class="stars"><i class="fas fa-star"></i></span>
                  </li>
                  <li class="yellow-stars">
                    <span class="stars"><i class="fas fa-star"></i></span>
                  </li>
                </ul>
            </div>
            <div class="main-comment">
                <h2 class="comment-heading">${comment.summary}</h2>
                <span class="main-comment">${comment.comment}</span>
                <div class="client-info">    
                    <div class="client-name">
                        <img src="${comment.avatar}" alt="">
                        <div class="name-ceo">
                            <h3>${comment.name}</h3>
                            <span>${comment.position}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
  });
  document.getElementById("comment-client").innerHTML = newComment.join("");
}

renderComment();

$(document).ready(function () {
  $("#comment-client").slick({
    arrows: true,
    speed: 800,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    prevArrow: $(".pre"),
    nextArrow: $(".next"),
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
