
document.getElementById('form').addEventListener('submit', (e)=>{
    var title=document.getElementById('title').value;
    var name=document.getElementById('name').value;
    var content=document.getElementById('content').value;
    e.preventDefault();
    createBlog(title,name,content);
    //form.rest();
});

 function createBlog(title, name, content){
     var blog={
        title : title,
        name : name,
        content : content
     }
     let db=firebase.firestore().collection('blogs/');
     db.add(blog).then(()=>{
        
         alert('saved')
         document.getElementById('table-section').innerHTML +='';
     })
 }

 function readBlog(){
    firebase.firestore().collection('blogs').onSnapshot(function(snapshot){
        document.getElementById('table-section').innerHTML +='';
        snapshot.forEach(blogValue => {
            document.getElementById('table-section').innerHTML+=`
                      <table> 
                       <tbody>
                           
                               <td>${blogValue.data().title}</td>
                               <td>${blogValue.data().name}</td>
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

 function deleteBlog(id){
       firebase.firestore().collection('blogs').doc(id).delete().then(() =>{
         
       })
      
       
 }

function updateBlog(id,title,name,content){
    document.getElementById('table-section').innerHTML=`
    <h2 class="page-title">Create a blog</h2>
    <form  class="blog-form" id="form2">
        <label for="">Title</label>
        <input type="text" id="title" placeholder="enter titl of a blog" required>
        <label for="">Author</label>
        <input type="text" id="name" placeholder="enter name of author" required>
        <label for="">Content</label>
        <textarea name="" id="content" cols="30" rows="8" placeholder="blog content here" required></textarea>
        <input type="submit" value="Create" >
    </form>
    
    `;
    document.getElementById("form2").addEventListener('submit',(e) => {
        e.preventDefault();
        updateBlog2(id,document.getElementById('title').value,document.getElementById('name').value, document.getElementById('content').value)
    });
    document.getElementById('title').value= title;
    document.getElementById('name').value= name;
    document.getElementById('content').value= content;
}

function updateBlog2(id,title,name,content){
    var blogUpdate={
        title : title,
        name : name,
        content : content
    }
    let db=firebase.firestore().collection("blogs").doc(id);
    db.set(blogUpdate).then(()=>{
        alert("good job Updated")
    })
    document.getElementById('table-section').innerHTML +='';
    readBlog();
}
