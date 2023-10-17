function skillsMember() {
    var skills = ["HTML", "CSS", "JS", "PHP"];
    var member = {
        name: "John",
        age: 30,
        skills: skills,
        address: {
            street: "123 Main St",
            city: "Miami",
            state: "FL"
        },
        getBirthYear: function() {
            return 2017 - this.age;
        }
    };
};
    console.log(member);
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    console.log(member.skills[1]);
    console.log(member.address);
    console.log(member.address.city);
    console.log(member.getBirthYear());