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
        <div class="answers" id="answer${Faq.id}">
            <span>${Faq.answers}</span>
        </div>
    </div>
    `
})

document.getElementById("Faqs-body").innerHTML = newQuestions.join('');




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
            // click2 = 0;
            // click3 = 0;
            // click4 = 0;
            // click5 = 0;
            // answers3.classList.remove('active')
            // answers4.classList.remove('active')
            // answers5.classList.remove('active')            
            // answers2.classList.remove('active')
            // click1 += 1;
            // if (click1 % 2 == 0) {
            //     answers1.classList.remove('active')
            // } else {
            //     answers1.classList.add("active")

            // }
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
            // click1 = 0;
            // click3 = 0;
            // click4 = 0;
            // click5 = 0;
            // answers1.classList.remove('active')
            // answers3.classList.remove('active')
            // answers4.classList.remove('active')
            // answers5.classList.remove('active')
            // click2 += 1;         
            // if (click2 % 2 == 0) {
            //     answers2.classList.remove('active')
            // } else {
            //     answers2.classList.add("active")

            // } 
            // console.log(click2)
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
            // click1 = 0;
            // click2 = 0;
            // click4 = 0;
            // click5 = 0;
            // answers1.classList.remove('active')
            // answers2.classList.remove('active')
            // answers4.classList.remove('active')
            // answers5.classList.remove('active')
            // click3 += 1;         
            // if (click3 % 2 == 0) {
            //     answers3.classList.remove('active')
            // } else {
            //     answers3.classList.add("active")

            // } 
            // console.log(click3)
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
            // click1 = 0;
            // click2 = 0;
            // click3 = 0;
            // click5 = 0;
            // answers1.classList.remove('active')
            // answers2.classList.remove('active')
            // answers3.classList.remove('active')
            // answers5.classList.remove('active')
            // click4 += 1;         
            // if (click4 % 2 == 0) {
            //     answers4.classList.remove('active')
            // } else {
            //     answers4.classList.add("active")
            // } 
            // console.log(click4)
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
            // click1 = 0;
            // click2 = 0;
            // click3 = 0;
            // click4 = 0;
            // answers1.classList.remove('active')
            // answers2.classList.remove('active')
            // answers3.classList.remove('active')
            // answers4.classList.remove('active')
            // click5 += 1;         
            // if (click5 % 2 == 0) {
            //     answers5.classList.remove('active')
            // } else {
            //     answers5.classList.add("active")
            // } 
            // console.log(click5)
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



