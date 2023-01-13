let params = "height=500,width=500,left=100,top=100,popup=yes";
let constructor = "<style> tr:nth-child(even) {background-color: #dddddd;} </style> <table> <tr> <th>index</th> <th>key</th> <th>value</th> </tr>";
let index = 0;

while (localStorage.key(index) !== null) {
    constructor = constructor + ` <tr> <td> ${index} </td> <td> ${localStorage.key(index)} </td> <td> ${localStorage.getItem(localStorage.key(index))} </td> </tr>`;
    index++;
}

constructor = constructor + "</table>";
let app = open("", "viewer", params);
app.document.write(constructor);
