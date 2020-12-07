import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_DOTNET from "../../assets/img/skills/dotnet.svg";
import L_CSHARP from "../../assets/img/skills/csharp.svg";

export const skills = {
  frontend: [
    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgAltText: "HTML 5",
      imgSrc: L_HTML5,
      skillName: "HTML5",
    },
    {
      link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
      imgAltText: "CSS 3",
      imgSrc: L_CSS3,
      skillName: "CSS3",
    },
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },

    {
      link: "https://getbootstrap.com/",
      imgAltText: "Bootstrap",
      imgSrc: L_BOOTSTRAP,
      skillName: "Bootstrap",
    },
  ],

  backend: [
    {
      link: "https://www.djangoproject.com/",
      imgAltText: "Django",
      imgSrc: L_DJANGO,
      skillName: "Django",
    },
    {
      link: "https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.1",
      imgAltText: "Dotnet",
      imgSrc: L_DOTNET,
      skillName: "Dotnet",
    },
  ],
  hostingPlatforms: [
 
    {
      link: "https://pages.github.com/",
      imgAltText: "GitHub Pages",
      imgSrc: L_GITHUB_PAGES,
      skillName: "GitHub Pages",
    }
  ],
  programmingLanguages: [
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },
    {
      link: "https://www.python.org/",
      imgAltText: "Python",
      imgSrc: L_PYTHON,
      skillName: "Python",
    }, 
	    {
      link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      imgAltText: "C sharp",
      imgSrc: L_CSHARP,
      skillName: "C sharp",
    },
  ],
  databases: [
    {
      link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
      imgAltText: "MS-SQL",
      imgSrc: L_MSSQL,
      skillName: "MS-SQL",
    },
  ],
  versionControl: [
    {
      link: "https://git-scm.com/",
      imgAltText: "GIT",
      imgSrc: L_GIT,
      skillName: "GIT",
    },
  ],
};
