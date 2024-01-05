    function createCard(ttle, cName, views, monthsOld, duration, thumbnail){

        if (views<1000) {
            var a = views
    }
    else if (views<1000000) {
            var a = views/1000  +"K"
    }
    else{
            var a = views/1000000 + "M"
        }

        const container = document.querySelector(".container");
        const card = document.createElement('div');
        card.className = "card";
        const left = document.createElement('div');
        left.className = 'left';
       left.style.backgroundImage=`url(${thumbnail})`
    //    left.style.backgroundImage = "url('path/to/your/image.jpg')";
        const time = document.createElement('div')
        time.className = "time";
        time.textContent=duration
        const right = document.createElement('div');
        right.className = 'right';
        const title = document.createElement('div');
        title.className='title';
        title.textContent=ttle
        const view = document.createElement('span')
        view.className = "info";
        view.textContent=`${a} views`
        const old = document.createElement('span')
        old.className = "info";
        old.textContent=`${monthsOld} months ago`
        const name = document.createElement('span')
        name.className = "info";
        name.textContent=cName

        right.appendChild(title)
        right.appendChild(name)
        right.appendChild(view)
        right.appendChild(old)
        left.appendChild(time)
        card.appendChild(left)
        card.appendChild(right)
        container.appendChild(card);
        

    }


    createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 1000000, 4, "31:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
    createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", 432000, 4, "28:31", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ")
    createCard("Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3", "CodeWithHarry", 267000, 3, "11:12", "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuhpUj-ErJicHq24jgB_3K2Chl_Q")
    createCard("Heading, Paragraphs and Links | Sigma Web Development Course - Tutorial #4", "CodeWithHarry", 228000, 2, "19:34", "https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXT49aypaXDTfq5Y813UJXZZcVXA")
    createCard("Image, Lists, and Tables in HTML | Sigma Web Development Course - Tutorial #5", "CodeWithHarry", 224000, 1, "18:20", "https://i.ytimg.com/vi/1BsVhumGlNc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCImJKujntN4XOIJVBfI5R8dzszzg")