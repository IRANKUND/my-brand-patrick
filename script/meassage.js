function readMessage(){
    firebase.firestore().collection('contact').onSnapshot(function(snapshot){
        document.getElementById('table-section').innerHTML +='';
        snapshot.forEach(contactValue => {
            document.getElementById('table-section').innerHTML+=`
                      <table> 
                       <tbody style="text-align: center; background-color: #7dd3c0;">
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

let param, postid, docRef, doc;
const init = async () => {
	param = window.location.search.split('=');
	postid = param[1].split('&')[0];
	docRef = await db.collection('blogs').doc(postid).get();
	doc = docRef.data();
	
};

function loadBlog(){
    firebase.firestore().collection('blogs').onSnapshot(function(snapshot){
        document.getElementById('image-text').innerHTML+='';
        snapshot.forEach(blogValue => {
            document.getElementById('image-text').innerHTML+=`
            <div class="single">
            <span class="header-text"><strong>${blogValue.data().title}</strong></span>
            <p>${blogValue.data().content}</p>
                <div class="link">
                <div class="btn"><a href="#" onclick="getBlog('${blogValue.id}')">learn more</a></div>
                 <div><i style="font-size:24px" class="fa">&#xf06e;</i>3</div>
                 <div><i style="font-size:24px" class="fa">&#xf0e6;</i>2</div>
                 <p>${blogValue.data().name}</p>
                 </div> 
                 </div>      
            `
        });
    });
 }





 function getBlog(id){
    document.getElementById("image-text").style.display = "none";
  let postRef = firebase.firestore().collection('blogs').doc(id);
  postRef.get().then(function(docref){
    document.getElementById('post').innerHTML+=`
    <span class="header-text"><strong>${docref.data().title}</strong></span>
    <p>${docref.data().content}</p>
    <form action="#" id="add-reply">
    <div class="form-group">
        <textarea name="" id="reply-contents" cols="60" rows="4" required></textarea>
    </div>
    <div class="form-group view-more">
        <button style="width: 50%; height: 40px; color: white; font-size: 20px;
          background-color: rgb(13, 148, 148);" type="submit">Comment</button>
    </div>
</form>
    `;   
   })
   document.querySelector('#add-reply').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("we are in");
    let setWithMerge = postRef.update({
		comments: firebase.firestore.FieldValue.arrayUnion({
			contents: replyContents.value,
			'replied-at': new Date(),
		}),
	});
 })
}


