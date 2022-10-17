const table = document.getElementById("listTodo");
let submitBtn = document.getElementById("submitBtn");
let activityInput = document.getElementById("activity");
let descInput = document.getElementById("desc");
let prodiInput = document.getElementById("prodii");
let i = 1;
let editMode = false;
let updatedId = "";

const remove = (id) => {
  if (editMode) {
    alert(
      "Maaf tidak bisa delete, selesaikan proses edit anda!"
    );
  } else {
    const value = document.getElementById(id);
    value.remove();
  }
};

const update = (id) => {
  editMode = true;
  submitBtn.innerText = "Ubah";
  updatedId = id;
  const act = document.getElementById(`act-${id}`).innerText;
  const desc = document.getElementById(`desc-${id}`).innerText;
  const prd = document.getElementById(`prd-${id}`).innerText;

  activityInput.value = act;
  descInput.value = desc;
  prodiInput.value = prd;
};

addEventListener("submit", (event) => {
  event.preventDefault();

  if (editMode) {
    const act = document.getElementById(`act-${updatedId}`);
    const desc = document.getElementById(`desc-${updatedId}`);
    const prd = document.getElementById(`prd-${updatedId}`);

    act.innerText = activityInput.value;
    desc.innerText = descInput.value;
    prd.innerText = prodiInput.value;
    submitBtn.innerText = "Tambah";
    editMode = false;
    activityInput.value = "";
    descInput.value = "";
    prodiInput.value = "";
  } else {
    const uuid = Math.random();

    const tableContent = `
              <tr id='${uuid}'>
                  <th scope="row">${i++}</th>
                  <td id='act-${uuid}'>${activityInput.value}</td>
                  <td id='desc-${uuid}'>${descInput.value}</td>
                  <td id='prd-${uuid}'>${prodiInput.value}</td>
                  <td>
                        <button type="button" class="btn btn-danger" onclick='remove(${uuid})'>
                            Delete
                        </button>
                        <button type="button" class="btn btn-success" onclick='update(${uuid})'>
                            Update
                        </button>
                  </td>
              </tr>
            `;

    table.innerHTML += tableContent;
    activityInput.value = "";
    descInput.value = "";
    prodiInput.value = "";
  }
});