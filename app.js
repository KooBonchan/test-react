document.querySelectorAll(".image-container").forEach((element) => {
  element.addEventListener("click",(e) => {
    element.classList.toggle("deleted");
  })
})


const form = document['form-write'];
form.querySelectorAll('input[name="deletedFiles"')
  .forEach(input => input.remove());
document.querySelectorAll(".image-container").forEach((element) => {
  if(element.classList.contains("deleted")){
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'deletedFiles';
    input.value = element.dataset.fileId || '';
    form.appendChild(input);
    /*form element: 
      append hidden input with name "deletedFiles"
    */
  }
})