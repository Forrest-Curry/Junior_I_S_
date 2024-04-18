# Junior I.S. Software
### **Introduction**

This website framework is the software portion of a junior-year independent study project. This project looks at teaching complex topics in computer architecture and organization. The focus is on how learning can be aided by interactive and hands-on tools. This software is intended to help a student understand the basic structure of a Central Processing Unit (CPU). The website has a home page with descriptions of the various elements of a CPU and a game page. The game page has drag-and-drop elements that a user can place on an abstract depiction of a CPU. They can check their answers to see if they have put all of the elements in the correct place. 

### **Downloading**

This is not a live website as the HTML documents are accessed via files on a local computer. To access the code for yourself it is best to download it as a ZIP. Ensure that all images and files remain within the same folder so the access between them is not lost. To then access the HTML documents on your computer you will need to adjust the references within the div with the class="navBar". The href links within this div should follow the file path within your computer to the home.html file and the second to the game.html file. These two herf tags should be changed within the home.html file and the game.html file so that the two files can access each other. (The current herf links are labeled with "filePath")

### **Structure**

As mentioned above there are two HTML files, these set the overall order and structure that elements will be presented on the site. There is a CSS file that outlines specific colors, sizes, and locations of various elements. Comments within the CSS file explain what each section is associated with. The JavaScript file contains five functions the first three control the drag-and-drop functionality of the game. The last two provide functionality for the reset and check answer buttons on the game page. 
