function readBlog(){
    firebase.firestore().collection('contact').onSnapshot(function(snapshot){
        document.getElementById('table-section').innerHTML +='';
        snapshot.forEach(contactValue => {
            document.getElementById('table-section').innerHTML+=`
                      <table> 
                       <tbody>
                               <td>${contactValue.data().title}</td>
                               <td>${contactValue.data().name}</td>
                               <td> <a href="#" style="color: blue;" class="edit" onclick="updateBlog('${blogValue.id}','${blogValue.data().title}',
                               '${blogValue.data().name}','${blogValue.data().content}')">edit</a> </td>
                               <td> <a href="#" style="color: red;" class="delete" onclick="deleteBlog('${blogValue.id}')">delete</a> </td>
                        </tr>
                        </tbody>
                        </table>
            `
        });
    });
 }