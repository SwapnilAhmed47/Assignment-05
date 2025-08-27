
        
        //increase heart Count

        const heartButton = document.querySelectorAll('.heart-btn')
        for(const i of heartButton){
            i.addEventListener('click', function(event){
                const heartCount =parseInt(document.getElementById('heart-count').innerText)
                document.getElementById('heart-count').innerText = heartCount+1
            })
        }

        // decrease coin count
         
        // first btn

        document.getElementById('call-btn-1').addEventListener('click', function(event){
            event.preventDefault()
            const totalCoin = parseInt(document.getElementById('total-coin').innerText)
            if(totalCoin>0){
                const remainCoin = totalCoin - 20
                const rem = document.getElementById('total-coin').innerText = remainCoin
                alert("📞 Calling জাতীয় জরুরি সেবা 999...")

                const history = document.createElement('div')
                history.innerHTML = `
                <div class="flex justify-between rounded-md bg-[#f2f2f2] p-5 mt-5">
                <div>
                    <p>জাতীয় জরুরি সেবা</p>
                    <p>999</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
    
                </div>
                `
                document.getElementById('history-container').appendChild(history)
            }
            else{
                alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
            }

            
            
        })

        // second btn

        document.getElementById('call-btn-2').addEventListener('click', function(event){
            event.preventDefault()
            const totalCoin = parseInt(document.getElementById('total-coin').innerText)
            if(totalCoin>0){
                const remainCoin = totalCoin - 20
                const rem = document.getElementById('total-coin').innerText = remainCoin
                alert("📞 Calling পুলিশ 999...")

                const history = document.createElement('div')
                history.innerHTML = `
                <div class="flex justify-between rounded-md bg-[#f2f2f2] p-5 mt-5">
                <div>
                    <p>পুলিশ</p>
                    <p>999</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
    
                </div>
                `
                document.getElementById('history-container').appendChild(history)
            }
            else{
                alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
            }

            
            
        })

        // third btn

        document.getElementById('call-btn-3').addEventListener('click', function(event){
            event.preventDefault()
            const totalCoin = parseInt(document.getElementById('total-coin').innerText)
            if(totalCoin>0){
                const remainCoin = totalCoin - 20
                const rem = document.getElementById('total-coin').innerText = remainCoin
                alert("📞 Calling ফায়ার সার্ভিস 999...")

                const history = document.createElement('div')
                history.innerHTML = `
                <div class="flex justify-between rounded-md bg-[#f2f2f2] p-5 mt-5">
                <div>
                    <p>ফায়ার সার্ভিস</p>
                    <p>999</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
    
                </div>
                `
                document.getElementById('history-container').appendChild(history)
            }
            else{
                alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
            }

            
            
        })

        // forth btn

        document.getElementById('call-btn-4').addEventListener('click', function(event){
            event.preventDefault()
            const totalCoin = parseInt(document.getElementById('total-coin').innerText)
            if(totalCoin>0){
                const remainCoin = totalCoin - 20
                const rem = document.getElementById('total-coin').innerText = remainCoin
                alert("📞 Calling অ্যাম্বুলেন্স 1994-999999...")

                const history = document.createElement('div')
                history.innerHTML = `
                <div class="flex justify-between rounded-md bg-[#f2f2f2] p-5 mt-5">
                <div>
                    <p>অ্যাম্বুলেন্স</p>
                    <p>1994-999999</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
    
                </div>
                `
                document.getElementById('history-container').appendChild(history)
            }
            else{
                alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
            }

            
            
        })

        // fifth bit

        document.getElementById('call-btn-5').addEventListener('click', function(event){
            event.preventDefault()
            const totalCoin = parseInt(document.getElementById('total-coin').innerText)
            if(totalCoin>0){
                const remainCoin = totalCoin - 20
                const rem = document.getElementById('total-coin').innerText = remainCoin
                alert("📞 Calling নারী ও শিশু সহায়তা 109...")

                const history = document.createElement('div')
                history.innerHTML = `
                <div class="flex justify-between rounded-md bg-[#f2f2f2] p-5 mt-5">
                <div>
                    <p>নারী ও শিশু সহায়তা</p>
                    <p>109</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
    
                </div>
                `
                document.getElementById('history-container').appendChild(history)
            }
            else{
                alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
            }

            
            
        })

        // sixth btn
        
        document.getElementById('call-btn-6').addEventListener('click', function(event){
            event.preventDefault()
            const totalCoin = parseInt(document.getElementById('total-coin').innerText)
            if(totalCoin>0){
                const remainCoin = totalCoin - 20
                const rem = document.getElementById('total-coin').innerText = remainCoin
                alert("📞 Calling দুদক 106...")

                const history = document.createElement('div')
                history.innerHTML = `
                <div class="flex justify-between rounded-md bg-[#f2f2f2] p-5 mt-5">
                <div>
                    <p>দুদক</p>
                    <p>106</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
    
                </div>
                `
                document.getElementById('history-container').appendChild(history)
            }
            else{
                alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
            }

            
            
        })

        // seventh btn

        document.getElementById('call-btn-7').addEventListener('click', function(event){
            event.preventDefault()
            const totalCoin = parseInt(document.getElementById('total-coin').innerText)
            if(totalCoin>0){
                const remainCoin = totalCoin - 20
                const rem = document.getElementById('total-coin').innerText = remainCoin
                alert("📞 Calling বিদ্যুৎ বিভ্রাট 16216...")

                const history = document.createElement('div')
                history.innerHTML = `
                <div class="flex justify-between rounded-md bg-[#f2f2f2] p-5 mt-5">
                <div>
                    <p>বিদ্যুৎ বিভ্রাট</p>
                    <p>16216</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
    
                </div>
                `
                document.getElementById('history-container').appendChild(history)
            }
            else{
                alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
            }

            
            
        })

        // eight btn

        document.getElementById('call-btn-8').addEventListener('click', function(event){
            event.preventDefault()
            const totalCoin = parseInt(document.getElementById('total-coin').innerText)
            if(totalCoin>0){
                const remainCoin = totalCoin - 20
                const rem = document.getElementById('total-coin').innerText = remainCoin
                alert("📞 Calling ব্র্যাক 16445...")

                const history = document.createElement('div')
                history.innerHTML = `
                <div class="flex justify-between rounded-md bg-[#f2f2f2] p-5 mt-5">
                <div>
                    <p>ব্র্যাক</p>
                    <p>16445</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
    
                </div>
                `
                document.getElementById('history-container').appendChild(history)
            }
            else{
                alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
            }

            
            
        })

        // ninth btn
        document.getElementById('call-btn-9').addEventListener('click', function(event){
            event.preventDefault()
            const totalCoin = parseInt(document.getElementById('total-coin').innerText)
            if(totalCoin>0){
                const remainCoin = totalCoin - 20
                const rem = document.getElementById('total-coin').innerText = remainCoin
                alert("📞 Calling বাংলাদেশ রেলওয়ে 163...")

                const history = document.createElement('div')
                history.innerHTML = `
                <div class="flex justify-between rounded-md bg-[#f2f2f2] p-5 mt-5">
                <div>
                    <p>বাংলাদেশ রেলওয়ে</p>
                    <p>163</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
    
                </div>
                `
                document.getElementById('history-container').appendChild(history)
            }
            else{
                alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
            }

        })

        

        // clear history btn
        document.getElementById('clear-history').addEventListener('click', function(event){

            event.preventDefault()
            document.getElementById('history-container').innerHTML = ''

        })


   