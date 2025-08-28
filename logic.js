

//increase heart Count

const heartButton = document.querySelectorAll('.heart-btn')
for (const i of heartButton) {
    i.addEventListener('click', function (event) {
        const heartCount = parseInt(document.getElementById('heart-count').innerText)
        document.getElementById('heart-count').innerText = heartCount + 1
    })
}




// clear history btn
document.getElementById('clear-history').addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('history-container').innerHTML = ''

})



// copy button
const copyButton = document.querySelectorAll('.copy-btn')
const copyText = document.querySelectorAll('.copy-text')

for (let i = 0; i < copyButton.length; i++) {
    copyButton[i].addEventListener('click', function () {
        navigator.clipboard.writeText(copyText[i].innerText)
        alert("📃 নম্বর কপি হয়েছে " + copyText[i].innerText)
        const copyCount = parseInt(document.getElementById('copy-count').innerText)
        const count = copyCount + 1
        document.getElementById('copy-count').innerText = count
    })
}



// call button functionality again

const callButton = document.querySelectorAll('.call-btn')
const contact = document.querySelectorAll('.copy-text')
const title = document.querySelectorAll('.card-title')

for (let i = 0; i < callButton.length; i++) {
    callButton[i].addEventListener('click', function (event) {
        event.preventDefault()
        const totalCoin = parseInt(document.getElementById('total-coin').innerText)
        if (totalCoin > 0) {
            const remainCoin = totalCoin - 20
            document.getElementById('total-coin').innerText = remainCoin
            console.log(title[i].innerText)
            alert('📞 calling ' + title[i].innerText + ' ' + contact[i].innerText+'...')

            // adding to history
            const history = document.createElement('div')
            history.innerHTML = `
            <div class="flex justify-between rounded-md bg-[#f2f2f2] p-5 mt-5">
            <div>
                <p>${title[i].innerText}</p>
                <p>${contact[i].innerText}</p>
            </div>
            <p>${new Date().toLocaleTimeString()}</p>
    
            </div>
            `
            document.getElementById('history-container').appendChild(history)

        }

        else {

            alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        }



    })
}









