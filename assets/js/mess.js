let messages = [
  {
    id: 1,
    role: "server",
    name: "Support",
    avatar: "./assets/image/avatar_server.jpg",
    message: "Hiiii bạn",
  },
  {
    id: 2,
    role: "client",
    name: "You",
    avatar: "./assets/image/avatar_client.jpg",
    message: "nonoasdasdas bạn",
  },
  {
    id: 3,
    role: "server",
    name: "Support",
    avatar: "./assets/image/avatar_server.jpg",
    message: "Hiiii ádasdasdasbạn",
  },
  {
    id: 4,
    role: "client",
    name: "You",
    avatar: "./assets/image/avatar_client.jpg",
    message: "Hellooasssssssssssssssssssssssssssssssssssss bạn",
  },
  {
    id: 5,
    role: "server",
    name: "Support",
    avatar: "./assets/image/avatar_server.jpg",
    message: "Hiiiiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bạn",
  },
  {
    id: 6,
    role: "client",
    name: "You",
    avatar: "./assets/image/avatar_client.jpg",
    message: "Helloo bạaaaaaaaaaaaaaaaaaaaaaaaaaaaaan",
  },
  {
    id: 7,
    role: "server",
    name: "Support",
    avatar: "./assets/image/avatar_server.jpg",
    message: "Hiiigggggggggggggggggggggggggggggggggggggggggi bạn",
  },
  {
    id: 8,
    role: "client",
    name: "You",
    avatar: "./assets/image/avatar_client.jpg",
    message: "Helloofffffffffffffffffffffffffff bạn",
  },
  {
    id: 9,
    role: "server",
    name: "Support",
    avatar: "./assets/image/avatar_server.jpg",
    message: "Hiiffffaaaaaaaaaaaaaaaaaaaaaii bạn",
  },
  {
    id: 10,
    role: "client",
    name: "You",
    avatar: "./assets/image/avatar_client.jpg",
    message:
      "Hellooaaatttttttttttttttttttttttttttttttttttttttttttttttttttttttt bạn",
  },
  {
    id: 11,
    role: "server",
    name: "Support",
    avatar: "./assets/image/avatar_server.jpg",
    message:
      "  Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec ac viverra in scelerisque leo.",
  },
  {
    id: 12,
    role: "client",
    name: "You",
    avatar: "./assets/image/avatar_client.jpg",
    message:
      "Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec.",
  },
  {
    id: 13,
    role: "server",
    name: "Support",
    avatar: "./assets/image/avatar_server.jpg",
    message: "Hiiii bạn",
  },
  {
    id: 14,
    role: "client",
    name: "You",
    avatar: "./assets/image/avatar_client.jpg",
    message: "Helloo bạn",
  },
  {
    id: 15,
    role: "server",
    name: "Support",
    avatar: "./assets/image/avatar_server.jpg",
    message: "Hiiii bạn",
  },
];

const messInput = document.querySelector("#mess-input");
const messSend = document.querySelector("#form-submit");
const mess = document.querySelector(".js-mess");
const openMess = document.querySelector(".js-openmess");
const closeMess = document.querySelector(".js-closemess");
const hidenmess = document.querySelector(".js-hidenmess");
const hidens = document.querySelector(".js-hiden");
const logoMess = document.querySelector(".logo-mess");
const messPhone = document.querySelector(".fa-phone");

function render() {
  var newMess = messages.map((message) => {
    messInput.value = "";
    if (message.role === "server") {
      return `
        <div class="mess-text server">
            <img src="${message.avatar}" class="avatar">
            <span class="messtext mess-server"><p>${message.message}</p>
              <div class="name name-server">${message.name}</div>
            </span>
        </div>
        `;
    } else if (message.role === "client") {
      return `
        <div class="mess-text client">
            <span class="messtext mess-client"><p>${message.message}</p>
              <div class="name name-client">${message.name}</div>
            </span>
        </div>
        `;
    }
  });
  document.getElementById("messages").innerHTML = newMess.join("");
}

function preventDefault(e) {
  e.preventDefault();
}

function stopPropagation(e) {
  e.stopPropagation();
}

window.onload = function () {
  render();
};

function HidenMess() {
  hidenmess.classList.add("hiden");
}

function AppearMess() {
  hidenmess.classList.remove("hiden");
}

function OpenMess() {
  mess.classList.add("openmess");
  mess.classList.remove("closemess");
}

function CloseMess() {
  mess.classList.remove("openmess");
  mess.classList.add("closemess");
}

function sendMess() {
  let userMessInput = messInput.value.trim().replace(/\n/g, "<br/>");
  let messCount = messages.length;
  if (userMessInput !== "" && userMessInput != "<br/>") {
    setTimeout((e) => {
      messages.push({
        id: messCount + 1,
        role: "client",
        name: "You",
        avatar: "./assets/image/avatar_client.jpg",
        message: userMessInput,
      });
      render();
    }, 0);
    setTimeout((e) => {
      messages.push({
        id: messCount + 2,
        role: "server",
        name: "Support",
        avatar: "./assets/image/avatar_server.jpg",
        message:
          "Cảm ơn bạn đã quan tâm đến công ty chúng tôi, đội ngũ kĩ thuật sẽ trả lời bạn trong dây lát, Đây là tin nhắn tự động, vui lòng không spam tin nhắn!",
      });
      render();
    }, 1200);
  }
}

function listenEnter(e) {
  if (e.keyCode == 13) {
    if (!e.shiftKey && !e.ctrlKey && !e.altKey) {
      sendMess();
    }
    if (e.shiftKey) {
      return 13;
    }
    preventDefault;
  }
}

messInput.addEventListener("keydown", listenEnter);
messSend.addEventListener("click", sendMess);
messPhone.addEventListener("click", stopPropagation);
logoMess.addEventListener("click", stopPropagation);
closeMess.addEventListener("click", AppearMess);
openMess.addEventListener("click", OpenMess);
closeMess.addEventListener("click", CloseMess);
hidenmess.addEventListener("click", HidenMess);
