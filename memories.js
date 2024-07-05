
let i1 = 0;
let i2 = 0;
let i3 = 0;
let intervalId;

function grid1() {
    let img1 = ["home/msg6711679717-1815.jpg", "home/msg6711679717-1820.jpg", "home/msg6711679717-1647.jpg"];
    let element = document.querySelector(".active");
    element.classList.remove("a");
    element.classList.add("x");
    setTimeout(() => {
        element.setAttribute("src", img1[i1]);
        element.classList.remove("x");
        element.classList.add("a");
        i1 = (i1 + 1) % img1.length;
    }, 1000); // Wait for the opacity transition to complete
}

function grid2() {
    let img2 = ["home/msg6711679717-1827.jpg", "home/msg6711679717-1893.jpg", "home/msg6711679717-1767.jpg"];
    let element = document.querySelector(".active1");
    element.classList.remove("b");
    element.classList.add("y");
    setTimeout(() => {
        element.setAttribute("src", img2[i2]);
        element.classList.remove("y");
        element.classList.add("b");
        i2 = (i2 + 1) % img2.length;
    }, 1000);
}

function grid3() {
    let img3 = ["home/msg6711679717-1906.jpg", "home/msg6711679717-1915.jpg", "home/msg6711679717-1800.jpg"];
    let element = document.querySelector(".active2");
    element.classList.remove("c");
    element.classList.add("z");
    setTimeout(() => {
        element.setAttribute("src", img3[i3]);
        element.classList.remove("z");
        element.classList.add("c");
        i3 = (i3 + 1) % img3.length;
    }, 1000);
}


let i = 0;

function grid() {

    let img = ["home/msg6711679717-1815.jpg", "home/msg6711679717-1820.jpg", "home/msg6711679717-1827.jpg", "home/msg6711679717-1893.jpg", "home/msg6711679717-1767.jpg", "home/msg6711679717-1906.jpg", "home/msg6711679717-1915.jpg", "home/msg6711679717-1800.jpg", "home/msg6711679717-1647.jpg"];
    let element = document.querySelector(".active");
    element.classList.remove("a");
    element.classList.add("x");
    setTimeout(() => {
        element.setAttribute("src", img[i]);
        element.classList.remove("x");
        element.classList.add("a");
        i = (i + 1) % img.length;
    }, 1000);
}

function handleOrientationChange() {
    clearInterval(intervalId);
    if (window.innerWidth < window.innerHeight) {
        document.querySelector(".active1").classList.add("hidden");
        document.querySelector(".active2").classList.add("hidden");
        intervalId = setInterval(grid, 4000);
    } else {
        document.querySelector(".active1").classList.remove("hidden");
        document.querySelector(".active2").classList.remove("hidden");
        intervalId = setInterval(() => {
            grid1();
            grid2();
            grid3();
        }, 4000);
    }
}

handleOrientationChange();
window.addEventListener('orientationchange', handleOrientationChange);
window.addEventListener('resize', handleOrientationChange);
let months2 = ["APRIL 2022", "MAY 2022", "JUNE 2022", "JULY 2022", "AUGUST 2022", "SEPTEMBER 2022", "OCTOBER 2022", "NOVEMBER 2022", "DECEMBER 2022", "JANUARY 2023", "FEBRUARY 2023", "MARCH 2023", "APRIL 2023", "MAY 2023", "JUNE 2023", "JULY 2023", "AUGUST 2023", "SEPTEMBER 2023", "OCTOBER 2023", "NOVEMBER 2023", "DECEMBER 2023", "JANUARY 2024", "FEBRUARY 2024", "MARCH 2024", "APRIL 2024", "MAY 2024", "JUNE 2024", "JULY 2024", "AUGUST 2024", "SEPTEMBER 2024", "OCTOBER 2024", "NOVEMBER 2024", "DECEMBER 2024", "JANUARY 2025"]
let currentMonthIndex = months2.indexOf("APRIL 2022");
document.querySelector("#next").addEventListener("click", () => {
    if (currentMonthIndex < months2.length - 1) {
        currentMonthIndex++;
        updateCalendar();
    }
});

