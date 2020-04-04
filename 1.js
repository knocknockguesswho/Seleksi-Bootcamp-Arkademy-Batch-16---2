function getBiodata(name, age){
    biodata = {
        name: name,
        age: age,
        address: "Jl. Matraman Raya 132 RT.006/RW.004 No.B11, Kel. Kebon Manggis, Kec. Matraman. Jakarta Timur",
        hobbies: ["Gaming", "Singing", "Music Composing"],
        is_married: false,
        list_school: {"name": "Universitas Jenderal Soedirman", "year_in": 2013, "year_out": 2019 },
        skills: {"html": "advanced", "css": "advanced", "js": "beginner", "python3": "beginner", "react_js": "beginner", "adobe_xd": "advanced", "adobe_illustrator": "advanced", "adobe_after_effects": "beginner"},
        interest_in_coding: true
    }
    return JSON.stringify(biodata)
}
getBiodata("Faris Ramadhan", 25)
console.log(biodata)