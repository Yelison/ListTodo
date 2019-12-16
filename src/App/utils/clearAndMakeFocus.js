
const clearAndMakeFocus = (event, clear=false) => {
  const inputTags = document.getElementById('tags');
  
  if(clear){
    event.target.value = '';
    inputTags.focus();
  }
  
}

export default clearAndMakeFocus;