fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    //create comment
    const Container = document.querySelector(".container");
    data.comments.forEach((comment) => {
      const commentElement = document.createElement("div");
      commentElement.classList.add("comment");

      const userImage = comment.user.image.png;
      const username = comment.user.username;
      const content = comment.content;
      const createdAt = comment.createdAt;
      const score = comment.score;

      commentElement.innerHTML = `
      <div class="comment">
      <div class="rate"><span class="plus">+</span> ${score} <span class="minus">-</span></div>
      <div class="main-comment">
        <div class="comment-title">
          <div class="comment-title-name">
            <div class="user">
              <img src="${userImage}" alt="${username} Avatar" />
              <span class="username">${username}</span>
              <span>${createdAt}</span>
            </div>
          </div>
          <div class="reply"><svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg><span>Reply</span></div>
        </div>
        <div class="comment-inner">
          <p>${content}</p>
        </div>
      </div>
    </div>
      `;

      Container.appendChild(commentElement);

      if (comment.replies.length > 0) {
        const repliesContainer = document.createElement("div");
        repliesContainer.classList.add("replies");

        comment.replies.forEach((reply) => {
          const replyElement = document.createElement("div");
          replyElement.classList.add("reply");

          const replyingTo = reply.replyingTo;
          const replyUsername = reply.user.username;
          const replyContent = reply.content;
          const replyCreatedAt = reply.createdAt;
          const replyScore = reply.score;
          const replyImage = reply.user.image.png;

          replyElement.innerHTML = `
      
      <div class="rate"><span class="plus">+</span> ${replyScore} <span class="minus">-</span></div>
      <div class="main-comment">
        <div class="comment-title">
          <div class="comment-title-name">
            <div class="user">
              <img src="${replyImage}" alt="${username} Avatar" />
              <span class="username">${replyUsername}</span>
              <span>${replyCreatedAt}</span>
            </div>
          </div>
          <div><svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg><span class="replyBTN">Reply</span></div>
        </div>
        <div class="comment-inner">
          <p><span class="AdressReplyTo">@${replyUsername}</span> ${replyContent}</p>
        </div>
      </div>
    







          `;
          repliesContainer.appendChild(replyElement);
        });
        Container.appendChild(repliesContainer);
      }
    });
  })
  .catch((error) => {
    console.error("Error JSON:", error);
  });
