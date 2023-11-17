const model_111 = [
    {
        dayOfWeek: 'Понедельник', value: [
            { time: '8.30-9.50', subject: 'ТСВПС (Практ.занятие)'},
            { time: '10.00-11.20', subject: 'ЭКФК (Практ.занятие) '},
        ]
    },
    {
        dayOfWeek: 'Вторник', value: [
            { time: '8.30-9.50', subject: 'ТМО (Лек)'}
        ]
    }
]

const model_121 = [
    {
        dayOfWeek: 'Понедельник', value: [
            { time: '8.30-9.50', subject: 'ООП (Лекция)'},
            { time: '10.00-11.20', subject: 'ООП (Лекция)'},
            { time: '12.00-13.20', subject: 'ЭКФК (Практ.занятие) '},
            { time: '13.30-14.50', subject: 'ООП (Лекция)'}
        ]
    },
    {
        dayOfWeek: 'Вторник', value: [
            { time: '8.30-9.50', subject: 'ООП (Лекция)'}
        ]
    }
]

const model_131 = [
    {
        dayOfWeek: 'Понедельник', value: [
            { time: '8.30-9.50', subject: 'Основы.государ. (Практ.занятие)'},
            { time: '10.00-11.20', subject: 'Програм. (Практ.занятие)'},
            { time: '12.00-13.20', subject: 'ЭКФК (Практ.занятие) '},
            { time: '13.30-14.50', subject: 'Алг.иГеом. (Лек)'}
        ]
    },
    {
        dayOfWeek: 'Вторник', value: [
            { time: '8.30-9.50', subject: 'ЭКФК (Практ.занятие) '},
            { time: '10.00-11.20', subject: 'Програм. (Практ.занятие)'},
            { time: '12.00-13.20', subject: 'Основы.государ. (Практ.занятие)'},
            { time: '13.30-14.50', subject: 'Алг.иГеом. (Лек)'}
        ]
    }
]

const models = [
    { title: 'И-111', value: model_111 },
    { title: 'И-121', value: model_121 },
    { title: 'И-131', value: model_131 },
    { title: 'И-141', value: model_111 }
]

const $groups = document.querySelector('.groups')
const $schedule = document.querySelector('.schedule')

models.forEach(block => {
    let html = ''
    if(block.title)
    {
        html += `<li class="list" onselectstart="return false" onmousedown="return false">${block.title}</li>`
    }
    $groups?.insertAdjacentHTML('beforeend', html)
})

$('.groups li').click(function(event) {
    $(this).addClass('click');
    $(".schedule").html('');
    innerHTML = this.innerHTML
    models.forEach(callback => {
        if(innerHTML == callback.title)
        {
            Show(callback.value)
        }
    })

    $(".groups li").not(this).removeClass("click");
    
});

function Show(block)
{
    block.forEach(element => {
        let html = `<div class = "schedule-element">`
        if(element.dayOfWeek)
        {
            html += `<p class = "schedule-element-title">${element.dayOfWeek}</p>`
        } if(element.value) {
            html += Subject(element)
        }
        $schedule?.insertAdjacentHTML('beforeend', html);
    })
}

function Subject(block)
{
    const html = block.value.map(item => `
            <div class = "schedule-element-item">
            <p class = "schedule-element-item-time">${item.time}</p>
            <p class = "schedule-element-item-subject">${item.subject}</p>
        </div>
    `)

    return html.join('')
}