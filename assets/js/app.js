let messages = [
    {
        id: 1,
        role: 'server',
        name: 'Support',
        avatar: './assets/image/avatar_server.jpg',  
        message: 'Hiiii bạn'
    },
    {
        id: 2,
        role: 'client',
        name: 'You',
        avatar: './assets/image/avatar_client.jpg',
        message: 'nonoasdasdas bạn'
    },
    {
        id: 3,
        role: 'server',
        name: 'Support',
        avatar: './assets/image/avatar_server.jpg',
        message: 'Hiiii ádasdasdasbạn'
    },
    {
        id: 4,
        role: 'client',
        name: 'You',
        avatar: './assets/image/avatar_client.jpg',
        message: 'Hellooasssssssssssssssssssssssssssssssssssss bạn'
    },
    {
        id: 5,
        role: 'server',
        name: 'Support',
        avatar: './assets/image/avatar_server.jpg',
        message: 'Hiiiiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bạn'
    },
    {
        id: 6,
        role: 'client',
        name: 'You',
        avatar: './assets/image/avatar_client.jpg',
        message: 'Helloo bạaaaaaaaaaaaaaaaaaaaaaaaaaaaaan'
    },
    {
        id: 7,
        role: 'server',
        name: 'Support',
        avatar: './assets/image/avatar_server.jpg',

        message: 'Hiiigggggggggggggggggggggggggggggggggggggggggi bạn'
    },
    {
        id: 8,
        role: 'client',
        name: 'You',
        avatar: './assets/image/avatar_client.jpg',
        message: 'Helloofffffffffffffffffffffffffff bạn'
    },
    {
        id: 9,
        role: 'server',
        name: 'Support',
        avatar: './assets/image/avatar_server.jpg',

        message: 'Hiiffffaaaaaaaaaaaaaaaaaaaaaii bạn'
    },
    {
        id: 10,
        role: 'client',
        name: 'You',
        avatar: './assets/image/avatar_client.jpg',
        message: 'Hellooaaatttttttttttttttttttttttttttttttttttttttttttttttttttttttt bạn'
    },
    {
        id: 11,
        role: 'server',
        name: 'Support',
        avatar: './assets/image/avatar_server.jpg',

        message: '  Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec ac viverra in scelerisque leo.'
    },
    {
        id: 12,
        role: 'client',
        name: 'You',
        avatar: './assets/image/avatar_client.jpg',
        message: '               Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec.'
    },
    {
        id: 13,
        role: 'server',
        name: 'Support',
        avatar: './assets/image/avatar_server.jpg',

        message: 'Hiiii bạn'
    },
    {
        id: 14,
        role: 'client',
        name: 'You',
        avatar: './assets/image/avatar_client.jpg',
        message: 'Helloo bạn'
    },
    {
        id: 15,
        role: 'server',
        name: 'Support',
        avatar: './assets/image/avatar_server.jpg',

        message: 'Hiiii bạn'
    },
    {
        id: 16,
        role: 'client',
        name: 'You',
        avatar: './assets/image/avatar_client.jpg',
        message: 'Helloo bạn'
    },
    {
        id: 17,
        role: 'client',
        name: 'You',
        avatar: './assets/image/avatar_client.jpg',
        message: 'Helloo bạn'
    },
    {
        id: 18,
        role: 'server',
        name: 'Support',
        avatar: './assets/image/avatar_server.jpg',

        message: 'Hiiii bạn'
    },
    {
        id: 19,
        role: 'client',
        name: 'You',
        avatar: './assets/image/avatar_client.jpg',
        message: 'Helloo bạn'
    },
    {
        id: 18,
        role: 'server',
        name: 'Support',
        avatar: './assets/image/avatar_server.jpg',

        message: 'Hiiii bạn'
    },
    {
        id: 19,
        role: 'client',
        name: 'You',
        avatar: './assets/image/avatar_client.jpg',
        message: 'Helloo bạn'
    },

];
var newMess = messages.map((message)=> {
    if (message.role === 'server') {
        return `
        <div class="mess-text server">
            <img src="${message.avatar}" class="avatar">
            <span class="messtext mess-server">${message.message}
                <div class="name name-server">${message.name}</div>
            </span>
            <div class="space"></div>
            <div class="space"></div>
        </div>
        `
    } else if (message.role === 'client') {
        return `
        <div class="mess-text client">
            <span class="messtext mess-client">${message.message}
                <div class="name name-client">${message.name}</div>
            </span>
            <div class="space"></div>
            <div class="space"></div>
        </div>
        `
    }
})

document.getElementById("messages").innerHTML = newMess.join('');


var Faqs = [
    {
        id: 1,
        question: 'How to contact with riders emergency?',
        answers: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
    },
    {
        id: 2,
        question: 'App installation failed, how to update system information?',
        answers: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
    },
    {
        id: 3,
        question: 'Website reponse taking time, how to improve?',
        answers: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
    },
    {
        id: 4,
        question: 'New update fixed all bug and issues',
        answers: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
    },
    {
        id: 5,
        question: 'How to contact with riders emergency?',
        answers: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
    },
    
]

