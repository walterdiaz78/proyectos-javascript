window.addEventListener("load", () => {
  let input = document.querySelector(".search__input");
  let btn = document.querySelector(".search__btn");
  let container = document.querySelector(".main__users");

  const USERS_URL = "https://reqres.in/api/users";

  let getUsers = () => {
    fetch(USERS_URL)
      .then((response) => response.json())
      .then((response) => {
        let users = response.data;

        users.forEach(user => {
          container.innerHTML += `
            <article class="users__user">
                        <div class="user__container-img">
                            <img src="${user.avatar}" alt="avatar" class="usr__img">
                        </div>

                            <div class="user__content">
                                <p class="user__name">${user.first_name}  ${user.last_name}</p>
                                <p class="user__email">${user.email}</p>
                        </div>
                    </article>`;
        });
      })
      .catch(error => console.log(error));
  };
  getUsers();
});