document.querySelector("#prev").addEventListener("click", () => {
    if (currentMonthIndex > 0) {
        currentMonthIndex--;
        updateCalendar();
    }
});
let ac = ["grid-column: 2 / 3", "grid-column: 3 / 4", "grid-column: 4 / 5", "grid-column: 5 / 6", "grid-column: 6 / 7", "grid-column: 7 / 8", "grid-column: 1 / 2"]
let originalContent = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    ten: "10",
    eleven: "11",
    twelve: "12",
    thirteen: "13",
    fourteen: "14",
    fifteen: "15",
    sixteen: "16",
    seventeen: "17",
    eighteen: "18",
    nineteen: "19",
    twenty: "20",
    twentyone: "21",
    twentytwo: "22",
    twentythree: "23",
    twentyfour: "24",
    twentyfive: "25",
    twentysix: "26",
    twentyseven: "27",
    twentyeight: "28",
    twentynine: "29",
    thirty: "30",
    thirtyone: "31"
};
function revertContent() {
    for (let key in originalContent) {
        let element = document.querySelector(`.${key}`);
        if (element) {
            element.textContent = originalContent[key];
        }
    }
}
function removeAllEventListeners(element) {
    const clone = element.cloneNode(true);
    element.parentNode.replaceChild(clone, element);
    return clone;
}

