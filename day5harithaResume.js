//1. For the given JSON iterate over all for loops(for, for in,for of, forEach)
//since JSON file is not available, using the harithaResume.json file



const resume = require("./day5harithaResume.json");;
console.log(
  "============Projects= using for of loop====================================================="
);
for (const iterator of resume.Projects) {
  console.log(`${iterator.projectName} -> ${iterator.BriefDescription}`);
}
console.log(
  "=============Skills count= using for in  and for each loop===================================================="
);
for (const key in resume.skills) {
  let count = 0;
  resume.skills[key].forEach((element) => {
    count++;
  });
  console.log(`known ${key} count is ${count}`);
}
console.log(
  "==========Cerifications== using for loop======================================================"
);
for (let index = 0; index < resume.Certifications.length; index++) {
  const element = resume.Certifications[index];
  console.log(
    `${element.course} FROM ${element.Platform}, IN THE YEAR ${element.Year} from ${element.Location}`
  );
}

console.log(
  "=================================================================="
);


// ============Projects= using for of loop=====================================================
// Farmers Mart -> A Web application, developed by using HTML5, CSS3, BootStrap, Angular, Spring boot, Mysql
// TechJobs -> A web application , developed by using HTML5, CSS3, BootStrap, Thymeleaf, Spring Boot, Mysql
// Mini Google Search Engine -> Java application developed by using Data structures from Java
// NutchAds -> Java application, developed by using JSP, Servlets, MySql, HTML, CSS, XML, AJAX, Javascript
// =============Skills count==using for in  and for each loop====================================================
// known BackEndTechs count is 3
// known FrontEndTechs count is 8
// known DataBaseTechs count is 2
// known DevelopmentTools count is 3
// known other Skills count is 6
// ==========Cerifications== using for loop======================================================
// FullStackDevelopment Course FROM GUVI'S Zen class, IN THE YEAR April 2023 from India
// JavaScript & Java Web Development Course FROM LaunchCode’s LC101, IN THE YEAR April 2021 from USA
// ==================================================================