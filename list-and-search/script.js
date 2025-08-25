let userList = document.querySelector(".user-list");
let searchInput = document.querySelector("#searchInput");

const userListData = [
  {
    userImage:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1753500806~exp=1753504406~hmac=42c60bdea741ed63846e5871023987d7a3b92a0688c8c806e2675189e6177fa8&w=900",
    userName: "Sohail khan",
    emailId: "sonu.khan@gmail.com",
  },
  {
    userImage: "https://img.freepik.com/premium-photo/portrait-handsome-positive-young-man_146377-674.jpg",
    userName: "Sajid hussain",
    emailId: "guddu.doctor@gmail.com",
  },
  {
    userImage: "https://img.freepik.com/premium-photo/smiling-bearded-man-wearing-casual-posing-studio-isolated-blue-looking-camera_695242-11339.jpg",
    userName: "faiz shaikh",
    emailId: "danka.pati@gmail.com",
  },
  {
    userImage:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1753500806~exp=1753504406~hmac=42c60bdea741ed63846e5871023987d7a3b92a0688c8c806e2675189e6177fa8&w=900",
    userName: "Rizwan khan",
    emailId: "herry.portor@gmail.com",
  },
  {
    userImage: "https://img.freepik.com/premium-photo/portrait-handsome-positive-young-man_146377-674.jpg",
    userName: "Pawan paliwal",
    emailId: "pawan.paliwal@gmail.com",
  },
  {
    userImage: "https://img.freepik.com/premium-photo/smiling-bearded-man-wearing-casual-posing-studio-isolated-blue-looking-camera_695242-11339.jpg",
    userName: "Mo. Mohsin",
    emailId: "mohsin.napu@gmail.com",
  },
  {
    userImage: "https://img.freepik.com/premium-photo/smiling-bearded-man-wearing-casual-posing-studio-isolated-blue-looking-camera_695242-11339.jpg",
    userName: "sonu khan",
    emailId: "nu.khan@gmail.com",
  },
  {
    userImage: "https://img.freepik.com/premium-photo/portrait-handsome-positive-young-man_146377-674.jpg",
    userName: "pawan paliwal",
    emailId: "pawan.paliwal@gmail.com",
  },
];
const renderUser = (arr) => {
  userList.innerHTML = "";

  arr.map((items) => {
    let { userImage, userName, emailId } = items;
    let listItems = document.createElement("li");
    listItems.className = "list-items";
    listItems.innerHTML = `
             <div class="user-img"> <img src=${userImage}></div>
                <div class="details">
                    <h4 class="user-name">${userName}</h4>
                    <small> ${emailId}</small>
                </div>
  `;
    userList.append(listItems);
  });
};
renderUser(userListData);

const handleSearch = (e) => {
  let searchValue = e.target.value;
  let filterUser = userListData.filter((items) => {
    return items.userName.toLowerCase().includes(searchValue.toLowerCase()) || items.emailId.toLowerCase().includes(searchValue.toLowerCase());
  });
  if (filterUser.length === 0) {
    userList.innerHTML = "";
    let p = document.createElement("p");
    p.innerText = "user not found";
    userList.append(p);
  } else {
    renderUser(filterUser);
  }
};
searchInput.addEventListener("input", handleSearch);