function updateCalendar() {
    document.querySelectorAll('.date').forEach(box => {
        removeAllEventListeners(box);
    });
    revertContent(); 
    document.querySelector(".month").textContent = months2[currentMonthIndex];
    let container = document.querySelector(".container");
    let thirtyFirst = document.querySelector(".thirtyone");
    let thirty = document.querySelector(".thirty");
    let twentynine = document.querySelector(".twentynine");
    if (months2[currentMonthIndex] === months2[0]) {
        document.querySelector(".start").setAttribute("style", ac[4]);
        document.querySelector(".thirtyone").remove();
        document.querySelector(".six").textContent = "💗";
        document.querySelector(".six").addEventListener("click", () => {
            window.location.href = 'april 2022/6-4-2022/in.html';
        });
    } else if (months2[currentMonthIndex] === months2[1]) {
        document.querySelector(".start").setAttribute("style", ac[6]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[2]) {
        document.querySelector(".start").setAttribute("style", ac[2]);
        document.querySelector(".thirtyone").remove();
    } else if (months2[currentMonthIndex] === months2[3]) {
        document.querySelector(".start").setAttribute("style", ac[4]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
        document.querySelector(".twentyseven").textContent = "💗";
        document.querySelector(".twentyseven").addEventListener("click", () => {
            window.location.href = 'july 2022/27-7-2022/in.html';
        });
        document.querySelector(".twentynine").textContent = "💗";
        document.querySelector(".twentynine").addEventListener("click", () => {
            window.location.href = 'july 2022/29-7-2022/in.html';
        });
    } else if (months2[currentMonthIndex] === months2[4]) {
        document.querySelector(".start").setAttribute("style", ac[0]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
        document.querySelector(".twentytwo").textContent = "💗";
        document.querySelector(".twentytwo").addEventListener("click", () => {
            window.location.href = 'august 2022/22-8-2022/in.html';
        });
        document.querySelector(".eighteen").textContent = "💗";
        document.querySelector(".eighteen").addEventListener("click", () => {
            window.location.href = 'august 2022/18-8-2022/in.html';
        });
        document.querySelector(".ten").textContent = "💗";
        document.querySelector(".ten").addEventListener("click", () => {
            window.location.href = 'august 2022/10-8-2022/in.html';
        });
        document.querySelector(".twentyseven").textContent = "💗";
        document.querySelector(".twentyseven").addEventListener("click", () => {
            window.location.href = 'august 2022/27-8-2022/in.html';
        });
        document.querySelector(".thirtyone").textContent = "💗";
        document.querySelector(".thirtyone").addEventListener("click", () => {
            window.location.href = 'august 2022/31-8-2022/in.html';
        });
        document.querySelector(".twentynine").textContent = "💗";
        document.querySelector(".twentynine").addEventListener("click", () => {
            window.location.href = 'august 2022/29-8-2022/in.html';
        });
    } else if (months2[currentMonthIndex] === months2[5]) {
        document.querySelector(".start").setAttribute("style", ac[3]);
        document.querySelector(".thirtyone").remove();
        document.querySelector(".two").textContent = "💗";
        document.querySelector(".two").addEventListener("click", () => {
            window.location.href = 'september 2022/2-9-2022/in.html';
        });
        document.querySelector(".ten").textContent = "💗";
        document.querySelector(".ten").addEventListener("click", () => {
            window.location.href = 'september 2022/10-9-2022/in.html';
        });
        document.querySelector(".fourteen").textContent = "💗";
        document.querySelector(".fourteen").addEventListener("click", () => {
            window.location.href = 'september 2022/14-9-2022/in.html';
        });
        document.querySelector(".seventeen").textContent = "💗";
        document.querySelector(".seventeen").addEventListener("click", () => {
            window.location.href = 'september 2022/17-9-2022/in.html';
        });
        document.querySelector(".twentyfour").textContent = "💗";
        document.querySelector(".twentyfour").addEventListener("click", () => {
            window.location.href = 'september 2022/24-9-2022/in.html';
        });
        document.querySelector(".twentyfive").textContent = "💗";
        document.querySelector(".twentyfive").addEventListener("click", () => {
            window.location.href = 'september 2022/25-9-2022/in.html';
        });
        document.querySelector(".twentysix").textContent = "💗";
        document.querySelector(".twentysix").addEventListener("click", () => {
            window.location.href = 'september 2022/26-9-2022/in.html';
        });
        document.querySelector(".twentyeight").textContent = "💗";
        document.querySelector(".twentyeight").addEventListener("click", () => {
            window.location.href = 'september 2022/28-9-2022/in.html';
        });

    } else if (months2[currentMonthIndex] === months2[6]) {
        document.querySelector(".start").setAttribute("style", ac[5]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
        document.querySelector(".one").textContent = "💗";
        document.querySelector(".one").addEventListener("click", () => {
            window.location.href = 'october 2022/1-10-2022/in.html';
        });
        document.querySelector(".six").textContent = "💗";
        document.querySelector(".six").addEventListener("click", () => {
            window.location.href = 'october 2022/6-10-2022/in.html';
        });
        document.querySelector(".ten").textContent = "💗";
        document.querySelector(".ten").addEventListener("click", () => {
            window.location.href = 'october 2022/10-10-2022/in.html';
        });
        document.querySelector(".fifteen").textContent = "💗";
        document.querySelector(".fifteen").addEventListener("click", () => {
            window.location.href = 'october 2022/15-10-2022/in.html';
        });
        document.querySelector(".seventeen").textContent = "💗";
        document.querySelector(".seventeen").addEventListener("click", () => {
            window.location.href = 'october 2022/17-10-2022/in.html';
        });
        document.querySelector(".nineteen").textContent = "💗";
        document.querySelector(".nineteen").addEventListener("click", () => {
            window.location.href = 'october 2022/19-10-2022/in.html';
        });
        document.querySelector(".twentyfive").textContent = "💗";
        document.querySelector(".twentyfive").addEventListener("click", () => {
            window.location.href = 'october 2022/25-10-2022/in.html';
        });
        document.querySelector(".twentyeight").textContent = "💗";
        document.querySelector(".twentyeight").addEventListener("click", () => {
            window.location.href = 'october 2022/28-10-2022/in.html';
        });

    } else if (months2[currentMonthIndex] === months2[7]) {
        document.querySelector(".start").setAttribute("style", ac[1]);
        document.querySelector(".thirtyone").remove();
    } else if (months2[currentMonthIndex] === months2[8]) {
        document.querySelector(".start").setAttribute("style", ac[3]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[9]) {
        document.querySelector(".start").setAttribute("style", ac[6]);
        if (!twentynine) {
            let newElement = document.createElement("div");
            newElement.className = "date twentynine";
            newElement.textContent = "29";
            container.appendChild(newElement);
        }
        if (!thirty) {
            let newElement = document.createElement("div");
            newElement.className = "date thirty";
            newElement.textContent = "30";
            container.appendChild(newElement);
        }
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[10]) {
        document.querySelector(".start").setAttribute("style", ac[2]);
        document.querySelector(".thirtyone").remove();
        document.querySelector(".thirty").remove();
        document.querySelector(".twentynine").remove();
    } else if (months2[currentMonthIndex] === months2[11]) {
        document.querySelector(".start").setAttribute("style", ac[2]);
        if (!twentynine) {
            let newElement = document.createElement("div");
            newElement.className = "date twentynine";
            newElement.textContent = "29";
            container.appendChild(newElement);
        }
        if (!thirty) {
            let newElement = document.createElement("div");
            newElement.className = "date thirty";
            newElement.textContent = "30";
            container.appendChild(newElement);
        }
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[12]) {
        document.querySelector(".start").setAttribute("style", ac[5]);
        document.querySelector(".thirtyone").remove();
    } else if (months2[currentMonthIndex] === months2[13]) {
        document.querySelector(".start").setAttribute("style", ac[0]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[14]) {
        document.querySelector(".start").setAttribute("style", ac[3]);
        document.querySelector(".thirtyone").remove();
    } else if (months2[currentMonthIndex] === months2[15]) {
        document.querySelector(".start").setAttribute("style", ac[5]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[16]) {
        document.querySelector(".start").setAttribute("style", ac[1]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[17]) {
        document.querySelector(".start").setAttribute("style", ac[4]);
        document.querySelector(".thirtyone").remove();
    } else if (months2[currentMonthIndex] === months2[18]) {
        document.querySelector(".start").setAttribute("style", ac[6]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[19]) {
        document.querySelector(".start").setAttribute("style", ac[2]);
        document.querySelector(".thirtyone").remove();
    } else if (months2[currentMonthIndex] === months2[20]) {
        document.querySelector(".start").setAttribute("style", ac[4]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[21]) {
        document.querySelector(".start").setAttribute("style", ac[0]);
        document.querySelector(".seven").textContent = "💗";
        document.querySelector(".seven").addEventListener("click", () => {
            window.location.href = 'yatch/in.html';
        });
        if (!twentynine) {
            let newElement = document.createElement("div");
            newElement.className = "date twentynine";
            newElement.textContent = "29";
            container.appendChild(newElement);
        }
        if (!thirty) {
            let newElement = document.createElement("div");
            newElement.className = "date thirty";
            newElement.textContent = "30";
            container.appendChild(newElement);
        }
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[22]) {
        document.querySelector(".start").setAttribute("style", ac[3]);
        document.querySelector(".thirtyone").remove();
        document.querySelector(".thirt").remove();
        document.querySelector(".twentynine").remove();
    } else if (months2[currentMonthIndex] === months2[23]) {
        document.querySelector(".start").setAttribute("style", ac[4]);
        if (!twentynine) {
            let newElement = document.createElement("div");
            newElement.className = "date twentynine";
            newElement.textContent = "29";
            container.appendChild(newElement);
        }
        if (!thirty) {
            let newElement = document.createElement("div");
            newElement.className = "date thirty";
            newElement.textContent = "30";
            container.appendChild(newElement);
        }
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[24]) {
        document.querySelector(".start").setAttribute("style", ac[0]);
        document.querySelector(".thirtyone").remove();
    } else if (months2[currentMonthIndex] === months2[25]) {
        document.querySelector(".start").setAttribute("style", ac[2]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[26]) {
        document.querySelector(".start").setAttribute("style", ac[5]);
        document.querySelector(".thirtyone").remove();
    } else if (months2[currentMonthIndex] === months2[27]) {
        document.querySelector(".start").setAttribute("style", ac[0]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[28]) {
        document.querySelector(".start").setAttribute("style", ac[3]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[29]) {
        document.querySelector(".start").setAttribute("style", ac[6]);
        document.querySelector(".thirtyone").remove();
    } else if (months2[currentMonthIndex] === months2[30]) {
        document.querySelector(".start").setAttribute("style", ac[1]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[31]) {
        document.querySelector(".start").setAttribute("style", ac[4]);
        document.querySelector(".thirtyone").remove();
    } else if (months2[currentMonthIndex] === months2[32]) {
        document.querySelector(".start").setAttribute("style", ac[6]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    } else if (months2[currentMonthIndex] === months2[33]) {
        document.querySelector(".start").setAttribute("style", ac[2]);
        if (!thirtyFirst) {
            let newElement = document.createElement("div");
            newElement.className = "date thirtyone";
            newElement.textContent = "31";
            container.appendChild(newElement);
        }
    }
}

updateCalendar();