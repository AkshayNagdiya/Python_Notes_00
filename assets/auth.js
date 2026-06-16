const dayPasswords = {

    "day-01.html": "python01",

    "day-02.html": "python02",

    "day-03.html": "python03",

    "day-04.html": "python04",

    "day-05.html": "python05"

};



function openDay(page) {

    let password = prompt(   
        "Enter password for this day:"
    );

    if(password === dayPasswords[page]) {
        window.location.href =
        "../daily-code/" + page;

    } else {
        alert(
            "Incorrect Password ❌"
        );
    }
}