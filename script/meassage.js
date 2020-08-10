function readMessage(){
    firebase.firestore().collection('contact').onSnapshot(function(snapshot){
        document.getElementById('table-section').innerHTML +='';
        snapshot.forEach(contactValue => {
            document.getElementById('table-section').innerHTML+=`
                      <table> 
                       <tbody>
                       <tr>
                               <td>${contactValue.data().name}</td>
                               <td>${contactValue.data().phone}</td>
                               <td>${contactValue.data().message}</td>
                               <td> <a href="#" style="color: red;" class="delete" onclick="deleteMessage('${contactValue.id}')">delete</a> </td>
                        </tr>
                        </tbody>
                        </table>
            `
        });
    });
 }
 function deleteMessage(id){
    firebase.firestore().collection('contact').doc(id).delete().then(() =>{
        alert("deleted");
    })
    document.getElementById('table-section').innerHTML +='';
    
}

function loadBlog(){
    firebase.firestore().collection('blogs').onSnapshot(function(snapshot){
        document.getElementById('image-text').innerHTML+='';
        snapshot.forEach(blogValue => {
            document.getElementById('image-text').innerHTML+=`
            <span class="header-text"><strong>${blogValue.data().title}</strong></span>
            <p>${blogValue.data().content}</p>
                <div class="link">
                <div class="btn"><a href="blogPost.html">learn more</a></div>
                 <div><i style="font-size:24px" class="fa">&#xf06e;</i>3</div>
                 <div><i style="font-size:24px" class="fa">&#xf0e6;</i>2</div>
                 <p>${blogValue.data().name}</p>
                 </div>       
            `
        });
    });
 }