var newQuestions = Faqs.map((Faq) => {
    return `
    <div class="question-item">
        <div class="question-heading question-heading${Faq.id}">
            <h3 class="">${Faq.question}</h3>
            <i class="fas fa-plus"></i>
        </div>
        <div class="answers active" id="answer${Faq.id}">
            <span>${Faq.answers}</span>
        </div>
    </div>
    `
})

document.getElementById("Faqs-body").innerHTML = newQuestions.join('');


var comments = [
    {
        id: 1,
        name: 'Zoltan Nemeth',
        avatar: './assets/image/client/ceo.png',
        position: 'CEO',
        summary: 'User friendly & Customizable',
        rate: 5,
        comment: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'
    },
    {
        id: 2,
        name: 'Lucasta 	Amory',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        position: 'CTO',
        summary: 'User friendly & Customizable',
        rate: 5,
        comment: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'
    },
    {
        id: 3,
        name: 'Milcah Rowena',
        avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
        position: 'CFO',
        summary: 'User friendly & Customizable',
        rate: 5,
        comment: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'
    },
    {
        id: 4,
        name: 'Orla Pandora',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
        position: 'Manager',
        summary: 'User friendly & Customizable',
        rate: 5,
        comment: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'
    },
    {
        id: 5,
        name: 'Selina Bernard',
        avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        position: 'CEO',
        summary: 'User friendly & Customizable',
        rate: 5,
        comment: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'
    }
]

var newComment = comments.map((comment) => {
    return `
    <div class="client-rating">
        <div class="rating-stars">
            <ul>
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
    `
})

document.getElementById('comment-client').innerHTML = newComment.join('')





        const mess = document.querySelector('.js-mess')
        const openMess = document.querySelector('.js-openmess')
        const closeMess = document.querySelector('.js-closemess')
        const hidenmess = document.querySelector('.js-hidenmess')
        const hidens = document.querySelector('.js-hiden')

        function HidenMess() {
            
            hidenmess.classList.add('hiden')
        }
    
        function AppearMess() {
            hidenmess.classList.remove('hiden')
        }
    
    
        function OpenMess() {
            mess.classList.add('openmess')
            mess.classList.remove('closemess')
        }
    
        function CloseMess() {
            mess.classList.remove('openmess')  
            mess.classList.add('closemess')
        }

        closeMess.addEventListener('click',AppearMess)
        openMess.addEventListener('click',OpenMess)
        closeMess.addEventListener('click',CloseMess)
        hidenmess.addEventListener('click', HidenMess)


        const   questions1 = document.querySelector('.question-heading1')
        const   questions2 = document.querySelector('.question-heading2')
        const   questions3 = document.querySelector('.question-heading3')
        const   questions4 = document.querySelector('.question-heading4')
        const   questions5 = document.querySelector('.question-heading5')
        const   answers1 = document.querySelector('#answer1')
        const   answers2 = document.querySelector('#answer2')
        const   answers3 = document.querySelector('#answer3')
        const   answers4 = document.querySelector('#answer4')
        const   answers5 = document.querySelector('#answer5')



        function openAnswer1 () {
            if (answers1.style.display !== 'block') {
                answers1.style.display = 'block';
            } else {
                answers1.style.display = 'none ';
            }
            answers4.style.display = 'none'
            answers3.style.display = 'none'
            answers2.style.display = 'none'
            answers5.style.display = 'none'
        }   

        function openAnswer2 () {

            if (answers2.style.display !== 'block') {
                answers2.style.display = 'block';
            } else {
                answers2.style.display = 'none ';
            }
            answers4.style.display = 'none'
            answers3.style.display = 'none'
            answers5.style.display = 'none'
            answers1.style.display = 'none'
        }
        

        function openAnswer3 () {
            if (answers3.style.display !== 'block') {
                answers3.style.display = 'block';
            } else {
                answers3.style.display = 'none ';
            }
            answers4.style.display = 'none'
            answers5.style.display = 'none'
            answers2.style.display = 'none'
            answers1.style.display = 'none'
        }

        function openAnswer4 () {

            if (answers4.style.display !== 'block') {
                answers4.style.display = 'block';
            } else {
                answers4.style.display = 'none ';
            }
            answers5.style.display = 'none'
            answers3.style.display = 'none'
            answers2.style.display = 'none'
            answers1.style.display = 'none'
        }


        function openAnswer5 () {

            if (answers5.style.display !== 'block') {
                answers5.style.display = 'block';
            } else {
                answers5.style.display = 'none ';
            }
            answers4.style.display = 'none'
            answers3.style.display = 'none'
            answers2.style.display = 'none'
            answers1.style.display = 'none'
        }



        questions1.addEventListener("click", openAnswer1)
        questions2.addEventListener("click", openAnswer2)
        questions3.addEventListener("click", openAnswer3)
        questions4.addEventListener("click", openAnswer4)
        questions5.addEventListener("click", openAnswer5)


        $(document).ready(function(){
            $('#comment-client').slick({
                arrows: true,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                prevArrow: $('.pre'),
                nextArrow: $('.next'),
                infinite: false,
                autoplay: true,
                autoplaySpeed: 2000,
            });
          });
