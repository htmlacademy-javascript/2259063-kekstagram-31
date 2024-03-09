import { usersPictures } from "./picture/render-pictures";



const commentTemplate = document
  .querySelector("#comment")
  .content.querySelector(".social__comment");
const commentsListFragment = document.createDocumentFragment();

// Это функция для создания списка комментариев которые потом нужно будет вставлять
const createCommentList = (commentArray) => {
  const commentsListFragment = document.createDocumentFragment();

  commentArray.forEach((comment) => {

    // здесь я создаю новый комментарий и нужно в него загонять инф из массива
    const newComment = commentTemplate.cloneNode(true);
    // console.log(commentsList)
    const newCommentPictureInfo = newComment.querySelector(".social__picture");
    newCommentPictureInfo.src = comment.avatar;
    newCommentPictureInfo.alt = comment.name;
    const newCommentText = newComment.querySelector(".social__text");
    newCommentText.textContent = comment.message;

    commentsListFragment.append(newComment);
  });

  return commentsListFragment;
}

export {createCommentList}

// console.log(usersPictures)
// for (let userPicture of usersPictures) {
//   const commentsArray = userPicture.comments

//   createCommentList(commentsArray)

// }



